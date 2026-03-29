import React from 'react';

const ProviderDashboard = () => {
  const monthlyBookings = [34, 46, 39, 61, 58, 72, 80];
  const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const maxValue = Math.max(...monthlyBookings);

  const points = monthlyBookings
    .map((value, index) => {
      const x = 40 + (index * 420) / (monthlyBookings.length - 1);
      const y = 180 - (value / maxValue) * 140;
      return `${x},${y}`;
    })
    .join(' ');

  return (
    <div className="page-fade">
      <h1>Provider Overview</h1>
      
      <div className="stats-grid">
        <div className="card stats-primary">
          <h3>$4,250</h3>
          <p>Total Earnings</p>
        </div>
        <div className="card">
          <h3>128</h3>
          <p>Total Bookings</p>
        </div>
        <div className="card">
          <h3>4</h3>
          <p>Active Turfs</p>
        </div>
      </div>

      <div className="card" style={{ marginTop: '2rem' }}>
        <h3>Booking Trends</h3>
        <div className="booking-graph-wrap">
          <svg className="booking-graph" viewBox="0 0 500 220" role="img" aria-label="Weekly booking trends graph">
            <line x1="40" y1="180" x2="470" y2="180" className="graph-axis" />
            <line x1="40" y1="30" x2="40" y2="180" className="graph-axis" />
            <polyline points={points} fill="none" className="graph-line" />
            {monthlyBookings.map((value, index) => {
              const x = 40 + (index * 420) / (monthlyBookings.length - 1);
              const y = 180 - (value / maxValue) * 140;
              return <circle key={labels[index]} cx={x} cy={y} r="4.5" className="graph-point" />;
            })}
            {labels.map((label, index) => {
              const x = 40 + (index * 420) / (labels.length - 1);
              return (
                <text key={label} x={x} y="202" textAnchor="middle" className="graph-label">
                  {label}
                </text>
              );
            })}
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ProviderDashboard;
