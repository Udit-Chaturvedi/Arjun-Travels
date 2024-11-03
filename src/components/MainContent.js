import React from 'react';
import './MainContent.css';

const MainContent = ({ filteredCards }) => {
  return (
    <main className="main-content">
      <div className="stats-cards">
        {filteredCards.map((card, index) => (
          <div className={`card ${card.color}`} key={index}>
            <i className={`fas ${card.icon}`}></i>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default MainContent;
