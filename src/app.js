const main = require('./lib/post_request');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

// For parsing the user input
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

// Hosts Webpage
app.use(express.static(path.join(__dirname)));

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

