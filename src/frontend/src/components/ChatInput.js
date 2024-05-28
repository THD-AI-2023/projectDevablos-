// src/components/ChatInput.js
import React, { useState } from 'react';

const ChatInput = ({ addMessage }) => {
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      addMessage(input);
      addMessage('How can I help you today?', true); // Bot response
      setInput('');
    }
  };

  return (
    <div className="chat-input">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && handleSend()}
        placeholder="What can I help you with?"
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
};

export default ChatInput;