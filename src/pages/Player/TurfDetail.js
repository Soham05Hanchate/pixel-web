import React from 'react';
import SlotPicker from '../../components/ui/SlotPicker';

const TurfDetail = () => {
  return (
    <div className="page-fade">
      <div className="detail-header card">
        <h1>Wembley Arena</h1>
        <p>123 Stadium Way, North Side | ⭐ 4.9 (120 reviews)</p>
      </div>

      <div style={{ display: 'flex', gap: '2rem', marginTop: '2rem' }}>
        <div style={{ flex: 2 }}>
          <div className="card" style={{ height: '300px', marginBottom: '1rem' }}>
            <p style={{ textAlign: 'center', paddingTop: '130px', color: '#888' }}>[ Image Gallery Component ]</p>
          </div>
          <div className="card">
            <h3>Amenities</h3>
            <div className="row-flex" style={{ justifyContent: 'flex-start', gap: '15px' }}>
              <span>🚿 Showers</span> <span>🚗 Parking</span> <span>📶 WiFi</span>
            </div>
          </div>
        </div>

        <div style={{ flex: 1 }}>
          <div className="card">
            <h3>Select a Slot</h3>
            <SlotPicker pricePerHour={60} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TurfDetail;