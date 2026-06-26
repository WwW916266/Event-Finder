const fallbackEvents = [
  {
    id: 1,
    title: "Rooftop Jazz at Golden Hour",
    category: "Concert",
    dateGroup: "This weekend",
    day: "27",
    month: "JUN",
    sortDate: "2026-06-27T18:30:00+08:00",
    time: "Sat, 6:30 PM",
    durationHours: 2,
    place: "Marina Bay",
    distance: 1.2,
    price: "S$28",
    priceValue: 28,
    people: "18 going",
    availability: "Selling fast",
    image: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=1000&q=85",
    description: "A sunset trio set with skyline views, small plates, and a clean second set for late arrivals.",
    coords: { lat: 1.2834, lng: 103.8607 },
    map: { x: 54, y: 46 },
  },
  {
    id: 2,
    title: "Hawker After Dark",
    category: "Food",
    dateGroup: "This weekend",
    day: "28",
    month: "JUN",
    sortDate: "2026-06-28T17:00:00+08:00",
    time: "Sun, 5:00 PM",
    durationHours: 3,
    place: "Lau Pa Sat",
    distance: 2.4,
    price: "Free",
    priceValue: 0,
    people: "42 going",
    availability: "Open entry",
    image: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=1000&q=85",
    description: "A rotating stall lineup, live grill counters, and a casual street-table setup built for wandering.",
    coords: { lat: 1.2806, lng: 103.8504 },
    map: { x: 61, y: 55 },
  },
  {
    id: 3,
    title: "Clay & Calm: Pottery Social",
    category: "Learning",
    dateGroup: "This weekend",
    day: "28",
    month: "JUN",
    sortDate: "2026-06-28T13:00:00+08:00",
    time: "Sun, 1:00 PM",
    durationHours: 2,
    place: "Tiong Bahru",
    distance: 3.1,
    price: "S$45",
    priceValue: 45,
    people: "7 spots left",
    availability: "Few spots",
    image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=1000&q=85",
    description: "A low-pressure hand-building session with tea, gentle prompts, and firing included.",
    coords: { lat: 1.2849, lng: 103.8318 },
    map: { x: 38, y: 62 },
  },
  {
    id: 4,
    title: "Indie Film Under the Stars",
    category: "Art",
    dateGroup: "This weekend",
    day: "27",
    month: "JUN",
    sortDate: "2026-06-27T20:00:00+08:00",
    time: "Sat, 8:00 PM",
    durationHours: 2,
    place: "Fort Canning Green",
    distance: 1.8,
    price: "S$16",
    priceValue: 16,
    people: "31 going",
    availability: "Seats left",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1000&q=85",
    description: "An open-air screening with picnic mats, short films before the feature, and post-show music.",
    coords: { lat: 1.2944, lng: 103.8465 },
    map: { x: 48, y: 41 },
  },
  {
    id: 5,
    title: "Sunrise Cycle & Kopi",
    category: "Outdoor",
    dateGroup: "Today",
    day: "22",
    month: "JUN",
    sortDate: "2026-06-22T07:30:00+08:00",
    time: "Mon, 7:30 AM",
    durationHours: 2,
    place: "East Coast Park",
    distance: 6.2,
    price: "Free",
    priceValue: 0,
    people: "12 going",
    availability: "Beginner friendly",
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=1000&q=85",
    description: "A relaxed coastal ride ending with kopi and kaya toast near the water.",
    coords: { lat: 1.3008, lng: 103.9122 },
    map: { x: 78, y: 70 },
  },
  {
    id: 6,
    title: "Analog Dreams: Photo Walk",
    category: "Art",
    dateGroup: "This weekend",
    day: "27",
    month: "JUN",
    sortDate: "2026-06-27T16:00:00+08:00",
    time: "Sat, 4:00 PM",
    durationHours: 2,
    place: "Kampong Glam",
    distance: 2.7,
    price: "S$12",
    priceValue: 12,
    people: "9 going",
    availability: "Small group",
    image: "https://images.unsplash.com/photo-1452780212940-6f5c0d14d848?auto=format&fit=crop&w=1000&q=85",
    description: "A film-photo route through shophouses, textures, and golden-hour corners.",
    coords: { lat: 1.3022, lng: 103.8591 },
    map: { x: 58, y: 31 },
  },
  {
    id: 7,
    title: "Botanic Sketchbook Morning",
    category: "Outdoor",
    dateGroup: "Next week",
    day: "03",
    month: "JUL",
    sortDate: "2026-07-03T09:00:00+08:00",
    time: "Fri, 9:00 AM",
    durationHours: 2,
    place: "Singapore Botanic Gardens",
    distance: 4.5,
    price: "S$10",
    priceValue: 10,
    people: "15 going",
    availability: "Materials provided",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=85",
    description: "Guided observation drawing with pocket prompts and shaded stops around the garden.",
    coords: { lat: 1.3138, lng: 103.8159 },
    map: { x: 26, y: 36 },
  },
  {
    id: 8,
    title: "Tiny Desk Songwriters Circle",
    category: "Concert",
    dateGroup: "Next week",
    day: "04",
    month: "JUL",
    sortDate: "2026-07-04T19:30:00+08:00",
    time: "Sat, 7:30 PM",
    durationHours: 2,
    place: "Joo Chiat",
    distance: 5.8,
    price: "S$22",
    priceValue: 22,
    people: "24 going",
    availability: "New venue",
    image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1000&q=85",
    description: "Four local writers trade stripped-back songs and stories in a warm listening-room setup.",
    coords: { lat: 1.3117, lng: 103.9025 },
    map: { x: 73, y: 44 },
  },
];

const STORAGE_KEY = "nearo.saved";
const APP_VERSION = "2026-06-25-sistic-image-fallback";
const EVENTS_PER_PAGE = 12;
const GOOGLE_MAPS_API_KEY = window.NEARO_CONFIG?.GOOGLE_MAPS_API_KEY || "";
const SUPABASE_URL = window.NEARO_CONFIG?.SUPABASE_URL || "";
const SUPABASE_PUBLISHABLE_KEY = window.NEARO_CONFIG?.SUPABASE_PUBLISHABLE_KEY || "";
const GEMINI_API_KEY = window.NEARO_CONFIG?.GEMINI_API_KEY || "";
const GEMINI_MODEL = window.NEARO_CONFIG?.GEMINI_MODEL || "gemini-flash-latest";
const GEMINI_FALLBACK_MODELS = [GEMINI_MODEL, "gemini-2.5-flash", "gemini-3-flash-preview", "gemini-flash-latest"]
  .filter((model, index, models) => model && models.indexOf(model) === index);
