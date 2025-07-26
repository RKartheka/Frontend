import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setMessages, setActiveSession } from '../store';

function SessionPanel() {
  const sessions = useSelector((state) => state.chat.sessions);
  const dispatch = useDispatch();

  const loadSession = async (sessionId) => {
    const response = await fetch(`http://localhost:8000/api/sessions/${sessionId}/`);
    const data = await response.json();
    dispatch(setMessages(data.messages));
    dispatch(setActiveSession(sessionId));
  };

  return (
    <div className="bg-white p-2 shadow rounded mb-4">
      <h2 className="font-bold mb-2">Past Conversations</h2>
      <ul className="space-y-1">
        {sessions.map((s) => (
          <li key={s.id}>
            <button onClick={() => loadSession(s.id)} className="text-blue-600 underline">
              Session {s.id}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SessionPanel;
