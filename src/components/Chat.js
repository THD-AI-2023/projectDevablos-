import React, { useState } from 'react';
import ChatInput from './ChatInput';
import Message from './Message';
import { fetchAIResponse } from '../lib/openai';
import './Chat.css';

const Chat = () => {
  const [messages, setMessages] = useState([]);

  const addMessage = async (message, isBot = false) => {
    if (message) {
      const newMessage = { text: message, isBot };
      setMessages((prevMessages) => [...prevMessages, newMessage]);

      if (!isBot) {
        const response = await fetchAIResponse(message);
        setMessages((prevMessages) => [...prevMessages, { text: response, isBot: true }]);
      }
    }
  };

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map((msg, index) => (
          <Message key={index} text={msg.text} isBot={msg.isBot} />
        ))}
      </div>
      <ChatInput addMessage={addMessage} />
    </div>
  );
};

export default Chat;