const SINGAPORE_CENTER = { lat: 1.2931, lng: 103.852 };
const MAP_STYLE = [
  { elementType: "geometry", stylers: [{ color: "#20483c" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#d8e7df" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#18362d" }] },
  { featureType: "administrative", elementType: "geometry.stroke", stylers: [{ color: "#48705f" }] },
  { featureType: "poi", elementType: "geometry", stylers: [{ color: "#285647" }] },
  { featureType: "poi", elementType: "labels.text.fill", stylers: [{ color: "#d9f06d" }] },
  { featureType: "road", elementType: "geometry", stylers: [{ color: "#356858" }] },
  { featureType: "road", elementType: "geometry.stroke", stylers: [{ color: "#18362d" }] },
  { featureType: "road", elementType: "labels.text.fill", stylers: [{ color: "#c7d7cf" }] },
  { featureType: "transit", elementType: "geometry", stylers: [{ color: "#2b5b4d" }] },
  { featureType: "water", elementType: "geometry", stylers: [{ color: "#163029" }] },
  { featureType: "water", elementType: "labels.text.fill", stylers: [{ color: "#78958a" }] },
];
const FALLBACK_IMAGES = {
  Art: "https://images.unsplash.com/photo-1507924538820-ede94a04019d?auto=format&fit=crop&w=1000&q=85",
  Concert: "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1000&q=85",
  Event: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1000&q=85",
  Food: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1000&q=85",
  Learning: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1000&q=85",
  Outdoor: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=85",
  Sports: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1000&q=85",
  SISTIC: "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1000&q=85",
};

let events = [...fallbackEvents];
let saved = new Set(readSaved());
let activeCategory = "All";
let activeMapId = events[0].id;
let googleMap;
let infoWindow;
let googleMarkers = new Map();
let googleClusterMarkers = [];
let lastFilteredEvents = [];
let currentPage = 1;
let aiRecommendationActive = false;
let aiRecommendedIds = [];
let aiRecommendationSummary = "";
let usingFallbackEvents = true;
let supabaseClient = null;
let currentUser = null;
let authMode = "login";

const grid = document.querySelector("#eventGrid");
const emptyState = document.querySelector("#emptyState");
const emptyAiButton = document.querySelector("#emptyAiButton");
const planCount = document.querySelector("#planCount");
const searchInput = document.querySelector("#searchInput");
const dateSelect = document.querySelector("#dateSelect");
const sortSelect = document.querySelector("#sortSelect");
const resultsMeta = document.querySelector("#resultsMeta");
const pagination = document.querySelector("#pagination");
const aiGuideForm = document.querySelector("#aiGuideForm");
const aiGuide = document.querySelector("#aiGuide");
const aiToggles = document.querySelectorAll("#aiToggle, #aiFloatingToggle");
const aiClose = document.querySelector("#aiClose");
const aiPrompt = document.querySelector("#aiPrompt");
const aiGuideButton = document.querySelector("#aiGuideButton");
const aiResults = document.querySelector("#aiResults");
const googleMapEl = document.querySelector("#googleMap");
const mapFallback = document.querySelector("#mapFallback");
const mapPanel = document.querySelector(".map-panel");
const mapPreview = document.querySelector("#mapPreview");
const cityStats = document.querySelector("#cityStats");
const eventDialog = document.querySelector("#eventDialog");
const dialogContent = document.querySelector("#dialogContent");
const accountButton = document.querySelector("#accountButton");
const accountAvatar = document.querySelector("#accountAvatar");
const accountLabel = document.querySelector("#accountLabel");
const authDialog = document.querySelector("#authDialog");
const authForm = document.querySelector("#authForm");
const authTitle = document.querySelector("#authTitle");
const authSubtitle = document.querySelector("#authSubtitle");
const authSubmit = document.querySelector("#authSubmit");
const authNote = document.querySelector("#authNote");
const authSession = document.querySelector("#authSession");
const authUserEmail = document.querySelector("#authUserEmail");
const signOutButton = document.querySelector("#signOutButton");

console.info(`Nearo ${APP_VERSION}`);

function readSaved() {
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[1,3]");
    return stored;
  } catch {
    return [1, 3];
  }
}

function writeSaved() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...saved]));
  } catch {
    // Saving still works for the current session if storage is unavailable.
  }
}

function eventCard(event) {
  const isSaved = saved.has(String(event.id));

  return `<article class="event-card" data-card="${event.id}" data-details="${event.id}" tabindex="0" role="button" aria-label="View details for ${escapeHtml(event.title)}">
    <div class="event-image" style="${eventImageStyle(event)}">
      <div class="date-badge"><span>${event.month}</span><strong>${event.day}</strong></div>
      <button class="save-button ${isSaved ? "saved" : ""}" type="button" data-save="${event.id}" aria-label="${isSaved ? "Remove from" : "Save to"} plans">${isSaved ? "♥" : "♡"}</button>
    </div>
    <div class="card-body">
      <div class="card-topline">
        <span class="card-tag">${event.category}</span>
        <span class="availability">${sourceBadge(event)}</span>
      </div>
      <h3>${event.title}</h3>
      <div class="meta"><span aria-hidden="true">↗</span><span>${event.time}</span></div>
      <div class="meta"><span aria-hidden="true">⌖</span><span>${event.place}</span></div>
      <div class="card-footer">
        <div class="attendees"><span class="mini-avatar">M</span><span class="mini-avatar">J</span><span>${event.people}</span></div>
        <div class="card-utility">
          <span class="price">${event.price}</span>
          <button class="icon-action" type="button" data-calendar="${event.id}" aria-label="Add ${escapeHtml(event.title)} to calendar">
            <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M7 3v3M17 3v3M4 9h16M6 5h12a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z"></path></svg>
          </button>
          <button class="icon-action" type="button" data-map="${event.id}" aria-label="Show ${escapeHtml(event.title)} on map">
            <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M12 21s7-5.15 7-11a7 7 0 1 0-14 0c0 5.85 7 11 7 11Z"></path><circle cx="12" cy="10" r="2.5"></circle></svg>
          </button>
        </div>
      </div>
    </div>
  </article>`;
}

function getFilteredEvents(options = {}) {
  if (aiRecommendationActive && !options.ignoreAiRecommendations) return getAiRecommendedEvents();

  const query = searchInput.value.trim().toLowerCase();
  const date = dateSelect?.value || "Anytime";
  const sort = sortSelect.value;

  const filtered = events.filter((event) => {
    const matchesCategory = activeCategory === "All" || event.category === activeCategory;
    const matchesDate = date === "Anytime" || event.dateGroup === date;
    const haystack = `${event.title} ${event.category} ${event.place} ${event.description}`.toLowerCase();
    return matchesCategory && matchesDate && haystack.includes(query);
  });

  return filtered.sort((a, b) => {
    if (sort === "soonest") return new Date(a.sortDate) - new Date(b.sortDate);
    if (sort === "distance") return a.distance - b.distance;
    if (sort === "price") return (a.priceValue ?? Number.MAX_SAFE_INTEGER) - (b.priceValue ?? Number.MAX_SAFE_INTEGER);
    return a.id - b.id;
  });
}

function getAiRecommendedEvents() {
  const ids = new Set(aiRecommendedIds.map(String));
  return events.filter((event) => ids.has(String(event.id)));
}

function eventImage(event) {
  if (event.image) return event.image;
  if (String(event.availability || "").toLowerCase().includes("sistic")) return FALLBACK_IMAGES.SISTIC;
  return FALLBACK_IMAGES[event.category] || FALLBACK_IMAGES.Event;
}

function eventImageStyle(event) {
  const fallback = fallbackImageFor(event.category, event.availability);
  const image = event.image && event.image !== fallback ? event.image : "";
  const images = [image, fallback].filter(Boolean).map((url) => `url('${escapeCssUrl(url)}')`).join(", ");
  return `background-image: ${images}`;
}

