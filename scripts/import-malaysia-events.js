const { spawn } = require("child_process");

const importers = [
  { name: "Ticketmaster Malaysia", file: "scripts/import-ticketmaster-my.js" },
  { name: "Eventbrite Casual Malaysia", file: "scripts/import-eventbrite-casual-my.js" },
];

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});

async function main() {
  const results = [];

  for (const importer of importers) {
    console.log(`\nRefreshing ${importer.name} events...`);
    try {
      await runImporter(importer.file);
      results.push({ name: importer.name, status: "updated" });
    } catch (error) {
      console.log(`Could not refresh ${importer.name}: ${error.message}`);
      results.push({ name: importer.name, status: "failed", message: error.message });
    }
  }

  console.log("\nMalaysia refresh summary:");
  results.forEach((result) => {
    const detail = result.message ? ` (${result.message})` : "";
    console.log(`- ${result.name}: ${result.status}${detail}`);
  });
  console.log("\nMalaysia event refresh complete.");
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
