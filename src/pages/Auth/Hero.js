import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <main className="hero-page">
      <video className="hero-video" autoPlay loop muted playsInline>
        <source src="/media/hero-background.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay" />

      <div className="hero-content">
        <h1>TurfConnect</h1>
        <button
          type="button"
          className="hero-signin-btn"
          onClick={() => navigate('/login')}
        >
          Sign In
        </button>
      </div>
    </main>
  );
};

export default Hero;