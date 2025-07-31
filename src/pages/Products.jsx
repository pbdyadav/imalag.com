
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { MessageCircle, Heart, Star } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const Products = () => {
  const products = [
    {
      id: 1,
      title: "Traditional Peacock Lippan Panel",
      price: "₹3,500",
      originalPrice: "₹4,200",
      category: "Lippan Art",
      size: "12\" x 16\"",
      description: "Handcrafted peacock design with authentic mud and mirror work",
      rating: 5,
      reviews: 12,
      image: "Traditional peacock Lippan art panel with intricate mirror work and vibrant colors"
    },
    {
      id: 2,
      title: "Mandala Mirror Mosaic",
      price: "₹2,800",
      originalPrice: "₹3,200",
      category: "Mirror Work",
      size: "10\" x 10\"",
      description: "Stunning circular mandala with colorful mirror pieces",
      rating: 5,
      reviews: 8,
      image: "Beautiful mandala mirror mosaic with geometric patterns and colorful glass pieces"
    },
    {
      id: 3,
      title: "Elephant Family Lippan Art",
      price: "₹4,500",
      originalPrice: "₹5,000",
      category: "Lippan Art",
      size: "16\" x 20\"",
      description: "Majestic elephant family with traditional Kutch patterns",
      rating: 5,
      reviews: 15,
      image: "Majestic elephant family Lippan art with traditional Kutch patterns and mirror details"
    },
    {
      id: 4,
      title: "Lotus Dot Mandala",
      price: "₹2,200",
      originalPrice: "₹2,800",
      category: "Dot Painting",
      size: "8\" x 8\"",
      description: "Sacred lotus mandala created with precise dot technique",
      rating: 4,
      reviews: 6,
      image: "Sacred lotus mandala dot painting with precise technique and spiritual symbolism"
    },
    {
      id: 5,
      title: "Tree of Life Glass Panel",
      price: "₹3,800",
      originalPrice: "₹4,500",
      category: "Glass Work",
      size: "14\" x 18\"",
      description: "Contemporary tree of life design in stained glass",
      rating: 5,
      reviews: 10,
      image: "Tree of life stained glass panel with contemporary design and traditional inspiration"
    },
    {
      id: 6,
      title: "Floral Mirror Mosaic Set",
      price: "₹5,200",
      originalPrice: "₹6,000",
      category: "Mirror Work",
      size: "Set of 3 (6\" x 6\" each)",
      description: "Delicate floral patterns with shimmering mirror accents",
      rating: 5,
      reviews: 9,
      image: "Set of three floral mirror mosaic pieces with delicate patterns and shimmering accents"
    }
  ];

  const handleWhatsAppOrder = (product) => {
    const message = `Hi! I'm interested in ordering the "${product.title}" (${product.price}). Could you please provide more details?`;
    const whatsappUrl = `https://wa.me/919893137595?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleWishlist = (productTitle) => {
    toast({
      title: "Added to Wishlist! ❤️",
      description: `${productTitle} has been saved to your favorites.`,
    });
  };

  return (
    <>
      <Helmet>
        <title>Shop Traditional Art - Lippan Art & Mirror Work for Sale</title>
        <meta name="description" content="Buy authentic handcrafted Lippan art, mirror work, and traditional Indian folk art pieces. Each artwork is unique and made with traditional techniques." />
      </Helmet>

      <div className="min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-deep-brown mb-6">
              Our <span className="text-terracotta">Products</span>
            </h1>
            <p className="text-xl text-deep-brown/70 max-w-3xl mx-auto">
              Bring home the beauty of traditional Indian art. Each piece is handcrafted with love and cultural heritage.
            </p>
          </motion.div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden card-shadow hover-lift group"
              >
                {/* Product Image */}
                <div className="relative overflow-hidden">
                  <img  
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    alt={product.image}
                   src="https://images.unsplash.com/photo-1635865165118-917ed9e20936" />
                  
                  {/* Wishlist Button */}
                  <button
                    onClick={() => handleWishlist(product.title)}
                    className="absolute top-4 right-4 p-2 bg-white/90 rounded-full hover:bg-white transition-colors group/heart"
                  >
                    <Heart className="w-5 h-5 text-terracotta group-hover/heart:fill-current transition-all" />
                  </button>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-terracotta text-white text-xs font-medium rounded-full">
                      {product.category}
                    </span>
                  </div>

                  {/* Discount Badge */}
                  {product.originalPrice && (
                    <div className="absolute bottom-4 left-4">
                      <span className="px-2 py-1 bg-gold text-white text-xs font-medium rounded">
                        SALE
                      </span>
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <div className="mb-3">
                    <h3 className="font-playfair text-xl font-semibold text-deep-brown mb-2">
                      {product.title}
                    </h3>
                    <p className="text-sm text-deep-brown/60 mb-2">
                      Size: {product.size}
                    </p>
                    <p className="text-deep-brown/70 text-sm">
                      {product.description}
                    </p>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < product.rating
                              ? 'text-gold fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-deep-brown/60">
                      ({product.reviews} reviews)
                    </span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-playfair text-2xl font-bold text-terracotta">
                      {product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-lg text-deep-brown/50 line-through">
                        {product.originalPrice}
                      </span>
                    )}
                  </div>

                  {/* Buy Button */}
                  <Button
                    onClick={() => handleWhatsAppOrder(product)}
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 group/btn"
                  >
                    <MessageCircle className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                    Buy on WhatsApp
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Custom Order Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-20 bg-terracotta/10 rounded-3xl p-8 md:p-12 text-center"
          >
            <h2 className="font-playfair text-3xl font-bold text-deep-brown mb-4">
              Custom Orders Welcome
            </h2>
            <p className="text-lg text-deep-brown/70 mb-6 max-w-2xl mx-auto">
              Have a specific design in mind? We create custom artwork tailored to your preferences, 
              space, and color scheme. Each piece is unique and made just for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => {
                  const message = "Hi! I'm interested in commissioning a custom artwork. Could you please share more details about the process?";
                  const whatsappUrl = `https://wa.me/919893137595?text=${encodeURIComponent(message)}`;
                  window.open(whatsappUrl, '_blank');
                }}
                className="bg-terracotta hover:bg-terracotta/90 text-white px-8 py-3"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Discuss Custom Order
              </Button>
              <Button
                variant="outline"
                className="border-terracotta text-terracotta hover:bg-terracotta hover:text-white px-8 py-3"
                onClick={() => toast({
                  title: "🚧 Feature Coming Soon!",
                  description: "Portfolio viewing will be available soon. For now, please contact us via WhatsApp! 🚀",
                })}
              >
                View Portfolio
              </Button>
            </div>
          </motion.div>

          {/* Shipping & Care Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="text-center p-6 bg-white rounded-2xl card-shadow">
              <div className="w-12 h-12 bg-terracotta/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚚</span>
              </div>
              <h3 className="font-playfair text-lg font-semibold text-deep-brown mb-2">
                Safe Shipping
              </h3>
              <p className="text-deep-brown/70 text-sm">
                Carefully packaged and shipped across India with tracking
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-2xl card-shadow">
              <div className="w-12 h-12 bg-terracotta/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="font-playfair text-lg font-semibold text-deep-brown mb-2">
                Handcrafted Quality
              </h3>
              <p className="text-deep-brown/70 text-sm">
                Each piece is unique and made with traditional techniques
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-2xl card-shadow">
              <div className="w-12 h-12 bg-terracotta/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💝</span>
              </div>
              <h3 className="font-playfair text-lg font-semibold text-deep-brown mb-2">
                Care Instructions
              </h3>
              <p className="text-deep-brown/70 text-sm">
                Easy care guide included with every purchase
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Products;
