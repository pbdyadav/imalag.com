// src/pages/Shop.jsx
import React from 'react';
import { useCart } from '@/hooks/useCart';

const products = [
  {
    id: '1',
    name: 'Traditional Mandla Lippan',
    price: 700,
    image: '/images/products/Art7.png',
  },
  {
    id: '2',
    name: 'White Lippan Art',
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
