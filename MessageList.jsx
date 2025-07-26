import React from 'react';
import Message from './Message';

function MessageList({ messages }) {
  return (
    <div className="mb-4 space-y-2 max-h-96 overflow-y-auto">
      {messages.map((msg, idx) => (
        <Message key={idx} sender={msg.sender} text={msg.text} />
      ))}
    </div>
  );
}

export default MessageList;
