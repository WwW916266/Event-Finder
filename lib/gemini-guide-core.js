const GEMINI_MODEL = process.env.GEMINI_MODEL || "gemini-flash-latest";
const GEMINI_FALLBACK_MODELS = [GEMINI_MODEL, "gemini-2.5-flash", "gemini-3-flash-preview", "gemini-flash-latest"]
  .filter((model, index, models) => model && models.indexOf(model) === index);

async function getGeminiRecommendations(prompt, candidates) {
  if (!process.env.GEMINI_API_KEY) {
    throw statusError(500, "Gemini is not configured yet.");
  }

  const safePrompt = String(prompt || "").trim().slice(0, 500);
  const safeCandidates = Array.isArray(candidates) ? candidates.slice(0, 80).map(cleanCandidate) : [];

  if (!safePrompt) throw statusError(400, "Prompt is required.");
  if (!safeCandidates.length) throw statusError(400, "No events were provided.");

  let lastError = null;

  for (const model of GEMINI_FALLBACK_MODELS) {
    try {
      return await fetchGeminiWithModel(model, safePrompt, safeCandidates);
    } catch (error) {
      lastError = error;
    }
  }

  throw statusError(502, lastError?.message || "Gemini request failed");
}

async function fetchGeminiWithModel(model, prompt, candidates) {
  const modelPath = model.startsWith("models/") ? model : `models/${model}`;
  const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/${modelPath}:generateContent?key=${encodeURIComponent(process.env.GEMINI_API_KEY)}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(geminiRequestBody(prompt, candidates)),
  });

  const payload = await parseJsonResponse(response);
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

function cleanCandidate(candidate) {
  return {
    id: String(candidate.id || ""),
    title: String(candidate.title || "").slice(0, 140),
    category: String(candidate.category || "").slice(0, 60),
    date: String(candidate.date || "").slice(0, 80),
    place: String(candidate.place || "").slice(0, 120),
    price: String(candidate.price || "").slice(0, 60),
    source: String(candidate.source || "").slice(0, 80),
    description: String(candidate.description || "").slice(0, 220),
  };
}

async function parseJsonResponse(response) {
  try {
    return await response.json();
  } catch {
    return { error: { message: "Gemini returned an invalid response." } };
  }
}

function statusError(statusCode, message) {
  const error = new Error(message);
  error.statusCode = statusCode;
  return error;
}

module.exports = { getGeminiRecommendations };
