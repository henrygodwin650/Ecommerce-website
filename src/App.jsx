import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero.jsx';
import Category from './components/Category/Category.jsx';
import Trending from './components/Trending/Trending.jsx';
import Products from './components/Products/Products.jsx';
import Footer from './components/Footer/Footer.jsx';

import { useCart } from './components/Checkout/CartContext';   // ← Import this

const App = () => {
  // Get everything from Context
  const { cartCount, addToCart } = useCart();

  return (
    <div className="bg-gray-200 dark:bg-gray-800 min-h-screen">
      <Navbar Products={Products} cartCount={cartCount} />
      <Hero />
      <Category />
      <Trending />
      <Products addToCart={addToCart} />
      <Footer />
    </div>
  );
};

export default App;