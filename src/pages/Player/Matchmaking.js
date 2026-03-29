import React, { useState } from 'react';
import '../../styles/components.css';

const Matchmaking = () => {
  const [showForm, setShowForm] = useState(false);

  const playerCards = [
    {
      id: 1,
      name: 'Arjun Mehta',
      role: 'Winger',
      image:
        'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=420&q=80',
    },
    {
      id: 2,
      name: 'Kabir Singh',
      role: 'Striker',
      image:
        'https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=520&q=80',
      featured: true,
    },
    {
      id: 3,
      name: 'Ravi Nair',
      role: 'Defender',
      image:
        'https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?auto=format&fit=crop&w=420&q=80',
    },
  ];

  const requests = [1, 2];

  return (
    <div className="page-fade matchmaking-pro">
      <section className="matchmaking-hero">
        <div className="row-flex matchmaking-topbar">
          <div>
            <p className="matchmaking-kicker">Players Hub</p>
            <h1>Matchmaking</h1>
          </div>
          <button className="main-btn matchmaking-toggle-btn" onClick={() => setShowForm(!showForm)}>
            {showForm ? 'View Requests' : '+ Create Request'}
          </button>
        </div>

        <div className="matchmaking-roster-stage">
          {playerCards.map((card) => (
            <article
              key={card.id}
              className={`matchmaking-player-card ${card.featured ? 'featured' : ''}`}
            >
              <img src={card.image} alt={card.name} />
              <div className="matchmaking-player-meta">
                <small>{card.role}</small>
                <h3>{card.name}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      {showForm ? (
        <div className="card matchmaking-create-card">
          <h3>Post a "Need Players" Request</h3>
          <div className="form-group">
            <label>Sport</label>
            <select>
              <option>Football</option>
              <option>Cricket</option>
            </select>
          </div>
          <div className="form-group">
            <label>Players Needed</label>
            <input type="number" placeholder="e.g. 3" />
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea className="input-field" placeholder="Skill level, friendly match, etc." />
          </div>
          <button className="main-btn w-100">Post Request</button>
        </div>
      ) : (
        <div className="request-list matchmaking-request-list">
          {requests.map((req) => (
            <div key={req} className="card matchmaking-request-card">
              <div>
                <h4>Football - 5v5 Friendly</h4>
                <p className="matchmaking-meta-line">Goal Zone | Tomorrow, 6:00 PM</p>
                <span className="badge">Need 2 more</span>
              </div>
              <button className="main-btn matchmaking-join-btn">Join Match</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Matchmaking;