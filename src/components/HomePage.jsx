import React, { useState } from 'react';
import BookCard from './BookCard';
import './HomePage.css';

const HomePage = ({ books, onBookClick, onAddToCart }) => {
  const [activeCategory, setActiveCategory] = useState('all');

  // Filter books berdasarkan kategori
  const filteredBooks = activeCategory === 'all' 
    ? books 
    : books.filter(book => 
        activeCategory === 'bestseller' ? book.isBestseller :
        activeCategory === 'new' ? book.isNew :
        book.category === activeCategory
      );

  // Data untuk hero banners
  const banners = [
    {
      id: 1,
      title: "Buku Baru Terbit!",
      subtitle: "Dapatkan koleksi terbaru dengan diskon spesial",
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800",
      buttonText: "Lihat Koleksi",
      bgColor: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      id: 2,
      title: "Sale Akhir Tahun!",
      subtitle: "Diskon hingga 50% untuk semua kategori buku",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800",
      buttonText: "Beli Sekarang",
      bgColor: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    }
  ];

  // Categories untuk filter
  const categories = [
    { id: 'all', name: 'Semua Buku', count: books.length },
    { id: 'bestseller', name: 'Bestseller', count: books.filter(b => b.isBestseller).length },
    { id: 'new', name: 'Buku Baru', count: books.filter(b => b.isNew).length },
    { id: 'novel', name: 'Novel', count: books.filter(b => b.category === 'novel').length },
    { id: 'pelajaran', name: 'Pelajaran', count: books.filter(b => b.category === 'pelajaran').length },
    { id: 'filsafat', name: 'Filsafat', count: books.filter(b => b.category === 'filsafat').length }
  ];

  return (
    <div className="homepage">
      {/* Hero Carousel */}
      <div className="hero-carousel">
        {banners.map((banner, index) => (
          <div 
            key={banner.id}
            className={`hero-slide ${index === 0 ? 'active' : ''}`}
            style={{ background: banner.bgColor }}
          >
            <div className="hero-content">
              <div className="hero-text">
                <h1>{banner.title}</h1>
                <p>{banner.subtitle}</p>
                <button className="hero-cta">{banner.buttonText}</button>
              </div>
              <div className="hero-image">
                <img src={banner.image} alt={banner.title} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Category Filter */}
      <div className="category-filter">
        <div className="filter-container">
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              <span className="filter-name">{category.name}</span>
              <span className="filter-count">{category.count}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Featured Books */}
      <section className="featured-section">
        <div className="section-header">
          <h2>📚 Koleksi Buku Terpopuler</h2>
          <p>Temukan buku-buku terbaik pilihan editor</p>
        </div>

        <div className="books-grid">
          {filteredBooks.map(book => (
            <BookCard 
              key={book.id} 
              book={book}
              onBookClick={onBookClick}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>

        {filteredBooks.length === 0 && (
          <div className="no-books">
            <div className="no-books-icon">📖</div>
            <h3>Tidak ada buku ditemukan</h3>
            <p>Coba pilih kategori lain atau gunakan pencarian</p>
          </div>
        )}
      </section>

      {/* Special Offers */}
      <section className="offers-section">
        <div className="section-header">
          <h2>🔥 Penawaran Spesial</h2>
          <p>Diskon dan promo menarik untuk Anda</p>
        </div>
        
        <div className="offers-grid">
          <div className="offer-card discount">
            <div className="offer-icon">🎁</div>
            <h3>Gratis Ongkir</h3>
            <p>Minimal pembelian Rp 100.000</p>
            <span className="offer-badge">HARI INI</span>
          </div>
          
          <div className="offer-card sale">
            <div className="offer-icon">💰</div>
            <h3>Cashback 10%</h3>
            <p>Untuk semua metode pembayaran</p>
            <span className="offer-badge">TERBATAS</span>
          </div>
          
          <div className="offer-card gift">
            <div className="offer-icon">🎯</div>
            <h3>Buku Gratis</h3>
            <p>Setiap pembelian di atas Rp 200.000</p>
            <span className="offer-badge">SPESIAL</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;