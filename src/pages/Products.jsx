import { useEffect } from "react";
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import products from "../data/products";
import SEO from "@/components/SEO";

const Products = () => {
  const whatsappNumber = "919893137595";

  const [selectedCategory, setSelectedCategory] = useState("all");
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [selectedCategory]);

  // ✅ CATEGORY BUTTONS (must match product.category values)
  const categories = [
    { id: "all", name: "All Products" },
    { id: "lippan", name: "Lippan Art" },
    { id: "mosaic", name: "Mirror Mosaic" },
    { id: "glass", name: "Glass Work" },
    { id: "mdf", name: "MDF" },
    { id: "raw", name: "Raw Material" }

  ];

  // ✅ FILTER LOGIC
  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((item) =>
        Array.isArray(item.category)
          ? item.category.includes(selectedCategory)
          : item.category === selectedCategory
      );

  // ✅ WHATSAPP ORDER HANDLER
  const handleWhatsAppOrder = (product) => {
    const message = `Hello, I am interested in buying this product:\n\n${product.title}\nPrice: ${product.price}\n\nPlease share more details.`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };
  return (
    <div className="p-6">

      {/* ✅ SEO */}
      <SEO
        title="Our Products"
        description="Browse handcrafted Lippan art, mirror mosaic, MDF boxes, and premium raw materials."
      />

      <Helmet>
        <title>Our Products - Archana Lippan Art Gallery</title>
      </Helmet>

      {/* ✅ PAGE HEADING */}
      <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  className="mb-8"
>
  <h1 className="text-center text-3xl md:text-4xl font-bold mb-3">
    Our <span className="text-terracotta">Products</span>
  </h1>

  <div className="text-gray-700 max-w-5xl mx-auto text-left space-y-4 leading-relaxed">
    <p>
      Discover a luxury collection of handcrafted artworks and decor pieces designed to add elegance, 
      culture, and modern beauty to any space. Each product at <strong>Archana Lippan Art Gallery</strong> 
      reflects premium craftsmanship, authentic artistic technique, and long-lasting quality.
    </p>

    <p>
      Whether you're decorating your home, office, hotel, studio, or gifting something extraordinary, 
      our exclusive range offers timeless artistic value and visual richness.
    </p>

    <h2 className="text-xl font-semibold text-terracotta">✨ What You'll Find Here:</h2>
    <ul className="list-disc ml-6 space-y-1">
      <li>Traditional <strong>Lippan mud & mirror artwork</strong></li>
      <li>Premium <strong>mirror mosaic wall decor pieces</strong></li>
      <li>Designer <strong>glass work frames</strong> & decor</li>
      <li>Exclusive <strong>MDF wall panels, boxes & decor units</strong></li>
      <li>High-quality <strong>raw materials for artists & creators</strong></li>
    </ul>

    <h2 className="text-xl font-semibold text-terracotta">🌟 Why Our Products Stand Out:</h2>
    <ul className="list-disc ml-6 space-y-1">
      <li>Authentic handcrafted finishes</li>
      <li>Premium materials for durability</li>
      <li>Luxury look for modern interiors</li>
      <li>Custom sizes, designs & colours available</li>
      <li>Perfect for homes, offices & gifting</li>
    </ul>

    <p>
      Browse our premium art collection below to discover the perfect piece for your wall decor styling and creative inspiration. 
      Each item offers a seamless blend of traditional Indian art and contemporary design—uniquely crafted to elevate your space.
    </p>
  </div>
</motion.div>

      {/* ✅ CATEGORY + PRODUCT WRAPPER */}
      <div className="flex flex-col lg:flex-row gap-8">

        {/* ✅ STICKY CATEGORY FILTER */}
        <div className="lg:w-64 w-full sticky top-20 bg-#daa520 z-30 py-4">
          <div className="flex lg:flex-col flex-row flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-5 py-2 rounded-full border font-medium transition ${selectedCategory === category.id
                  ? "bg-terracotta text-white shadow"
                  : "bg-white text-gray-800 hover:bg-terracotta/10 border-terracotta/40"
                  }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* ✅ PRODUCT GRID (UNCHANGED DESIGN) */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
              whileHover={{ scale: 1.02 }}
            >
              <Link to={`/product/${product.id}`}>
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-67 object-cover"
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

      {/* ✅ EMPTY STATE */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-16 text-gray-500 text-lg">
          No products found in this category.
        </div>
      )}

    </div>
  );
};

export default Products;