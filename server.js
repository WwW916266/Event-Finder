const fs = require("fs");
const http = require("http");
const path = require("path");
const { getGeminiRecommendations } = require("./lib/gemini-guide-core");

const port = process.env.PORT || 3000;
const root = __dirname;
const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
};

const server = http.createServer(async (request, response) => {
  try {
    if (request.method === "POST" && request.url === "/api/gemini-guide") {
      await handleGeminiGuide(request, response);
      return;
    }

    if (request.method !== "GET" && request.method !== "HEAD") {
      sendJson(response, 405, { error: "Method not allowed" });
      return;
    }

    serveStatic(request, response);
  } catch (error) {
    sendJson(response, 500, { error: error.message || "Server error" });
  }
});

server.listen(port, () => {
  console.log(`Nearo is running on port ${port}`);
});

server.on("error", (error) => {
  console.error(`Nearo could not start on port ${port}: ${error.message}`);
  process.exit(1);
});

async function handleGeminiGuide(request, response) {
  const body = await readJsonBody(request);
  try {
    const result = await getGeminiRecommendations(body.prompt, body.candidates);
    sendJson(response, 200, result);
  } catch (error) {
    sendJson(response, error.statusCode || 502, { error: error.message || "AI guide could not answer right now." });
  }
}

function serveStatic(request, response) {
  const url = new URL(request.url, `http://${request.headers.host || "localhost"}`);
  const requestedPath = decodeURIComponent(url.pathname);
  const safePath = path.normalize(requestedPath).replace(/^(\.\.[/\\])+/, "");
  const filePath = path.join(root, safePath === "/" ? "index.html" : safePath);

  if (!filePath.startsWith(root)) {
    sendJson(response, 403, { error: "Forbidden" });
    return;
  }

  fs.stat(filePath, (statError, stats) => {
    const finalPath = !statError && stats.isFile() ? filePath : path.join(root, "index.html");
    const extension = path.extname(finalPath).toLowerCase();

    fs.readFile(finalPath, (readError, content) => {
      if (readError) {
        sendJson(response, 404, { error: "Not found" });
        return;
      }

      response.writeHead(200, securityHeaders({
        "Content-Type": mimeTypes[extension] || "application/octet-stream",
        "Cache-Control": finalPath.endsWith("index.html") || finalPath.endsWith("config.js")
          ? "no-cache"
          : "public, max-age=60",
      }));

      if (request.method === "HEAD") response.end();
      else response.end(content);
    });
  });
}

function readJsonBody(request) {
  return new Promise((resolve, reject) => {
    let body = "";

    request.on("data", (chunk) => {
      body += chunk;
      if (body.length > 160000) {
        reject(new Error("Request is too large."));
        request.destroy();
      }
    });

    request.on("end", () => {
      try {
        resolve(JSON.parse(body || "{}"));
      } catch {
        reject(new Error("Invalid request body."));
      }
    });

    request.on("error", reject);
  });
}

function sendJson(response, statusCode, payload) {
  response.writeHead(statusCode, securityHeaders({ "Content-Type": "application/json; charset=utf-8" }));
  response.end(JSON.stringify(payload));
}

function securityHeaders(headers) {
  return {
    "X-Content-Type-Options": "nosniff",
    "Referrer-Policy": "strict-origin-when-cross-origin",
    ...headers,
  };
}
