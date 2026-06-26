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
- Load published events from Supabase
- Import official Singapore events from Ticketmaster, SISTIC, and Eventbrite
- Open event detail dialogs
- Responsive desktop and mobile layout

## Run the website

No installation is required. To enable Google Maps and Supabase locally, create `config.js` from the example file and add your own keys.

1. Open the project folder.
2. Copy `config.example.js` to `config.js`.
3. Add your Google Maps JavaScript API key and Supabase keys in `config.js`.
4. Double-click `index.html`.
5. The website will open in your browser.

## Host the website on Netlify

This project is ready for Netlify hosting. The build creates a public `config.js` from Netlify environment variables, and Gemini AI runs through a private Netlify Function so the Gemini key is not exposed in the browser.

1. Push the latest code to GitHub.
2. In Netlify, choose **Add new site** -> **Import an existing project**.
3. Connect the GitHub repository.
4. Use these build settings:
   - Build command: `node build-config.js`
   - Publish directory: `.`
   - Functions directory: `netlify/functions`
5. Add these Netlify environment variables:
   - `GOOGLE_MAPS_API_KEY`
   - `SUPABASE_URL`
   - `SUPABASE_PUBLISHABLE_KEY`
   - `GEMINI_API_KEY`
   - `GEMINI_MODEL` optional, default is `gemini-flash-latest`
6. Deploy the site.

Only use the Supabase publishable key in Netlify. Keep the Supabase service role key local for import scripts only.

## Host the website on Render

Render also works well if you deploy this as a **Web Service**. Do not use a plain Render Static Site if you want Gemini AI, because the Gemini key needs a private backend route.

1. Push the latest code to GitHub.
2. In Render, choose **New** -> **Web Service**.
3. Connect the GitHub repository.
4. Use these settings:
   - Runtime: `Node`
   - Build command: `npm run build`
   - Start command: `npm start`
5. Add these Render environment variables:
   - `GOOGLE_MAPS_API_KEY`
   - `SUPABASE_URL`
   - `SUPABASE_PUBLISHABLE_KEY`
   - `GEMINI_API_KEY`
   - `GEMINI_MODEL` optional, default is `gemini-flash-latest`
6. Deploy the service.

Render will provide a public URL after deploy. The app serves the website and the private AI endpoint from the same service.

## Refresh official events

Use these local-only importers when you want to refresh the database:

```text
npm run refresh-events
```

Or run one source at a time:

```text
node import-ticketmaster.js
node import-sistic.js
node import-eventbrite.js
```

The importers read private keys from ignored `config.js`, then upsert official event listings into Supabase without committing secrets. Eventbrite needs a local `EVENTBRITE_PRIVATE_TOKEN`; the refresh-all command skips Eventbrite until that token is added.

If existing SISTIC events are missing artwork, run `node import-sistic.js` again after pulling the latest code. The importer now checks multiple SISTIC image fields and normalizes relative image URLs.

## Project files

```text
index.html          Page content and app structure
styles.css         Visual design and responsive layout
app.js             Event data, filtering, saved plans, map, and interactions
build-config.js    Generates public config.js during hosting builds
server.js          Render-compatible Node server for the site and AI endpoint
gemini-guide-core.js Shared private Gemini recommendation logic
netlify.toml       Netlify hosting and security header settings
netlify/functions  Private serverless functions, including Gemini AI guide
package.json       Render build/start scripts
config.example.js  Template for local Google Maps, Supabase, and importer keys
import-all-events.js     Runs every configured event importer
import-ticketmaster.js  Ticketmaster Singapore importer
import-sistic.js        SISTIC Singapore importer
import-eventbrite.js    Eventbrite Singapore activity importer
```

## Notes

This is a static prototype. Google Maps and Supabase use keys from an ignored local `config.js` file. Restrict the Google key in Google Cloud by HTTP referrer before sharing the site publicly. Keep the Supabase service role key local only.

Real API keys, secrets, or private credentials should never be committed to this repository.

## Possible next steps

- Add organizer event submissions
- Add user accounts and cloud-synced saved plans
- Add more real Singapore event feeds
- Add location-based recommendations
- Deploy the static site publicly
