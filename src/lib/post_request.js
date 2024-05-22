const OpenAI = require("openai");
const dotenv = require("dotenv");
const history = require('./chat_history');
dotenv.config();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

async function main(user_message) {
    try {
        const completion = await openai.chat.completions.create({
            messages: [{role: "system", content: "You are a helpful assistant."},
                ...history.retrieve_history(),
                {role: "user", content: user_message}], // make content the user input
            model: "gpt-4o",
        });
        
        // Adds user input and API response to history. //
        history.add_to_history(user_message, completion.choices[0].message.content);

        console.log(completion.choices[0].message.content);
        return (completion.choices[0].message.content);

    } catch (error) {
        console.error("There was an error calling the API: ", error);
        throw error;
    }
}

module.exports = main;