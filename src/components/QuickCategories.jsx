import React from 'react';
import './QuickCategories.css';

const QuickCategories = ({ onCategoryClick }) => {
  const categories = [
    { 
      id: 'mystery-box', 
      name: 'Sinkiki Mystery Box', 
      image: 'MYSTERY_BOX_IMAGE_URL' // GANTI_URL_NANTI
    },
    { 
      id: 'seporti', 
      name: 'Seporti Mie Ayam', 
      image: 'SEPORTI_IMAGE_URL' // GANTI_URL_NANTI
    },
    { 
      id: 'kukiko', 
      name: 'Kukiko Hover UFO TSMODs', 
      image: 'KUKIKO_IMAGE_URL' // GANTI_URL_NANTI
    },
    { 
      id: 'laut', 
      name: 'Laut Bereceria', 
      image: 'LAUT_IMAGE_URL' // GANTI_URL_NANTI
    }
  ];

  return (
    <section className="quick-categories">
      <div className="section-container">
        <div className="categories-grid">
          {categories.map((category) => (
            <div 
              key={category.id}
              className="category-item"
              onClick={() => onCategoryClick(category.id)}
            >
              <div className="category-image">
                <div className="image-placeholder">
                  {/* GANTI_DENGAN_GAMBAR_KATEGORI */}
                  <span>📦</span>
                  <p>{category.name}</p>
                </div>
              </div>
              <span className="category-name">{category.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickCategories;