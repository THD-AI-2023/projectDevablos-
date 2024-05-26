//run with 'node new_web.js', access the site at http://localhost:3000/
const express = require('express');
const bodyParser = require('body-parser');
const OpenAI = require("openai");
const dotenv = require("dotenv");
const path = require('path');
const { add_to_history, retrieve_history } = require('./lib/chat_history');


dotenv.config();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY //accessing the api key from the .env file
});
const app = express(); //express js for the backend server
app.use(bodyParser.json())
; //body-parser extracts the entire body portion of an incoming request stream and exposes it on req.body. https://stackoverflow.com/questions/38306569/what-does-body-parser-do-with-express


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'new_testing_file.html')); //to serve our html file aka load it when the server starts, can be accessed at http://localhost:3000/ (by default port is set to 3000)
});

app.post('/send-message', async (req, res) => {
    console.log(req.body.text); //incoming request from 'message_input'
    try {
      const response = await openai.chat.completions.create({
        messages: [{role: "system", content: "You are a helpful assistant."},
            {role: "user", content: req.body.text}], 
        model: "gpt-4o",
    });
    console.dir(response);
    const aiResponse = response.choices[0].message.content;
    add_to_history(req.body.text, aiResponse); //saving chat history

      res.json({ content: response.choices[0].message.content }); //send result back as json
    } catch (error) {
      res.status(500).send(error.message);
    }
});

app.get('/chat-history', (req, res) => {
    res.json(retrieve_history()); // sending back saved chat history
});

const PORT = process.env.PORT || 3000; //if no default port is assigned at process.env then port is set to 3000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

