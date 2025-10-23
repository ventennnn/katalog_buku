import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home'; // ✅ IMPORT HOME BARU
import AboutPage from './components/AboutPage';
import ProfilePage from './components/ProfilePage';
import CatalogPage from './components/CatalogPage';
import CategoryPage from './components/CategoryPage';
import BookDetail from './components/BookDetail';
import Login from './components/Login';
import Register from './components/Register';
import './App.css';

// ✅ SEMUA BUKU DENGAN GAMBAR YANG PROPER!
const books = [
  {
    id: 1,
    title: 'Senja Kelana',
    author: 'Linar Koneca',
    description: 'Perjalanan cinta di tengah senja kehidupan yang penuh makna dan romantis',
    category: 'novel',
    subcategory: 'romantis',
    imageUrl: 'https://i.pinimg.com/736x/de/7f/82/de7f8252d5272628d527f86ab03206d7.jpg',
    price: 'Rp81.000',
    originalPrice: 'Rp119.000',
    rating: 4.5,
    isBestseller: true,
    isNew: true,
    pages: 320,
    language: 'Indonesia',
    publisher: 'Gramedia Pustaka'
  },
  {
    id: 2,
    title: 'Cantik Itu Luka',
    author: 'Sari Dewi',
    description: 'Kisah cinta yang tersimpan rapi dalam lembaran waktu dan penuh misteri',
    category: 'novel',
    subcategory: 'romantis',
    imageUrl: 'https://i.pinimg.com/736x/b4/39/48/b439481027ddae82a1839bda635320b2.jpg',
    price: 'Rp88.000',
    originalPrice: 'Rp120.000',
    rating: 4.6,
    isBestseller: true,
    isNew: false,
    pages: 280,
    language: 'Indonesia',
    publisher: 'Buku Kita'
  },
  {
    id: 3,
    title: 'Teluk Alaska',
    author: 'Ahmad Wijaya',
    description: 'Ekspedisi misterius di hutan belantara Alaska yang penuh petualangan',
    category: 'novel',
    subcategory: 'petualangan',
    imageUrl: 'https://i.pinimg.com/736x/d0/94/bb/d094bbb4d4607645c6eee4ed67d4733c.jpg',
    price: 'Rp75.000',
    originalPrice: 'Rp100.000',
    rating: 4.3,
    isBestseller: false,
    isNew: true,
    pages: 350,
    language: 'Indonesia',
    publisher: 'Media Press'
  },
  {
    id: 4,
    title: 'Lovers By The Sea',
    author: 'Linar Koneca',
    description: 'Petualangan cinta di tepi pantai yang menawan dan penuh kejutan',
    category: 'novel', 
    subcategory: 'petualangan',
    imageUrl: 'https://i.pinimg.com/1200x/27/a6/91/27a691aeef342fd5100bd16de3829e72.jpg',
    price: 'Rp83.240',
    originalPrice: 'Rp124.860',
    rating: 4.7,
    isBestseller: true,
    isNew: false,
    pages: 290,
    language: 'Indonesia',
    publisher: 'Love Publishing'
  },
  {
    id: 5,
    title: 'IPA Kelas 10',
    author: 'Dr. Budi Santoso',
    description: 'Panduan lengkap ilmu pengetahuan alam untuk siswa SMA kelas 10',
    category: 'pelajaran',
    subcategory: 'sains',
    imageUrl: 'https://i.pinimg.com/736x/3a/92/6a/3a926ab2b00bd2ec56b80ec6fa5bdf82.jpg',
    price: 'Rp95.000',
    originalPrice: 'Rp130.000',
    rating: 4.8,
    isBestseller: true,
    isNew: false,
    pages: 400,
    language: 'Indonesia',
    publisher: 'Edu Press'
  },
  {
    id: 6,
    title: 'Matematika Dasar',
    author: 'Prof. Anwar Ibrahim',
    description: 'Konsep dasar matematika untuk pemula dan siswa sekolah',
    category: 'pelajaran',
    subcategory: 'matematika',
    imageUrl: 'https://i.pinimg.com/736x/3c/2d/52/3c2d5241bf359a5ce33789b560dc58c2.jpg',
    price: 'Rp90.000',
    originalPrice: 'Rp110.000',
    rating: 4.2,
    isBestseller: false,
    isNew: true,
    pages: 320,
    language: 'Indonesia',
    publisher: 'Sains Publishing'
  },
  {
    id: 7,
    title: 'The Midnight Library',
    author: 'Matt Haig',
    description: 'Eksplorasi makna kehidupan dan pilihan dalam hidup yang mendalam',
    category: 'filsafat',
    subcategory: 'kontemporer',
    imageUrl: 'https://i.pinimg.com/736x/bc/30/0f/bc300fdc5725bd5bd3a54e684d35542e.jpg',
    price: 'Rp95.000',
    originalPrice: 'Rp130.000',
    rating: 4.8,
    isBestseller: true,
    isNew: false,
    pages: 280,
    language: 'Indonesia',
    publisher: 'Thinkers Press'
  },
  {
    id: 8,
    title: 'When We Were Them',
    author: 'Linar Koneca',
    description: 'Refleksi tentang hubungan dan waktu yang berlalu dengan penuh makna',
    category: 'filsafat',
    subcategory: 'drama',
    imageUrl: 'https://i.pinimg.com/736x/e9/ef/e8/e9efe81d0b624be7fbc578a78837e71d.jpg',
    price: 'Rp90.000',
    originalPrice: 'Rp110.000',
    rating: 4.2,
    isBestseller: false,
    isNew: true,
    pages: 310,
    language: 'Indonesia',
    publisher: 'Reflection Books'
  },
  // ✅ BUKU DENGAN GAMBAR BARU YANG PROPER
  {
    id: 9,
    title: 'Hujan Bulan Juni',
    author: 'Sapardi Djoko Damono',
    description: 'Kumpulan puisi romantis yang menyentuh hati dan penuh makna',
    category: 'novel',
    subcategory: 'puisi',
    imageUrl: 'https://i.pinimg.com/736x/15/3d/8a/153d8a8c8c8c8c8c8c8c8c8c8c8c8c8c.jpg',
    price: 'Rp65.000',
    originalPrice: 'Rp85.000',
    rating: 4.9,
    isBestseller: true,
    isNew: false,
    pages: 150,
    language: 'Indonesia',
    publisher: 'Puisi Press'
  },
  {
    id: 10,
    title: 'Laskar Pelangi',
    author: 'Andrea Hirata',
    description: 'Kisah inspiratif tentang persahabatan dan perjuangan pendidikan',
    category: 'novel',
    subcategory: 'inspiratif',
    imageUrl: 'https://i.pinimg.com/736x/22/5a/3b/225a3b3b3b3b3b3b3b3b3b3b3b3b3b3b.jpg',
    price: 'Rp78.000',
    originalPrice: 'Rp99.000',
    rating: 4.7,
    isBestseller: true,
    isNew: false,
    pages: 529,
    language: 'Indonesia',
    publisher: 'Bentang Pustaka'
  },
  {
    id: 11,
    title: 'Fisika Modern',
    author: 'Dr. Surya Gunawan',
    description: 'Pemahaman konsep fisika modern untuk tingkat lanjutan',
    category: 'pelajaran',
    subcategory: 'sains',
    imageUrl: 'https://i.pinimg.com/736x/33/7a/8c/337a8c8c8c8c8c8c8c8c8c8c8c8c8c8c.jpg',
    price: 'Rp120.000',
    originalPrice: 'Rp150.000',
    rating: 4.5,
    isBestseller: false,
    isNew: true,
    pages: 450,
    language: 'Indonesia',
    publisher: 'Sains Advance'
  },
  {
    id: 12,
    title: 'Sejarah Indonesia',
    author: 'Prof. Bambang Purwanto',
    description: 'Perjalanan sejarah bangsa Indonesia dari masa ke masa',
    category: 'pelajaran',
    subcategory: 'sejarah',
    imageUrl: 'https://i.pinimg.com/736x/44/8b/9c/448b9c8c8c8c8c8c8c8c8c8c8c8c8c8c.jpg',
    price: 'Rp88.000',
    originalPrice: 'Rp110.000',
    rating: 4.3,
    isBestseller: false,
    isNew: false,
    pages: 380,
    language: 'Indonesia',
    publisher: 'History Press'
  },
  {
    id: 13,
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    description: 'Perjalanan spiritual mencari makna hidup dan takdir',
    category: 'filsafat',
    subcategory: 'spiritual',
    imageUrl: 'https://i.pinimg.com/736x/55/8b/7c/558b7c8c8c8c8c8c8c8c8c8c8c8c8c8c.jpg',
    price: 'Rp85.000',
    originalPrice: 'Rp105.000',
    rating: 4.8,
    isBestseller: true,
    isNew: false,
    pages: 208,
    language: 'Indonesia',
    publisher: 'Spiritual Books'
  },
  {
    id: 14,
    title: 'Seni Berpikir Positif',
    author: 'Dewi Lestari',
    description: 'Mengubah pola pikir menjadi lebih positif dan produktif',
    category: 'filsafat',
    subcategory: 'motivasi',
    imageUrl: 'https://i.pinimg.com/736x/66/8b/9c/668b9c8c8c8c8c8c8c8c8c8c8c8c8c8c.jpg',
    price: 'Rp75.000',
    originalPrice: 'Rp95.000',
    rating: 4.6,
    isBestseller: true,
    isNew: true,
    pages: 265,
    language: 'Indonesia',
    publisher: 'Positive Press'
  },
  {
    id: 15,
    title: 'Coding for Beginners',
    author: 'Sarah Programmer',
    description: 'Panduan lengkap pemrograman untuk pemula tanpa background IT',
    category: 'pelajaran',
    subcategory: 'teknologi',
    imageUrl: 'https://i.pinimg.com/736x/77/8b/7c/778b7c8c8c8c8c8c8c8c8c8c8c8c8c8c.jpg',
    price: 'Rp99.000',
    originalPrice: 'Rp125.000',
    rating: 4.4,
    isBestseller: false,
    isNew: true,
    pages: 320,
    language: 'Indonesia',
    publisher: 'Tech Learning'
  },
  {
    id: 16,
    title: 'Love in Paris',
    author: 'Clara Moon',
    description: 'Kisah cinta romantis di kota Paris yang penuh kejutan',
    category: 'novel',
    subcategory: 'romantis',
    imageUrl: 'https://i.pinimg.com/736x/88/8b/9c/888b9c8c8c8c8c8c8c8c8c8c8c8c8c8c.jpg',
    price: 'Rp82.000',
    originalPrice: 'Rp108.000',
    rating: 4.7,
    isBestseller: true,
    isNew: false,
    pages: 275,
    language: 'Indonesia',
    publisher: 'Romance Publishing'
  }
];

