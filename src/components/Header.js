import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';
import logo from '../assets/logo.png'; // Adjust the file extension as needed

const Header = ({ toggleDarkMode, isDarkMode, toggleSidebar, sidebarOpen }) => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/'); // Navigate to home page
  };

  return (
    <header className={`header ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="header-logo" onClick={handleLogoClick} role="button" tabIndex={0} aria-label="Go to Home">
        <img src={logo} alt="Arjun Travels Logo" />
      </div>
      <div className="header-icons">
        <div className="header-icon message-icon" title="Messages" tabIndex={0} role="button">
          <i className="fas fa-comments"></i>
        </div>
        <div className="header-icon notification-icon" title="Notifications" tabIndex={0} role="button">
          <i className="fas fa-bell"></i>
        </div>
        <div className="header-icon user-icon" title="User Profile" tabIndex={0} role="button">
          <i className="fas fa-user"></i>
        </div>
        <div className={`toggle-button ${isDarkMode ? 'active' : ''}`} onClick={toggleDarkMode} tabIndex={0} role="button" aria-label="Toggle Dark Mode">
          <div className={`toggle-button-inner ${isDarkMode ? 'inner-active' : ''}`}></div>
        </div>
        <div className="hamburger-menu" onClick={toggleSidebar} role="button" tabIndex={0} aria-label="Toggle Sidebar">
          <div className={`bar ${sidebarOpen ? 'open' : ''}`}></div>
          <div className={`bar ${sidebarOpen ? 'open' : ''}`}></div>
          <div className={`bar ${sidebarOpen ? 'open' : ''}`}></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
