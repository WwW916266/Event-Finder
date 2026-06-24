const { getGeminiRecommendations } = require("../../gemini-guide-core");

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return jsonResponse(405, { error: "Method not allowed" });
  }

  try {
    const body = JSON.parse(event.body || "{}");
    const result = await getGeminiRecommendations(body.prompt, body.candidates);
    return jsonResponse(200, result);
  } catch (error) {
    return jsonResponse(error.statusCode || 502, { error: error.message || "AI guide could not answer right now." });
  }
};

function jsonResponse(statusCode, payload) {
  return {
    statusCode,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  };
}
