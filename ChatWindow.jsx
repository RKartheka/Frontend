import React, { useState } from 'react';
import MessageList from './MessageList';
import UserInput from './UserInput';

function ChatWindow() {
  const [messages, setMessages] = useState([]);

  const sendMessage = async (text) => {
    const userMessage = { sender: 'user', text };
    setMessages((prev) => [...prev, userMessage]);

    const response = await fetch('http://localhost:8000/api/chat/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user_id: 1, message: text })
    });

    const data = await response.json();
    const aiMessage = { sender: 'ai', text: data.response };
    setMessages((prev) => [...prev, aiMessage]);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 max-w-xl mx-auto">
      <MessageList messages={messages} />
      <UserInput onSend={sendMessage} />
    </div>
  );
}

export default ChatWindow;
