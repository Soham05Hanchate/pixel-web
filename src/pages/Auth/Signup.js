import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const [role, setRole] = useState('player');
  const navigate = useNavigate();

  return (
    <div className="auth-view">
      <div className="auth-header-section">
        <h1>Create Account</h1>
        <p>Join TurfConnect to book venues or manage your own turf business.</p>
      </div>

      <form
        className="auth-card-modern-signup"
        onSubmit={(e) => {
          e.preventDefault();
          if (role === 'player') {
            navigate('/p/dashboard');
          } else {
            navigate('/v/dashboard');
          }
        }}
      >
        <div className="role-selection-pill">
          <button
            type="button"
            className={role === 'player' ? 'active' : ''}
            onClick={() => setRole('player')}
          >
            I&apos;m a Player
          </button>
          <button
            type="button"
            className={role === 'provider' ? 'active' : ''}
            onClick={() => setRole('provider')}
          >
            I&apos;m a Provider
          </button>
        </div>

        <div className="form-group-modern">
          <label>Full Name</label>
          <input type="text" placeholder="John Doe" required />
        </div>

        <div className="form-group-modern">
          <label>Email Address</label>
          <input type="email" placeholder="john@example.com" required />
        </div>

        <div className="form-group-modern">
          <label>Password</label>
          <input type="password" placeholder="Create a strong password" required />
        </div>

        <button type="submit" className="signin-btn-large">
          <span>Sign Up as {role.charAt(0).toUpperCase() + role.slice(1)}</span>
        </button>

        <p className="signup-prompt">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
