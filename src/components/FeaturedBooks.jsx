import React from 'react';
import BookCard from './BookCard';
import './FeaturedBooks.css';

const FeaturedBooks = ({ books, onBookClick, onAddToCart, onSeeAll }) => {
  if (books.length === 0) return null;

  return (
    <section className="featured-section home-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">🔥 Buku Terlaris</h2>
          <button className="see-all-btn" onClick={onSeeAll}>
            Lihat Semua <span>→</span>
          </button>
        </div>
        
        <div className="books-grid-featured">
          {books.map((book) => (
            <BookCard 
              key={book.id} 
              book={book}
              onBookClick={onBookClick}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBooks;