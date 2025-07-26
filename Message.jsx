import React from 'react';

function Message({ sender, text }) {
  const isUser = sender === 'user';
  const align = isUser ? 'text-right' : 'text-left';
  const bgColor = isUser ? 'bg-blue-100' : 'bg-gray-200';

  return (
    <div className={\`\${align}\`}>
      <p className={\`inline-block p-2 rounded \${bgColor}\`}>
        <strong>{isUser ? 'You' : 'AI'}:</strong> {text}
      </p>
    </div>
  );
}

export default Message;
