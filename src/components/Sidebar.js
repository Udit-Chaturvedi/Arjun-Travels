import React from 'react';
import './Sidebar.css';

const Sidebar = ({ menuItems, activeMenu, handleMenuClick, handleSubMenuClick, searchTerm, setSearchTerm, sidebarOpen, isDarkMode }) => {
  return (
    <nav className={`sidebar ${sidebarOpen ? 'open' : ''} ${isDarkMode ? 'dark-mode' : 'light-mode'}`} role="navigation" aria-hidden={!sidebarOpen}>
      <div className="user-info">
        <img src="https://via.placeholder.com/40" alt="User Avatar" />
        <span>Hello, Udit Chaturvedi</span>
      </div>
      <div className="search-container">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search..."
            aria-label="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <i className="fas fa-search search-icon" aria-hidden="true"></i>
        </div>
      </div>
      <ul className="sidebar-menu">
        {menuItems.map(menu => (
          <li key={menu.name} onClick={() => handleMenuClick(menu.name)} tabIndex={0} role="menuitem" aria-haspopup="true" aria-expanded={activeMenu === menu.name}>
            <i className={`fas ${menu.icon}`}></i>
            {menu.name.charAt(0).toUpperCase() + menu.name.slice(1).replace(/([A-Z])/g, ' $1')}
            {activeMenu === menu.name && (
              <ul className="sub-menu">
                {menu.subItems.map(subItem => (
                  <li key={subItem} onClick={() => handleSubMenuClick(subItem)} tabIndex={0} role="menuitem">{subItem}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
