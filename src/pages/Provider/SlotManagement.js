import React, { useMemo, useState } from 'react';

const WEEK_DATA = [
  {
    day: 'Monday',
    date: 'Feb 16',
    slots: [
      { time: '06:00', status: 'available' },
      { time: '07:00', status: 'available' },
      { time: '08:00', status: 'booked', bookedBy: 'Falcons FC' },
      { time: '09:00', status: 'booked', bookedBy: 'Morning League' },
      { time: '10:00', status: 'maintenance' },
      { time: '11:00', status: 'available' },
      { time: '12:00', status: 'available' },
      { time: '13:00', status: 'booked', bookedBy: 'College Squad' },
      { time: '14:00', status: 'available' },
      { time: '15:00', status: 'booked', bookedBy: 'City Juniors' },
    ],
  },
  {
    day: 'Tuesday',
    date: 'Feb 17',
    slots: [
      { time: '06:00', status: 'booked', bookedBy: 'Rise FC' },
      { time: '07:00', status: 'booked', bookedBy: 'Powerplay XI' },
      { time: '08:00', status: 'available' },
      { time: '09:00', status: 'available' },
      { time: '10:00', status: 'available' },
      { time: '11:00', status: 'booked', bookedBy: 'Strikers Club' },
      { time: '12:00', status: 'booked', bookedBy: 'Office League' },
      { time: '13:00', status: 'available' },
      { time: '14:00', status: 'maintenance' },
      { time: '15:00', status: 'available' },
    ],
  },
  {
    day: 'Wednesday',
    date: 'Feb 18',
    slots: [
      { time: '06:00', status: 'available' },
      { time: '07:00', status: 'available' },
      { time: '08:00', status: 'booked', bookedBy: 'School Team' },
      { time: '09:00', status: 'booked', bookedBy: 'District Squad' },
      { time: '10:00', status: 'booked', bookedBy: 'Premier 5s' },
      { time: '11:00', status: 'available' },
      { time: '12:00', status: 'available' },
      { time: '13:00', status: 'available' },
      { time: '14:00', status: 'booked', bookedBy: 'Evening Warriors' },
      { time: '15:00', status: 'booked', bookedBy: 'Falcons FC' },
    ],
  },
  {
    day: 'Thursday',
    date: 'Feb 19',
    slots: [
      { time: '06:00', status: 'available' },
      { time: '07:00', status: 'maintenance' },
      { time: '08:00', status: 'available' },
      { time: '09:00', status: 'booked', bookedBy: 'Downtown Club' },
      { time: '10:00', status: 'available' },
      { time: '11:00', status: 'available' },
      { time: '12:00', status: 'booked', bookedBy: 'Powerplay XI' },
      { time: '13:00', status: 'booked', bookedBy: 'Weekend Prep' },
      { time: '14:00', status: 'available' },
      { time: '15:00', status: 'available' },
    ],
  },
  {
    day: 'Friday',
    date: 'Feb 20',
    slots: [
      { time: '06:00', status: 'booked', bookedBy: 'Morning League' },
      { time: '07:00', status: 'booked', bookedBy: 'City Juniors' },
      { time: '08:00', status: 'booked', bookedBy: 'Falcons FC' },
      { time: '09:00', status: 'available' },
      { time: '10:00', status: 'available' },
      { time: '11:00', status: 'available' },
      { time: '12:00', status: 'booked', bookedBy: 'Office League' },
      { time: '13:00', status: 'booked', bookedBy: 'Campus Team' },
      { time: '14:00', status: 'booked', bookedBy: 'Rise FC' },
      { time: '15:00', status: 'available' },
    ],
  },
];

const statusLabel = {
  available: 'Available',
  booked: 'Booked',
  maintenance: 'Blocked',
};

const statusColor = {
  available: 'var(--success)',
  booked: 'var(--error)',
  maintenance: 'var(--warning)',
};

