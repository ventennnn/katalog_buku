import React from 'react';
import BookCard from './BookCard';
import './CategoryPage.css';

const CategoryPage = ({ categories, books, onBookClick, onAddToCart }) => {
  // Default categories jika tidak ada data
  const defaultCategories = [
    {
      id: 'novel',
      title: 'Novel & Fiksi', 
      description: 'Jelajahi dunia imajinasi dengan koleksi novel terbaik'
    },
    {
      id: 'romance', 
      title: 'Romantis',
      description: 'Cerita cinta dan hubungan yang mengharukan'
    },
    {
      id: 'mystery',
      title: 'Misteri & Thriller',
      description: 'Teka-teki dan ketegangan yang memikat'
    },
    {
      id: 'business',
      title: 'Bisnis & Ekonomi', 
      description: 'Pengembangan diri dan strategi bisnis'
    },
    {
      id: 'science',
      title: 'Sains & Teknologi',
      description: 'Penemuan dan inovasi terkini'
    },
    {
      id: 'biography',
      title: 'Biografi & Sejarah',
      description: 'Kisah hidup dan peristiwa bersejarah'
    }
  ];

  const displayCategories = categories && categories.length > 0 ? categories : defaultCategories;

  const getBooksByCategory = (categoryId) => {
    return books.filter(book => book.category === categoryId);
  };

  const handleViewMore = (category) => {
    // Navigasi ke halaman kategori detail atau filter
    console.log('View more:', category);
  };

  return (
    <div className="category-page">
      {/* Header */}
      <div className="category-header">
        <h1>📂 Kategori Buku</h1>
        <p>Temukan buku favoritmu berdasarkan kategori</p>
      </div>

      {/* Categories List */}
      <div className="categories-grid">
        {displayCategories.map(category => {
          const categoryBooks = getBooksByCategory(category.id);
          
          return (
            <div key={category.id} className="category-section">
              {/* Category Header */}
              <div className="category-title">
                <h2>{category.title}</h2>
                <span className="book-count">{categoryBooks.length} buku</span>
              </div>
              
              {/* Category Description */}
              <p className="category-description">{category.description}</p>
              
              {/* Books Grid */}
              <div className="category-books">
                {categoryBooks.slice(0, 4).map(book => (
                  <BookCard 
                    key={book.id} 
                    book={book}
                    onBookClick={onBookClick}
                    onAddToCart={onAddToCart}
                  />
                ))}
                
                {/* Placeholder jika tidak ada buku */}
                {categoryBooks.length === 0 && (
                  <div className="no-books-placeholder">
                    <p>Belum ada buku dalam kategori ini</p>
                  </div>
                )}
              </div>
              
              {/* View More Button */}
              {categoryBooks.length > 4 && (
                <div className="view-more">
                  <button 
                    className="view-more-btn"
                    onClick={() => handleViewMore(category)}
                  >
                    Lihat {categoryBooks.length - 4} buku lainnya →
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryPage;