const OpenAI = require("openai");
const dotenv = require("dotenv");
dotenv.config();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

async function main() {
    const completion = await openai.chat.completions.create({
        messages: [{ role: "system", content: "You are a helpful assistant." },
            {role: "user", content: "Tell me about APIs in a short paragraph."}],
        model: "gpt-4o",
    });

    console.log(completion.choices[0].message.content);
}

module.exports = main;

