import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/hooks/useCart';

const products = [
  {
    id: 1,
    title: 'Traditional Mandla Lippan',
    price: 700,
    image: '/images/products/Art7.png',
  },
  {
    id: 2,
    title: 'White Lippan Art',
    price: 700,
    image: '/images/products/Art8.png',
  },
  {
    id: 3,
    title: 'Spiritual Buddha with Tree',
    price: 1100,
    image: '/images/products/Art9.png',
  },
  {
    id: 4,
    title: 'Clay Golder Tree',
    price: 800,
    image: '/images/products/Art10.png',
  },
  {
    id: 5,
    title: 'Black Buddha with Holo Light Efects',
    price: 3800,
    image: '/images/products/Art11.png',
  },
  {
    id: 6,
    title: 'Green Buddha with Holo Light Efects',
    price: 3800,
    image: '/images/products/Art12.png',
  },
  {
    id: 7,
    title: 'Ornament Box',
    price: 200,
    image: '/images/products/Art13.png',
  },
  {
    id: 8,
    title: 'Ornament Box',
    price: 200,
    image: '/images/products/Art14.png',
  },
  {
    id: 9,
    title: 'Ornament Box',
    price: 200,
    image: '/images/products/Art15.png',
  },
];

const ProductsList = () => {
  const { addToCart } = useCart();

  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <div key={product.id} className="border rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition-shadow">
          <img
  src={product.image}
  alt={product.title}
  className="w-full h-64 object-cover rounded transition-transform duration-300 hover:scale-105"
/>
          <h3 className="text-xl font-semibold mt-4">{product.title}</h3>
          <p className="text-gray-600 mt-1">₹{product.price.toLocaleString()}</p>
          <div className="mt-4 flex justify-between">
            <Link to={`/product/${product.id}`} className="text-indigo-600 hover:underline">
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