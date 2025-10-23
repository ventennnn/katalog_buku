import React, { useState } from 'react';
import { authAPI } from '../services/api';
import './Register.css';

const Register = ({ onRegister, onSwitchToLogin }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (formData.password !== formData.password_confirmation) {
      setError('Password dan konfirmasi password tidak sama!');
      setLoading(false);
      return;
    }

    try {
      console.log('Register attempt:', formData);
      
      const response = await authAPI.register(formData);
      console.log('Register response:', response.data);
      
      // ✅ FIX: Sesuai dengan response structure dari Laravel
      if (response.data.user && response.data.token) {
        // Save token & user data
        localStorage.setItem('access_token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        
        console.log('🚀 Calling onRegister with:', response.data.user);
        onRegister(response.data.user);
      } else {
        throw new Error('Invalid response format');
      }
    } catch (error) {
      console.error('Register error:', error.response?.data);
      setError(
        error.response?.data?.message || 
        error.response?.data?.errors ? 
        JSON.stringify(error.response.data.errors) : 
        'Registrasi gagal. Coba lagi.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h2>📚 BookStore</h2>
        <p className="register-subtitle">Daftar akun baru</p>

        <form className="register-form" onSubmit={handleSubmit}>
          {error && (
            <div className="error-message">
              <strong>Registrasi gagal:</strong> {error}
            </div>
          )}

          <div className="form-group">
            <label>Nama Lengkap</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Masukkan nama lengkap"
              disabled={loading}
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Masukkan email"
              disabled={loading}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Masukkan password"
              disabled={loading}
            />
          </div>

          <div className="form-group">
            <label>Konfirmasi Password</label>
            <input
              type="password"
              name="password_confirmation"
              value={formData.password_confirmation}
              onChange={handleChange}
              required
              placeholder="Ulangi password"
              disabled={loading}
            />
          </div>

          <button 
            type="submit" 
            className="register-btn"
            disabled={loading}
          >
            {loading ? (
              <span className="loading-spinner">
                <div className="spinner"></div>
                Memproses...
              </span>
            ) : (
              'Daftar'
            )}
          </button>
        </form>

        <div className="switch-auth">
          <p>Sudah punya akun? 
            <span onClick={onSwitchToLogin} className="switch-link">
              Login di sini
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;