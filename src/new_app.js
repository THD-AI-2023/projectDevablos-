//run with 'node new_app.js', access the site at http://localhost:3000/
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const rateLimit = require('express-rate-limit');
const { add_to_history, retrieve_history } = require('./lib/chat_history');
const { getAIResponse } = require('./lib/models');

const dotenv = require("dotenv");
dotenv.config();

const app = express(); //express js for the backend server
app.use(bodyParser.json())
; //body-parser extracts the entire body portion of an incoming request stream and exposes it on req.body. https://stackoverflow.com/questions/38306569/what-does-body-parser-do-with-express

// Define a rate limiter middleware
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
});

// Apply the rate limiting middleware to all requests
app.use(limiter);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'new_testing_file.html')); //to serve our html file aka load it when the server starts, can be accessed at http://localhost:3000/ (by default port is set to 3000)
});

app.post('/send-message', async (req, res) => {
    console.log(req.body.text); //incoming request from 'message_input'
    try {
        const aiResponse = await getAIResponse(req.body.text);
        add_to_history(req.body.text, aiResponse); // saving chat history

        res.json({ content: aiResponse }); // send result back as json
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

