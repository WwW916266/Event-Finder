const fs = require("fs");
const vm = require("vm");

const configCode = fs.readFileSync("./config.js", "utf8");
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(configCode, sandbox);

const config = sandbox.window.NEARO_CONFIG || {};
const {
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY,
  SUPABASE_SERVICE_ROLE_KEY,
} = config;

const SUPABASE_IMPORT_KEY = SUPABASE_SERVICE_ROLE_KEY || SUPABASE_PUBLISHABLE_KEY;
const SISTIC_SEARCH_URL = "https://cms.sistic.com.sg/sistic/docroot/api/get-solr-search-results";
const SISTIC_CLIENT_ID = "1";

if (!SUPABASE_URL || !SUPABASE_IMPORT_KEY) {
  throw new Error("Missing Supabase config in config.js");
}

const supabaseHeaders = {
  apikey: SUPABASE_IMPORT_KEY,
  Authorization: `Bearer ${SUPABASE_IMPORT_KEY}`,
  "Content-Type": "application/json",
  Prefer: "return=representation",
};
const venueCache = new Map();

async function main() {
  const source = await upsertSource();
  const sisticEvents = await fetchSisticEvents();
  const datedEvents = sisticEvents
    .map((item) => ({ item, startsAt: parseSisticDate(item.event_date) }))
    .filter(({ startsAt }) => Boolean(startsAt));

  if (!datedEvents.length) {
    console.log("No dated SISTIC events found.");
    return;
  }

  let imported = 0;
  for (const { item, startsAt } of datedEvents) {
    const venue = await upsertVenue(item.venue);
    await upsertEvent(item, startsAt, venue, source);
    imported += 1;
  }

  console.log(`Fetched ${sisticEvents.length} SISTIC listings.`);
  console.log(`Imported ${imported} dated SISTIC events into Supabase.`);
  console.log(`Skipped ${sisticEvents.length - imported} undated or open-ended SISTIC listings.`);
}

async function fetchSisticEvents() {
  const url = new URL(SISTIC_SEARCH_URL);
  url.searchParams.set("first", "0");
  url.searchParams.set("limit", "1000");
  url.searchParams.set("sort_type", "date");
  url.searchParams.set("sort_order", "ASC");
  url.searchParams.set("index", "global");
  url.searchParams.set("client", SISTIC_CLIENT_ID);
  url.searchParams.set("search", "*");

  const response = await fetch(url, {
    headers: {
      Accept: "application/json",
      Referer: "https://www.sistic.com.sg/events",
    },
  });
  const text = await response.text();
  const payload = parseJson(text, "SISTIC");

  if (!response.ok) {
    throw new Error(payload?.data || payload?.message || "SISTIC request failed");
  }

  const byId = new Map();
  for (const item of payload.data || []) {
    if (item?.type === "event" && item.nid) byId.set(String(item.nid), item);
  }

  return [...byId.values()];
}

async function upsertSource() {
  const rows = await supabaseFetch("/rest/v1/event_sources?on_conflict=name", {
    method: "POST",
    headers: { ...supabaseHeaders, Prefer: "resolution=merge-duplicates,return=representation" },
    body: JSON.stringify({
      name: "SISTIC Singapore",
      website_url: "https://www.sistic.com.sg/events",
    }),
  });

  return rows[0];
}

async function upsertVenue(venueName) {
  const name = cleanText(venueName) || "Singapore";
  if (venueCache.has(name)) return venueCache.get(name);

  const rows = await supabaseFetch("/rest/v1/venues?on_conflict=name", {
    method: "POST",
    headers: { ...supabaseHeaders, Prefer: "resolution=merge-duplicates,return=representation" },
    body: JSON.stringify({
      name,
      address: name === "Singapore" ? "Singapore" : `${name}, Singapore`,
      latitude: null,
      longitude: null,
    }),
  });

  venueCache.set(name, rows[0]);
  return rows[0];
}

async function upsertEvent(item, startsAt, venue, source) {
  const endsAt = new Date(new Date(startsAt).getTime() + 2 * 60 * 60 * 1000).toISOString();
  const url = sisticEventUrl(item);
  const priceMin = numberOrNull(item.min_price);
  const priceMax = numberOrNull(item.max_price);

  await supabaseFetch("/rest/v1/events?on_conflict=source_id,source_event_id", {
    method: "POST",
    headers: { ...supabaseHeaders, Prefer: "resolution=merge-duplicates,return=representation" },
    body: JSON.stringify({
      title: cleanText(item.title) || "Untitled SISTIC event",
      description: summarize(item.synopsis) || "Official SISTIC event listing.",
      category: categoryFor(item.genre),
      starts_at: startsAt,
      ends_at: endsAt,
      venue_id: venue?.id,
      image_url: sisticImageUrl(item),
      official_url: url,
      ticket_url: url,
      price_min: priceMin,
      price_max: priceMax,
      currency: item.currency || "SGD",
      source_id: source.id,
      source_event_id: String(item.nid),
      status: "published",
    }),
  });
}

