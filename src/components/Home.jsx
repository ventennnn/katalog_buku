import React from 'react';
import './Home.css';

function Home({ onPageChange, onBookClick, onAddToCart }) {
  // Sample books data dengan gambar
  const featuredBooks = [
    {
      id: 1,
      title: 'Senja Kelana',
      author: 'Linar Koneca', 
      price: 'Rp81.000',
      originalPrice: 'Rp119.000',
      rating: 4.5,
      isBestseller: true,
      isNew: true,
      imageUrl: 'https://i.pinimg.com/736x/de/7f/82/de7f8252d5272628d527f86ab03206d7.jpg'
    },
    {
      id: 2,
      title: 'Cantik Itu Luka',
      author: 'Sari Dewi',
      price: 'Rp88.000', 
      originalPrice: 'Rp120.000',
      rating: 4.6,
      isBestseller: true,
      isNew: false,
      imageUrl: 'https://i.pinimg.com/736x/b4/39/48/b439481027ddae82a1839bda635320b2.jpg'
    },
    {
      id: 3,
      title: 'Lovers By The Sea',
      author: 'Linar Koneca',
      price: 'Rp83.240',
      originalPrice: 'Rp124.860', 
      rating: 4.7,
      isBestseller: true,
      isNew: false,
      imageUrl: 'https://i.pinimg.com/1200x/27/a6/91/27a691aeef342fd5100bd16de3829e72.jpg'
    },
    {
      id: 4,
      title: 'Hujan Bulan Juni',
      author: 'Sapardi Djoko Damono',
      price: 'Rp65.000',
      originalPrice: 'Rp85.000',
      rating: 4.9,
      isBestseller: true,
      isNew: false,
      imageUrl: 'https://i.pinimg.com/736x/1e/a8/af/1ea8af0e9312ab23b45eac2e47163db8.jpg'
    }
  ];

  // Categories dengan gambar
  const categories = [
    { 
      id: 'mystery', 
      name: 'Sinkiki Mystery Box', 
      icon: '🎁',
      imageUrl: 'https://i.pinimg.com/736x/37/23/90/372390f6f78977440d810380c9b08eaf.jpg'
    },
    { 
      id: 'seporti', 
      name: 'Seporti Mie Ayam', 
      icon: '🍜',
      imageUrl: 'https://i.pinimg.com/736x/34/25/10/3425103854b38b45afd4f223787a0852.jpg'
    },
    { 
      id: 'kukiko', 
      name: 'Kukiko Hover UFO TSMODs', 
      icon: '🚀',
      imageUrl: 'https://i.pinimg.com/1200x/9b/1a/26/9b1a266ceea668cc29fca79242b92203.jpg'
    },
    { 
      id: 'laut', 
      name: 'Laut Bereceria', 
      icon: '🌊',
      imageUrl: 'https://i.pinimg.com/1200x/d4/62/77/d46277481b0a51cbfe132aa587ee61db.jpg'
    }
  ];

  return (
    <div className="home-gramedia">
      {/* HERO BANNER - SESUAI STYLE KAMU */}
      <div className="hero-banner-rame">
        <div className="banner-content-rame">
          <div className="banner-main">
            <div className="promo-badge-rame">
              <span className="promo-text">Diskon hingga</span>
              <span className="promo-percent">70%</span>
            </div>
            <h1 className="banner-title">Acara Sato dengan harga spesial!</h1>
            <p className="banner-subtitle">Eksklusif di BookStore</p>
            <div className="date-badge-rame">
              <span>21 – 24 Oktober 2025</span>
            </div>
            <button 
              className="cta-button-rame"
              onClick={() => onPageChange('katalog')}
            >
              Beli Sekarang
            </button>
          </div>
          
          <div className="banner-side">
            <div className="quick-nav">
              <h3>Akses Cepat</h3>
              <div className="quick-nav-grid">
                <div className="quick-nav-item" onClick={() => onPageChange('katalog')}>
                  <span className="nav-icon">📦</span>
                  <span className="nav-text">Pro Order</span>
                </div>
                <div className="quick-nav-item" onClick={() => onPageChange('katalog')}>
                  <span className="nav-icon">🆕</span>
                  <span className="nav-text">New Arrival</span>
                </div>
                <div className="quick-nav-item" onClick={() => onPageChange('katalog')}>
                  <span className="nav-icon">📱</span>
                  <span className="nav-text">Gramedia Digital</span>
                </div>
                <div className="quick-nav-item" onClick={() => onPageChange('katalog')}>
                  <span className="nav-icon">📚</span>
                  <span className="nav-text">E-book</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FLOATING ELEMENTS */}
        <div className="floating-books">
          <div className="floating-book book-1">📖</div>
          <div className="floating-book book-2">✨</div>
          <div className="floating-book book-3">💫</div>
        </div>
      </div>

      {/* QUICK CATEGORIES - SESUAI STYLE KAMU */}
      <div className="categories-section">
        <div className="categories-container">
          <div className="section-header-simple">
            <h2>Kategori Terlaris</h2>
            <button 
              className="see-all-button"
              onClick={() => onPageChange('katalog')}
            >
              Lihat Semua →
            </button>
          </div>
          <div className="categories-grid-simple">
            {categories.map((category) => (
              <div 
                key={category.id}
                className="category-item-simple"
                onClick={() => onPageChange('katalog')}
              >
                <div className="category-image-container">
                  <img 
                    src={category.imageUrl} 
                    alt={category.name}
                    className="category-image"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="category-icon-fallback">
                    {category.icon}
                  </div>
                </div>
                <span className="category-name-simple">{category.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* BESTSELLER BOOKS - SESUAI STYLE KAMU */}
      <div className="books-section">
        <div className="books-container">
          <div className="section-header-simple">
            <h2>Buku Terlaris</h2>
            <button 
              className="see-all-button"
              onClick={() => onPageChange('katalog')}
            >
              Lihat Semua →
            </button>
          </div>

          <div className="books-grid-simple">
            {featuredBooks.map((book) => (
              <div 
                key={book.id}
                className="book-card-simple"
                onClick={() => onBookClick(book)}
              >
                <div className="book-image-container">
                  <img 
                    src={book.imageUrl} 
                    alt={book.title}
                    className="book-image-real"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="book-image-fallback">
                    <span>📚</span>
                  </div>
                  {/* BADGES */}
                  <div className="book-badges">
                    {book.isBestseller && <span className="badge bestseller">BESTSELLER</span>}
                    {book.isNew && <span className="badge new">BARU</span>}
                  </div>
                </div>
                <div className="book-info-simple">
                  <h3 className="book-title-simple">{book.title}</h3>
                  <p className="book-author-simple">oleh {book.author}</p>
                  <div className="book-price-simple">
                    <span className="current-price-simple">{book.price}</span>
                    {book.originalPrice && (
                      <span className="original-price-simple">{book.originalPrice}</span>
                    )}
                  </div>
                  <button 
                    className="cart-button-simple"
                    onClick={(e) => {
                      e.stopPropagation();
                      onAddToCart(book);
                    }}
                  >
                    🛒 Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* REKOMENDASI BRAND - SESUAI CONTOH KAMU */}
      <div className="brand-section">
        <div className="brand-container">
          <div className="section-header-simple">
            <h2>Rekomendasi Brand Pilihan</h2>
            <button 
              className="see-all-button"
              onClick={() => onPageChange('katalog')}
            >
              Lihat Semua →
            </button>
          </div>
          
          <div className="brand-grid">
            <div className="brand-card">
              <div className="brand-image">
                <span>🖊️</span>
              </div>
              <div className="brand-info">
                <h4>Oromeda Kerfos Concorde Contour S Blue 802L</h4>
                <div className="brand-price">
                  <span className="current-price">Rp15.000</span>
                  <span className="original-price">Rp34.000</span>
                </div>
              </div>
            </div>
            
            <div className="brand-card">
              <div className="brand-image">
                <span>✏️</span>
              </div>
              <div className="brand-info">
                <h4>Gramsala Tack II Faber Castell SOCr White</h4>
                <div className="brand-price">
                  <span className="current-price">Rp14.000</span>
                  <span className="original-price">Rp17.000</span>
                </div>
              </div>
            </div>
            
            <div className="brand-card">
              <div className="brand-image">
                <span>📒</span>
              </div>
              <div className="brand-info">
                <h4>Gramsala Concorde Lodi F4 90 Gam - Kerfos Folo...</h4>
                <div className="brand-price">
                  <span className="current-price">Rp114.500</span>
                </div>
              </div>
            </div>
            
            <div className="brand-card">
              <div className="brand-image">
                <span>📏</span>
              </div>
              <div className="brand-info">
                <h4>Oromeda MAX - Stogler HD-IOV</h4>
                <div className="brand-price">
                  <span className="current-price">Rp103.500</span>
                  <span className="original-price">Rp59.000</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Home);