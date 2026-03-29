import React from 'react';

const PlayerDashboard = () => {
  const player = {
    name: 'Jordan Diaz',
    sport: 'Football',
    position: 'Midfielder',
    skillLevel: 'Advanced',
      rating: 4.8,
    image:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=320&q=80',
  };
  const metrics = {
    gameIQ: 70.9,
    conversionRate: 36,
    leftFootGoals: 2,
    rightFootGoals: 16,
    headedGoals: 0,
  };

  const statCards = [
    { value: '12', label: 'Games Played' },
    { value: '3', label: 'Pending Requests' },
    { value: '85%', label: 'Reliability' },
  ];

  const upcomingGames = [
    {
      id: 1,
      title: '5v5 Evening Football',
      date: 'Feb 20, 2026',
      time: '07:00 PM',
      venue: 'Wembley Arena, North Side',
      teammates: 8,
      status: 'Confirmed',
    },
    {
      id: 2,
      title: 'Practice Scrimmage',
      date: 'Feb 22, 2026',
      time: '06:30 PM',
      venue: 'Goal Zone, East End',
      teammates: 6,
      status: 'Pending',
    },
    {
      id: 3,
      title: 'Weekend League Match',
      date: 'Feb 24, 2026',
      time: '08:00 AM',
      venue: 'Elite Sports, West Park',
      teammates: 10,
      status: 'Confirmed',
    },
  ];

  return (
    <div className="page-fade player-dashboard-pro">
      <div className="dashboard-header player-dashboard-header">
        <h1>Player Dashboard</h1>
        <button className="main-btn dashboard-quickbook-btn">+ Quick Book</button>
      </div>

      <section className="dashboard-hero-card">
        <div className="dashboard-hero-left">
          <img src={player.image} alt={`${player.name} profile`} className="dashboard-player-image" />
        </div>

        <div className="dashboard-hero-right">
          <div className="dashboard-player-title-row">
            <p className="dashboard-kicker">Player Profile</p>
            <h2>{player.name}</h2>
          </div>

          <div className="dashboard-player-meta-grid">
            <div>
              <span>Sport</span>
              <strong>{player.sport}</strong>
            </div>
            <div>
              <span>Position</span>
              <strong>{player.position}</strong>
            </div>
            <div>
              <span>Skill Level</span>
              <strong>{player.skillLevel}</strong>
            </div>
            <div>
              <span>Rating</span>
              <strong>{player.rating} / 5</strong>
            </div>
          </div>

          <div className="dashboard-ring-metrics">
            <div className="dashboard-ring-card">
              <div
                className="dashboard-progress-ring"
                style={{ '--progress': `${metrics.gameIQ}%` }}
              >
                <span>{metrics.gameIQ}</span>
              </div>
              <p>Game IQ</p>
            </div>

            <div className="dashboard-ring-card">
              <div
                className="dashboard-progress-ring"
                style={{ '--progress': `${metrics.conversionRate}%` }}
              >
                <span>{metrics.conversionRate}%</span>
              </div>
              <p>Conversion Rate</p>
            </div>
          </div>

          <div className="dashboard-foot-stats">
            <div>
              <strong>{String(metrics.leftFootGoals).padStart(2, '0')}</strong>
              <span>Left Foot Goals</span>
            </div>
            <div>
              <strong>{String(metrics.rightFootGoals).padStart(2, '0')}</strong>
              <span>Right Foot Goals</span>
            </div>
            <div>
              <strong>{String(metrics.headedGoals).padStart(2, '0')}</strong>
              <span>Headed Goals</span>
            </div>
          </div>
        </div>
      </section>

      <div className="stats-grid dashboard-stats-grid">
        {statCards.map((item) => (
          <div key={item.label} className="card dashboard-stat-card">
            <h3>{item.value}</h3>
            <p>{item.label}</p>
          </div>
        ))}
      </div>

      <h2 className="dashboard-section-title">Upcoming Games</h2>
      <div className="upcoming-games dashboard-upcoming-games">
        {upcomingGames.map((game) => (
          <div key={game.id} className="card game-item dashboard-game-card">
            <div className="row-flex dashboard-game-head">
              <h4>{game.title}</h4>
              <span className="badge">{game.status}</span>
            </div>
            <p className="game-meta">{game.date} | {game.time}</p>
            <p className="game-meta">{game.venue}</p>
            <p className="game-meta">Players joined: {game.teammates}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayerDashboard;
