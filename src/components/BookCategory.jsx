import React from 'react';
import BookCard from './BookCard';
import './BookCategory.css';

const BookCategory = ({ category, books, onBookClick }) => {
  if (books.length === 0) return null;

  return (
    <section className="book-category">
      <div className="category-header">
        <div className="category-info">
          <h3>{category.title}</h3>
          <p>{category.description}</p>
        </div>
        <span className="book-count">{books.length} buku</span>
      </div>

      <div className="subcategory-tags">
        {category.subcategories.map(sub => (
          <span key={sub} className="subcategory-tag">{sub}</span>
        ))}
      </div>

      <div className="books-grid">
        {books.map(book => (
          <BookCard 
            key={book.id} 
            book={book} 
            onBookClick={onBookClick}
          />
        ))}
      </div>
    </section>
  );
};

export default BookCategory;