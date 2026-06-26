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
const CASUAL_PAGES = [
  { slug: "free--events", label: "Free Events", categoryHint: "Event", free: true },
  { slug: "free--classes", label: "Free Classes", categoryHint: "Learning", free: true },
  { slug: "community--events", label: "Community Events", categoryHint: "Event" },
  { slug: "workshops--events", label: "Workshops", categoryHint: "Learning" },
  { slug: "popup--events", label: "Pop-ups", categoryHint: "Food" },
  { slug: "food-and-drink--events", label: "Food & Drink", categoryHint: "Food" },
  { slug: "arts--events", label: "Arts", categoryHint: "Art" },
  { slug: "health--events", label: "Health & Fitness", categoryHint: "Sports" },
  { slug: "hobbies--events", label: "Hobbies", categoryHint: "Learning" },
];

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
  const casualEvents = await fetchCasualEvents();

  if (!casualEvents.length) {
    console.log("No casual Eventbrite listings found.");
    return;
  }

  let imported = 0;
  for (const event of casualEvents) {
    const startsAt = parseEventDate(event.item.startDate);
    if (!startsAt) continue;

    const venue = await upsertVenue(event.item.location);
    await upsertEvent(event.item, event.page, startsAt, venue, source);
    imported += 1;
  }

  console.log(`Fetched ${casualEvents.length} casual Eventbrite listings.`);
  console.log(`Imported ${imported} casual Eventbrite events into Supabase.`);
}

async function fetchCasualEvents() {
  const byUrl = new Map();

  for (const page of CASUAL_PAGES) {
    const url = `https://www.eventbrite.sg/d/singapore--singapore/${page.slug}/`;
    const html = await fetchHtml(url);
    const items = extractStructuredEvents(html);

    items.forEach((item) => {
      if (!item?.url || !item?.name) return;
      const normalizedUrl = cleanUrl(item.url);
      const existing = byUrl.get(normalizedUrl);
      const mergedPage = existing?.page?.free ? existing.page : page;
      byUrl.set(normalizedUrl, { item: { ...item, url: normalizedUrl }, page: mergedPage });
    });

    console.log(`Fetched Eventbrite ${page.label} (${items.length} listings)`);
  }

  return [...byUrl.values()];
}

async function fetchHtml(url) {
  const response = await fetch(url, {
    headers: {
      Accept: "text/html,application/xhtml+xml",
      "Accept-Language": "en-SG,en;q=0.9",
      "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126 Safari/537.36",
    },
  });
  const text = await response.text();

  if (!response.ok) {
    throw new Error(`Eventbrite discovery page failed: ${response.status}`);
  }

  return text;
}

function extractStructuredEvents(html) {
  const scripts = [...html.matchAll(/<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)];
  for (const script of scripts) {
    const payload = parseJson(script[1], "Eventbrite page");
    const items = payload?.itemListElement || [];
    const events = items.map((entry) => entry.item).filter((item) => item?.["@type"] === "Event" || item?.startDate);
    if (events.length) return events;
  }

  return [];
}

async function upsertSource() {
  const rows = await supabaseFetch("/rest/v1/event_sources?on_conflict=name", {
    method: "POST",
    headers: { ...supabaseHeaders, Prefer: "resolution=merge-duplicates,return=representation" },
    body: JSON.stringify({
      name: "Eventbrite Casual Singapore",
      website_url: "https://www.eventbrite.sg/d/singapore--singapore/free--events/",
    }),
  });

  return rows[0];
}

async function upsertVenue(location = {}) {
  const address = location.address || {};
  const name = cleanText(location.name) || "Singapore";
  const cacheKey = `${name}:${address.streetAddress || ""}`;
  if (venueCache.has(cacheKey)) return venueCache.get(cacheKey);

  const rows = await supabaseFetch("/rest/v1/venues?on_conflict=name", {
    method: "POST",
    headers: { ...supabaseHeaders, Prefer: "resolution=merge-duplicates,return=representation" },
    body: JSON.stringify({
      name,
      address: venueAddress(location),
      latitude: numberOrNull(location.geo?.latitude),
      longitude: numberOrNull(location.geo?.longitude),
    }),
  });

  venueCache.set(cacheKey, rows[0]);
  return rows[0];
}

async function upsertEvent(item, page, startsAt, venue, source) {
  const endsAt = parseEventDate(item.endDate) || new Date(new Date(startsAt).getTime() + 2 * 60 * 60 * 1000).toISOString();
  const eventId = eventbriteId(item.url);

  await supabaseFetch("/rest/v1/events?on_conflict=source_id,source_event_id", {
    method: "POST",
    headers: { ...supabaseHeaders, Prefer: "resolution=merge-duplicates,return=representation" },
    body: JSON.stringify({
      title: cleanText(item.name) || "Untitled casual event",
      description: summarize(item.description) || `Casual Singapore activity from Eventbrite ${page.label}.`,
      category: categoryFor(item, page.categoryHint),
      starts_at: startsAt,
      ends_at: endsAt,
      venue_id: venue?.id,
      image_url: imageUrl(item.image),
      official_url: item.url,
      ticket_url: item.url,
      price_min: page.free ? 0 : null,
      price_max: page.free ? 0 : null,
      currency: "SGD",
      source_id: source.id,
      source_event_id: eventId,
      status: "published",
    }),
  });
}

function categoryFor(item, fallback) {
  const value = `${item.name || ""} ${item.description || ""}`.toLowerCase();
  if (value.includes("music") || value.includes("concert") || value.includes("open mic")) return "Concert";
  if (value.includes("food") || value.includes("coffee") || value.includes("wine") || value.includes("dinner") || value.includes("market")) return "Food";
  if (value.includes("run") || value.includes("yoga") || value.includes("fitness") || value.includes("wellness") || value.includes("sport")) return "Sports";
  if (value.includes("workshop") || value.includes("class") || value.includes("seminar") || value.includes("talk") || value.includes("training") || value.includes("ai")) return "Learning";
  if (value.includes("walk") || value.includes("outdoor") || value.includes("park") || value.includes("nature")) return "Outdoor";
  if (value.includes("art") || value.includes("film") || value.includes("craft") || value.includes("illustration") || value.includes("dance") || value.includes("book")) return "Art";
  return fallback || "Event";
}

function parseEventDate(value) {
  if (!value) return null;
  const text = String(value);
  const date = text.includes("T") ? new Date(text) : new Date(`${text}T19:00:00+08:00`);
  return Number.isNaN(date.getTime()) ? null : date.toISOString();
}

function venueAddress(location = {}) {
  const address = location.address || {};
  return [
    address.streetAddress,
    address.addressLocality,
    address.addressCountry === "SG" ? "Singapore" : address.addressCountry,
    address.postalCode,
  ].filter(Boolean).join(", ") || `${cleanText(location.name) || "Singapore"}, Singapore`;
}

function eventbriteId(url) {
  const match = String(url).match(/-(\d+)(?:\?|$)/) || String(url).match(/\/e\/(\d+)(?:\?|$)/);
  return match ? match[1] : cleanUrl(url);
}

function cleanUrl(value = "") {
  const url = new URL(String(value));
  url.search = "";
  return url.toString();
}

function imageUrl(value) {
  if (Array.isArray(value)) return value[0] || null;
  return value || null;
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
  return Number.isFinite(number) ? number : null;
}

function parseJson(text, source) {
  try {
    return JSON.parse(text);
  } catch {
    const preview = text.replace(/\s+/g, " ").trim().slice(0, 120);
    throw new Error(`${source} returned non-JSON content: ${preview || "empty response"}`);
  }
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

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
