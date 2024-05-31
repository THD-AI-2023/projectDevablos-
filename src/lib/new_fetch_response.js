// Gets user input from element. //
const msg_content = document.getElementById('message_input');
console.log("got input");
function send_message() {
    const userInput = msg_content.value;
    console.log(userInput);
    // Sends POST request and prints output. //
    fetch('/send-message', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text: userInput })
    })
        .then(response => response.json())
        .then(data => {
            document.getElementById('response').innerText = data.content; //created a temporary div to test the output
            update_history();
        });
}

function update_history() {
    fetch('/chat-history')
        .then(response => response.json())
        .then(data => {
            const historyDiv = document.getElementById('chat_history');
            historyDiv.innerHTML = '';
            data.forEach(entry => {
                const entryDiv = document.createElement('div');
                entryDiv.textContent = `${entry.role}: ${entry.content}`;
                historyDiv.appendChild(entryDiv);
            });
        });
}

msg_content.addEventListener('keypress', function (event) {
    if (event.key === "Enter") {
        console.log("I got called");
        event.preventDefault();
        send_message();
    }
});

update_history();