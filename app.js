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

let events = [...fallbackEvents];
let saved = new Set(readSaved());
let activeCategory = "All";
let activeMapId = events[0].id;
let googleMap;
let infoWindow;
let googleMarkers = new Map();
let lastFilteredEvents = [];
let currentPage = 1;
let usingFallbackEvents = true;
let supabaseClient = null;
let currentUser = null;
let authMode = "login";

const grid = document.querySelector("#eventGrid");
const emptyState = document.querySelector("#emptyState");
const planCount = document.querySelector("#planCount");
const searchInput = document.querySelector("#searchInput");
const dateSelect = document.querySelector("#dateSelect");
const sortSelect = document.querySelector("#sortSelect");
const resultsMeta = document.querySelector("#resultsMeta");
const pagination = document.querySelector("#pagination");
const aiGuideForm = document.querySelector("#aiGuideForm");
const aiGuide = document.querySelector("#aiGuide");
const aiToggle = document.querySelector("#aiToggle");
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

  return `<article class="event-card" data-card="${event.id}">
    <div class="event-image" style="background-image: url('${event.image}')">
      <div class="date-badge"><span>${event.month}</span><strong>${event.day}</strong></div>
      <button class="save-button ${isSaved ? "saved" : ""}" type="button" data-save="${event.id}" aria-label="${isSaved ? "Remove from" : "Save to"} plans">${isSaved ? "♥" : "♡"}</button>
    </div>
    <div class="card-body">
      <div class="card-topline">
        <span class="card-tag">${event.category}</span>
        <span class="availability">${event.availability}</span>
      </div>
      <h3>${event.title}</h3>
      <div class="meta"><span aria-hidden="true">Time</span><span>${event.time}</span></div>
      <div class="meta"><span aria-hidden="true">Place</span><span>${event.place}</span></div>
      <div class="card-footer">
        <div class="attendees"><span class="mini-avatar">M</span><span class="mini-avatar">J</span><span>${event.people}</span></div>
        <span class="price">${event.price}</span>
      </div>
      <div class="card-actions">
        <button class="details-button" type="button" data-details="${event.id}">View details</button>
        <button class="calendar-button" type="button" data-calendar="${event.id}">Calendar</button>
        <button class="map-jump" type="button" data-map="${event.id}">Map</button>
      </div>
    </div>
  </article>`;
}

function getFilteredEvents() {
  const query = searchInput.value.trim().toLowerCase();
  const date = dateSelect.value;
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
    if (sort === "price") return a.priceValue - b.priceValue;
    return a.id - b.id;
  });
}

