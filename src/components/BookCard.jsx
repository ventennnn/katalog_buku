import React, { useMemo, useCallback, useState } from 'react';
import './BookCard.css';

const BookCard = React.memo(({ book, onBookClick, onAddToCart }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const discount = useMemo(() => {
    if (!book.originalPrice) return 0;
    const original = parseInt(book.originalPrice.replace(/\D/g, '')) || 0;
    const current = parseInt(book.price.replace(/\D/g, '')) || 0;
    return original > current ? Math.round(((original - current) / original) * 100) : 0;
  }, [book.originalPrice, book.price]);

  const handleClick = useCallback(() => {
    onBookClick?.(book);
  }, [book, onBookClick]);

  const handleAddToCart = useCallback((e) => {
    e.stopPropagation();
    onAddToCart?.(book);
  }, [book, onAddToCart]);

  const handleImageLoad = useCallback(() => {
    setImageLoaded(true);
    setImageError(false);
  }, []);

  const handleImageError = useCallback(() => {
    setImageError(true);
    setImageLoaded(true);
  }, []);

  const getImageUrl = useCallback(() => {
    if (imageError || !book.imageUrl) {
      return `https://via.placeholder.com/300x180/4A7C59/FFFFFF?text=${encodeURIComponent(book.title.substring(0, 20))}`;
    }
    return book.imageUrl;
  }, [book.imageUrl, book.title, imageError]);

  const renderStars = useCallback((rating) => {
    return [...Array(5)].map((_, i) => (
      <span 
        key={i} 
        className={i < Math.floor(rating) ? 'star filled' : 'star'}
      >
        ★
      </span>
    ));
  }, []);

  return (
    <div className="book-card" onClick={handleClick}>
      {/* GAMBAR FULL WIDTH */}
      <div className="book-image-container">
        {!imageLoaded && (
          <div className="image-skeleton">
            <div className="skeleton-loader"></div>
          </div>
        )}
        <img 
          src={getImageUrl()}
          alt={book.title} 
          className={`book-image ${imageLoaded ? 'loaded' : 'loading'}`}
          loading="lazy"
          decoding="async"
          onLoad={handleImageLoad}
          onError={handleImageError}
        />
        
        {/* BADGES */}
        <div className="book-badges">
          {book.isNew && <span className="badge new">BARU</span>}
          {book.isBestseller && <span className="badge bestseller">BESTSELLER</span>}
          {discount > 0 && <span className="badge discount">-{discount}%</span>}
        </div>
      </div>

      {/* CONTENT AREA */}
      <div className="book-content">
        <div className="book-info">
          <h3 className="book-title">{book.title}</h3>
          <p className="book-author">oleh {book.author}</p>
          <p className="book-description">{book.description}</p>
          
          <div className="book-rating">
            <div className="stars">
              {renderStars(book.rating)}
            </div>
            <span className="rating-value">({book.rating})</span>
          </div>
          
          <div className="book-price">
            <span className="current-price">{book.price}</span>
            {book.originalPrice && book.originalPrice !== book.price && (
              <span className="original-price">{book.originalPrice}</span>
            )}
          </div>
        </div>
        
        <div className="book-actions">
          <button className="add-to-cart" onClick={handleAddToCart}>
            🛒 Add to Cart
          </button>
          <button className="wishlist-btn">❤️</button>
        </div>
      </div>
    </div>
  );
});

BookCard.displayName = 'BookCard';

export default BookCard;