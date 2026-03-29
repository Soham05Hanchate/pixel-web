import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = ({ role }) => {
  const playerLinks = [
    { path: '/p/dashboard', label: 'Dashboard', icon: 'dash' },
    { path: '/p/discovery', label: 'Find Turfs', icon: 'search' },
    { path: '/p/bookings', label: 'My Bookings', icon: 'book' },
    { path: '/p/matchmaking', label: 'Matchmaking', icon: 'users' },
    { path: '/p/chat', label: 'Chat', icon: 'chat' },
  ];

  const providerLinks = [
    { path: '/v/dashboard', label: 'Stats', icon: 'chart' },
    { path: '/v/manage', label: 'My Turfs', icon: 'turf' },
    { path: '/v/slots', label: 'Slot Manager', icon: 'time' },
  ];

  const links = role === 'player' ? playerLinks : providerLinks;

  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) => (isActive ? 'sidebar-link active' : 'sidebar-link')}
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
