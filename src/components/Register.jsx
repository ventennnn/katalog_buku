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
    // Clear error when user starts typing
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Frontend validation
    if (formData.password !== formData.password_confirmation) {
      setError('Password dan konfirmasi password tidak sama!');
      setLoading(false);
      return;
    }

    if (formData.password.length < 6) {
      setError('Password minimal 6 karakter!');
      setLoading(false);
      return;
    }

    try {
      console.log('Register attempt:', formData);
      
      const response = await authAPI.register(formData);
      console.log('Register response:', response.data);
      
      // ✅ Handle different response formats
      if (response.data.user && response.data.token) {
        localStorage.setItem('access_token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        onRegister(response.data.user);
      } else if (response.data.access_token) {
        // Alternative format
        localStorage.setItem('access_token', response.data.access_token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        onRegister(response.data.user);
      } else {
        throw new Error('Format response tidak dikenali');
      }
    } catch (error) {
      console.error('Register error details:', error.response?.data);
      
      // ✅ Handle different error formats
      if (error.response?.status === 422) {
        const errorData = error.response.data;
        
        if (errorData.errors) {
          // Laravel validation errors
          const errorMessages = Object.values(errorData.errors).flat().join(', ');
          setError(`Validasi gagal: ${errorMessages}`);
        } else if (errorData.message) {
          setError(errorData.message);
        } else {
          setError('Data yang dimasukkan tidak valid. Periksa kembali.');
        }
      } else if (error.response?.status === 500) {
        setError('Server error. Silakan coba lagi nanti.');
      } else {
        setError(error.response?.data?.message || 'Registrasi gagal. Coba lagi.');
      }
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
              {error}
            </div>
          )}

          <div className="form-group">
            <label>Nama Lengkap *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Masukkan nama lengkap"
              disabled={loading}
              minLength="2"
            />
          </div>

          <div className="form-group">
            <label>Email *</label>
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
            <label>Password *</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Minimal 6 karakter"
              disabled={loading}
              minLength="6"
            />
          </div>

          <div className="form-group">
            <label>Konfirmasi Password *</label>
            <input
              type="password"
              name="password_confirmation"
              value={formData.password_confirmation}
              onChange={handleChange}
              required
              placeholder="Ulangi password"
              disabled={loading}
              minLength="6"
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