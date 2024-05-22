const main = require('./lib/post_request');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const RateLimit = require('express-rate-limit');
const app = express();

// For parsing the user input
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

var limiter = RateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // max 100 requests per windowMs
});

// apply rate limiter to all requests
app.use(limiter);

// Hosts Webpage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'testing_file.html'));
});

function sendMessage(user_message) {
    return main(user_message);
}

// Sends variable to main function
// Returns value returned by main function
app.post('/send-message', (req, res) => {
    const userMessage = req.body.message;
    sendMessage(userMessage).then(response => {
        res.json({reply: response}); // Sends response as JSON //
    })
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

