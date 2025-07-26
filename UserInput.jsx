import React, { useState } from 'react';

function UserInput({ onSend }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onSend(text.trim());
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="flex-grow p-2 border rounded"
        placeholder="Type your message..."
      />
      <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Send</button>
    </form>
  );
}

export default UserInput;
