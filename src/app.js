const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const rateLimit = require('express-rate-limit');
const { add_to_history, retrieve_history } = require('./lib/chat_history');
const { getAIResponse } = require('./lib/models');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(bodyParser.json());

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    handler: (req, res) => {
        res.status(429).json({ message: "Too many requests, please try again later." });
    }
});

app.set('trust proxy', 1);
app.use(limiter);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'new_testing_file.html'));
});

app.post('/send-message', async (req, res) => {
    const userText = req.body.text;
    if (!userText) {
        return res.status(400).json({ message: "No text provided." });
    }

    try {
        const aiResponse = await getAIResponse(userText);
        add_to_history(userText, aiResponse);
        res.json({ content: aiResponse });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.get('/chat-history', (req, res) => {
    res.json(retrieve_history());
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
