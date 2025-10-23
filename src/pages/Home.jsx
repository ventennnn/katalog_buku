import React, { useEffect, useState, useCallback } from "react";
import { getBooks } from "../services/bookService";
import HeroBanner from "../components/HeroBanner";
import QuickCategories from "../components/QuickCategories";
import BestsellerSection from "../components/BestsellerSection";
import BrandRecommendation from "../components/BrandRecommendation";
import "./Home.css";

function Home({ onPageChange, onBookClick, onAddToCart }) {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadBooks = async () => {
      try {
        const bookData = await getBooks();
        setBooks(bookData);
      } catch (err) {
        console.error("Error loading books:", err);
      } finally {
        setLoading(false);
      }
    };

    loadBooks();
  }, []);

  const handleCategoryClick = useCallback((category) => {
    console.log("Category clicked:", category);
    // Navigate to category page
    onPageChange?.('katalog', { category });
  }, [onPageChange]);

  const handleProductClick = useCallback((product) => {
    console.log("Product clicked:", product);
    // Navigate to product detail
  }, []);

  if (loading) {
    return (
      <div className="home-loading">
        <div className="loading-spinner"></div>
        <p>Memuat buku...</p>
      </div>
    );
  }

  // Filter data
  const bestsellerBooks = books.filter(book => book.isBestseller).slice(0, 4);
  const stationeryProducts = [
    {
      id: 1,
      name: "Oromeda Kerfos Concorde Contour S Blue 802L",
      price: "Rp15.000",
      originalPrice: "Rp34.000",
      image: "IMAGE_URL_STATIONERY_1" // GANTI_URL_NANTI
    },
    {
      id: 2, 
      name: "Gramsala Tack II Faber Castell SOCr White",
      price: "Rp14.000",
      originalPrice: "Rp17.000",
      image: "IMAGE_URL_STATIONERY_2" // GANTI_URL_NANTI
    }
  ];

  return (
    <div className="home-gramedia">
      {/* Hero Banner dengan Promo */}
      <HeroBanner onShopNow={() => handleCategoryClick('all')} />
      
      {/* Quick Access Categories */}
      <QuickCategories onCategoryClick={handleCategoryClick} />
      
      {/* Buku Terlaris Section */}
      <BestsellerSection 
        books={bestsellerBooks}
        onBookClick={onBookClick}
        onAddToCart={onAddToCart}
        onSeeAll={() => handleCategoryClick('bestseller')}
      />
      
      {/* Rekomendasi Brand/Stationery */}
      <BrandRecommendation 
        products={stationeryProducts}
        onProductClick={handleProductClick}
        onSeeAll={() => handleCategoryClick('stationery')}
      />
    </div>
  );
}

export default React.memo(Home);