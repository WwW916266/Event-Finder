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
  TICKETMASTER_CONSUMER_KEY,
} = config;

const SUPABASE_IMPORT_KEY = SUPABASE_SERVICE_ROLE_KEY || SUPABASE_PUBLISHABLE_KEY;
const TICKETMASTER_PAGE_SIZE = 100;
const TICKETMASTER_MAX_PAGES = Number(config.TICKETMASTER_MAX_PAGES || 10);

if (!SUPABASE_URL || !SUPABASE_IMPORT_KEY || !TICKETMASTER_CONSUMER_KEY) {
  throw new Error("Missing Supabase or Ticketmaster config in config.js");
}

const ticketmasterUrl = new URL("https://app.ticketmaster.com/discovery/v2/events.json");
ticketmasterUrl.searchParams.set("apikey", TICKETMASTER_CONSUMER_KEY);
ticketmasterUrl.searchParams.set("countryCode", "SG");
ticketmasterUrl.searchParams.set("size", String(TICKETMASTER_PAGE_SIZE));
ticketmasterUrl.searchParams.set("sort", "date,asc");
ticketmasterUrl.searchParams.set("startDateTime", new Date().toISOString().replace(/\.\d{3}Z$/, "Z"));

const supabaseHeaders = {
  apikey: SUPABASE_IMPORT_KEY,
  Authorization: `Bearer ${SUPABASE_IMPORT_KEY}`,
  "Content-Type": "application/json",
  Prefer: "return=representation",
};

async function main() {
  const source = await upsertSource();
  const ticketmasterEvents = await fetchTicketmasterEvents();

  if (!ticketmasterEvents.length) {
    console.log("No Ticketmaster Singapore events found.");
    return;
  }

  let imported = 0;
  for (const item of ticketmasterEvents) {
    const venueData = item._embedded?.venues?.[0];
    const venue = await upsertVenue(venueData);
    await upsertEvent(item, venue, source);
    imported += 1;
  }

  console.log(`Imported ${imported} Ticketmaster events into Supabase.`);
}

async function fetchTicketmasterEvents() {
  const byId = new Map();
  let totalPages = 1;

  for (let page = 0; page < Math.min(totalPages, TICKETMASTER_MAX_PAGES); page += 1) {
    const url = new URL(ticketmasterUrl);
    url.searchParams.set("page", String(page));

    const response = await fetch(url);
    const payload = await response.json();

    if (!response.ok) {
      throw new Error(payload.fault?.faultstring || payload.message || "Ticketmaster request failed");
    }

    totalPages = payload.page?.totalPages || 1;
    const pageEvents = payload._embedded?.events || [];
    pageEvents.forEach((event) => byId.set(event.id, event));
    console.log(`Fetched Ticketmaster page ${page + 1}/${Math.min(totalPages, TICKETMASTER_MAX_PAGES)} (${pageEvents.length} events)`);

    if (!pageEvents.length) break;
  }

  return [...byId.values()];
}

async function upsertSource() {
  const rows = await supabaseFetch("/rest/v1/event_sources?on_conflict=name", {
    method: "POST",
    headers: { ...supabaseHeaders, Prefer: "resolution=merge-duplicates,return=representation" },
    body: JSON.stringify({
      name: "Ticketmaster Singapore",
      website_url: "https://www.ticketmaster.sg/",
    }),
  });

  return rows[0];
}

async function upsertVenue(venue) {
  const name = venue?.name || "Singapore";
  const rows = await supabaseFetch("/rest/v1/venues?on_conflict=name", {
    method: "POST",
    headers: { ...supabaseHeaders, Prefer: "resolution=merge-duplicates,return=representation" },
    body: JSON.stringify({
      name,
      address: venueAddress(venue),
      latitude: Number(venue?.location?.latitude) || null,
      longitude: Number(venue?.location?.longitude) || null,
    }),
  });

  return rows[0];
}

async function upsertEvent(item, venue, source) {
  const price = ticketmasterPrice(item);
  const image = bestImage(item.images);
  const startsAt = eventStart(item);
  const endsAt = startsAt ? new Date(new Date(startsAt).getTime() + 2 * 60 * 60 * 1000).toISOString() : null;

  await supabaseFetch("/rest/v1/events?on_conflict=source_id,source_event_id", {
    method: "POST",
    headers: { ...supabaseHeaders, Prefer: "resolution=merge-duplicates,return=representation" },
    body: JSON.stringify({
      title: decodeHtml(item.name),
      description: decodeHtml(item.info || item.pleaseNote || "Official Ticketmaster event listing."),
      category: categoryFor(item),
      starts_at: startsAt,
      ends_at: endsAt,
      venue_id: venue?.id,
      image_url: image?.url || null,
      official_url: item.url,
      ticket_url: item.url,
      price_min: price.min,
      price_max: price.max,
      currency: price.currency || "SGD",
      source_id: source.id,
      source_event_id: item.id,
      status: "published",
    }),
  });
}

function eventStart(item) {
  const date = item.dates?.start?.localDate;
  const time = item.dates?.start?.localTime || "19:00:00";
  return date ? `${date}T${time}+08:00` : null;
}

function venueAddress(venue) {
  return [
    venue?.address?.line1,
    venue?.city?.name,
    venue?.country?.name,
  ].filter(Boolean).join(", ");
}

function bestImage(images = []) {
  return [...images].sort((a, b) => (b.width || 0) - (a.width || 0))[0];
}

function ticketmasterPrice(item) {
  const ranges = (item.priceRanges || [])
    .map((range) => ({
      min: numberOrNull(range.min),
      max: numberOrNull(range.max),
      currency: range.currency || "SGD",
    }))
    .filter((range) => range.min !== null || range.max !== null);

  if (!ranges.length) return { min: null, max: null, currency: "SGD" };

  const values = ranges.flatMap((range) => [range.min, range.max]).filter((value) => value !== null);
  return {
    min: Math.min(...values),
    max: Math.max(...values),
    currency: ranges.find((range) => range.currency)?.currency || "SGD",
  };
}

function categoryFor(item) {
  const segment = item.classifications?.[0]?.segment?.name;
  if (segment === "Music") return "Concert";
  return segment || "Event";
}

function decodeHtml(value = "") {
  return String(value)
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

function numberOrNull(value) {
  if (value === null || value === undefined || value === "") return null;
  const number = Number(value);
  return Number.isFinite(number) ? number : null;
}

async function supabaseFetch(path, options) {
  const response = await fetch(`${SUPABASE_URL}${path}`, options);
  const text = await response.text();
  const payload = text ? JSON.parse(text) : null;

  if (!response.ok) {
    throw new Error(payload?.message || payload?.hint || text || "Supabase request failed");
  }

  return payload || [];
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
