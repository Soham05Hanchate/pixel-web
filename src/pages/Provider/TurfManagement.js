import React, { useState } from 'react';

const TurfManagement = () => {
  const [images, setImages] = useState([]);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const previews = files.map(file => URL.createObjectURL(file));
    setImages(prev => [...prev, ...previews]);
  };

  return (
    <div className="page-fade">
      <h1>My Turfs</h1>
      <div className="card">
        <h3>Add New Turf</h3>
        <div className="form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <div className="form-group">
            <label>Turf Name</label>
            <input type="text" placeholder="Arena Name" />
          </div>
          <div className="form-group">
            <label>Price Per Hour</label>
            <input type="number" placeholder="$" />
          </div>
        </div>

        <div className="form-group">
          <label>Amenities</label>
          <div style={{ display: 'flex', gap: '15px' }}>
            <label><input type="checkbox" /> WiFi</label>
            <label><input type="checkbox" /> Shower</label>
            <label><input type="checkbox" /> Parking</label>
          </div>
        </div>

        <div className="form-group">
          <label>Upload Images</label>
          <input type="file" multiple onChange={handleImageChange} />
          <div className="preview-row" style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
            {images.map((src, i) => (
              <img key={i} src={src} alt="preview" style={{ width: '80px', height: '80px', borderRadius: '8px', objectFit: 'cover' }} />
            ))}
          </div>
        </div>
        <button className="main-btn">Save Turf</button>
      </div>
    </div>
  );
};

export default TurfManagement;