const events = [
  {
    id: 1,
    title: "Rooftop Jazz at Golden Hour",
    category: "Music",
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
    category: "Music",
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
const GOOGLE_MAPS_API_KEY = window.NEARO_CONFIG?.GOOGLE_MAPS_API_KEY || "";
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

let saved = new Set(readSaved());
let activeCategory = "All";
let activeMapId = events[0].id;
let googleMap;
let infoWindow;
let googleMarkers = new Map();
let lastFilteredEvents = [];

const grid = document.querySelector("#eventGrid");
const emptyState = document.querySelector("#emptyState");
const planCount = document.querySelector("#planCount");
const searchInput = document.querySelector("#searchInput");
const dateSelect = document.querySelector("#dateSelect");
const sortSelect = document.querySelector("#sortSelect");
const resultsMeta = document.querySelector("#resultsMeta");
const googleMapEl = document.querySelector("#googleMap");
const mapFallback = document.querySelector("#mapFallback");
const mapPanel = document.querySelector(".map-panel");
const mapPreview = document.querySelector("#mapPreview");
const cityStats = document.querySelector("#cityStats");
const eventDialog = document.querySelector("#eventDialog");
const dialogContent = document.querySelector("#dialogContent");

function readSaved() {
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[1,3]");
    return stored.filter((id) => events.some((event) => event.id === id));
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
  const isSaved = saved.has(event.id);

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
      <div class="meta"><span aria-hidden="true">Place</span><span>${event.place} · ${event.distance.toFixed(1)} km</span></div>
      <div class="card-footer">
        <div class="attendees"><span class="mini-avatar">M</span><span class="mini-avatar">J</span><span>${event.people}</span></div>
        <span class="price">${event.price}</span>
      </div>
      <div class="card-actions">
        <button class="details-button" type="button" data-details="${event.id}">View details</button>
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

function render() {
  const filtered = getFilteredEvents();
  lastFilteredEvents = filtered;
  grid.innerHTML = filtered.map(eventCard).join("");
  emptyState.hidden = filtered.length !== 0;
  planCount.textContent = saved.size;

  const noun = filtered.length === 1 ? "event" : "events";
  resultsMeta.textContent = `${filtered.length} ${noun} shown`;

  renderSaved();
  renderMap(filtered);
  renderStats(filtered);
}

function renderSaved() {
  const chosen = events.filter((event) => saved.has(event.id));
  const container = document.querySelector("#savedEvents");

  container.innerHTML = chosen.length
    ? chosen.map((event) => `<div class="saved-item">
        <div class="saved-thumb" style="background-image: url('${event.image}')"></div>
        <div>
          <h3>${event.title}</h3>
          <p>${event.time}<br>${event.place}</p>
          <a class="calendar-link" href="${calendarUrl(event)}" target="_blank" rel="noreferrer">Add to Google Calendar</a>
        </div>
        <button type="button" data-remove="${event.id}" aria-label="Remove ${event.title}">x</button>
      </div>`).join("")
    : `<div class="empty-state"><span>No plans</span><h3>No plans yet</h3><p>Save an event and it will show up here.</p></div>`;
}

function renderStats(filtered) {
  const freeCount = filtered.filter((event) => event.priceValue === 0).length;
  const nearest = filtered.length ? Math.min(...filtered.map((event) => event.distance)).toFixed(1) : "0.0";

  cityStats.innerHTML = `
    <div class="stat"><strong>${filtered.length}</strong><span>matching events</span></div>
    <div class="stat"><strong>${freeCount}</strong><span>free to join</span></div>
    <div class="stat"><strong>${nearest} km</strong><span>nearest pick</span></div>
    <div class="stat"><strong>${saved.size}</strong><span>saved plans</span></div>
  `;
}

function renderMap(filtered) {
  const visibleIds = new Set(filtered.map((event) => event.id));
  if (!visibleIds.has(activeMapId) && filtered.length) activeMapId = filtered[0].id;

  renderFallbackMap(filtered);
  updateGoogleMarkers(filtered);
  renderMapPreview(events.find((event) => event.id === activeMapId) || filtered[0]);
}

function renderFallbackMap(filtered) {
  const roads = [
    { left: 8, top: 35, width: 70, rotate: 12 },
    { left: 17, top: 72, width: 78, rotate: -18 },
    { left: 20, top: 54, width: 62, rotate: 42 },
    { left: 48, top: 16, width: 56, rotate: 95 },
  ];

  mapFallback.innerHTML = roads.map((road) => `<span class="map-road" style="left: ${road.left}%; top: ${road.top}%; width: ${road.width}%; transform: rotate(${road.rotate}deg);"></span>`).join("") +
    filtered.map((event) => `<button class="event-pin ${event.id === activeMapId ? "active" : ""}" type="button" data-pin="${event.id}" style="left: ${event.map.x}%; top: ${event.map.y}%;" aria-label="Preview ${event.title}">
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

  const visibleIds = new Set(filtered.map((event) => event.id));
  googleMarkers.forEach((marker, id) => {
    if (!visibleIds.has(id)) {
      marker.setMap(null);
      googleMarkers.delete(id);
    }
  });

  filtered.forEach((event) => {
    let marker = googleMarkers.get(event.id);
    const icon = markerIcon(event.id === activeMapId);

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
    marker.setIcon(markerIcon(id === activeMapId));
    marker.setZIndex(id === activeMapId ? 20 : 1);
  });

  const active = events.find((event) => event.id === activeMapId);
  if (active && googleMarkers.has(active.id)) {
    googleMap.panTo(active.coords);
  }
}

function highlightCard(id) {
  document.querySelectorAll(".event-card").forEach((card) => {
    card.classList.toggle("highlight", Number(card.dataset.card) === id);
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

  const isSaved = saved.has(event.id);
  mapPreview.innerHTML = `
    <span class="card-tag">${event.category}</span>
    <h3>${event.title}</h3>
    <p>${event.time} · ${event.place} · ${event.price}</p>
    <div class="preview-actions">
      <button class="preview-save" type="button" data-save="${event.id}">${isSaved ? "Remove plan" : "Save plan"}</button>
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

function toggleSave(id) {
  if (saved.has(id)) {
    saved.delete(id);
    toast("Removed from your plans");
  } else {
    saved.add(id);
    toast("Saved to your weekend");
  }

  writeSaved();
  render();
}

function openDetails(id) {
  const event = events.find((item) => item.id === id);
  if (!event) return;

  const isSaved = saved.has(event.id);
  dialogContent.innerHTML = `
    <div class="dialog-media" style="background-image: url('${event.image}')"></div>
    <div class="dialog-body">
      <span class="card-tag">${event.category}</span>
      <h2 id="dialogTitle">${event.title}</h2>
      <p>${event.description}</p>
      <div class="meta"><span aria-hidden="true">Time</span><span>${event.time}</span></div>
      <div class="meta"><span aria-hidden="true">Place</span><span>${event.place} · ${event.distance.toFixed(1)} km</span></div>
      <div class="dialog-actions">
        <button class="dialog-save" type="button" data-save="${event.id}">${isSaved ? "Remove from plans" : "Save to plans"}</button>
        <a href="${calendarUrl(event)}" target="_blank" rel="noreferrer">Add to calendar</a>
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
  const saveButton = event.target.closest("[data-save]");
  if (saveButton) {
    toggleSave(Number(saveButton.dataset.save));
    return;
  }

  const removeButton = event.target.closest("[data-remove]");
  if (removeButton) {
    toggleSave(Number(removeButton.dataset.remove));
    return;
  }

  const filterButton = event.target.closest(".filter");
  if (filterButton) {
    activeCategory = filterButton.dataset.category;
    document.querySelectorAll(".filter").forEach((button) => button.classList.toggle("active", button === filterButton));
    render();
    return;
  }

  const popularButton = event.target.closest("[data-query]");
  if (popularButton) {
    searchInput.value = popularButton.dataset.query;
    render();
    document.querySelector(".content-section").scrollIntoView({ behavior: "smooth" });
    return;
  }

  const detailsButton = event.target.closest("[data-details]");
  if (detailsButton) {
    openDetails(Number(detailsButton.dataset.details));
    return;
  }

  const mapButton = event.target.closest("[data-map]");
  if (mapButton) {
    setActiveMap(Number(mapButton.dataset.map));
    return;
  }

  const pin = event.target.closest("[data-pin]");
  if (pin) {
    activeMapId = Number(pin.dataset.pin);
    render();
    highlightActiveMarker();
    highlightCard(activeMapId);
    return;
  }

  if (event.target.closest("[data-close-dialog]")) {
    eventDialog.close();
  }
});

document.querySelector("#searchForm").addEventListener("submit", (event) => {
  event.preventDefault();
  render();
  document.querySelector(".content-section").scrollIntoView({ behavior: "smooth" });
});

searchInput.addEventListener("input", render);
dateSelect.addEventListener("change", render);
sortSelect.addEventListener("change", render);

document.querySelector("#plansNav").addEventListener("click", openDrawer);
document.querySelector("#closeDrawer").addEventListener("click", closeDrawer);
document.querySelector("#scrim").addEventListener("click", closeDrawer);
document.querySelector("#locationButton").addEventListener("click", () => toast("Showing Singapore events"));

document.querySelector("#sharePlans").addEventListener("click", async () => {
  const chosen = events.filter((event) => saved.has(event.id));
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
  document.querySelectorAll(".filter").forEach((button, index) => button.classList.toggle("active", index === 0));
  render();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeDrawer();
    if (eventDialog.open) eventDialog.close();
  }
});

window.initGoogleMap = initGoogleMap;
window.handleGoogleMapError = handleGoogleMapError;

render();
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
