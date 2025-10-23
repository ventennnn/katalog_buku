import React, { useState } from 'react';
import './Navbar.css';

const Navbar = ({ user, onSearch, onLogout, onPageChange, activePage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  const handlePageChange = (page) => {
    onPageChange(page);
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  const handleLogoutClick = () => {
    onLogout();
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  const menuItems = [
    { name: 'Beranda', icon: 'fas fa-home', page: 'beranda' },
    { name: 'Katalog', icon: 'fas fa-book', page: 'katalog' },
    { name: 'Kategori', icon: 'fas fa-tags', page: 'kategori' },
    { name: 'Tentang', icon: 'fas fa-info-circle', page: 'tentang' }
  ];

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <div 
          className="nav-logo"
          onClick={() => handlePageChange('beranda')}
          style={{cursor: 'pointer'}}
        >
          <i className="fas fa-book-open logo-icon"></i>
          <span className="logo-text">BookStore</span>
        </div>

        {/* Search Bar */}
        <div className="search-container">
          <form onSubmit={handleSearch} className="search-form">
            <input
              type="text"
              placeholder="Cari buku, penulis, atau kategori..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <button type="submit" className="search-button">
              <i className="fas fa-search"></i>
            </button>
          </form>
        </div>

        {/* Desktop Menu */}
        <ul className="nav-menu">
          {menuItems.map((item, index) => (
            <li 
              key={index} 
              className={`nav-item ${activePage === item.page ? 'active-page' : ''}`}
            >
              <div 
                className="nav-link"
                onClick={() => handlePageChange(item.page)}
              >
                <i className={item.icon}></i>
                <span>{item.name}</span>
              </div>
            </li>
          ))}
        </ul>

        {/* User Section */}
        <div className="nav-user-section">
          {user ? (
            <div className="user-menu-container">
              <div 
                className="user-info"
                onClick={() => toggleDropdown('user')}
              >
                <i className="fas fa-user-circle user-icon"></i>
                <span className="user-greeting">Hi, {user.name}</span>
                <i className={`fas fa-chevron-down ${activeDropdown === 'user' ? 'rotate' : ''}`}></i>
              </div>
              
              {activeDropdown === 'user' && (
                <div className="user-dropdown-menu">
                  <div 
                    className="dropdown-item"
                    onClick={() => handlePageChange('profil')}
                  >
                    <i className="fas fa-user"></i>
                    <span>Profil Saya</span>
                  </div>
                  <div className="dropdown-item">
                    <i className="fas fa-shopping-cart"></i>
                    <span>Keranjang</span>
                  </div>
                  <div className="dropdown-item">
                    <i className="fas fa-heart"></i>
                    <span>Wishlist</span>
                  </div>
                  <div className="dropdown-divider"></div>
                  <div 
                    className="dropdown-item logout-item"
                    onClick={handleLogoutClick}
                  >
                    <i className="fas fa-sign-out-alt"></i>
                    <span>Logout</span>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="nav-buttons">
              <button 
                className="btn-login" 
                onClick={() => handlePageChange('login')}
              >
                <i className="fas fa-sign-in-alt"></i>
                Masuk
              </button>
              <button 
                className="btn-signup" 
                onClick={() => handlePageChange('register')}
              >
                <i className="fas fa-user-plus"></i>
                Daftar
              </button>
            </div>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <div 
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <div className="mobile-search-container">
            <form onSubmit={handleSearch} className="search-form">
              <input
                type="text"
                placeholder="Cari buku..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
              <button type="submit" className="search-button">
                <i className="fas fa-search"></i>
              </button>
            </form>
          </div>

          <div className="mobile-menu-items">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className={`mobile-menu-item ${activePage === item.page ? 'active' : ''}`}
                onClick={() => handlePageChange(item.page)}
              >
                <i className={item.icon}></i>
                <span>{item.name}</span>
              </div>
            ))}
            
            {user && (
              <>
                <div className="mobile-menu-divider"></div>
                <div
                  className="mobile-menu-item"
                  onClick={() => handlePageChange('profil')}
                >
                  <i className="fas fa-user"></i>
                  <span>Profil Saya</span>
                </div>
                <div
                  className="mobile-menu-item logout-item"
                  onClick={handleLogoutClick}
                >
                  <i className="fas fa-sign-out-alt"></i>
                  <span>Logout</span>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;