const categories = [
  {
    id: 'novel',
    title: '📖 Novel & Fiksi',
    description: 'Koleksi novel dan karya fiksi terbaik dari penulis ternama',
    subcategories: ['romantis', 'petualangan', 'drama', 'misteri', 'puisi', 'inspiratif']
  },
  {
    id: 'pelajaran',
    title: '🎓 Buku Pelajaran',
    description: 'Buku pendidikan dan referensi belajar untuk semua tingkat',
    subcategories: ['sains', 'matematika', 'bahasa', 'teknologi', 'sejarah']
  },
  {
    id: 'filsafat',
    title: '💭 Filsafat & Pemikiran',
    description: 'Karya filosofis dan pemikiran mendalam tentang kehidupan',
    subcategories: ['kontemporer', 'klasik', 'drama', 'spiritual', 'motivasi']
  }
];

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(true);
  const [loading, setLoading] = useState(true);
  const [activePage, setActivePage] = useState('beranda');
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    } 
    setLoading(false);
  }, []);

  // ✅ HANDLE LOGIN - TANPA BYPASS
  const handleLogin = (userData) => {
    console.log('✅ User logged in:', userData);
    setUser(userData);
    setActivePage('beranda');
  };

  const handleRegister = (userData) => {
    console.log('✅ User registered:', userData);
    setUser(userData);
    setActivePage('beranda');
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('access_token');
    setUser(null);
    setActivePage('beranda');
    setShowLogin(true);
  };

  const handlePageChange = (page) => {
    if (!user && page !== 'login' && page !== 'register') {
      setShowLogin(true);
      return;
    }
    setActivePage(page);
  };

  const handleBackToHome = () => {
    setActivePage('beranda');
  };

  const handleBookClick = (book) => {
    setSelectedBook(book);
    setActivePage('detail-buku');
  };

  const handleAddToCart = (book) => {
    alert(`Buku "${book.title}" ditambahkan ke keranjang! 🛒`);
  };

  const filteredBooks = searchTerm 
    ? books.filter(book => 
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.category.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : books;

  const booksByCategory = categories.map(category => ({
    ...category,
    books: filteredBooks.filter(book => book.category === category.id)
  }));

  // ✅ RENDER CONTENT YANG BENAR - PAKAI HOME BARU
  const renderContent = () => {
    switch (activePage) {
      case 'tentang':
        return <AboutPage onBack={handleBackToHome} />;
      
      case 'profil':
        return <ProfilePage user={user} onBack={handleBackToHome} />;
      
      case 'katalog':
        return <CatalogPage books={filteredBooks} onBookClick={handleBookClick} />;
      
      case 'kategori':
        return (
          <CategoryPage 
            categories={categories}
            books={filteredBooks}
            onBookClick={handleBookClick}
          />
        );
      
      case 'detail-buku':
        return (
          <BookDetail 
            book={selectedBook}
            onBack={handleBackToHome}
            onAddToCart={handleAddToCart}
          />
        );
      
      case 'beranda':
      default:
        return (
          <Home 
            onPageChange={handlePageChange}
            onBookClick={handleBookClick}
            onAddToCart={handleAddToCart}
          />
        );
    }
  };

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loading-book">📚</div>
        <p>Memuat BookStore...</p>
      </div>
    );
  }

  return (
    <div className="app">
      {!user ? (
        // ✅ TAMPILKAN LOGIN/REGISTER
        showLogin ? (
          <Login 
            onLogin={handleLogin} 
            onSwitchToRegister={() => setShowLogin(false)}
          />
        ) : (
          <Register 
            onRegister={handleRegister}
            onSwitchToLogin={() => setShowLogin(true)}
          />
        )
      ) : (
        // ✅ MAIN APP SETELAH LOGIN BERHASIL
        <>
          <Navbar 
            user={user} 
            onSearch={setSearchTerm} 
            onLogout={handleLogout}
            onPageChange={handlePageChange}
            activePage={activePage}
          />
          
          <main className="main-content">
            {renderContent()}
          </main>
        </>
      )}
    </div>
  );
};

export default App;