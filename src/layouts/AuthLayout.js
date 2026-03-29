import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';

const AuthLayout = () => {
  const location = useLocation();
  const isSignupRoute = location.pathname === '/signup';

  return (
    <div className={`auth-page-wrapper ${isSignupRoute ? 'signup-theme' : ''}`}>
      <div className="auth-shell">
        <section className="auth-brand-panel">
          <div className="brand-chip">Sports Booking Platform</div>
          <h1 className="brand-title">TurfConnect</h1>
          <p className="brand-subtitle">
            Find premium venues, book instantly, and play with your crew.
          </p>
          <div className="brand-stats">
            <div className="brand-stat">
              <strong>120+</strong>
              <span>Partner Turfs</span>
            </div>
            <div className="brand-stat">
              <strong>25K+</strong>
              <span>Bookings</span>
            </div>
            <div className="brand-stat">
              <strong>4.8</strong>
              <span>User Rating</span>
            </div>
          </div>
        </section>
        <section className="auth-form-panel">
        <Outlet />
        </section>
      </div>
    </div>
  );
};

export default AuthLayout;
