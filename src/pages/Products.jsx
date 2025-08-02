
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
      title: "Traditional Mandla Lippan",
      price: "₹700",
      originalPrice: "₹1,000",
      category: "Lippan Art",
      size: "12\" Circle",
      description: "Beautiful design with intricate mirror work on Clay base",
      rating: 5,
      reviews: 12,
      image: "/images/products/Art7.png"
    },
    {
      id: 2,
      title: "White Lippan Art",
      price: "₹700",
      originalPrice: "₹1,000",
      category: "Mirro Mosaic",
      size: "12\" Circle",
      description: "Stunning mandala pattern created with mirror pieces",
      rating: 5,
      reviews: 8,
      image: "/images/products/Art8.png"
    },
    {
      id: 3,
      title: "Spiritual Buddha with Tree",
      price: "₹1,100",
      originalPrice: "₹1,800",
      category: "MDF",
      size: "14\" Circle",
      description: "Spiritual Buddha with Tree and Mirror in Black colors",
      rating: 5,
      reviews: 15,
      image: "/images/products/Art9.png"
    },
    {
      id: 4,
      title: "Clay Golder Tree",
      price: "₹800",
      originalPrice: "₹1,200",
      category: "Clay",
      size: "14\" Circle",
      description: "Vibrant Clay work in Black and Gold colour artwork with traditional Indian motifs",
      rating: 4,
      reviews: 6,
      image: "/images/products/Art10.png"
    },
    {
      id: 5,
      title: "Black Buddha with Holo Light Efects",
      price: "₹3,800",
      originalPrice: "₹5,000",
      category: "Lippan Art",
      size: "17.5\" x 17.5\"",
      description: "Majestic Black Buddha design with Holo Light Efects for Wall decoration",
      rating: 5,
      reviews: 10,
      image: "/images/products/Art11.png"
    },
    {
      id: 6,
      title: "Green Buddha with Holo Light Efects",
      price: "₹3,800",
      originalPrice: "₹5,000",
      category: "Lippan Art",
      size: "17.5\" x 17.5\"",
      description: "Majestic Green Tree Buddha design with Holo Light Efects for Wall decoration",
      rating: 5,
      reviews: 9,
      image: "/images/products/Art12.png"
    },
    {
      id: 7,
      title: "Ornament Box",
      price: "₹200",
      originalPrice: "₹300",
      category: "Glass",
      size: "4\" x 4\"",
      description: "MDF Ornament Box with glass work",
      rating: 5,
      reviews: 9,
      image: "/images/products/Art13.png"
    },
    {
      id: 8,
      title: "Ornament Box",
      price: "₹200",
      originalPrice: "₹300",
      category: "Glass",
      size: "4\" x 4\"",
      description: "MDF Ornament Box with glass work",
      rating: 5,
      reviews: 9,
      image: "/images/products/Art14.png"
    },
    {
      id: 9,
      title: "Ornament Box",
      price: "₹200",
      originalPrice: "₹300",
      category: "Glass",
      size: "4\" x 4\"",
      description: "MDF Ornament Box with glass work",
      rating: 5,
      reviews: 9,
      image: "/images/products/Art15.png"
    }
  ];

  const handleWhatsAppOrder = (product) => {
    const message = `Hi! I'm interested in ordering the "${product.title}" (${product.price}). Could you please provide more details? My Name is: ...... and I am from: .....`;
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
  alt={product.title}
  src={product.image}
/>
                  
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
                  const message = "commissioning a custom artwork. Could you please share more details about the process? My Name is: ...... and I am from: .....";
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