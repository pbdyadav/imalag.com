import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { useCart } from '@/hooks/useCart';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { cartItems } = useCart(); // ✅ moved inside Header
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Lippan Art', path: '/about' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Products', path: '/products' },
    { name: 'Shop', path: '/shop' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-white/90 backdrop-blur-sm shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="ALAG_Logo.png" 
              alt="Archana Lippan Art Gallery Logo" 
              className="h-30 sm:h-20 w-auto"
            />
            <div className="text-center">
              <h1 className="font-playfair text-3xl font-bold text-terracotta">
                Archana Lippan Art Gallery
              </h1>
              <p className="text-xl text-deep-brown/70">
                Traditional Indian Art
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
  <Link
    key={item.name}
    to={item.path}
    className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${
      isActive(item.path)
        ? 'text-terracotta'
        : 'text-deep-brown hover:text-terracotta'
    }`}
  >
    {item.name}
    {isActive(item.path) && (
      <motion.div
        layoutId="activeTab"
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-terracotta"
        initial={false}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />
    )}
  </Link>
))}
          </nav>

          {/* Cart Icon */}
          <Link to="/cart" className="relative group ml-4">
            <ShoppingCart size={28} className="text-deep-brown hover:text-terracotta transition" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-terracotta text-white text-xs rounded-full px-1.5 py-0.5">
                {totalItems}
              </span>
            )}
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-deep-brown hover:text-terracotta transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 border-t border-terracotta/20"
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                  isActive(item.path)
                    ? 'text-terracotta bg-terracotta/10'
                    : 'text-deep-brown hover:text-terracotta hover:bg-terracotta/5'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </motion.nav>
        )}
      </div>
    </header>
  );
};

export default Header;
