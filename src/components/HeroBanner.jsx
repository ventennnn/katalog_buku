import React from 'react';
import './HeroBanner.css';

const HeroBanner = ({ onShopNow }) => {
  return (
    <div className="hero-banner">
      <div className="banner-content">
        <div className="banner-text">
          <div className="promo-badge">
            <span>Diskon hingga</span>
            <strong>70%</strong>
          </div>
          <h1>Acara Sato dengan harga spesial!</h1>
          <p>Eksklusif di BookStore</p>
          <div className="date-badge">
            <span>21 – 24 Oktober 2025</span>
          </div>
          <button className="shop-now-btn" onClick={onShopNow}>
            Beli Sekarang
          </button>
        </div>
        <div className="banner-image">
          <div className="placeholder-image">
            {/* GANTI_DENGAN_GAMBAR_BANNER */}
            <span>🎯 BANNER PROMO</span>
            <p>Image URL: BANNER_IMAGE_URL</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;