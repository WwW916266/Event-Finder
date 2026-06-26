const fs = require("fs");
const vm = require("vm");

const configCode = fs.readFileSync("./config.js", "utf8");
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(configCode, sandbox);

const config = sandbox.window.NEARO_CONFIG || {};
const {
  EVENTBRITE_PRIVATE_TOKEN,
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY,
  SUPABASE_SERVICE_ROLE_KEY,
} = config;

const SUPABASE_IMPORT_KEY = SUPABASE_SERVICE_ROLE_KEY || SUPABASE_PUBLISHABLE_KEY;
const EVENTBRITE_PAGE_SIZE = 50;
const EVENTBRITE_MAX_PAGES = Number(config.EVENTBRITE_MAX_PAGES || 6);

if (!SUPABASE_URL || !SUPABASE_IMPORT_KEY || !EVENTBRITE_PRIVATE_TOKEN) {
  throw new Error("Missing Supabase or Eventbrite config in config.js");
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
  const eventbriteEvents = await fetchEventbriteEvents();

  if (!eventbriteEvents.length) {
    console.log("No Eventbrite Singapore events found.");
    return;
  }

  let imported = 0;
  for (const item of eventbriteEvents) {
    if (item.status && item.status !== "live") continue;
    if (!item.start?.utc) continue;
    const venue = await upsertVenue(item.venue);
    await upsertEvent(item, venue, source);
    imported += 1;
  }

  console.log(`Fetched ${eventbriteEvents.length} Eventbrite listings.`);
  console.log(`Imported ${imported} Eventbrite events into Supabase.`);
}

async function fetchEventbriteEvents() {
  const organizations = await fetchEventbriteOrganizations();
  if (!organizations.length) {
    console.log("No Eventbrite organizations found for this token. Eventbrite private tokens can import events owned by your Eventbrite account, not the full public Eventbrite directory.");
    return [];
  }

  const byId = new Map();

  for (const organization of organizations) {
    for (let page = 1; page <= EVENTBRITE_MAX_PAGES; page += 1) {
      const url = new URL(`https://www.eventbriteapi.com/v3/organizations/${organization.id}/events/`);
      url.searchParams.set("status", "live");
      url.searchParams.set("order_by", "start_asc");
      url.searchParams.set("page_size", String(EVENTBRITE_PAGE_SIZE));
      url.searchParams.set("page", String(page));
      url.searchParams.set("expand", "venue,organizer,category,format,ticket_availability");

      const payload = await eventbriteFetch(url);
      const pageEvents = (payload.events || []).filter(isSingaporeEvent);
      pageEvents.forEach((event) => byId.set(event.id, event));
      console.log(`Fetched Eventbrite ${organization.name || organization.id} page ${page}/${Math.min(payload.pagination?.page_count || 1, EVENTBRITE_MAX_PAGES)} (${pageEvents.length} Singapore events)`);

      if (!payload.pagination?.has_more_items) break;
    }
  }

  return [...byId.values()];
}

async function fetchEventbriteOrganizations() {
  const payload = await eventbriteFetch("https://www.eventbriteapi.com/v3/users/me/organizations/");
  return payload.organizations || [];
}

