import React from 'react';

const MyBookings = () => {
  return (
    <div className="page-fade">
      <h1>My Bookings</h1>
      <div className="tabs" style={{ display: 'flex', gap: '20px', borderBottom: '1px solid var(--border)', marginBottom: '20px' }}>
        <span style={{ borderBottom: '2px solid var(--primary)', paddingBottom: '10px', cursor: 'pointer' }}>Upcoming</span>
        <span style={{ color: '#888', cursor: 'pointer' }}>Past</span>
      </div>

      <div className="booking-list">
        <div className="card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h4>Wembley Arena</h4>
            <p>📅 Feb 20, 2026 | ⏰ 07:00 PM</p>
            <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>Confirmed</span>
          </div>
          <button style={{ background: '#ffeeee', color: 'red', border: 'none', padding: '8px 15px', borderRadius: '5px' }}>
            Cancel Booking
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyBookings;