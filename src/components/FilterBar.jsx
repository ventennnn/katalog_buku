import React from 'react';
import './FilterBar.css';

const FilterBar = ({ currentFilter, onFilterChange, totalBooks, stats }) => {
  const filters = [
    { 
      key: 'all', 
      label: 'Semua Buku', 
      count: totalBooks,
      icon: '📚'
    },
    { 
      key: 'new', 
      label: 'Buku Baru', 
      count: stats?.newBooks || 0,
      icon: '🆕'
    },
    { 
      key: 'bestseller', 
      label: 'Bestseller', 
      count: stats?.bestsellers || 0,
      icon: '🔥'
    }
  ];

  return (
    <div className="filter-bar-container">
      <div className="filter-content">
        <div className="filter-header">
          <div className="filter-text">
            <h2>Koleksi Buku Kami</h2>
            <p>Temukan buku favoritmu dari koleksi terbaik kami</p>
          </div>
          
          <div className="total-books">
            <span className="total-number">{totalBooks}</span>
            <span className="total-label">Buku Tersedia</span>
          </div>
        </div>

        <div className="filter-tabs">
          {filters.map(filter => (
            <button
              key={filter.key}
              className={`filter-tab ${currentFilter === filter.key ? 'active' : ''}`}
              onClick={() => onFilterChange(filter.key)}
            >
              <span className="tab-icon">{filter.icon}</span>
              <div className="tab-info">
                <span className="tab-label">{filter.label}</span>
                <span className="tab-count">{filter.count}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterBar;