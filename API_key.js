// Imports required packages //
const OpenAI = require("openai");
require("dotenv").config();

// Gets API key from .env file //
const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_API_KEY
});

module.exports = openai;
