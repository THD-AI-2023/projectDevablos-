const OpenAI = require("openai");
const dotenv = require("dotenv");

dotenv.config();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY // accessing the api key from the .env file
});

async function getAIResponse(userText) {
    const response = await openai.chat.completions.create({
        messages: [{ role: "system", content: "You are a helpful assistant." },
            { role: "user", content: userText }],
        model: "gpt-4o"
    });

    return response.choices[0].message.content;
}

module.exports = { getAIResponse };
