const fs = require("fs");

const publicConfig = {
  GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY || "",
  SUPABASE_URL: process.env.SUPABASE_URL || "",
  SUPABASE_PUBLISHABLE_KEY: process.env.SUPABASE_PUBLISHABLE_KEY || "",
  GEMINI_MODEL: process.env.GEMINI_MODEL || "gemini-flash-latest",
};

fs.writeFileSync("config.js", `window.NEARO_CONFIG = ${JSON.stringify(publicConfig, null, 2)};\n`);
