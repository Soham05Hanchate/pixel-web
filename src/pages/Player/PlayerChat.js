import React, { useMemo, useState } from 'react';

const CHAT_DATA = [
  {
    id: 'u1',
    name: 'Aarav Sharma',
    sport: 'Football',
    lastSeen: 'Online',
    messages: [
      { id: 1, fromMe: false, text: 'Hey, are you joining the 7 PM match today?' },
      { id: 2, fromMe: true, text: 'Yes, I am in. Need one more player?' },
      { id: 3, fromMe: false, text: 'Exactly. I will share the turf location in a bit.' },
    ],
  },
  {
    id: 'u2',
    name: 'Neha Verma',
    sport: 'Badminton',
    lastSeen: 'Last seen 10m ago',
    messages: [
      { id: 1, fromMe: false, text: 'Can we move tomorrow practice to 6 PM?' },
      { id: 2, fromMe: true, text: '6 PM works for me.' },
    ],
  },
];

const PlayerChat = () => {
  const [selectedId, setSelectedId] = useState(CHAT_DATA[0].id);
  const [draft, setDraft] = useState('');
  const [chatData, setChatData] = useState(CHAT_DATA);

  const selectedChat = useMemo(
    () => chatData.find((chat) => chat.id === selectedId) || chatData[0],
    [chatData, selectedId]
  );

  const onSend = (e) => {
    e.preventDefault();
    const trimmed = draft.trim();
    if (!trimmed) return;

    setChatData((prev) =>
      prev.map((chat) =>
        chat.id === selectedId
          ? {
              ...chat,
              messages: [...chat.messages, { id: Date.now(), fromMe: true, text: trimmed }],
            }
          : chat
      )
    );
    setDraft('');
  };

  return (
    <div className="page-fade">
      <div className="dashboard-header">
        <h1>Player Chat</h1>
      </div>

      <div className="chat-layout card">
        <aside className="chat-list">
          {chatData.map((chat) => (
            <button
              key={chat.id}
              className={chat.id === selectedId ? 'chat-user active' : 'chat-user'}
              onClick={() => setSelectedId(chat.id)}
            >
              <div className="chat-user-avatar">{chat.name.slice(0, 2).toUpperCase()}</div>
              <div className="chat-user-meta">
                <strong>{chat.name}</strong>
                <span>{chat.sport}</span>
                <small>{chat.lastSeen}</small>
              </div>
            </button>
          ))}
        </aside>

        <section className="chat-thread">
          <header className="chat-thread-header">
            <h3>{selectedChat.name}</h3>
            <p>{selectedChat.sport}</p>
          </header>

          <div className="chat-messages">
            {selectedChat.messages.map((msg) => (
              <div key={msg.id} className={msg.fromMe ? 'message-row me' : 'message-row'}>
                <div className={msg.fromMe ? 'message-bubble me' : 'message-bubble'}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          <form className="chat-input-row" onSubmit={onSend}>
            <input
              type="text"
              placeholder="Type a message..."
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
            />
            <button type="submit" className="main-btn">
              Send
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default PlayerChat;
