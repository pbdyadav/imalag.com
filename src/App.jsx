import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Gallery from '@/pages/Gallery';
import Products from '@/pages/Products';
import Contact from '@/pages/Contact';
import Shop from '@/pages/Shop';
import ProductDetailPage from '@/pages/ProductDetailPage';
import Success from '@/pages/Success';
import ScrollToTop from '@/components/ScrollToTop';
import ShoppingCart from '@/components/ShoppingCart';

function App() {
  return (
    <>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col gradient-bg">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            {/* <Route path="/shop" element={<Shop />} /> */}
            <Route path="/product/:id" element={<ProductDetailPage />} />
            <Route path="/success" element={<Success />} />
            {/* <Route path="/cart" element={<ShoppingCart />} /> */}
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </div>
    </>
  );
}

export default App;