function parseSisticDate(value = "") {
  const text = cleanText(value)
    .replace(/([ap]m)(Mon|Tue|Wed|Thu|Fri|Sat|Sun)/gi, "$1 $2")
    .replace(/\s+/g, " ");

  const match = text.match(
    /\b(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun)?,?\s*(\d{1,2})\s+(Jan(?:uary)?|Feb(?:ruary)?|Mar(?:ch)?|Apr(?:il)?|May|Jun(?:e)?|Jul(?:y)?|Aug(?:ust)?|Sep(?:t(?:ember)?)?|Oct(?:ober)?|Nov(?:ember)?|Dec(?:ember)?)\s+(\d{4})(?:,?\s*(\d{1,2})(?:[.:](\d{2}))?\s*(am|pm))?/i
  );

  if (!match) return null;

  const [, day, monthName, year, hourText, minuteText, meridiem] = match;
  const month = monthIndex(monthName);
  if (month < 0) return null;

  let hour = hourText ? Number(hourText) : 19;
  const minute = minuteText ? Number(minuteText) : 0;

  if (meridiem) {
    const period = meridiem.toLowerCase();
    if (period === "pm" && hour < 12) hour += 12;
    if (period === "am" && hour === 12) hour = 0;
  }

  const date = new Date(Date.UTC(Number(year), month, Number(day), hour - 8, minute, 0));
  return Number.isNaN(date.getTime()) ? null : date.toISOString();
}

function monthIndex(value) {
  const key = value.toLowerCase().slice(0, 3);
  return ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"].indexOf(key);
}

function sisticEventUrl(item) {
  if (item.alias) return `https://www.sistic.com.sg/events/${item.alias}`;
  return `https://www.sistic.com.sg/events`;
}

function sisticImageUrl(item) {
  const value = [
    item.horizontal_image,
    item.image_url,
    item.image,
    item.thumbnail,
    item.mobile_image,
    item.vertical_image,
    item.banner_image,
  ].find((candidate) => cleanText(candidate));

  if (!value) return null;

  const url = cleanText(value);
  if (url.startsWith("//")) return `https:${url}`;
  if (url.startsWith("/")) return `https://www.sistic.com.sg${url}`;
  return url;
}

function categoryFor(genre = "") {
  const value = genre.toLowerCase();
  if (value.includes("concert") || value.includes("music") || value.includes("orchestra") || value.includes("pop") || value.includes("opera") || value.includes("choir") || value.includes("acapella")) return "Concert";
  if (value.includes("workshop") || value.includes("seminar") || value.includes("course") || value.includes("training") || value.includes("talk")) return "Learning";
  if (value.includes("sport")) return "Sports";
  if (value.includes("food") || value.includes("dining")) return "Food";
  if (value.includes("leisure") || value.includes("tour") || value.includes("attraction") || value.includes("experience")) return "Outdoor";
  if (value.includes("art") || value.includes("theatre") || value.includes("theater") || value.includes("musical") || value.includes("dance") || value.includes("ballet") || value.includes("comedy") || value.includes("film") || value.includes("movie") || value.includes("drama") || value.includes("family") || value.includes("modern")) return "Art";
  return "Event";
}

function summarize(value = "") {
  const text = cleanText(value);
  return text.length > 500 ? `${text.slice(0, 497)}...` : text;
}

function cleanText(value = "") {
  return decodeHtml(String(value))
    .replace(/<br\s*\/?>/gi, " ")
    .replace(/<\/p>/gi, " ")
    .replace(/<[^>]+>/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function decodeHtml(value = "") {
  return String(value)
    .replace(/&#x27;/g, "'")
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, " ");
}

function numberOrNull(value) {
  const number = Number(value);
  return Number.isFinite(number) && number > 0 ? number : null;
}

async function supabaseFetch(path, options) {
  const response = await fetch(`${SUPABASE_URL}${path}`, options);
  const text = await response.text();
  const payload = text ? parseJson(text, "Supabase") : null;

  if (!response.ok) {
    throw new Error(payload?.message || payload?.hint || text || "Supabase request failed");
  }

  return payload || [];
}

function parseJson(text, source) {
  try {
    return JSON.parse(text);
  } catch {
    const preview = text.replace(/\s+/g, " ").trim().slice(0, 120);
    throw new Error(`${source} returned non-JSON content: ${preview || "empty response"}`);
  }
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
