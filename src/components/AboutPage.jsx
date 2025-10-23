import React from 'react';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Tentang BookStore</h1>
            <p>Platform toko buku online terpercaya untuk para pecinta buku</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="about-content">
        <div className="container">
          <div className="about-grid">
            {/* Vision & Mission */}
            <div className="about-section">
              <h2>Selamat Datang di BookStore</h2>
              <p>
                BookStore adalah platform toko buku online yang didedikasikan untuk para pecinta buku. 
                Kami menyediakan berbagai macam buku dari berbagai genre, mulai dari novel, buku pelajaran, 
                hingga filsafat dan pemikiran.
              </p>
              
              <div className="mission-vision">
                <div className="mission">
                  <h3>📚 Misi Kami</h3>
                  <p>Menyediakan akses mudah terhadap buku berkualitas untuk semua kalangan dengan harga terjangkau.</p>
                </div>
                <div className="vision">
                  <h3>🎯 Visi Kami</h3>
                  <p>Menjadi platform buku online terdepan yang menginspirasi budaya membaca di Indonesia.</p>
                </div>
              </div>
            </div>

            {/* Company Info */}
            <div className="company-info">
              <div className="info-card">
                <h3>🏢 PT Hale Adil Sejahtera</h3>
                <p>Perusahaan yang berkomitmen untuk menyediakan buku berkualitas dan mendukung literasi Indonesia.</p>
                
                <div className="contact-info">
                  <h4>Kontak Kami</h4>
                  <div className="contact-list">
                    <div className="contact-item">
                      <span>📧 Email:</span>
                      <span>info@bookstore.com</span>
                    </div>
                    <div className="contact-item">
                      <span>📞 Telepon:</span>
                      <span>(021) 1234-5678</span>
                    </div>
                    <div className="contact-item">
                      <span>📍 Alamat:</span>
                      <span>Jl. Literasi No. 123, Jakarta</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2>Mengapa Memilih BookStore?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🚚</div>
              <h3>Gratis Pengiriman</h3>
              <p>Gratis ongkos kirim untuk pembelian di atas Rp 100.000</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>Pembayaran Aman</h3>
              <p>Berbagai metode pembayaran yang terjamin keamanannya</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📦</div>
              <h3>Pengiriman Cepat</h3>
              <p>Pesanan diproses dalam 24 jam dan dikirim dengan cepat</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💬</div>
              <h3>Bantuan 24/7</h3>
              <p>Customer service siap membantu kapan saja</p>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="payment-section">
        <div className="container">
          <h2>Metode Pembayaran</h2>
          <div className="payment-methods">
            <div className="payment-method">💳 Kartu Kredit</div>
            <div className="payment-method">🏦 Transfer Bank</div>
            <div className="payment-method">📱 E-Wallet</div>
            <div className="payment-method">💰 COD</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;