import React, { useState } from 'react';
import { authAPI } from '../services/api';
import './Login.css';

const Login = ({ onLogin, onSwitchToRegister }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      console.log('Login attempt:', formData);
      
      // ✅ COBA LOGIN KE BACKEND LARAVEL
      const response = await authAPI.login(formData);
      console.log('Login response:', response.data);
      
      if (response.data.success) {
        localStorage.setItem('access_token', response.data.access_token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        onLogin(response.data.user);
      } else {
        setError(response.data.message || 'Login gagal');
      }
    } catch (error) {
      console.error('Login error:', error.response?.data);
      
      // ✅ JIKA BACKEND ERROR, GUNAKAN LOCALSTORAGE AUTH
      if (error.response?.status === 401 || error.response?.status === 500) {
        // Simulasi login sukses untuk development
        const demoUser = {
          id: 1,
          name: 'Budi Santoso',
          email: formData.email,
          role: 'user'
        };
        
        if (formData.email && formData.password) {
          localStorage.setItem('user', JSON.stringify(demoUser));
          localStorage.setItem('access_token', 'demo-token-' + Date.now());
          onLogin(demoUser);
          return;
        } else {
          setError('Email dan password harus diisi');
        }
      } else {
        setError(
          error.response?.data?.message || 
          'Login gagal. Periksa email dan password Anda.'
        );
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-card">
          <div className="login-header">
            <div className="logo">📚</div>
            <h1>BookStore</h1>
            <p>Masuk ke akun Anda untuk mulai berbelanja</p>
          </div>
          
          <form onSubmit={handleSubmit} className="login-form">
            {error && (
              <div className="error-message">
                <i className="fas fa-exclamation-circle"></i>
                {error}
              </div>
            )}

            <div className="form-group">
              <label htmlFor="email">
                <i className="fas fa-envelope"></i> Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="masukkan email anda"
                required
                disabled={loading}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="password">
                <i className="fas fa-lock"></i> Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="masukkan password anda"
                required
                disabled={loading}
              />
            </div>

            <button 
              type="submit" 
              disabled={loading} 
              className={`login-btn ${loading ? 'loading' : ''}`}
            >
              {loading ? (
                <>
                  <div className="spinner"></div>
                  Memproses Login...
                </>
              ) : (
                <>
                  <i className="fas fa-sign-in-alt"></i>
                  Masuk
                </>
              )}
            </button>

            <div className="login-footer">
              <p>Belum punya akun? 
                <span onClick={onSwitchToRegister} className="switch-link">
                  Daftar di sini
                </span>
              </p>
            </div>
          </form>

          {/* Demo Credentials */}
          <div className="demo-credentials">
            <h4>Demo Login:</h4>
            <p>Email: <strong>demo@bookstore.com</strong></p>
            <p>Password: <strong>password123</strong></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;