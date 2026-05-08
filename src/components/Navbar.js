import React from 'react';
import { FiSearch, FiBell, FiChevronDown, FiUser } from 'react-icons/fi';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-title">
        <h1>Dashboard</h1>
        <span>Department Overview</span>
      </div>

      <div className="navbar-actions">
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <FiSearch className="search-icon" />
        </div>

        <button className="notification-btn" aria-label="Notifications">
          <FiBell />
        </button>

        <div className="profile-section">
          <div className="avatar">
            <FiUser />
          </div>
          <div className="profile-info">
            <span>Admin</span>
            <FiChevronDown className="chevron-down" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
