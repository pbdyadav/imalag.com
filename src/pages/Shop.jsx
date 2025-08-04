// src/pages/Shop.jsx
import React from 'react';
import { useCart } from '@/hooks/useCart';

const products = [
  {
    id: '1',
    name: 'Handcrafted Lippan Mirror',
    price: 700,
    image: '/images/products/Art7.png',
  },
  {
    id: '2',
    name: 'White Lippan Art',
    price: 700,
    image: '/images/products/Art8.png',
  },
];

const Shop = () => {
  const { addToCart } = useCart();

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-terracotta">Shop Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg p-4 shadow hover:shadow-lg transition">
            <img src={product.image} alt={product.name} className="w-full h-60 object-cover mb-4 rounded" />
            <h3 className="text-xl font-semibold text-deep-brown">{product.name}</h3>
            <p className="text-terracotta font-bold text-lg mb-2">₹{product.price}</p>
            <button
  onClick={() => {
    console.log('Adding to cart:', product);
    addToCart(product);
  }}
  className="bg-terracotta text-white px-4 py-2 rounded hover:bg-terracotta-dark transition"
>
  Add to Cart
</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
