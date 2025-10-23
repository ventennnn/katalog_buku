import React from 'react';
import './TentangKamiPage.css';

const TentangKamiPage = ({ user }) => {
  return (
    <div className="tentang-container">
      <div className="tentang-header">
        <div className="container">
          <h1>🏢 Tentang BookVault</h1>
          <p className="welcome-text">Hi, {user?.name || 'User'}! 👋 Selamat datang di BookVault</p>
          <p className="subtitle">Menjadi destinasi terpercaya para pencinta buku sejak 2020</p>
        </div>
      </div>

      <div className="container">
        <div className="tentang-content">
          <div className="about-main">
            <div className="about-text">
              <h2>📚 Visi & Misi Kami</h2>
              <p>
                BookVault hadir untuk memenuhi kebutuhan literasi masyarakat Indonesia 
                dengan menyediakan koleksi buku terbaik dari berbagai genre. 
                Kami berkomitmen untuk memberikan pengalaman berbelanja buku yang 
                menyenangkan dan memuaskan bagi semua kalangan.
              </p>

              <div className="mission-grid">
                <div className="mission-card">
                  <div className="mission-icon">
                    <i className="fas fa-bullseye"></i>
                  </div>
                  <h3>Visi</h3>
                  <p>Menjadi platform buku online terdepan yang menginspirasi masyarakat Indonesia untuk gemar membaca</p>
                </div>

                <div className="mission-card">
                  <div className="mission-icon">
                    <i className="fas fa-flag"></i>
                  </div>
                  <h3>Misi</h3>
                  <p>Menyediakan akses mudah terhadap buku berkualitas dengan harga terjangkau untuk semua orang</p>
                </div>
              </div>
            </div>

            <div className="values-section">
              <h2>💎 Nilai-Nilai Kami</h2>
              <div className="values-grid">
                <div className="value-item">
                  <i className="fas fa-star"></i>
                  <div className="value-content">
                    <h4>Kualitas Terjamin</h4>
                    <p>Buku original dengan kualitas cetak terbaik dan bahan berkualitas</p>
                  </div>
                </div>
                
                <div className="value-item">
                  <i className="fas fa-shipping-fast"></i>
                  <div className="value-content">
                    <h4>Pengiriman Cepat</h4>
                    <p>Gratis ongkir untuk pembelian di atas Rp 150.000 ke seluruh Indonesia</p>
                  </div>
                </div>
                
                <div className="value-item">
                  <i className="fas fa-headset"></i>
                  <div className="value-content">
                    <h4>Layanan 24/7</h4>
                    <p>Customer service siap membantu kapan saja dengan respons cepat</p>
                  </div>
                </div>

                <div className="value-item">
                  <i className="fas fa-shield-alt"></i>
                  <div className="value-content">
                    <h4>Terpercaya</h4>
                    <p>Transaksi aman dan terjamin dengan sistem pembayaran yang terpercaya</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="about-stats">
            <h2>📊 Dalam Angka</h2>
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number">4+</div>
                <div className="stat-label">Tahun Pengalaman</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">10K+</div>
                <div className="stat-label">Pelanggan Setia</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">50K+</div>
                <div className="stat-label">Buku Terjual</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">98%</div>
                <div className="stat-label">Kepuasan Pelanggan</div>
              </div>
            </div>
          </div>

          <div className="team-section">
            <h2>👥 Tim Kami</h2>
            <div className="team-grid">
              <div className="team-member">
                <div className="member-avatar">
                  <i className="fas fa-user-tie"></i>
                </div>
                <h4>Budi Santoso</h4>
                <p>Founder & CEO</p>
              </div>
              
              <div className="team-member">
                <div className="member-avatar">
                  <i className="fas fa-user-graduate"></i>
                </div>
                <h4>Sari Dewi</h4>
                <p>Head of Content</p>
              </div>
              
              <div className="team-member">
                <div className="member-avatar">
                  <i className="fas fa-user-cog"></i>
                </div>
                <h4>Ahmad Wijaya</h4>
                <p>Tech Lead</p>
              </div>
              
              <div className="team-member">
                <div className="member-avatar">
                  <i className="fas fa-user-headset"></i>
                </div>
                <h4>Lisa Permata</h4>
                <p>Customer Service</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TentangKamiPage;