import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="navbar">
      <div className="logo">Turf<span>Connect</span></div>
      <div className="nav-actions">
        <button onClick={toggleTheme} className="theme-toggle">
          {isDarkMode ? '☀️ Light' : '🌙 Dark'}
        </button>
        <div className="profile-circle">JD</div>
      </div>
    </nav>
  );
};

export default Navbar;