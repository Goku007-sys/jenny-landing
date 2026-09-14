import React, { useState, useMemo } from 'react';
import { STORE_INFO, PRODUCTS_DATA, FEATURED_COLLECTIONS, INSTAGRAM_POSTS, DEMO_TESTIMONIALS } from './data/storeData';
import { formatNaira, getWhatsAppOrderLink, getCartWhatsAppCheckoutLink } from './utils/helpers';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProductCard } from './components/ProductCard';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState(['djc-01', 'djc-06']);

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-stone-900 font-sans">
      <Navbar cartCount={cart.length} onNavigate={(id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })} />
      <HeroSection onShopClick={() => document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' })} />
      {/* Additional components plug in directly here */}
    </div>
  );
}