const SlotManagement = () => {
  const [view, setView] = useState('day');
  const [selectedDayIndex, setSelectedDayIndex] = useState(0);

  const selectedDay = WEEK_DATA[selectedDayIndex];

  const dailyStats = useMemo(() => {
    const total = selectedDay.slots.length;
    const booked = selectedDay.slots.filter((slot) => slot.status === 'booked').length;
    const available = selectedDay.slots.filter((slot) => slot.status === 'available').length;
    return { total, booked, available };
  }, [selectedDay]);

  const weeklyStats = useMemo(() => {
    const total = WEEK_DATA.reduce((sum, day) => sum + day.slots.length, 0);
    const booked = WEEK_DATA.reduce(
      (sum, day) => sum + day.slots.filter((slot) => slot.status === 'booked').length,
      0
    );
    const available = WEEK_DATA.reduce(
      (sum, day) => sum + day.slots.filter((slot) => slot.status === 'available').length,
      0
    );
    const blocked = total - booked - available;
    return { total, booked, available, blocked };
  }, []);

  return (
    <div className="page-fade">
      <div className="row-flex">
        <h1>Slot Manager</h1>
        <div className="toggle-group card" style={{ padding: '5px' }}>
          <button
            className={view === 'day' ? 'small-btn active' : 'small-btn'}
            onClick={() => setView('day')}
          >
            Day
          </button>
          <button
            className={view === 'week' ? 'small-btn active' : 'small-btn'}
            onClick={() => setView('week')}
          >
            Week
          </button>
        </div>
      </div>

      {view === 'day' ? (
        <div className="card" style={{ marginTop: '1.5rem' }}>
          <div className="slot-day-selector">
            {WEEK_DATA.map((day, index) => (
              <button
                key={day.day}
                className={selectedDayIndex === index ? 'small-btn active' : 'small-btn'}
                onClick={() => setSelectedDayIndex(index)}
              >
                {day.day.slice(0, 3)}
              </button>
            ))}
          </div>

          <h3 style={{ marginTop: '1rem' }}>
            {selectedDay.day}, {selectedDay.date}
          </h3>
          <p className="game-meta">
            {dailyStats.booked} booked | {dailyStats.available} available | {dailyStats.total} total
          </p>

          <div
            className="slot-grid-large"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(170px, 1fr))',
              gap: '15px',
              marginTop: '1rem',
            }}
          >
            {selectedDay.slots.map((slot) => (
              <div key={slot.time} className="slot-card card" style={{ textAlign: 'center' }}>
                <b>{slot.time}</b>
                <div style={{ color: statusColor[slot.status], fontSize: '0.82rem', marginTop: '0.3rem' }}>
                  {statusLabel[slot.status]}
                </div>
                <div style={{ fontSize: '0.74rem', marginTop: '0.3rem', color: 'var(--text-muted)' }}>
                  {slot.bookedBy || 'Open for booking'}
                </div>
                <button className="text-btn">Edit</button>
              </div>
            ))}
          </div>
          <button className="main-btn" style={{ marginTop: '2rem' }}>
            Bulk Create Slots
          </button>
        </div>
      ) : (
        <div className="card" style={{ marginTop: '1.5rem' }}>
          <h3>Weekly Availability Overview</h3>
          <p className="game-meta">
            {weeklyStats.booked} booked | {weeklyStats.available} available | {weeklyStats.blocked} blocked
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
              gap: '12px',
              marginTop: '1rem',
            }}
          >
            {WEEK_DATA.map((day) => {
              const booked = day.slots.filter((slot) => slot.status === 'booked').length;
              const available = day.slots.filter((slot) => slot.status === 'available').length;
              const blocked = day.slots.filter((slot) => slot.status === 'maintenance').length;

              return (
                <div key={day.day} className="card slot-day-summary">
                  <div className="row-flex">
                    <h4>{day.day}</h4>
                    <span className="badge">{day.date}</span>
                  </div>
                  <p className="game-meta">Booked: {booked}</p>
                  <p className="game-meta">Available: {available}</p>
                  <p className="game-meta">Blocked: {blocked}</p>
                  <button
                    className="text-btn"
                    onClick={() => {
                      setSelectedDayIndex(WEEK_DATA.findIndex((item) => item.day === day.day));
                      setView('day');
                    }}
                  >
                    Open Day View
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default SlotManagement;
