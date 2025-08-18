import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { MessageCircle, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import products from '../data/products';

const Products = () => {
  const whatsappNumber = '919893137595'; // Replace with your WhatsApp number (with country code)

  const handleWhatsAppOrder = (product) => {
    const message = `Hello, I am interested in buying the product: ${product.title} (${product.price}). Please provide more details.`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="p-6">
      <Helmet>
        <title>Our Products - Archana Lippan Art Gallery</title>
      </Helmet>
      <h1 className="text-3xl font-bold mb-6">Our Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <motion.div
            key={product.id}
            className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
            whileHover={{ scale: 1.02 }}
          >
            <Link to={`/product/${product.id}`}>
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-64 object-cover"
              />
            </Link>

            <div className="p-4">
              <Link to={`/product/${product.id}`}>
                <h2 className="text-lg font-semibold">{product.title}</h2>
              </Link>
              <p className="text-gray-600">{product.price}</p>
              <div className="mt-3 flex gap-2">
                <Button
                  onClick={() => handleWhatsAppOrder(product)}
                  className="bg-green-500 hover:bg-green-600 text-white"
                >
                  <MessageCircle size={18} className="mr-2" />
                  Order on WhatsApp
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Products;
