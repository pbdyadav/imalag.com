
import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-deep-brown text-warm-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="https://horizons-cdn.hostinger.com/062487ad-7ab5-40ba-a8d3-caeee13985d4/e1de14884e8d4a93181505e8dc98aa5a.png" 
                alt="Archana Lippan Art Gallery" 
                className="h-10 w-auto"
              />
              <span className="font-playfair text-xl font-bold text-gold">
                Archana Lippan Art Gallery
              </span>
            </div>
            <p className="text-warm-beige/80 mb-4 max-w-md">
              Preserving the traditional art of Lippan Kaam and creating beautiful handcrafted pieces that celebrate Indian folk heritage. Each artwork tells a story of culture, tradition, and artistic excellence.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://wa.me/919893137595"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-green-600 rounded-full hover:bg-green-700 transition-colors"
              >
                <MessageCircle size={20} />
              </a>
              <a
                href="https://instagram.com/archanalippanart"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-pink-600 rounded-full hover:bg-pink-700 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="mailto:imalagart@gmail.com"
                className="p-2 bg-terracotta rounded-full hover:bg-terracotta/80 transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <span className="font-playfair text-lg font-semibold text-gold mb-4 block">
              Quick Links
            </span>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-warm-beige/80 hover:text-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-warm-beige/80 hover:text-gold transition-colors">
                  About Lippan Art
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-warm-beige/80 hover:text-gold transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-warm-beige/80 hover:text-gold transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-warm-beige/80 hover:text-gold transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <span className="font-playfair text-lg font-semibold text-gold mb-4 block">
              Contact Info
            </span>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-gold" />
                <span className="text-warm-beige/80">+91 98931 37595</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-gold" />
                <span className="text-warm-beige/80">imalagart@gmail.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-gold mt-1" />
                <span className="text-warm-beige/80">
                  Art Studio, Indore<br />
                  Madhya Pradesh, India
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-warm-beige/20 mt-8 pt-8 text-center">
          <p className="text-warm-beige/60">
            © 2024 Archana Lippan Art Gallery. All rights reserved. | Preserving Traditional Indian Art
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
