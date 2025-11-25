import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "@/hooks/useCart";
import products from "@/data/productsData";

const ProductsList = () => {
  const { addToCart } = useCart();

  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <div
          key={product.id}
          className="border rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition-shadow"
        >
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-64 object-cover rounded transition-transform duration-300 hover:scale-105"
          />

          <h3 className="text-xl font-semibold mt-4">{product.title}</h3>

          {/* Optional Category */}
          {product.category && (
            <p className="text-sm text-gray-500 mt-1">{product.category}</p>
          )}

          <p className="text-gray-700 mt-2 font-semibold">₹{product.price}</p>

          <div className="mt-4 flex justify-between items-center">
            <Link
              to={`/product/${product.id}`}
              className="text-indigo-600 hover:underline"
            >
              View Details
            </Link>

            <button
              onClick={() => addToCart(product)}
              className="bg-black text-white px-3 py-1 rounded hover:bg-gray-800"
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsList;
