import React from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import DashboardCard from '../components/DashboardCard';
import { FiHexagon, FiBox, FiLayers, FiCloud } from 'react-icons/fi';
import '../styles/Dashboard.css';

const Dashboard = () => {
  const cardsData = [
    {
      id: 1,
      title: '1. Hyperledger Fabric',
      icon: FiHexagon,
      stats: {
        cpu: { model: '', cores: '16 Cores' },
        gpu: { model: 'NVIDIA A100', cores: '8 Cores' },
        memory: '64 GB',
        storage: '1.2 TB SSD'
      }
    },
    {
      id: 2,
      title: '2. Hyperledger Besu',
      icon: FiBox,
      stats: {
        cpu: { model: '', cores: '12 Cores' },
        gpu: { model: 'NVIDIA T4', cores: '4 Cores' },
        memory: '32 GB',
        storage: '800 GB SSD'
      }
    },
    {
      id: 3,
      title: '3. IPFS',
      icon: FiLayers,
      stats: {
        cpu: { model: '', cores: '8 Cores' },
        gpu: { model: 'NVIDIA T4', cores: '2 Cores' },
        memory: '16 GB',
        storage: '2 TB HDD'
      }
    },
    {
      id: 4,
      title: '4. Dove App',
      icon: FiCloud,
      stats: {
        cpu: { model: '', cores: '8 Cores' },
        gpu: { model: 'NVIDIA T4', cores: '2 Cores' },
        memory: '16 GB',
        storage: '500 GB SSD'
      }
    }
  ];

  return (
    <div className="dashboard-layout">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <div className="dashboard-container">
          <div className="dashboard-grid">
            {cardsData.map(card => (
              <DashboardCard
                key={card.id}
                title={card.title}
                mainIcon={card.icon}
                stats={card.stats}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
