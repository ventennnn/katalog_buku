// components/Wishlist.jsx
import React, { useState } from 'react';
import './Wishlist.css';

const Wishlist = ({ onBack, onBookClick }) => {
  // Data dummy untuk wishlist
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      title: 'Teluk Alaska',
      author: 'Ahmad Wijaya',
      price: 75000,
      originalPrice: 100000,
      imageUrl: 'https://i.pinimg.com/736x/d0/94/bb/d094bbb4d4607645c6eee4ed67d4733c.jpg',
      rating: 4.3,
      isBestseller: false,
      isNew: true,
      inStock: true
    },
    {
      id: 2,
      title: 'Laskar Pelangi',
      author: 'Andrea Hirata',
      price: 78000,
      originalPrice: 99000,
      imageUrl: 'https://i.pinimg.com/736x/7a/8b/9c/7a8b9c8f8e8d8f8e8d8f8e8d8f8e8d8f.jpg',
      rating: 4.7,
      isBestseller: true,
      isNew: false,
      inStock: true
    },
    {
      id: 3,
      title: 'The Alchemist',
      author: 'Paulo Coelho',
      price: 85000,
      originalPrice: 105000,
      imageUrl: 'https://i.pinimg.com/736x/4a/8b/7c/4a8b7c8f8e8d8f8e8d8f8e8d8f8e8d8f.jpg',
      rating: 4.8,
      isBestseller: true,
      isNew: false,
      inStock: false
    },
    {
      id: 4,
      title: 'Seni Berpikir Positif',
      author: 'Dewi Lestari',
      price: 75000,
      originalPrice: 95000,
      imageUrl: 'https://i.pinimg.com/736x/3a/8b/9c/3a8b9c8f8e8d8f8e8d8f8e8d8f8e8d8f.jpg',
      rating: 4.6,
      isBestseller: true,
      isNew: true,
      inStock: true
    }
  ]);

  const removeFromWishlist = (id) => {
    setWishlistItems(wishlistItems.filter(item => item.id !== id));
  };

  const moveToCart = (book) => {
    // Logic untuk pindah ke cart akan ditambahkan nanti
    alert(`Buku "${book.title}" dipindahkan ke keranjang!`);
    removeFromWishlist(book.id);
  };

  return (
    <div className="wishlist-page">
      <div className="wishlist-container">
        <div className="wishlist-header">
          <button className="back-btn" onClick={onBack}>
            <i className="fas fa-arrow-left"></i> Kembali
          </button>
          <h1>❤️ Wishlist Saya</h1>
          <span className="wishlist-count">{wishlistItems.length} items</span>
        </div>

        <div className="wishlist-content">
          {wishlistItems.length === 0 ? (
            <div className="empty-wishlist">
              <div className="empty-icon">❤️</div>
              <h3>Wishlist Kamu Kosong</h3>
              <p>Tambahkan buku yang kamu sukai ke wishlist untuk menyimpannya nanti!</p>
              <button className="shop-btn" onClick={onBack}>
                Jelajahi Buku
              </button>
            </div>
          ) : (
            <>
              <div className="wishlist-stats">
                <div className="stat-card">
                  <div className="stat-icon">📚</div>
                  <div className="stat-info">
                    <div className="stat-number">{wishlistItems.length}</div>
                    <div className="stat-label">Total Buku</div>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon">⭐</div>
                  <div className="stat-info">
                    <div className="stat-number">
                      {wishlistItems.filter(item => item.isBestseller).length}
                    </div>
                    <div className="stat-label">Bestseller</div>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon">🆕</div>
                  <div className="stat-info">
                    <div className="stat-number">
                      {wishlistItems.filter(item => item.isNew).length}
                    </div>
                    <div className="stat-label">Buku Baru</div>
                  </div>
                </div>
              </div>

              <div className="wishlist-grid">
                {wishlistItems.map(book => (
                  <div key={book.id} className="wishlist-item">
                    <div className="item-image" onClick={() => onBookClick(book)}>
                      <img src={book.imageUrl} alt={book.title} />
                      <div className="item-badges">
                        {book.isNew && <span className="badge new">BARU</span>}
                        {book.isBestseller && <span className="badge bestseller">BESTSELLER</span>}
                        {!book.inStock && <span className="badge out-of-stock">STOK HABIS</span>}
                      </div>
                      <div className="item-overlay">
                        <button className="quick-view">Lihat Detail</button>
                      </div>
                    </div>

                    <div className="item-info">
                      <h3 className="item-title" onClick={() => onBookClick(book)}>
                        {book.title}
                      </h3>
                      <p className="item-author">oleh {book.author}</p>
                      
                      <div className="item-rating">
                        <span className="stars">
                          {'★'.repeat(Math.floor(book.rating))}
                          {'☆'.repeat(5 - Math.floor(book.rating))}
                        </span>
                        <span className="rating-value">({book.rating})</span>
                      </div>

                      <div className="item-price">
                        <span className="current-price">Rp{book.price.toLocaleString('id-ID')}</span>
                        {book.originalPrice > book.price && (
                          <span className="original-price">Rp{book.originalPrice.toLocaleString('id-ID')}</span>
                        )}
                      </div>

                      <div className="item-actions">
                        <button 
                          className="action-btn move-to-cart"
                          onClick={() => moveToCart(book)}
                          disabled={!book.inStock}
                        >
                          <i className="fas fa-shopping-cart"></i>
                          + Keranjang
                        </button>
                        <button 
                          className="action-btn remove-btn"
                          onClick={() => removeFromWishlist(book.id)}
                        >
                          <i className="fas fa-trash"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;