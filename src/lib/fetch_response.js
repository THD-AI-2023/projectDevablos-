// Sends POST request to main function, should return and print API response. Does not do so. //
// Add script to HTML file. //

function send_message() {
    const userInput = msg_content.value;

    // Sends POST request and prints output. //
    fetch('/send-message', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        // Makes body JSON like Content-Type
        body: JSON.stringify({message: userInput})
    }).then(response => response.json())
    .then(data => {
        console.log("Response Data:", data);
    })
}

module.exports = send_message;  