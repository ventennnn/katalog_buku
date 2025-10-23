// BookDetail.jsx - ELEGAN VERSION
import React from 'react';
import './BookDetail.css';

const BookDetail = ({ book, onBack, onAddToCart }) => {
  if (!book) {
    return (
      <div className="book-detail">
        <div className="book-not-found">
          <h2>📚 Buku tidak ditemukan</h2>
          <button onClick={onBack} className="back-btn">Kembali</button>
        </div>
      </div>
    );
  }

  // Calculate discount
  const calculateDiscount = () => {
    if (!book.originalPrice || !book.price) return 0;
    
    const original = parseInt(book.originalPrice.replace(/\D/g, ''));
    const current = parseInt(book.price.replace(/\D/g, ''));
    
    if (original <= current) return 0;
    
    return Math.round(((original - current) / original) * 100);
  };

  const discount = calculateDiscount();

  return (
    <div className="book-detail">
      <button className="back-btn" onClick={onBack}>
        <i className="fas fa-arrow-left"></i> Kembali
      </button>

      <div className="book-detail-container">
        <div className="book-image-section">
          <img src={book.imageUrl} alt={book.title} className="book-detail-image" />
          <div className="image-badges">
            {book.isNew && <span className="badge new">BARU</span>}
            {book.isBestseller && <span className="badge bestseller">BESTSELLER</span>}
          </div>
        </div>

        <div className="book-info-section">
          <h1 className="book-title">{book.title}</h1>
          <p className="book-author">✍️ oleh {book.author}</p>
          
          <div className="book-rating">
            <span className="stars">
              {'★'.repeat(Math.floor(book.rating))}
              {'☆'.repeat(5 - Math.floor(book.rating))}
            </span>
            <span className="rating-value">({book.rating})</span>
          </div>

          <p className="book-description">{book.description}</p>

          <div className="book-details-grid">
            <div className="detail-item">
              <span className="detail-label">📖 Halaman</span>
              <span className="detail-value">{book.pages} halaman</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">🌐 Bahasa</span>
              <span className="detail-value">{book.language}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">🏢 Penerbit</span>
              <span className="detail-value">{book.publisher}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">📂 Kategori</span>
              <span className="detail-value">{book.category} - {book.subcategory}</span>
            </div>
          </div>

          <div className="book-price-section">
            <div className="price-container">
              <span className="current-price">{book.price}</span>
              {book.originalPrice && book.originalPrice !== book.price && (
                <span className="original-price">{book.originalPrice}</span>
              )}
            </div>
            
            {discount > 0 && (
              <div className="discount-badge">
                💰 Hemat {discount}%
              </div>
            )}
          </div>

          <div className="book-actions">
            <button className="add-to-cart-btn" onClick={() => onAddToCart(book)}>
              <i className="fas fa-shopping-cart"></i> + Keranjang
            </button>
            <button className="wishlist-btn">
              <i className="fas fa-heart"></i> Wishlist
            </button>
            <button className="buy-now-btn">
              <i className="fas fa-bolt"></i> Beli Sekarang
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;