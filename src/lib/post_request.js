const OpenAI = require("openai");
const dotenv = require("dotenv");
dotenv.config();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

async function main(user_message) {
    try {
        const completion = await openai.chat.completions.create({
            messages: [{role: "system", content: "You are a helpful assistant."},
                {role: "user", content: user_message}], // make content the user input
            model: "gpt-3.5-turbo",
        });
        console.log(completion.choices[0].message.content);
        return (completion.choices[0].message.content);

    } catch (error) {
        console.error("There was an error calling the API: ", error);
        throw error;
    }
}

module.exports = main;