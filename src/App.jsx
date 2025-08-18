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
import ProductDetailPage from '@/pages/ProductDetailPage';
import Success from '@/pages/Success';
import ScrollToTop from '@/components/ScrollToTop';
import ShoppingCart from '@/components/ShoppingCart';
import UnderConstruction from '@/pages/UnderConstruction';
import { HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <HelmetProvider>
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
<<<<<<< HEAD
            {/* <Route path="/shop" element={<Shop />} /> */}
            <Route path="/product/:id" element={<ProductDetailPage />} />
            <Route path="/success" element={<Success />} />
            {/* <Route path="/cart" element={<ShoppingCart />} /> */}
=======
            <Route path="/shop" element={<UnderConstruction />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
            <Route path="/success" element={<Success />} />
            <Route path="/cart" element={<UnderConstruction />} />
>>>>>>> 27207ea4 (Added Google Maps iframe to Contact page)
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </div>
    </HelmetProvider>
  );
}

export default App;