async function askAiGuide(event) {
  event.preventDefault();
  const prompt = aiPrompt.value.trim();
  if (!prompt) {
    toast("Tell the AI what you feel like doing");
    return;
  }

  if (!GEMINI_API_KEY) {
    aiResults.innerHTML = `<div class="ai-empty">Add your Gemini API key in local config.js to enable AI picks.</div>`;
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
  const filtered = getFilteredEvents();
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
}

function openAiGuide() {
  aiGuide.classList.add("open");
  aiGuide.setAttribute("aria-hidden", "false");
  aiToggle.setAttribute("aria-expanded", "true");
  setTimeout(() => aiPrompt.focus(), 80);
}

function closeAiGuide() {
  aiGuide.classList.remove("open");
  aiGuide.setAttribute("aria-hidden", "true");
  aiToggle.setAttribute("aria-expanded", "false");
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
  const priceMin = Number(row.price_min || 0);
  const priceMax = Number(row.price_max || priceMin);

  return {
    id: row.id,
    title: row.title || "Untitled event",
    category: row.category || "Event",
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
    availability: row.availability || sourceLabel(row.event_sources?.name),
    image: row.image_url || fallbackEvents[0].image,
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
  if (!min && !max) return "Free";
  const symbol = currency === "SGD" ? "S$" : `${currency} `;
  return min === max ? `${symbol}${min}` : `${symbol}${min}-${max}`;
}

function sourceLabel(sourceName) {
  return sourceName ? sourceName : "Official listing";
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
  planCount.textContent = saved.size;

  const noun = filtered.length === 1 ? "event" : "events";
  const pageText = filtered.length ? `Showing ${pageStart + 1}-${pageStart + pageEvents.length} of ` : "";
  resultsMeta.textContent = usingFallbackEvents ? `${pageText}${filtered.length} demo ${noun}` : `${pageText}${filtered.length} ${noun} from Supabase`;

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

function renderSaved() {
  const chosen = events.filter((event) => saved.has(String(event.id)));
  const container = document.querySelector("#savedEvents");

  container.innerHTML = chosen.length
    ? chosen.map((event) => `<div class="saved-item">
        <div class="saved-thumb" style="background-image: url('${event.image}')"></div>
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

  renderFallbackMap(filtered);
  updateGoogleMarkers(filtered);
  renderMapPreview(events.find((event) => String(event.id) === String(activeMapId)) || filtered[0]);
}

function renderFallbackMap(filtered) {
  const roads = [
    { left: 8, top: 35, width: 70, rotate: 12 },
    { left: 17, top: 72, width: 78, rotate: -18 },
    { left: 20, top: 54, width: 62, rotate: 42 },
    { left: 48, top: 16, width: 56, rotate: 95 },
  ];

  mapFallback.innerHTML = roads.map((road) => `<span class="map-road" style="left: ${road.left}%; top: ${road.top}%; width: ${road.width}%; transform: rotate(${road.rotate}deg);"></span>`).join("") +
    filtered.map((event) => `<button class="event-pin ${String(event.id) === String(activeMapId) ? "active" : ""}" type="button" data-pin="${event.id}" style="left: ${event.map.x}%; top: ${event.map.y}%;" aria-label="Preview ${event.title}">
      <span class="pin-bubble"><span>${event.category.slice(0, 1)}</span></span>
    </button>`).join("");
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

  infoWindow = new google.maps.InfoWindow();
  mapPanel.classList.add("maps-ready");
  mapPanel.classList.remove("maps-failed");
  updateGoogleMarkers(lastFilteredEvents.length ? lastFilteredEvents : getFilteredEvents());
}

function updateGoogleMarkers(filtered) {
  if (!googleMap || !window.google) return;

  const visibleIds = new Set(filtered.map((event) => String(event.id)));
  googleMarkers.forEach((marker, id) => {
    if (!visibleIds.has(String(id))) {
      marker.setMap(null);
      googleMarkers.delete(id);
    }
  });

  filtered.forEach((event) => {
    let marker = googleMarkers.get(event.id);
    const icon = markerIcon(String(event.id) === String(activeMapId));

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

  if (filtered.length) {
    const bounds = new google.maps.LatLngBounds();
    filtered.forEach((event) => bounds.extend(event.coords));
    googleMap.fitBounds(bounds, 70);
    if (filtered.length === 1) googleMap.setZoom(14);
  }

  highlightActiveMarker();
}

function markerIcon(active) {
  const fill = active ? "#ff5b45" : "#d9f06d";
  const stroke = active ? "#ffffff" : "#17231f";

  return {
    path: "M12 2C7.03 2 3 5.83 3 10.55c0 6.25 9 11.45 9 11.45s9-5.2 9-11.45C21 5.83 16.97 2 12 2zm0 11.7a3.15 3.15 0 1 1 0-6.3 3.15 3.15 0 0 1 0 6.3z",
    fillColor: fill,
    fillOpacity: 1,
    strokeColor: stroke,
    strokeWeight: 2,
    scale: 1.55,
    anchor: new google.maps.Point(12, 23),
  };
}

function highlightActiveMarker() {
  if (!googleMap || !window.google) return;

  googleMarkers.forEach((marker, id) => {
    marker.setIcon(markerIcon(String(id) === String(activeMapId)));
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
  return `<div style="max-width:220px;color:#17231f;font-family:DM Sans,Arial,sans-serif;">
    <strong style="display:block;margin-bottom:4px;font-size:14px;">${event.title}</strong>
    <span style="display:block;color:#68746f;font-size:12px;">${event.time}</span>
    <span style="display:block;color:#68746f;font-size:12px;">${event.place} · ${event.price}</span>
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
    <p>${event.time} · ${event.place} · ${event.price}</p>
    <div class="preview-actions">
      <button class="preview-save" type="button" data-save="${event.id}">${isSaved ? "Remove plan" : "Save plan"}</button>
      <button class="preview-calendar" type="button" data-calendar="${event.id}">Calendar</button>
      <button class="preview-details" type="button" data-details="${event.id}">Details</button>
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
    <div class="dialog-media" style="background-image: url('${event.image}')"></div>
    <div class="dialog-body">
      <span class="card-tag">${event.category}</span>
      <h2 id="dialogTitle">${event.title}</h2>
      <p>${event.description}</p>
      <div class="meta"><span aria-hidden="true">Time</span><span>${event.time}</span></div>
      <div class="meta"><span aria-hidden="true">Place</span><span>${event.place}</span></div>
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
    activeCategory = filterButton.dataset.category;
    resetPagination();
    document.querySelectorAll(".filter").forEach((button) => button.classList.toggle("active", button === filterButton));
    render();
    return;
  }

  const popularButton = event.target.closest("[data-query]");
  if (popularButton) {
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
  if (detailsButton) {
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
  render();
  document.querySelector(".content-section").scrollIntoView({ behavior: "smooth" });
});

searchInput.addEventListener("input", () => {
  resetPagination();
  render();
});
dateSelect.addEventListener("change", () => {
  resetPagination();
  render();
});
sortSelect.addEventListener("change", () => {
  resetPagination();
  render();
});
aiGuideForm.addEventListener("submit", askAiGuide);
aiToggle.addEventListener("click", () => {
  if (aiGuide.classList.contains("open")) {
    closeAiGuide();
  } else {
    openAiGuide();
  }
});
aiClose.addEventListener("click", closeAiGuide);

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
  activeCategory = "All";
  searchInput.value = "";
  dateSelect.value = "Anytime";
  sortSelect.value = "recommended";
  resetPagination();
  document.querySelectorAll(".filter").forEach((button, index) => button.classList.toggle("active", index === 0));
  render();
});

document.addEventListener("keydown", (event) => {
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
