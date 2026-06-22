# Nearo Singapore

Nearo is a mobile-first local event discovery prototype for Singapore. It helps people browse nearby concerts, food experiences, workshops, art events, and outdoor activities, then save a short weekend plan.

## Current features

- Search events by title, category, place, or description
- Filter by category and date window
- Sort by recommendation, soonest, distance, or price
- Save events to a persistent weekend planner
- Remove saved events from cards, map previews, details, or the drawer
- Add events to Google Calendar with event-specific times
- Share saved weekend plans
- Preview events on Google Maps with a built-in fallback map
- Open event detail dialogs
- Responsive desktop and mobile layout

## Run the website

No installation is required. To enable Google Maps locally, create `config.js` from the example file and add your own browser API key.

1. Open the project folder.
2. Copy `config.example.js` to `config.js`.
3. Add your Google Maps JavaScript API key in `config.js`.
4. Double-click `index.html`.
5. The website will open in your browser.

## Project files

```text
index.html          Page content and app structure
styles.css         Visual design and responsive layout
app.js             Event data, filtering, saved plans, map, and interactions
config.example.js  Template for local Google Maps configuration
```

## Notes

This is a static prototype. Google Maps uses a browser API key from an ignored local `config.js` file. Restrict the key in Google Cloud by HTTP referrer before sharing the site publicly.

For production, the event data should move out of `app.js` and into a backend or managed database. Real API keys, secrets, or private credentials should never be committed to this repository.

## Possible next steps

- Connect Supabase or another event database
- Add organizer event submissions
- Add user accounts and cloud-synced saved plans
- Add real Singapore event feeds
- Add location-based recommendations
- Deploy the static site publicly
