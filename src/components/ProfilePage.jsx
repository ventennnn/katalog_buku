import React from 'react';
import './ProfilePage.css';

const ProfilePage = () => {
  // Data user
  const user = {
    name: "Venman",
    email: "venman@yandex.com", 
    bio: "Anta tour of real estate",
    location: "Jabella, Indonesia",
    phone: "+62 812-3456-7890",
    joinDate: "Januari 2024"
  };

  // Stats
  const stats = {
    booksRead: 24,
    reading: 3,
    wishlist: 12
  };

  // Activities
  const activities = [
    {
      id: 1,
      icon: "🏪",
      title: "Saya Koon",
      desc: "Anta market hub",
      time: "16:13 - 24 Juni 2024"
    },
    {
      id: 2, 
      icon: "📰",
      title: "Cotta ta, Lair te laoit!",
      desc: "Anta newsstream",
      time: "15:30 - 23 Juni 2024"
    },
    {
      id: 3,
      icon: "📰", 
      title: "Tuk Asao",
      desc: "Anta newsstream state rules",
      time: "14:45 - 22 Juni 2024"
    }
  ];

  return (
    <div className="profile-page">
      {/* Header */}
      <div className="profile-header">
        <h1>Profile Saya</h1>
        <p>Kelola informasi profil Anda</p>
      </div>

      <div className="profile-container">
        {/* Sidebar - Profile Info */}
        <div className="profile-sidebar">
          {/* User Card */}
          <div className="user-card">
            <div className="user-avatar">
              <div className="avatar">👤</div>
              <button className="edit-avatar">✏️</button>
            </div>
            
            <h2 className="user-name">{user.name}</h2>
            <p className="user-email">{user.email}</p>

            {/* Bio */}
            <div className="user-bio">
              <h4>📝 Tentang Saya</h4>
              <p>{user.bio}</p>
            </div>

            {/* Info */}
            <div className="user-info">
              <div className="info-item">
                <span className="icon">📍</span>
                <div>
                  <div className="label">Lokasi</div>
                  <div className="value">{user.location}</div>
                </div>
              </div>
              
              <div className="info-item">
                <span className="icon">📞</span>
                <div>
                  <div className="label">Telepon</div>
                  <div className="value">{user.phone}</div>
                </div>
              </div>
              
              <div className="info-item">
                <span className="icon">📅</span>
                <div>
                  <div className="label">Bergabung</div>
                  <div className="value">{user.joinDate}</div>
                </div>
              </div>
            </div>

            <button className="edit-btn">✏️ Edit Profil</button>
          </div>

          {/* Stats Card */}
          <div className="stats-card">
            <h3>📊 Statistik Membaca</h3>
            <div className="stats">
              <div className="stat">
                <div className="number">{stats.booksRead}</div>
                <div className="label">Buku Dibaca</div>
              </div>
              <div className="stat">
                <div className="number">{stats.reading}</div>
                <div className="label">Sedang Dibaca</div>
              </div>
              <div className="stat">
                <div className="number">{stats.wishlist}</div>
                <div className="label">Wishlist</div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="profile-main">
          {/* Quick Actions */}
          <div className="actions-card">
            <h2>Menu Cepat</h2>
            <div className="actions">
              <button className="action">
                <span className="icon">📚</span>
                <span>Koleksi Saya</span>
              </button>
              <button className="action">
                <span className="icon">🛒</span>
                <span>Pesanan</span>
              </button>
              <button className="action">
                <span className="icon">❤️</span>
                <span>Wishlist</span>
              </button>
              <button className="action">
                <span className="icon">⭐</span>
                <span>Ulasan Saya</span>
              </button>
              <button className="action">
                <span className="icon">🔔</span>
                <span>Notifikasi</span>
              </button>
              <button className="action">
                <span className="icon">⚙️</span>
                <span>Pengaturan</span>
              </button>
            </div>
          </div>

          {/* Activities */}
          <div className="activities-card">
            <div className="card-header">
              <h2>🕐 Aktivitas Terbaru</h2>
              <button className="view-all">Lihat Semua</button>
            </div>
            
            <div className="activities">
              {activities.map(activity => (
                <div key={activity.id} className="activity">
                  <div className="activity-icon">{activity.icon}</div>
                  <div className="activity-content">
                    <div className="activity-header">
                      <h4>{activity.title}</h4>
                      <span className="time">{activity.time}</span>
                    </div>
                    <p>{activity.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Reading */}
          <div className="reading-card">
            <h2>📖 Sedang Membaca</h2>
            <div className="reading-content">
              <p>Belum ada buku yang sedang dibaca</p>
              <button className="browse-btn">Jelajahi Buku</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;