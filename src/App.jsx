import React from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Gallery from "@/pages/Gallery";
import Products from "@/pages/Products";
import Contact from "@/pages/Contact";
import ProductDetailPage from "@/pages/ProductDetailPage";
import Success from "@/pages/Success";
import ScrollToTop from "@/components/ScrollToTop";
import CookieConsent from "@/components/CookieConsent";
import {HelmetProvider} from "react-helmet-async";
import PrivacyPolicy from "./pages/Legal/PrivacyPolicy";
import TermsOfService from "./pages/Legal/TermsOfService";
import RefundPolicy from "./pages/Legal/RefundPolicy";
import Disclaimer from "./pages/Legal/Disclaimer";
import ShippingPolicy from "@/pages/Legal/ShippingPolicy.jsx";
import Blog from './pages/Blog'; // Adjust path based on your folder
import ToolsForLippan from './pages/ToolsForLippan';
import MudGlueMix from './pages/MudGlueMix';
import MirrorSymbolism from './pages/MirrorSymbolism';
import ModernInteriors from './pages/ModernInteriors';
import BeginnersGuide from './pages/BeginnersGuide';
import CleaningTips from './pages/CleaningTips';
import RabariPatterns from './pages/RabariPatterns';
import EcoFriendlyArt from './pages/EcoFriendlyArt';
import ColorTheory from './pages/ColorTheory';
import HistoryOfLippan from './pages/HistoryOfLippan';

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
            <Route path="/product/:id" element={<ProductDetailPage />} />
            <Route path="/success" element={<Success />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/refund-policy" element={<RefundPolicy />} />
            <Route path="/shipping-policy" element={<ShippingPolicy />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/essential-tools" element={<ToolsForLippan />} />
            <Route path="/blog/mud-glue-mix" element={<MudGlueMix />} />
            <Route path="/blog/mirror-symbolism" element={<MirrorSymbolism />} />
            <Route path="/blog/modern-interiors" element={<ModernInteriors />} />
            <Route path="/blog/beginners-guide" element={<BeginnersGuide />} />
            <Route path="/blog/cleaning-tips" element={<CleaningTips />} />
            <Route path="/blog/rabari-patterns" element={<RabariPatterns />} />
            <Route path="/blog/eco-friendly-art" element={<EcoFriendlyArt />} />
            <Route path="/blog/color-theory" element={<ColorTheory />} />
            <Route path="/blog/history-of-lippan" element={<HistoryOfLippan />} />
            
          </Routes>
        </main>
        <CookieConsent />
        <Footer />
      </div>

      <Toaster />
    </HelmetProvider>
  );
}

export default App;