function escapeCssUrl(value = "") {
  return String(value).replace(/['"\\()]/g, "\\$&");
}

function sourceBadge(event) {
  const source = String(event.availability || "Official listing");
  const value = source.toLowerCase();
  let label = source;
  if (value.includes("sistic")) label = "SISTIC";
  if (value.includes("ticketmaster")) label = "Ticketmaster";
  if (value.includes("eventbrite")) label = "Eventbrite";
  return label.length > 24 ? `${label.slice(0, 21)}...` : label;
}

async function askAiGuide(event) {
  event.preventDefault();
  await runAiGuide(aiPrompt.value);
}

async function runAiGuide(rawPrompt) {
  const prompt = rawPrompt.trim();
  if (!prompt) {
    toast("Tell the AI what you feel like doing");
    return;
  }

  const candidates = getAiEventCandidates();
  if (!candidates.length) {
    aiResults.innerHTML = `<div class="ai-empty">No events are loaded yet. Try again after the event list finishes loading.</div>`;
    return;
  }

  aiGuideButton.disabled = true;
  aiGuideButton.textContent = "Thinking...";
  aiResults.innerHTML = `<div class="ai-empty">Finding real events that match...</div>`;

  try {
    const result = await fetchGeminiRecommendations(prompt, candidates);
    renderAiRecommendations(result);
  } catch (error) {
    console.error("Gemini AI guide failed", error);
    aiResults.innerHTML = `<div class="ai-empty">${escapeHtml(error.message || "AI guide could not answer right now.")}</div>`;
  } finally {
    aiGuideButton.disabled = false;
    aiGuideButton.textContent = "Ask AI";
  }
}

function getAiEventCandidates() {
  const filtered = getFilteredEvents({ ignoreAiRecommendations: true });
  const source = filtered.length ? filtered : events;
  return source.slice(0, 80).map((event) => ({
    id: String(event.id),
    title: event.title,
    category: event.category,
    date: event.time,
    place: event.place,
    price: event.price,
    source: event.availability,
    description: event.description.slice(0, 220),
  }));
}

async function fetchGeminiRecommendations(prompt, candidates) {
  if (shouldUseLocalGeminiKey()) {
    return fetchGeminiFromBrowserKey(prompt, candidates);
  }

  return fetchGeminiFromFunction(prompt, candidates);
}

function shouldUseLocalGeminiKey() {
  const localHostnames = ["", "localhost", "127.0.0.1"];
  return Boolean(GEMINI_API_KEY) && (window.location.protocol === "file:" || localHostnames.includes(window.location.hostname));
}

async function fetchGeminiFromBrowserKey(prompt, candidates) {
  let lastError = null;

  for (const model of GEMINI_FALLBACK_MODELS) {
    try {
      return await fetchGeminiWithModel(model, prompt, candidates);
    } catch (error) {
      lastError = error;
      console.warn(`Gemini model ${model} failed`, error.message);
    }
  }

  throw lastError || new Error("Gemini request failed");
}

async function fetchGeminiFromFunction(prompt, candidates) {
  const endpoints = ["/api/gemini-guide", "/.netlify/functions/gemini-guide"];
  let lastError = null;

  for (const endpoint of endpoints) {
    try {
      return await postGeminiRequest(endpoint, prompt, candidates);
    } catch (error) {
      lastError = error;
    }
  }

  throw lastError || new Error("AI server is not reachable.");
}

async function postGeminiRequest(endpoint, prompt, candidates) {
  let response;
  try {
    response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt, candidates }),
    });
  } catch {
    throw new Error("AI server is not reachable. Check that the site was deployed with the AI endpoint and GEMINI_API_KEY environment variable.");
  }

  const payload = await parseJsonResponse(response);
  if (!response.ok) throw new Error(payload.error || "AI guide could not answer right now.");

  return payload;
}

async function parseJsonResponse(response) {
  try {
    return await response.json();
  } catch {
    return { error: "AI server returned an invalid response. Check the hosting function logs." };
  }
}

async function fetchGeminiWithModel(model, prompt, candidates) {
  const modelPath = model.startsWith("models/") ? model : `models/${model}`;
  const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/${modelPath}:generateContent?key=${encodeURIComponent(GEMINI_API_KEY)}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(geminiRequestBody(prompt, candidates)),
  });

  const payload = await response.json();
  if (!response.ok) throw new Error(payload.error?.message || "Gemini request failed");

  return parseGeminiJson(payload.candidates?.[0]?.content?.parts?.[0]?.text || "");
}

function geminiRequestBody(prompt, candidates) {
  return {
    generationConfig: {
      temperature: 0.35,
      responseMimeType: "application/json",
    },
    contents: [{
      role: "user",
      parts: [{
        text: [
          "You are Nearo AI Guide for Singapore events.",
          "Recommend only from the provided event list. Do not invent events, venues, prices, or dates.",
          "Return strict JSON with this shape: {\"summary\":\"short answer\",\"picks\":[{\"id\":\"event id\",\"reason\":\"why it fits\"}]}",
          "Choose at most 5 picks. If nothing fits, return an empty picks array and explain why in summary.",
          `User request: ${prompt}`,
          `Events: ${JSON.stringify(candidates)}`,
        ].join("\n\n"),
      }],
    }],
  };
}

function parseGeminiJson(text) {
  try {
    return JSON.parse(text);
  } catch {
    const match = text.match(/\{[\s\S]*\}/);
    if (match) return JSON.parse(match[0]);
    throw new Error("AI returned an unreadable answer. Try again.");
  }
}

