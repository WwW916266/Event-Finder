const fs = require("fs");
const { spawn } = require("child_process");
const vm = require("vm");

const importers = [
  {
    name: "Ticketmaster",
    file: "import-ticketmaster.js",
    keys: ["SUPABASE_URL", "TICKETMASTER_CONSUMER_KEY"],
  },
  {
    name: "SISTIC",
    file: "import-sistic.js",
    keys: ["SUPABASE_URL"],
  },
  {
    name: "Eventbrite",
    file: "import-eventbrite.js",
    keys: ["SUPABASE_URL", "EVENTBRITE_PRIVATE_TOKEN"],
  },
];

const config = readConfig();

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});

async function main() {
  const results = [];

  for (const importer of importers) {
    const missing = missingKeys(importer.keys);
    if (missing.length) {
      const message = `missing ${missing.join(", ")} in config.js`;
      console.log(`Skipping ${importer.name}: ${message}`);
      results.push({ name: importer.name, status: "skipped", message });
      continue;
    }

    console.log(`\nRefreshing ${importer.name} events...`);
    try {
      await runImporter(importer.file);
      results.push({ name: importer.name, status: "updated" });
    } catch (error) {
      console.log(`Could not refresh ${importer.name}: ${error.message}`);
      results.push({ name: importer.name, status: "failed", message: error.message });
    }
  }

  console.log("\nRefresh summary:");
  results.forEach((result) => {
    const detail = result.message ? ` (${result.message})` : "";
    console.log(`- ${result.name}: ${result.status}${detail}`);
  });
  console.log("\nEvent refresh complete.");
}

function readConfig() {
  if (!fs.existsSync("./config.js")) {
    throw new Error("Missing config.js. Copy config.example.js first, then add your local keys.");
  }

  const sandbox = { window: {} };
  vm.createContext(sandbox);
  vm.runInContext(fs.readFileSync("./config.js", "utf8"), sandbox);
  return sandbox.window.NEARO_CONFIG || {};
}

function missingKeys(keys) {
  const missing = keys.filter((key) => !config[key]);
  const hasSupabaseImportKey = config.SUPABASE_SERVICE_ROLE_KEY || config.SUPABASE_PUBLISHABLE_KEY;
  if (keys.includes("SUPABASE_URL") && !hasSupabaseImportKey) missing.push("SUPABASE_SERVICE_ROLE_KEY or SUPABASE_PUBLISHABLE_KEY");
  return [...new Set(missing)];
}

function runImporter(file) {
  return new Promise((resolve, reject) => {
    const child = spawn(process.execPath, [file], { stdio: "inherit" });
    child.on("error", reject);
    child.on("exit", (code) => {
      if (code === 0) {
        resolve();
        return;
      }

      reject(new Error(`${file} failed with exit code ${code}`));
    });
  });
}
