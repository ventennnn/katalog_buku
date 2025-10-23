import React from 'react';
import './HeroSection.css';

const HeroSection = ({ onExploreClick }) => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Selamat Datang di BookStore 📚</h1>
          <p>Temukan dunia literasi yang tak terbatas. Jelajahi koleksi buku terbaik dari berbagai genre.</p>
          <div className="hero-actions">
            <button className="hero-btn primary" onClick={onExploreClick}>
              Jelajahi Koleksi
            </button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-image">
            <div className="floating-books">
              <div className="book book-1">📖</div>
              <div className="book book-2">✨</div>
              <div className="book book-3">💫</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;