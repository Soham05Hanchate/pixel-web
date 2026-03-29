import React from 'react';

const BookingCard = ({ booking, onCancel }) => (
  <div className="card" style={{ display: 'flex', gap: '15px', marginBottom: '15px' }}>
    <div style={{ width: '80px', height: '80px', background: '#eee', borderRadius: '8px' }}></div>
    <div style={{ flex: 1 }}>
      <h4 style={{ margin: 0 }}>{booking.turfName}</h4>
      <p style={{ fontSize: '0.9rem', margin: '5px 0' }}>{booking.date} | {booking.time}</p>
      <span style={{ fontSize: '0.8rem', padding: '2px 8px', borderRadius: '10px', background: '#e3f2fd', color: '#1976d2' }}>
        {booking.status}
      </span>
    </div>
    <button onClick={() => onCancel(booking.id)} style={{ alignSelf: 'center', color: 'red', border: 'none', background: 'none', cursor: 'pointer' }}>
      Cancel
    </button>
  </div>
);

export default BookingCard;