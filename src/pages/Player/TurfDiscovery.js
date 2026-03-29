import React, { useState, useEffect } from 'react';
import TurfCard from '../../components/ui/TurfCard';
import Skeleton from '../../components/common/Skeleton';

const TURFS = [
  {
    name: 'Wembley Arena',
    price: 60,
    rating: 4.9,
    location: 'North Side',
    coordinates: { lat: 28.6745, lng: 77.4386 },
    sport: 'Football',
    image: 'https://images.unsplash.com/photo-1551958219-acbc608c6377?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Cover Drive Ground',
    price: 55,
    rating: 4.8,
    location: 'Lakeview',
    coordinates: { lat: 12.9698, lng: 77.7499 },
    sport: 'Cricket',
    image: 'https://images.unsplash.com/photo-1624880357913-a8539238245b?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Baseline Court',
    price: 42,
    rating: 4.6,
    location: 'Downtown',
    coordinates: { lat: 19.076, lng: 72.8777 },
    sport: 'Tennis',
    image: 'https://images.unsplash.com/photo-1542144582-1ba00456b5e3?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Hoops Central',
    price: 48,
    rating: 4.7,
    location: 'East End',
    coordinates: { lat: 13.0827, lng: 80.2707 },
    sport: 'Basketball',
    image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Smash Point',
    price: 36,
    rating: 4.5,
    location: 'West Park',
    coordinates: { lat: 17.385, lng: 78.4867 },
    sport: 'Badminton',
    image: 'https://images.pexels.com/photos/2202685/pexels-photo-2202685.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
];

const TurfDiscovery = () => {
  const [price, setPrice] = useState(500);
  const [appliedMaxPrice, setAppliedMaxPrice] = useState(500);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const filteredTurfs = TURFS.filter((turf) => turf.price <= appliedMaxPrice);

  return (
    <div className="discovery-page page-fade">
      <div style={{ display: 'flex', gap: '2rem' }}>
        <aside style={{ width: '250px', height: 'fit-content' }} className="card">
          <h3 style={{ marginBottom: '1.5rem' }}>Filters</h3>

          <div className="form-group">
            <label>Sport Type</label>
            <select className="input-field" style={{ width: '100%', padding: '10px' }}>
              <option>All Sports</option>
              <option>Football</option>
              <option>Cricket</option>
              <option>Tennis</option>
              <option>Basketball</option>
              <option>Badminton</option>
            </select>
          </div>

          <div className="form-group">
            <label>Price Range: ${price}</label>
            <input
              type="range"
              min="10"
              max="1000"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              style={{ width: '100%', accentColor: 'var(--primary)' }}
            />
          </div>

          <div className="form-group">
            <label>Location</label>
            <input type="text" placeholder="Search city..." className="input-field" style={{ width: '100%', padding: '10px' }} />
          </div>

          <button
            className="main-btn w-100"
            style={{ marginTop: '1rem' }}
            onClick={() => setAppliedMaxPrice(Number(price))}
          >
            Apply Filters
          </button>
        </aside>

        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <h2>Available Turfs</h2>
            <div style={{ display: 'flex', gap: '10px' }}>
              <span style={{ fontSize: '0.9rem', color: '#666' }}>Sort by:</span>
              <select className="card" style={{ padding: '5px 10px', border: '1px solid var(--border)' }}>
                <option>Rating (High to Low)</option>
                <option>Price (Low to High)</option>
                <option>Distance</option>
              </select>
            </div>
          </div>

          <div className="turf-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
            {isLoading ? (
              [1, 2, 3].map((n) => (
                <div key={n} className="card">
                  <Skeleton type="card-img" />
                  <Skeleton type="title" />
                  <Skeleton type="text" />
                  <Skeleton type="text" />
                </div>
              ))
            ) : (
              filteredTurfs.length > 0 ? (
                filteredTurfs.map((turf) => (
                  <TurfCard
                    key={turf.name}
                    name={turf.name}
                    price={turf.price}
                    rating={turf.rating}
                    location={turf.location}
                    coordinates={turf.coordinates}
                    sport={turf.sport}
                    image={turf.image}
                  />
                ))
              ) : (
                <div className="card">
                  <p>No turfs found for the selected max cost.</p>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TurfDiscovery;

