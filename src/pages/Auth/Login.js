import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="auth-view">
      <div className="auth-header-section">
        <h1>Welcome Back</h1>
        <p>Sign in to continue booking your favorite sports venues.</p>
      </div>

      <form
        className="auth-card-modern"
        onSubmit={(e) => {
          e.preventDefault();

          // Temporary hardcoded role for testing
          const role = 'player';

          if (role === 'player') {
            navigate('/p/dashboard');
          } else {
            navigate('/v/dashboard');
          }
        }}
      >
        <div className="form-group-modern">
          <label>Email</label>
          <input type="email" placeholder="you@example.com" required />
        </div>

        <div className="form-group-modern">
          <label>Password</label>
          <div className="password-input-wrapper">
            <input
              type={showPass ? 'text' : 'password'}
              placeholder="Enter your password"
              required
            />
            <button
              type="button"
              className="eye-icon"
              onClick={() => setShowPass(!showPass)}
              aria-label="Toggle password visibility"
            >
              {showPass ? 'Hide' : 'Show'}
            </button>
          </div>
        </div>

        <div className="auth-options-row">
          <label className="checkbox-container">
            <input type="checkbox" />
            Remember me
          </label>
          <Link to="/forgot-password">Forgot password?</Link>
        </div>

        <button type="submit" className="signin-btn-large">
          <span>Sign In</span>
        </button>

        <p className="signup-prompt">
          Don&apos;t have an account? <Link to="/signup">Sign up</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
