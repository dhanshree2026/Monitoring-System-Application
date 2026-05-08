import React from 'react';
import { 
  FiHome, 
  FiGrid, 
  FiActivity, 
  FiBell, 
  FiFileText, 
  FiSettings, 
  FiUsers, 
  FiFile, 
  FiLogOut,
  FiMonitor
} from 'react-icons/fi';
import '../styles/Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <FiMonitor className="sidebar-logo-icon" />
        <div className="sidebar-logo-text">
          <span className="main">MONITORING</span>
          <span className="sub">DASHBOARD</span>
        </div>
      </div>

      <nav className="sidebar-nav">
        <a href="#" className="sidebar-nav-item active">
          <FiHome className="icon" /> Dashboard
        </a>
        <a href="#" className="sidebar-nav-item">
          <FiGrid className="icon" /> Departments
        </a>
        <a href="#" className="sidebar-nav-item">
          <FiActivity className="icon" /> Monitoring
        </a>
        <a href="#" className="sidebar-nav-item">
          <FiBell className="icon" /> Alerts
        </a>
        <a href="#" className="sidebar-nav-item">
          <FiFileText className="icon" /> Reports
        </a>
        <a href="#" className="sidebar-nav-item">
          <FiSettings className="icon" /> Settings
        </a>
        <a href="#" className="sidebar-nav-item">
          <FiUsers className="icon" /> Users
        </a>
        <a href="#" className="sidebar-nav-item">
          <FiFile className="icon" /> Logs
        </a>
      </nav>

      <div className="sidebar-logout">
        <a href="#" className="sidebar-nav-item">
          <FiLogOut className="icon" /> Logout
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
