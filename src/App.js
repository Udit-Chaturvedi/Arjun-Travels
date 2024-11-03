import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import UploadDocument from './components/UploadDocument';

const menuItems = [
  { name: 'financial', icon: 'fa-money-bill-wave', subItems: ['Purchase', 'Sale', 'Receipt', 'Payment', 'Journal', 'Contra'] },
  { name: 'inventory', icon: 'fa-box-open', subItems: ['Add Stock', 'Remove Stock', 'Stock Report'] },
  { name: 'vehicleTracking', icon: 'fa-truck', subItems: ['Track Vehicles', 'Vehicle History'] },
  { name: 'documents', icon: 'fa-file-alt', subItems: ['Upload Documents', 'View Documents'] },
  { name: 'vehicleCategories', icon: 'fa-tags', subItems: ['Add Category', 'View Categories'] },
  { name: 'leaveRequests', icon: 'fa-calendar-check', subItems: ['Submit Request', 'View Requests'] },
  { name: 'reports', icon: 'fa-chart-line', subItems: ['Daily Report', 'Monthly Report'] },
  { name: 'communication', icon: 'fa-comments', subItems: ['Messages', 'Notifications'] },
  { name: 'pendingTasks', icon: 'fa-tasks', subItems: ['Task 1', 'Task 2'] }
];

const cardsData = [
  { color: 'blue', title: 'Financial Overview', icon: 'fa-money-bill-wave', description: 'Manage and analyze your financial activities effectively.' },
  { color: 'green', title: 'Inventory', icon: 'fa-box-open', description: 'Track inventory levels and manage stock efficiently.' },
  { color: 'yellow', title: 'Vehicle Tracking', icon: 'fa-truck', description: 'Monitor your vehicles\' location and performance.' },
  { color: 'red', title: 'Documents', icon: 'fa-file-alt', description: 'Manage all your pending requests easily.' },
  { color: 'purple', title: 'Vehicle Categories', icon: 'fa-tags', description: 'Generate and analyze reports for better insights.' },
  { color: 'orange', title: 'Leave Request', icon: 'fa-calendar-check', description: 'Stay connected with your team and clients.' },
  { color: 'teal', title: 'Reports', icon: 'fa-chart-line', description: 'Track and manage your tasks effectively.' },
  { color: 'magenta', title: 'Communication', icon: 'fa-comments', description: 'Get detailed insights on various aspects of your business.' },
  { color: 'pink', title: 'Pending Tasks', icon: 'fa-tasks', description: 'Customize your preferences and settings.' }
];

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const darkModePreference = localStorage.getItem('isDarkMode') === 'true';
    setIsDarkMode(darkModePreference);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(prev => {
      const newMode = !prev;
      localStorage.setItem('isDarkMode', newMode);
      return newMode;
    });
  };

  const handleMenuClick = useCallback((menu) => {
    setActiveMenu(prev => (prev === menu ? null : menu));
  }, []);

  const handleSubMenuClick = (subItem) => {
    if (subItem === 'Upload Documents') {
      window.location.href = '/upload';
    } else if (subItem === 'View Documents') {
      alert(`You clicked ${subItem}`);
    }
  };

  const filteredCards = useMemo(() => 
    cardsData.filter(card => card.title.toLowerCase().includes(searchTerm.toLowerCase())),
    [searchTerm]
  );

  const toggleSidebar = () => {
    setSidebarOpen(prev => !prev);
  };

  return (
    <Router>
      <div className={`app-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
        <Header 
          logo={'./assets/logo.png'}
          toggleDarkMode={toggleDarkMode}
          isDarkMode={isDarkMode}
          toggleSidebar={toggleSidebar}
          sidebarOpen={sidebarOpen}
        />
        <Sidebar 
          menuItems={menuItems} 
          activeMenu={activeMenu} 
          handleMenuClick={handleMenuClick}
          handleSubMenuClick={handleSubMenuClick} 
          searchTerm={searchTerm} 
          setSearchTerm={setSearchTerm}
          sidebarOpen={sidebarOpen}
          isDarkMode={isDarkMode}
        />
        
        <Routes>
          <Route path="/" element={<MainContent filteredCards={filteredCards} />} />
          <Route path="/upload" element={<UploadDocument />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
