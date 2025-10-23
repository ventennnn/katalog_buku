// Simpan user data di localStorage dengan key yang konsisten
const AUTH_KEY = 'bookvault_users';
const CURRENT_USER_KEY = 'bookvault_current_user';

export const authService = {
  // Daftar user baru
  register: (userData) => {
    try {
      console.log('🔧 Memulai proses registrasi...', userData);
      
      // Ambil data users dari localStorage
      const users = JSON.parse(localStorage.getItem(AUTH_KEY)) || [];
      console.log('📋 Users yang sudah terdaftar:', users);

      // Cek jika email sudah terdaftar
      const existingUser = users.find(user => user.email === userData.email);
      if (existingUser) {
        console.log('❌ Email sudah terdaftar:', userData.email);
        throw new Error('Email sudah terdaftar!');
      }

      // Buat user baru dengan ID unik
      const newUser = {
        id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
        name: userData.name,
        email: userData.email,
        password: userData.password,
        createdAt: new Date().toISOString(),
        lastLogin: new Date().toISOString()
      };

      console.log('👤 User baru yang akan disimpan:', newUser);

      // Tambah user ke array
      users.push(newUser);
      
      // Simpan ke localStorage
      localStorage.setItem(AUTH_KEY, JSON.stringify(users));
      console.log('💾 Users setelah registrasi:', users);

      // Auto login setelah register
      localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(newUser));
      console.log('✅ Registrasi berhasil! User login otomatis');

      return {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        createdAt: newUser.createdAt
      };
      
    } catch (error) {
      console.error('❌ Error dalam registrasi:', error);
      throw error;
    }
  },

  // Login user
  login: (email, password) => {
    try {
      console.log('🔧 Memulai proses login...', { email });
      
      const users = JSON.parse(localStorage.getItem(AUTH_KEY)) || [];
      console.log('📋 Users yang tersedia untuk login:', users);
      
      const user = users.find(u => u.email === email && u.password === password);
      
      if (!user) {
        console.log('❌ Login gagal: Email atau password salah');
        throw new Error('Email atau password salah!');
      }

      // Update last login
      user.lastLogin = new Date().toISOString();
      localStorage.setItem(AUTH_KEY, JSON.stringify(users));

      // Simpan user yang login
      const userWithoutPassword = {
        id: user.id,
        name: user.name,
        email: user.email,
        createdAt: user.createdAt,
        lastLogin: user.lastLogin
      };
      
      localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(userWithoutPassword));
      console.log('✅ Login berhasil!', userWithoutPassword);

      return userWithoutPassword;
      
    } catch (error) {
      console.error('❌ Error dalam login:', error);
      throw error;
    }
  },

  // Logout
  logout: () => {
    try {
      console.log('🔧 Melakukan logout...');
      localStorage.removeItem(CURRENT_USER_KEY);
      console.log('✅ Logout berhasil!');
    } catch (error) {
      console.error('❌ Error dalam logout:', error);
    }
  },

  // Get current user
  getCurrentUser: () => {
    try {
      const user = localStorage.getItem(CURRENT_USER_KEY);
      if (user) {
        const userData = JSON.parse(user);
        console.log('👤 Current user dari localStorage:', userData);
        return userData;
      }
      console.log('ℹ️ Tidak ada user yang login');
      return null;
    } catch (error) {
      console.error('❌ Error mengambil current user:', error);
      return null;
    }
  },

  // Cek jika user sudah login
  isAuthenticated: () => {
    return !!localStorage.getItem(CURRENT_USER_KEY);
  },

  // Get all users (untuk debugging)
  getAllUsers: () => {
    try {
      const users = JSON.parse(localStorage.getItem(AUTH_KEY)) || [];
      console.log('📊 Semua users di database:', users);
      return users;
    } catch (error) {
      console.error('❌ Error mengambil semua users:', error);
      return [];
    }
  },

  // Clear all data (untuk reset)
  clearAllData: () => {
    try {
      localStorage.removeItem(AUTH_KEY);
      localStorage.removeItem(CURRENT_USER_KEY);
      console.log('🧹 Semua data berhasil direset!');
    } catch (error) {
      console.error('❌ Error reset data:', error);
    }
  }
};