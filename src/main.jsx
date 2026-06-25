import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';

import './index.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import App from './App.jsx';
import Checkout from './components/Checkout/checkout.jsx';
import Blogs from './components/Blogs/Blogs.jsx';
import MainContact from './components/MainContact/MainContact.jsx';
import MainTracking from './components/MainTracking/MainTracking.jsx';
import OrderPage from './components/order/OrderPage.jsx';

import { CartProvider } from './components/Checkout/CartContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <CartProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<MainContact />} />
          <Route path="/tracking" element={<MainTracking />} />
          <Route path="/orders" element={<OrderPage />} />

          <Route
            path="*"
            element={
              <div className="min-h-screen flex items-center justify-center text-2xl font-semibold">
                404 - Page not found
              </div>
            }
          />
        </Routes>
      </CartProvider>
    </HashRouter>
  </StrictMode>
);