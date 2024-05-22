var chat_history = []

function add_to_history(user_input, AI_response) {
    // Adds new entry. //
    chat_history.push({role: "user", content: user_input});
    chat_history.push({role: "assistant", content: AI_response});


    // Deletes the oldest entry if more entries than 20 found. //
    if (chat_history.length > 20) {
        chat_history.shift()
    }
}

function retrieve_history() {
    return chat_history;
}

module.exports = {
    add_to_history,
    retrieve_history
}