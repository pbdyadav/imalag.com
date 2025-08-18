import React, { useState } from "react";
import { useParams } from "react-router-dom";
import products from "@/data/products";
import { FaWhatsapp } from "react-icons/fa";

const ProductDetailPage = () => {
  const { id } = useParams();
  const product = products.find((p) => String(p.id) === String(id));

  // Handle invalid product IDs
  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
        <p className="text-gray-600">The product you are looking for doesn’t exist.</p>
      </div>
    );
  }

  // Ensure we always have at least one image
  const images = product.images && product.images.length > 0 
    ? product.images 
    : [product.image || "/placeholder.png"];

  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left: Product Images */}
        <div>
          <img
            src={mainImage}
            alt={product.name}
            className="w-full h-96 object-cover rounded-xl shadow-lg"
          />
          <div className="flex gap-4 mt-4 overflow-x-auto">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index + 1}`}
                className={`w-24 h-24 object-cover rounded-lg cursor-pointer border-2 ${
                  mainImage === img ? "border-black" : "border-transparent"
                }`}
                onClick={() => setMainImage(img)}
              />
            ))}
          </div>
        </div>

        {/* Right: Product Info */}
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {product.description || "No description available."}
          </p>
          <p className="text-2xl font-semibold text-green-700 mb-6">
            {product.price}
          </p>

          {/* WhatsApp Button */}
          <a
            href={`https://wa.me/919893137595?text=Hello, I want to know more about *${product.name}* (ID: ${product.id})`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-700 transition"
          >
            <FaWhatsapp size={22} /> Order on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
