import React, { useState } from 'react';

const SlotPicker = ({ pricePerHour }) => {
  const slots = ["04:00 PM", "05:00 PM", "06:00 PM", "07:00 PM", "08:00 PM", "09:00 PM"];
  const [selectedSlot, setSelectedSlot] = useState(null);

  return (
    <div className="slot-picker">
      <div className="slot-grid-mini">
        {slots.map(slot => (
          <button 
            key={slot}
            className={`slot-item ${selectedSlot === slot ? 'active' : ''}`}
            onClick={() => setSelectedSlot(slot)}
          >
            {slot}
          </button>
        ))}
      </div>
      
      <div className="price-calc" style={{ marginTop: '1.5rem', borderTop: '1px solid var(--border)', paddingTop: '1rem' }}>
        <div className="row-flex">
          <span>Subtotal:</span>
          <span>${selectedSlot ? pricePerHour : 0}</span>
        </div>
        <button className="main-btn w-100" style={{ marginTop: '1rem' }} disabled={!selectedSlot}>
          {selectedSlot ? `Confirm Booking for ${selectedSlot}` : 'Select a Slot'}
        </button>
      </div>
    </div>
  );
};

export default SlotPicker;