import React from 'react';
import './CategoryGrid.css';

const CategoryGrid = ({ onCategoryClick }) => {
  const categories = [
    { id: 'all', name: 'Semua Buku', icon: '📚', count: 156 },
    { id: 'novel', name: 'Novel', icon: '📖', count: 45 },
    { id: 'romance', name: 'Romantis', icon: '💖', count: 32 },
    { id: 'mystery', name: 'Misteri', icon: '🕵️', count: 28 },
    { id: 'fiction', name: 'Fiksi', icon: '✨', count: 51 },
    { id: 'biography', name: 'Biografi', icon: '👤', count: 19 },
    { id: 'business', name: 'Bisnis', icon: '💼', count: 23 },
    { id: 'science', name: 'Sains', icon: '🔬', count: 17 }
  ];

  return (
    <div className="category-grid-simple">
      {categories.map((category) => (
        <div
          key={category.id}
          className="category-item-simple"
          onClick={() => onCategoryClick(category)}
        >
          <div className="category-icon-simple">
            {category.icon}
          </div>
          <div className="category-text">
            <div className="category-name">{category.name}</div>
            <div className="category-count">{category.count} buku</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryGrid;