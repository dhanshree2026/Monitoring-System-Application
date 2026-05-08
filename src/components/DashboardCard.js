import React from 'react';
import { FiCpu, FiMonitor, FiDatabase, FiHardDrive, FiArrowRight } from 'react-icons/fi';
import '../styles/DashboardCard.css';

const DashboardCard = ({ title, mainIcon: MainIcon, stats }) => {
  return (
    <div className="dashboard-card">
      <div className="card-header">
        <div className="card-icon-wrapper">
          <MainIcon />
        </div>
        <h2 className="card-title">{title}</h2>
      </div>

      <div className="card-stats">
        <div className="stat-row">
          <div className="stat-label">
            <FiCpu className="stat-label-icon" />
            <span>CPU</span>
          </div>
          <div className="stat-values">
            <span className="stat-value-sub">{stats.cpu.model}</span>
            <span className="stat-value-main">{stats.cpu.cores}</span>
          </div>
        </div>

        <div className="stat-row">
          <div className="stat-label">
            <FiMonitor className="stat-label-icon" />
            <span>GPU</span>
          </div>
          <div className="stat-values">
            <span className="stat-value-sub">{stats.gpu.model}</span>
            <span className="stat-value-main">{stats.gpu.cores}</span>
          </div>
        </div>

        <div className="stat-row">
          <div className="stat-label">
            <FiDatabase className="stat-label-icon" />
            <span>Memory</span>
          </div>
          <div className="stat-values">
            <span className="stat-value-sub"></span>
            <span className="stat-value-main">{stats.memory}</span>
          </div>
        </div>

        <div className="stat-row">
          <div className="stat-label">
            <FiHardDrive className="stat-label-icon" />
            <span>Storage</span>
          </div>
          <div className="stat-values">
            <span className="stat-value-sub"></span>
            <span className="stat-value-main">{stats.storage}</span>
          </div>
        </div>
      </div>

      <div className="card-footer">
        <a href="#" className="view-more-btn">
          View more <FiArrowRight className="view-more-icon" />
        </a>
      </div>
    </div>
  );
};

export default DashboardCard;
