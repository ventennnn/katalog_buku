import React, { useState, useMemo, useCallback } from 'react';
import BookCard from './BookCard';
import FilterBar from './FilterBar';
import './CatalogPage.css';

const CatalogPage = React.memo(({ books, onBookClick, onAddToCart }) => {
  const [currentFilter, setCurrentFilter] = useState('all');
  const [sortBy, setSortBy] = useState('default');

  // Optimize filtering
  const filteredBooks = useMemo(() => {
    return books.filter(book => {
      if (currentFilter === 'all') return true;
      if (currentFilter === 'new') return book.isNew;
      if (currentFilter === 'bestseller') return book.isBestseller;
      return true;
    });
  }, [books, currentFilter]);

  // Optimize sorting
  const sortedBooks = useMemo(() => {
    const booksCopy = [...filteredBooks];
    
    switch (sortBy) {
      case 'price-low':
        return booksCopy.sort((a, b) => {
          const priceA = parseInt(a.price.replace(/\D/g, '')) || 0;
          const priceB = parseInt(b.price.replace(/\D/g, '')) || 0;
          return priceA - priceB;
        });
      case 'price-high':
        return booksCopy.sort((a, b) => {
          const priceA = parseInt(a.price.replace(/\D/g, '')) || 0;
          const priceB = parseInt(b.price.replace(/\D/g, '')) || 0;
          return priceB - priceA;
        });
      case 'rating':
        return booksCopy.sort((a, b) => b.rating - a.rating);
      case 'title':
        return booksCopy.sort((a, b) => a.title.localeCompare(b.title));
      default:
        return booksCopy;
    }
  }, [filteredBooks, sortBy]);

  // Optimize handlers
  const handleFilterChange = useCallback((filter) => {
    setCurrentFilter(filter);
  }, []);

  const handleSortChange = useCallback((e) => {
    setSortBy(e.target.value);
  }, []);

  const handleResetFilters = useCallback(() => {
    setCurrentFilter('all');
    setSortBy('default');
  }, []);

  // Stats calculation
  const stats = useMemo(() => ({
    total: books.length,
    bestsellers: books.filter(b => b.isBestseller).length,
    newBooks: books.filter(b => b.isNew).length
  }), [books]);

  return (
    <div className="catalog-page">
      {/* Header Section */}
      <div className="catalog-header">
        <div className="header-content">
          <h1 className="catalog-title">📚 Semua Koleksi Buku</h1>
          <p className="catalog-subtitle">Jelajahi seluruh koleksi buku menarik kami dengan berbagai genre dan penulis terbaik</p>
        </div>
        
        <div className="catalog-stats">
          <div className="stat-card">
            <div className="stat-icon">📖</div>
            <div className="stat-info">
              <span className="stat-number">{stats.total}</span>
              <span className="stat-label">Total Buku</span>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">🔥</div>
            <div className="stat-info">
              <span className="stat-number">{stats.bestsellers}</span>
              <span className="stat-label">Bestseller</span>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">🆕</div>
            <div className="stat-info">
              <span className="stat-number">{stats.newBooks}</span>
              <span className="stat-label">Buku Baru</span>
            </div>
          </div>
        </div>
      </div>

      {/* Filter & Sort Section */}
      <div className="catalog-controls">
        <FilterBar 
          currentFilter={currentFilter}
          onFilterChange={handleFilterChange}
          totalBooks={filteredBooks.length}
        />
        
        <div className="sort-controls">
          <label htmlFor="sort-select" className="sort-label">Urutkan:</label>
          <select 
            id="sort-select"
            value={sortBy} 
            onChange={handleSortChange}
            className="sort-select"
          >
            <option value="default">Default</option>
            <option value="title">Nama A-Z</option>
            <option value="price-low">Harga Terendah</option>
            <option value="price-high">Harga Tertinggi</option>
            <option value="rating">Rating Tertinggi</option>
          </select>
        </div>
      </div>

      {/* Books Grid */}
      <div className="catalog-content">
        <div className="books-grid-header">
          <span className="results-count">
            Menampilkan {sortedBooks.length} dari {books.length} buku
            {currentFilter !== 'all' && ` (${currentFilter})`}
          </span>
        </div>

        {sortedBooks.length > 0 ? (
          <div className="books-grid">
            {sortedBooks.map((book, index) => (
              <BookCard 
                key={book.id} 
                book={book}
                onBookClick={onBookClick}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        ) : (
          <div className="no-books">
            <div className="no-books-content">
              <div className="no-books-icon">📚</div>
              <h3>Tidak ada buku yang ditemukan</h3>
              <p>Coba ubah filter atau kata kunci pencarian</p>
              <button 
                className="reset-filters-btn"
                onClick={handleResetFilters}
              >
                Reset Filter
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Loading State */}
      {books.length === 0 && (
        <div className="catalog-loading">
          <div className="loading-spinner"></div>
          <p>Memuat koleksi buku...</p>
        </div>
      )}
    </div>
  );
});

CatalogPage.displayName = 'CatalogPage';

export default CatalogPage;