function renderAiRecommendations(result) {
  const picks = Array.isArray(result.picks) ? result.picks : [];
  const pickedIds = picks
    .map((pick) => String(pick.id))
    .filter((id) => events.some((event) => String(event.id) === id));

  aiRecommendedIds = pickedIds;
  aiRecommendationSummary = result.summary || "";
  aiRecommendationActive = true;
  resetPagination();
  render();

  const cards = picks
    .map((pick) => {
      const event = events.find((item) => String(item.id) === String(pick.id));
      if (!event) return "";
      return `<article class="ai-pick">
        <span>${event.category}</span>
        <h4>${event.title}</h4>
        <p>${pick.reason || "A good fit for your request."}</p>
        <div>${event.time} · ${event.place}</div>
        <button type="button" data-details="${event.id}">View details</button>
      </article>`;
    })
    .filter(Boolean)
    .join("");

  aiResults.innerHTML = `
    <div class="ai-summary">${result.summary || "Here are the best matches I found from real events."}</div>
    ${cards ? `<div class="ai-picks">${cards}</div>` : ""}
  `;

  if (pickedIds.length) {
    document.querySelector(".content-section").scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function openAiGuide(options = {}) {
  aiGuide.classList.add("open");
  aiGuide.setAttribute("aria-hidden", "false");
  aiToggles.forEach((button) => button.setAttribute("aria-expanded", "true"));
  if (options.focusPrompt !== false) {
    setTimeout(() => aiPrompt.focus(), 80);
  }
}

function closeAiGuide() {
  aiGuide.classList.remove("open");
  aiGuide.setAttribute("aria-hidden", "true");
  aiToggles.forEach((button) => button.setAttribute("aria-expanded", "false"));
}

async function loadEventsFromSupabase() {
  const client = getSupabaseClient();
  if (!client) {
    render();
    return;
  }

  try {
    const { data, error } = await client
      .from("events")
      .select("*, venues(*), event_sources(*)")
      .eq("status", "published")
      .order("starts_at", { ascending: true });

    if (error) throw error;

    const normalized = (data || []).map(normalizeSupabaseEvent).filter(Boolean);
    if (normalized.length) {
      events = normalized;
      usingFallbackEvents = false;
      activeMapId = events[0].id;
      saved = new Set([...saved].filter((id) => events.some((event) => String(event.id) === String(id))));
      toast(`Loaded ${events.length} events from Supabase`);
    } else {
      resultsMeta.textContent = "No published Supabase events yet. Showing demo events.";
    }
  } catch (error) {
    console.warn("Using demo events because Supabase could not load.", error);
    toast("Using demo events while Supabase is unavailable");
  }

  render();
}

function getSupabaseClient() {
  if (supabaseClient) return supabaseClient;
  if (!SUPABASE_URL || !SUPABASE_PUBLISHABLE_KEY || !window.supabase) return null;

  supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
  return supabaseClient;
}

async function initAuth() {
  const client = getSupabaseClient();
  if (!client) {
    updateAuthUi(null);
    return;
  }

  const { data, error } = await client.auth.getSession();
  if (!error) updateAuthUi(data.session?.user || null);

  client.auth.onAuthStateChange((_event, session) => {
    updateAuthUi(session?.user || null);
  });
}

function updateAuthUi(user) {
  currentUser = user;
  const email = user?.email || "";
  const initials = email ? email.slice(0, 2).toUpperCase() : "?";

  accountAvatar.textContent = initials;
  accountLabel.textContent = email ? email.split("@")[0] : "Sign in";
  authUserEmail.textContent = email;
  authSession.hidden = !email;
  authForm.hidden = Boolean(email);
  authTitle.textContent = email ? "You are signed in." : authMode === "login" ? "Welcome back." : "Create your account.";
  authSubtitle.textContent = email ? "Your Supabase session is active on this device." : authMode === "login" ? "Log in to keep your Nearo account ready." : "Register with email and password.";
}

function setAuthMode(mode) {
  authMode = mode;
  document.querySelectorAll("[data-auth-mode]").forEach((button) => {
    button.classList.toggle("active", button.dataset.authMode === mode);
  });

  authTitle.textContent = mode === "login" ? "Welcome back." : "Create your account.";
  authSubtitle.textContent = mode === "login" ? "Log in to keep your Nearo account ready." : "Register with email and password.";
  authSubmit.textContent = mode === "login" ? "Login" : "Create account";
  authNote.textContent = mode === "login" ? "Use the email and password you registered with." : "Password should be at least 6 characters.";
  document.querySelector("#authPassword").autocomplete = mode === "login" ? "current-password" : "new-password";
}

async function handleAuthSubmit(event) {
  event.preventDefault();
  const client = getSupabaseClient();
  if (!client) {
    toast("Supabase is not configured yet");
    return;
  }

  const formData = new FormData(authForm);
  const email = String(formData.get("email") || "").trim();
  const password = String(formData.get("password") || "");
  if (!email || !password) return;

  authSubmit.disabled = true;
  authSubmit.textContent = authMode === "login" ? "Logging in..." : "Creating...";

  try {
    const request = authMode === "login"
      ? client.auth.signInWithPassword({ email, password })
      : client.auth.signUp({ email, password });
    const { data, error } = await request;

    if (error) throw error;
    updateAuthUi(data.session?.user || null);
    authForm.reset();
    toast(authMode === "login" ? "Logged in" : data.session ? "Account created" : "Check your email to confirm");
  } catch (error) {
    toast(error.message || "Account request failed");
  } finally {
    authSubmit.disabled = false;
    authSubmit.textContent = authMode === "login" ? "Login" : "Create account";
  }
}

async function signOut() {
  const client = getSupabaseClient();
  if (!client) return;

  const { error } = await client.auth.signOut();
  if (error) {
    toast(error.message || "Could not sign out");
    return;
  }

  updateAuthUi(null);
  setAuthMode("login");
  toast("Signed out");
}

function normalizeSupabaseEvent(row) {
  const startsAt = row.starts_at ? new Date(row.starts_at) : new Date();
  const endsAt = row.ends_at ? new Date(row.ends_at) : new Date(startsAt.getTime() + 2 * 60 * 60 * 1000);
  const venue = row.venues || {};
  const coords = {
    lat: Number(venue.latitude || SINGAPORE_CENTER.lat),
    lng: Number(venue.longitude || SINGAPORE_CENTER.lng),
  };
  const priceMin = numberOrNull(row.price_min);
  const priceMax = numberOrNull(row.price_max) ?? priceMin;

  const category = row.category || "Event";
  const source = sourceLabel(row.event_sources?.name);

  return {
    id: row.id,
    title: row.title || "Untitled event",
    category,
    dateGroup: dateGroupFor(startsAt),
    day: formatDay(startsAt),
    month: formatMonth(startsAt),
    sortDate: row.starts_at || startsAt.toISOString(),
    time: formatEventTime(startsAt),
    durationHours: Math.max((endsAt - startsAt) / 3600000, 1),
    place: venue.name || row.venue_name || "Singapore",
    distance: distanceFromCenter(coords),
    price: formatPrice(priceMin, priceMax, row.currency || "SGD"),
    priceValue: priceMin,
    people: row.people || "New listing",
    availability: row.availability || source,
    image: row.image_url || fallbackImageFor(category, source),
    description: row.description || "Official event details are coming soon.",
    coords,
    map: mapPointFromCoords(coords),
    officialUrl: row.official_url,
    ticketUrl: row.ticket_url,
  };
}

function dateGroupFor(date) {
  const today = new Date();
  const todayKey = localDateKey(today);
  const eventKey = localDateKey(date);
  const day = date.getDay();
  const diffDays = Math.floor((new Date(eventKey) - new Date(todayKey)) / 86400000);

  if (eventKey === todayKey) return "Today";
  if (diffDays >= 0 && diffDays <= 6 && (day === 0 || day === 6)) return "This weekend";
  if (diffDays >= 0 && diffDays <= 14) return "Next week";
  return "Anytime";
}

function localDateKey(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

function formatDay(date) {
  return String(date.getDate()).padStart(2, "0");
}

function formatMonth(date) {
  return date.toLocaleString("en-SG", { month: "short", timeZone: "Asia/Singapore" }).toUpperCase();
}

function formatEventTime(date) {
  return date.toLocaleString("en-SG", {
    weekday: "short",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZone: "Asia/Singapore",
  });
}

function formatPrice(min, max, currency) {
  if (min === null && max === null) return "See tickets";
  if (min === 0 && max === 0) return "Free";
  const symbol = currency === "SGD" ? "S$" : `${currency} `;
  return min === max ? `${symbol}${min}` : `${symbol}${min}-${max}`;
}

function numberOrNull(value) {
  if (value === null || value === undefined || value === "") return null;
  const number = Number(value);
  return Number.isFinite(number) ? number : null;
}

function sourceLabel(sourceName) {
  return sourceName ? sourceName : "Official listing";
}

function fallbackImageFor(category = "Event", source = "") {
  if (String(source).toLowerCase().includes("sistic")) return FALLBACK_IMAGES.SISTIC;
  return FALLBACK_IMAGES[category] || FALLBACK_IMAGES.Event;
}

function distanceFromCenter(coords) {
  const earthRadius = 6371;
  const toRad = (value) => (value * Math.PI) / 180;
  const dLat = toRad(coords.lat - SINGAPORE_CENTER.lat);
  const dLng = toRad(coords.lng - SINGAPORE_CENTER.lng);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(SINGAPORE_CENTER.lat)) * Math.cos(toRad(coords.lat)) * Math.sin(dLng / 2) * Math.sin(dLng / 2);
  return earthRadius * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function mapPointFromCoords(coords) {
  return {
    x: Math.min(Math.max(((coords.lng - 103.79) / 0.15) * 100, 8), 92),
    y: Math.min(Math.max(((1.34 - coords.lat) / 0.08) * 100, 8), 92),
  };
}

function render() {
  const filtered = getFilteredEvents();
  const totalPages = Math.max(Math.ceil(filtered.length / EVENTS_PER_PAGE), 1);
  currentPage = Math.min(Math.max(currentPage, 1), totalPages);
  const pageStart = (currentPage - 1) * EVENTS_PER_PAGE;
  const pageEvents = filtered.slice(pageStart, pageStart + EVENTS_PER_PAGE);

  lastFilteredEvents = filtered;
  grid.innerHTML = pageEvents.map(eventCard).join("");
  emptyState.hidden = filtered.length !== 0;
  if (filtered.length) emptyAiButton.hidden = true;
  if (!filtered.length) {
    const query = searchInput.value.trim();
    emptyState.querySelector("h3").textContent = aiRecommendationActive ? "No AI picks yet" : "No events found";
    emptyState.querySelector("p").textContent = aiRecommendationActive
      ? "Try asking for a broader mood, date, or budget."
      : query
        ? `No exact match for "${query}". Want AI to recommend something close?`
        : "Try another search, date, or category.";
    emptyAiButton.hidden = aiRecommendationActive || !query;
  }
  planCount.textContent = saved.size;

  if (aiRecommendationActive) {
    const noun = filtered.length === 1 ? "event" : "events";
    const pageText = filtered.length ? `Showing ${pageStart + 1}-${pageStart + pageEvents.length} of ` : "";
    resultsMeta.textContent = `${pageText}${filtered.length} AI recommended ${noun}${aiRecommendationSummary ? ` · ${aiRecommendationSummary}` : ""}`;
  } else {
    const noun = filtered.length === 1 ? "event" : "events";
    const pageText = filtered.length ? `Showing ${pageStart + 1}-${pageStart + pageEvents.length} of ` : "";
    const queryText = searchInput.value.trim() ? ` for "${searchInput.value.trim()}"` : "";
    resultsMeta.textContent = usingFallbackEvents
      ? `${pageText}${filtered.length} demo ${noun}${queryText}`
      : `${pageText}${filtered.length} official ${noun}${queryText}`;
  }

  renderSaved();
  renderPagination(totalPages);
  renderMap(filtered);
  renderStats(filtered);
}

function renderPagination(totalPages) {
  if (totalPages <= 1) {
    pagination.hidden = true;
    pagination.innerHTML = "";
    return;
  }

  pagination.hidden = false;
  const pages = paginationPages(totalPages);

  pagination.innerHTML = `
    <button class="page-button page-step" type="button" data-page="${currentPage - 1}" ${currentPage === 1 ? "disabled" : ""}>Prev</button>
    ${pages.map((page) => page === "gap"
      ? `<span class="page-gap" aria-hidden="true">...</span>`
      : `<button class="page-button ${page === currentPage ? "active" : ""}" type="button" data-page="${page}" aria-current="${page === currentPage ? "page" : "false"}">${page}</button>`).join("")}
    <button class="page-button page-step" type="button" data-page="${currentPage + 1}" ${currentPage === totalPages ? "disabled" : ""}>Next</button>
  `;
}

function paginationPages(totalPages) {
  if (totalPages <= 5) return Array.from({ length: totalPages }, (_, index) => index + 1);

  const middle = [currentPage - 1, currentPage, currentPage + 1]
    .filter((page) => page > 1 && page < totalPages);
  const pages = [1, ...middle, totalPages];
  const unique = [...new Set(pages)].sort((a, b) => a - b);

  return unique.flatMap((page, index) => {
    if (index === 0) return [page];
    return page - unique[index - 1] > 1 ? ["gap", page] : [page];
  });
}

function resetPagination() {
  currentPage = 1;
}

function clearAiRecommendations() {
  aiRecommendationActive = false;
  aiRecommendedIds = [];
  aiRecommendationSummary = "";
}

function renderSaved() {
  const chosen = events.filter((event) => saved.has(String(event.id)));
  const container = document.querySelector("#savedEvents");

  container.innerHTML = chosen.length
    ? chosen.map((event) => `<div class="saved-item">
        <div class="saved-thumb" style="${eventImageStyle(event)}"></div>
        <div>
          <h3>${event.title}</h3>
          <p>${event.time}<br>${event.place}</p>
          <div class="saved-links">
            <a class="calendar-link" href="${calendarUrl(event)}" target="_blank" rel="noreferrer">Google Calendar</a>
            <button class="calendar-link" type="button" data-calendar="${event.id}">Calendar file</button>
          </div>
        </div>
        <button type="button" data-remove="${event.id}" aria-label="Remove ${event.title}">x</button>
      </div>`).join("")
    : `<div class="empty-state"><span>No plans</span><h3>No plans yet</h3><p>Save an event and it will show up here.</p></div>`;
}

function renderStats(filtered) {
  const freeCount = filtered.filter((event) => event.priceValue === 0).length;
  const sourceCount = new Set(filtered.map((event) => event.availability).filter(Boolean)).size;

  cityStats.innerHTML = `
    <div class="stat"><strong>${filtered.length}</strong><span>matching events</span></div>
    <div class="stat"><strong>${freeCount}</strong><span>free to join</span></div>
    <div class="stat"><strong>${sourceCount}</strong><span>official sources</span></div>
    <div class="stat"><strong>${saved.size}</strong><span>saved plans</span></div>
  `;
}

function renderMap(filtered) {
  const visibleIds = new Set(filtered.map((event) => String(event.id)));
  if (!visibleIds.has(String(activeMapId)) && filtered.length) activeMapId = filtered[0].id;

  const mapEvents = mapLayerEvents(filtered);
  renderFallbackMap(mapEvents, visibleIds);
  updateGoogleMarkers(mapEvents, visibleIds);
  renderMapPreview(events.find((event) => String(event.id) === String(activeMapId)) || filtered[0]);
}

function mapLayerEvents(filtered) {
  if (aiRecommendationActive || searchInput.value.trim()) return filtered;
  return activeCategory === "All" ? filtered : events;
}

function renderFallbackMap(mapEvents, visibleIds) {
  const roads = [
    { left: 8, top: 35, width: 70, rotate: 12 },
    { left: 17, top: 72, width: 78, rotate: -18 },
    { left: 20, top: 54, width: 62, rotate: 42 },
    { left: 48, top: 16, width: 56, rotate: 95 },
  ];

  const clusters = clusterFallbackEvents(mapEvents);
  mapFallback.innerHTML = roads.map((road) => `<span class="map-road" style="left: ${road.left}%; top: ${road.top}%; width: ${road.width}%; transform: rotate(${road.rotate}deg);"></span>`).join("") +
    clusters.map((cluster) => cluster.events.length > 1
      ? `<button class="event-cluster ${cluster.events.some((event) => String(event.id) === String(activeMapId)) ? "active" : ""} ${cluster.events.some((event) => visibleIds.has(String(event.id))) ? "" : "dimmed"}" type="button" data-pin="${cluster.events.find((event) => visibleIds.has(String(event.id)))?.id || cluster.events[0].id}" style="left: ${cluster.x}%; top: ${cluster.y}%;" aria-label="Preview ${cluster.events.length} nearby events">
          <span>+${cluster.events.length}</span>
        </button>`
      : cluster.events.map((event) => `<button class="event-pin ${String(event.id) === String(activeMapId) ? "active" : ""} ${visibleIds.has(String(event.id)) ? "" : "dimmed"}" type="button" data-pin="${event.id}" style="left: ${event.map.x}%; top: ${event.map.y}%;" aria-label="Preview ${event.title}">
          <span class="pin-bubble"><span>${event.category.slice(0, 1)}</span></span>
        </button>`).join("")).join("");
}

function clusterFallbackEvents(mapEvents) {
  const clusters = [];
  const threshold = activeCategory === "All" ? 7 : 6;

  mapEvents.forEach((event) => {
    const cluster = clusters.find((item) => Math.hypot(item.x - event.map.x, item.y - event.map.y) < threshold);
    if (cluster) {
      cluster.events.push(event);
      cluster.x = cluster.events.reduce((sum, item) => sum + item.map.x, 0) / cluster.events.length;
      cluster.y = cluster.events.reduce((sum, item) => sum + item.map.y, 0) / cluster.events.length;
    } else {
      clusters.push({ x: event.map.x, y: event.map.y, events: [event] });
    }
  });

  return clusters;
}

function initGoogleMap() {
  if (!window.google || !google.maps || !googleMapEl) return;

  googleMap = new google.maps.Map(googleMapEl, {
    center: SINGAPORE_CENTER,
    zoom: 12,
    minZoom: 11,
    maxZoom: 16,
    mapTypeControl: false,
    streetViewControl: false,
    fullscreenControl: true,
    styles: MAP_STYLE,
  });

  googleMap.addListener("idle", () => {
    const filtered = lastFilteredEvents.length ? lastFilteredEvents : getFilteredEvents();
    updateGoogleMarkers(mapLayerEvents(filtered), new Set(filtered.map((event) => String(event.id))), { fitBounds: false });
  });

  infoWindow = new google.maps.InfoWindow();
  mapPanel.classList.add("maps-ready");
  mapPanel.classList.remove("maps-failed");
  const filtered = lastFilteredEvents.length ? lastFilteredEvents : getFilteredEvents();
  updateGoogleMarkers(mapLayerEvents(filtered), new Set(filtered.map((event) => String(event.id))));
}

function updateGoogleMarkers(mapEvents, visibleIds = new Set(mapEvents.map((event) => String(event.id))), options = {}) {
  if (!googleMap || !window.google) return;

  const clusters = clusterGoogleEvents(mapEvents);
  const singletonEvents = clusters.filter((cluster) => cluster.events.length === 1).map((cluster) => cluster.events[0]);
  const singletonIds = new Set(singletonEvents.map((event) => String(event.id)));

  googleClusterMarkers.forEach((marker) => marker.setMap(null));
  googleClusterMarkers = [];

  googleMarkers.forEach((marker, id) => {
    if (!singletonIds.has(String(id))) {
      marker.setMap(null);
      googleMarkers.delete(id);
    }
  });

  singletonEvents.forEach((event) => {
    let marker = googleMarkers.get(event.id);
    const icon = markerIcon(String(event.id) === String(activeMapId), visibleIds.has(String(event.id)));

    if (!marker) {
      marker = new google.maps.Marker({
        position: event.coords,
        map: googleMap,
        title: event.title,
        animation: google.maps.Animation.DROP,
        icon,
      });
      marker.addListener("click", () => {
        activeMapId = event.id;
        renderMapPreview(event);
        highlightActiveMarker();
        highlightCard(event.id);
        infoWindow.setContent(infoWindowHtml(event));
        infoWindow.open({ map: googleMap, anchor: marker });
      });
      googleMarkers.set(event.id, marker);
    } else {
      marker.setIcon(icon);
      marker.setMap(googleMap);
    }
  });

  clusters.filter((cluster) => cluster.events.length > 1).forEach((cluster) => {
    const marker = new google.maps.Marker({
      position: cluster.coords,
      map: googleMap,
      title: `${cluster.events.length} nearby events`,
      icon: clusterIcon(cluster.events.length, cluster.events.some((event) => visibleIds.has(String(event.id)))),
      zIndex: 10,
    });
    marker.addListener("click", () => {
      const event = cluster.events.find((item) => visibleIds.has(String(item.id))) || cluster.events[0];
      activeMapId = event.id;
      renderMapPreview(event);
      highlightActiveMarker();
      highlightCard(event.id);
      infoWindow.setContent(infoWindowHtml(event));
      infoWindow.open({ map: googleMap, anchor: marker });
    });
    googleClusterMarkers.push(marker);
  });

  if (mapEvents.length && options.fitBounds !== false) {
    const bounds = new google.maps.LatLngBounds();
    mapEvents.forEach((event) => bounds.extend(event.coords));
    googleMap.fitBounds(bounds, 70);
    if (mapEvents.length === 1) googleMap.setZoom(14);
  }

  highlightActiveMarker();
}

function clusterGoogleEvents(mapEvents) {
  const clusters = [];
  const zoom = googleMap?.getZoom?.() || 12;
  const baseThreshold = activeCategory === "All" ? 0.012 : 0.01;
  const threshold = zoom >= 15 ? 0.0025 : zoom >= 14 ? 0.0045 : zoom >= 13 ? 0.007 : baseThreshold;

  mapEvents.forEach((event) => {
    const cluster = clusters.find((item) => Math.hypot(item.coords.lat - event.coords.lat, item.coords.lng - event.coords.lng) < threshold);
    if (cluster) {
      cluster.events.push(event);
      cluster.coords = {
        lat: cluster.events.reduce((sum, item) => sum + item.coords.lat, 0) / cluster.events.length,
        lng: cluster.events.reduce((sum, item) => sum + item.coords.lng, 0) / cluster.events.length,
      };
    } else {
      clusters.push({ coords: { ...event.coords }, events: [event] });
    }
  });

  return clusters;
}

function markerIcon(active, focused = true) {
  const fill = active ? "#ff5b45" : "#d9f06d";
  const stroke = active ? "#ffffff" : "#17231f";

  return {
    path: "M12 2C7.03 2 3 5.83 3 10.55c0 6.25 9 11.45 9 11.45s9-5.2 9-11.45C21 5.83 16.97 2 12 2zm0 11.7a3.15 3.15 0 1 1 0-6.3 3.15 3.15 0 0 1 0 6.3z",
    fillColor: fill,
    fillOpacity: focused ? 1 : 0.2,
    strokeColor: stroke,
    strokeOpacity: focused ? 1 : 0.26,
    strokeWeight: 2,
    scale: 1.55,
    anchor: new google.maps.Point(12, 23),
  };
}

function clusterIcon(count, focused = true) {
  const fill = focused ? "#17231f" : "#8d9a94";
  const text = `+${count}`;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 54 54"><circle cx="27" cy="27" r="22" fill="${fill}" fill-opacity="${focused ? "0.96" : "0.35"}" stroke="white" stroke-width="3"/><text x="27" y="32" text-anchor="middle" font-family="Arial, sans-serif" font-size="15" font-weight="800" fill="white">${text}</text></svg>`;
  return {
    url: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`,
    scaledSize: new google.maps.Size(54, 54),
    anchor: new google.maps.Point(27, 27),
  };
}

function highlightActiveMarker() {
  if (!googleMap || !window.google) return;

  googleMarkers.forEach((marker, id) => {
    const event = events.find((item) => String(item.id) === String(id));
    const focused = !event || activeCategory === "All" || event.category === activeCategory || aiRecommendationActive || searchInput.value.trim();
    marker.setIcon(markerIcon(String(id) === String(activeMapId), focused));
    marker.setZIndex(String(id) === String(activeMapId) ? 20 : 1);
  });

  const active = events.find((event) => String(event.id) === String(activeMapId));
  if (active && googleMarkers.has(active.id)) {
    googleMap.panTo(active.coords);
  }
}

function highlightCard(id) {
  document.querySelectorAll(".event-card").forEach((card) => {
    card.classList.toggle("highlight", String(card.dataset.card) === String(id));
  });
}

function infoWindowHtml(event) {
  return `<div style="max-width:250px;color:#17231f;font-family:DM Sans,Arial,sans-serif;padding:2px 0;">
    <span style="display:block;margin-bottom:5px;color:#ff5b45;font-size:10px;font-weight:800;letter-spacing:1px;text-transform:uppercase;">${event.category}</span>
    <strong style="display:block;margin-bottom:8px;font-size:15px;line-height:1.25;">${event.title}</strong>
    <span style="display:flex;gap:7px;margin-bottom:5px;color:#68746f;font-size:12px;line-height:1.35;"><span aria-hidden="true">↗</span>${event.time}</span>
    <span style="display:flex;gap:7px;color:#68746f;font-size:12px;line-height:1.35;"><span aria-hidden="true">⌖</span>${event.place}</span>
  </div>`;
}

function handleGoogleMapError() {
  mapPanel.classList.add("maps-failed");
}

function renderMapPreview(event) {
  if (!event) {
    mapPreview.innerHTML = `<h3>No events on this view</h3><p>Try resetting the filters to bring the city back.</p>`;
    return;
  }

  const isSaved = saved.has(String(event.id));
  mapPreview.innerHTML = `
    <span class="card-tag">${event.category}</span>
    <h3>${event.title}</h3>
    <div class="preview-meta"><span aria-hidden="true">↗</span><span>${event.time}</span></div>
    <div class="preview-meta"><span aria-hidden="true">⌖</span><span>${event.place}</span></div>
    <div class="preview-price">${event.price}</div>
    <div class="preview-actions">
      <button class="preview-details" type="button" data-details="${event.id}">View details</button>
      <button class="preview-icon ${isSaved ? "saved" : ""}" type="button" data-save="${event.id}" aria-label="${isSaved ? "Remove from" : "Save to"} plans">${isSaved ? "♥" : "♡"}</button>
      <button class="preview-icon" type="button" data-calendar="${event.id}" aria-label="Add to calendar">
        <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M7 3v3M17 3v3M4 9h16M6 5h12a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z"></path></svg>
      </button>
    </div>
  `;
}

function calendarUrl(event) {
  const start = new Date(event.sortDate);
  const end = new Date(start.getTime() + event.durationHours * 60 * 60 * 1000);
  const format = (date) => date.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");

  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${format(start)}/${format(end)}&location=${encodeURIComponent(event.place)}&details=${encodeURIComponent(event.description)}`;
}

function downloadCalendarFile(id) {
  const event = events.find((item) => String(item.id) === String(id));
  if (!event) return;

  const blob = new Blob([icsContent(event)], { type: "text/calendar;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `${slugify(event.title)}.ics`;
  document.body.appendChild(link);
  link.click();
  const objectUrl = link.href;
  link.remove();
  URL.revokeObjectURL(objectUrl);
  toast("Calendar file downloaded with reminder");
}

function icsContent(event) {
  const start = new Date(event.sortDate);
  const end = new Date(start.getTime() + event.durationHours * 60 * 60 * 1000);
  const details = [
    event.description,
    event.officialUrl ? `Official page: ${event.officialUrl}` : "",
    event.ticketUrl ? `Tickets: ${event.ticketUrl}` : "",
  ].filter(Boolean).join("\\n\\n");

  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Nearo//Event Calendar//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `UID:${event.id}@nearo.local`,
    `DTSTAMP:${icsDate(new Date())}`,
    `DTSTART:${icsDate(start)}`,
    `DTEND:${icsDate(end)}`,
    `SUMMARY:${icsEscape(event.title)}`,
    `LOCATION:${icsEscape(event.place)}`,
    `DESCRIPTION:${icsEscape(details)}`,
    "BEGIN:VALARM",
    "TRIGGER:-PT30M",
    "ACTION:DISPLAY",
    `DESCRIPTION:${icsEscape(`Reminder: ${event.title}`)}`,
    "END:VALARM",
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
}

function icsDate(date) {
  return date.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
}

function icsEscape(value = "") {
  return String(value)
    .replace(/\\/g, "\\\\")
    .replace(/;/g, "\\;")
    .replace(/,/g, "\\,")
    .replace(/\n/g, "\\n");
}

function slugify(value = "") {
  return String(value)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 60) || "nearo-event";
}

function escapeHtml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function toggleSave(id) {
  const key = String(id);
  if (saved.has(key)) {
    saved.delete(key);
    toast("Removed from your plans");
  } else {
    saved.add(key);
    toast("Saved to your weekend");
  }

  writeSaved();
  render();
}

function openDetails(id) {
  const event = events.find((item) => String(item.id) === String(id));
  if (!event) return;

  const isSaved = saved.has(String(event.id));
  const eventLink = event.ticketUrl || event.officialUrl || calendarUrl(event);
  const eventLinkText = event.ticketUrl ? "Get tickets" : event.officialUrl ? "Official page" : "Add to calendar";
  dialogContent.innerHTML = `
    <div class="dialog-media" style="${eventImageStyle(event)}"></div>
    <div class="dialog-body">
      <span class="card-tag">${event.category}</span>
      <h2 id="dialogTitle">${event.title}</h2>
      <p>${event.description}</p>
      <div class="meta"><span aria-hidden="true">↗</span><span>${event.time}</span></div>
      <div class="meta"><span aria-hidden="true">⌖</span><span>${event.place}</span></div>
      <div class="dialog-actions">
        <button class="dialog-save" type="button" data-save="${event.id}">${isSaved ? "Remove from plans" : "Save to plans"}</button>
        <button class="dialog-calendar" type="button" data-calendar="${event.id}">Add calendar</button>
        <a href="${eventLink}" target="_blank" rel="noreferrer">${eventLinkText}</a>
        <button class="dialog-close" type="button" data-close-dialog>Close</button>
      </div>
    </div>
  `;

  eventDialog.showModal();
}

function setActiveMap(id) {
  activeMapId = id;
  render();
  highlightActiveMarker();
  highlightCard(id);
  document.querySelector("#city-map").scrollIntoView({ behavior: "smooth", block: "start" });

  window.setTimeout(() => {
    document.querySelector(`[data-pin="${id}"]`)?.focus();
  }, 350);
}

function toast(message) {
  const el = document.querySelector("#toast");
  el.textContent = message;
  el.classList.add("show");
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => el.classList.remove("show"), 1800);
}

function openDrawer() {
  document.body.classList.add("drawer-open");
  document.querySelector("#plansDrawer").classList.add("open");
  document.querySelector("#plansDrawer").setAttribute("aria-hidden", "false");
  document.querySelector("#scrim").classList.add("show");
}

function closeDrawer() {
  document.body.classList.remove("drawer-open");
  document.querySelector("#plansDrawer").classList.remove("open");
  document.querySelector("#plansDrawer").setAttribute("aria-hidden", "true");
  document.querySelector("#scrim").classList.remove("show");
}

document.addEventListener("click", (event) => {
  const cardAction = event.target.closest("button, a, select, input, textarea");

  const authModeButton = event.target.closest("[data-auth-mode]");
  if (authModeButton) {
    setAuthMode(authModeButton.dataset.authMode);
    return;
  }

  const saveButton = event.target.closest("[data-save]");
  if (saveButton) {
    toggleSave(saveButton.dataset.save);
    return;
  }

  const removeButton = event.target.closest("[data-remove]");
  if (removeButton) {
    toggleSave(removeButton.dataset.remove);
    return;
  }

  const filterButton = event.target.closest(".filter");
  if (filterButton) {
    clearAiRecommendations();
    activeCategory = filterButton.dataset.category;
    resetPagination();
    document.querySelectorAll(".filter").forEach((button) => button.classList.toggle("active", button === filterButton));
    render();
    return;
  }

  const popularButton = event.target.closest("[data-query]");
  if (popularButton) {
    clearAiRecommendations();
    searchInput.value = popularButton.dataset.query;
    resetPagination();
    render();
    document.querySelector(".content-section").scrollIntoView({ behavior: "smooth" });
    return;
  }

  const pageButton = event.target.closest("[data-page]");
  if (pageButton) {
    currentPage = Number(pageButton.dataset.page);
    render();
    document.querySelector(".content-section").scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }

  const calendarButton = event.target.closest("[data-calendar]");
  if (calendarButton) {
    downloadCalendarFile(calendarButton.dataset.calendar);
    return;
  }

  const detailsButton = event.target.closest("[data-details]");
  if (detailsButton && !cardAction) {
    openDetails(detailsButton.dataset.details);
    return;
  }

  const mapButton = event.target.closest("[data-map]");
  if (mapButton) {
    setActiveMap(mapButton.dataset.map);
    return;
  }

  const pin = event.target.closest("[data-pin]");
  if (pin) {
    activeMapId = pin.dataset.pin;
    render();
    highlightActiveMarker();
    highlightCard(activeMapId);
    return;
  }

  if (event.target.closest("[data-close-dialog]")) {
    eventDialog.close();
  }

  if (event.target.closest("[data-close-auth]")) {
    authDialog.close();
  }
});

document.querySelector("#searchForm").addEventListener("submit", (event) => {
  event.preventDefault();
  resetPagination();
  clearAiRecommendations();
  render();
  document.querySelector(".content-section").scrollIntoView({ behavior: "smooth" });
});

searchInput.addEventListener("input", () => {
  clearAiRecommendations();
  resetPagination();
  render();
});
dateSelect?.addEventListener("change", () => {
  clearAiRecommendations();
  resetPagination();
  render();
});
sortSelect.addEventListener("change", () => {
  clearAiRecommendations();
  resetPagination();
  render();
});
aiGuideForm.addEventListener("submit", askAiGuide);
aiToggles.forEach((button) => button.addEventListener("click", () => {
  if (aiGuide.classList.contains("open")) {
    closeAiGuide();
  } else {
    openAiGuide();
  }
}));
aiClose.addEventListener("click", closeAiGuide);
emptyAiButton.addEventListener("click", () => {
  const prompt = searchInput.value.trim();
  if (!prompt) return;

  aiPrompt.value = prompt;
  openAiGuide({ focusPrompt: false });
  runAiGuide(prompt);
});

document.querySelector("#plansNav").addEventListener("click", openDrawer);
document.querySelector("#closeDrawer").addEventListener("click", closeDrawer);
document.querySelector("#scrim").addEventListener("click", closeDrawer);
document.querySelector("#locationButton").addEventListener("click", () => toast("Showing Singapore events"));
accountButton.addEventListener("click", () => {
  setAuthMode(currentUser ? authMode : "login");
  authDialog.showModal();
});
authForm.addEventListener("submit", handleAuthSubmit);
signOutButton.addEventListener("click", signOut);

document.querySelector("#sharePlans").addEventListener("click", async () => {
  const chosen = events.filter((event) => saved.has(String(event.id)));
  const text = chosen.length
    ? `My Nearo weekend: ${chosen.map((event) => event.title).join(", ")}`
    : "My Nearo weekend is wide open.";

  try {
    if (navigator.share) {
      await navigator.share({ title: "My weekend plans", text });
    } else {
      await navigator.clipboard.writeText(text);
      toast("Weekend plans copied");
    }
  } catch {
    toast("Share canceled");
  }
});

document.querySelector("#seeAll").addEventListener("click", () => {
  clearAiRecommendations();
  activeCategory = "All";
  searchInput.value = "";
  if (dateSelect) dateSelect.value = "Anytime";
  sortSelect.value = "recommended";
  resetPagination();
  document.querySelectorAll(".filter").forEach((button, index) => button.classList.toggle("active", index === 0));
  render();
});

document.addEventListener("keydown", (event) => {
  if ((event.key === "Enter" || event.key === " ") && event.target.closest(".event-card[data-details]")) {
    const card = event.target.closest(".event-card[data-details]");
    if (!event.target.closest("button, a, select, input, textarea")) {
      event.preventDefault();
      openDetails(card.dataset.details);
    }
  }

  if (event.key === "Escape") {
    closeDrawer();
    if (eventDialog.open) eventDialog.close();
    if (authDialog.open) authDialog.close();
    closeAiGuide();
  }
});

window.initGoogleMap = initGoogleMap;
window.handleGoogleMapError = handleGoogleMapError;

initAuth();
loadEventsFromSupabase();
loadGoogleMaps();

function loadGoogleMaps() {
  if (!GOOGLE_MAPS_API_KEY) {
    handleGoogleMapError();
    return;
  }

  const script = document.createElement("script");
  script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(GOOGLE_MAPS_API_KEY)}&callback=initGoogleMap&v=weekly`;
  script.async = true;
  script.defer = true;
  script.onerror = handleGoogleMapError;
  document.head.appendChild(script);
}
