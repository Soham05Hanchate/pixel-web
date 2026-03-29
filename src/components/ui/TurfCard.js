import React from 'react';
import { useNavigate } from 'react-router-dom';

const TurfCard = ({ name, price, rating, location, coordinates, sport, image, onSelect, isActive = false }) => {
  const navigate = useNavigate();
  const directionsUrl = coordinates
    ? `https://www.google.com/maps/search/?api=1&query=${coordinates.lat},${coordinates.lng}`
    : null;

  return (
    <div
      className="card turf-card"
      onClick={onSelect}
      role={onSelect ? 'button' : undefined}
      tabIndex={onSelect ? 0 : undefined}
      onKeyDown={onSelect ? (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          onSelect();
        }
      } : undefined}
      style={isActive ? { borderColor: 'var(--primary)' } : undefined}
    >
      <div className="turf-img-placeholder">
        <img src={image} alt={`${sport} turf at ${name}`} loading="lazy" />
        <span className="badge">{sport}</span>
      </div>
      <div className="turf-info">
        <div className="row-flex">
          <h4>{name}</h4>
          <span className="rating">{'\u2605'} {rating}</span>
        </div>
        <p className="location">Location: {location}</p>
        {directionsUrl && (
          <a
            href={directionsUrl}
            target="_blank"
            rel="noreferrer"
            onClick={(event) => event.stopPropagation()}
            style={{ display: 'inline-block', marginTop: '0.2rem', fontSize: '0.9rem' }}
          >
            Get Directions
          </a>
        )}
        <div className="row-flex" style={{ marginTop: '1rem' }}>
          <span className="price"><b>${price}</b>/hr</span>
          <button
            className="main-btn"
            style={{ padding: '5px 12px' }}
            onClick={(event) => {
              event.stopPropagation();
              navigate('/p/discovery/detail');
            }}
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default TurfCard;