async function eventbriteFetch(url) {
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${EVENTBRITE_PRIVATE_TOKEN}`,
      Accept: "application/json",
    },
  });
  const text = await response.text();
  const payload = text ? parseJson(text, "Eventbrite") : {};

  if (!response.ok) {
    throw new Error(payload.error_description || payload.error || payload.message || "Eventbrite request failed");
  }

  return payload;
}

function isSingaporeEvent(item) {
  const venue = item.venue || {};
  const country = String(venue.address?.country || venue.address?.country_code || "").toLowerCase();
  const address = cleanText(venue.address?.localized_address_display || venue.address?.localized_area_display);
  return !venue.id || country === "sg" || address.toLowerCase().includes("singapore");
}

async function upsertSource() {
  const rows = await supabaseFetch("/rest/v1/event_sources?on_conflict=name", {
    method: "POST",
    headers: { ...supabaseHeaders, Prefer: "resolution=merge-duplicates,return=representation" },
    body: JSON.stringify({
      name: "Eventbrite Singapore",
      website_url: "https://www.eventbrite.sg/",
    }),
  });

  return rows[0];
}

async function upsertVenue(venue) {
  const name = cleanText(venue?.name) || "Singapore";
  if (venueCache.has(name)) return venueCache.get(name);

  const rows = await supabaseFetch("/rest/v1/venues?on_conflict=name", {
    method: "POST",
    headers: { ...supabaseHeaders, Prefer: "resolution=merge-duplicates,return=representation" },
    body: JSON.stringify({
      name,
      address: cleanText(venue?.address?.localized_address_display) || `${name}, Singapore`,
      latitude: numberOrNull(venue?.latitude),
      longitude: numberOrNull(venue?.longitude),
    }),
  });

  venueCache.set(name, rows[0]);
  return rows[0];
}

async function upsertEvent(item, venue, source) {
  const startsAt = item.start?.utc ? new Date(item.start.utc).toISOString() : null;
  const endsAt = item.end?.utc ? new Date(item.end.utc).toISOString() : startsAt;
  const ticket = item.ticket_availability || {};

  await supabaseFetch("/rest/v1/events?on_conflict=source_id,source_event_id", {
    method: "POST",
    headers: { ...supabaseHeaders, Prefer: "resolution=merge-duplicates,return=representation" },
    body: JSON.stringify({
      title: cleanText(item.name?.text) || "Untitled Eventbrite event",
      description: summarize(item.description?.text) || "Official Eventbrite event listing.",
      category: categoryFor(item.category?.name, item.format?.name),
      starts_at: startsAt,
      ends_at: endsAt,
      venue_id: venue?.id,
      image_url: item.logo?.original?.url || item.logo?.url || null,
      official_url: item.url,
      ticket_url: item.url,
      price_min: eventbritePrice(ticket.minimum_ticket_price),
      price_max: eventbritePrice(ticket.maximum_ticket_price) || eventbritePrice(ticket.minimum_ticket_price),
      currency: ticket.minimum_ticket_price?.currency || ticket.maximum_ticket_price?.currency || "SGD",
      source_id: source.id,
      source_event_id: String(item.id),
      status: "published",
    }),
  });
}

function categoryFor(category = "", format = "") {
  const value = `${category} ${format}`.toLowerCase();
  if (value.includes("music") || value.includes("concert") || value.includes("festival")) return "Concert";
  if (value.includes("food") || value.includes("drink") || value.includes("dining")) return "Food";
  if (value.includes("sport") || value.includes("fitness") || value.includes("run") || value.includes("yoga")) return "Sports";
  if (value.includes("class") || value.includes("workshop") || value.includes("seminar") || value.includes("training") || value.includes("business") || value.includes("tech")) return "Learning";
  if (value.includes("travel") || value.includes("outdoor") || value.includes("tour") || value.includes("health")) return "Outdoor";
  if (value.includes("art") || value.includes("film") || value.includes("fashion") || value.includes("perform")) return "Art";
  return "Event";
}

function eventbritePrice(price) {
  if (!price) return null;
  const value = Number(price.major_value ?? price.value);
  return Number.isFinite(value) && value > 0 ? value : null;
}

function summarize(value = "") {
  const text = cleanText(value);
  return text.length > 500 ? `${text.slice(0, 497)}...` : text;
}

function cleanText(value = "") {
  return String(value)
    .replace(/<br\s*\/?>/gi, " ")
    .replace(/<\/p>/gi, " ")
    .replace(/<[^>]+>/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function numberOrNull(value) {
  const number = Number(value);
  return Number.isFinite(number) ? number : null;
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
