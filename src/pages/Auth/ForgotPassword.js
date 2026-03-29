import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="auth-layout">
      <div className="card auth-card">
        {!submitted ? (
          <>
            <h2>Reset Password</h2>
            <p style={{ color: '#666', marginBottom: '1.5rem' }}>Enter your email and we'll send a link to reset your password.</p>
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="name@email.com" />
            </div>
            <button className="main-btn w-100" onClick={() => setSubmitted(true)}>Send Reset Link</button>
          </>
        ) : (
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '3rem' }}>📩</div>
            <h2>Check your email</h2>
            <p>We've sent password reset instructions to your inbox.</p>
            <button className="main-btn w-100" onClick={() => setSubmitted(false)} style={{marginTop: '1rem'}}>Try another email</button>
          </div>
        )}
        <p className="auth-footer"><Link to="/login">Back to Login</Link></p>
      </div>
    </div>
  );
};

export default ForgotPassword;