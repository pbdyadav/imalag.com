import React from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '@/hooks/useCart';

const products = [
  {
    id: 1,
    title: 'Traditional Mandla Lippan',
    price: 700,
    image: '/images/products/Art7.png',
    description: 'Beautiful design with intricate mirror work on clay base.',
    size: '12" Circle',
    stock: 5
  },
  {
    id: 2,
    title: 'White Lippan Art',
    price: 700,
    image: '/images/products/Art8.png',
    description: 'Stunning mandala pattern created with mirror pieces.',
    size: '12" Circle',
    stock: 5
  },
  {
    id: 3,
    title: 'Spiritual Buddha with Tree',
    price: 1100,
    image: '/images/products/Art9.png',
    description: 'Spiritual Buddha with tree and mirror in black colors.',
    size: '14" Circle',
    stock: 5
  },
  {
    id: 4,
    title: 'Clay Golder Treee',
    price: 800,
    image: '/images/products/Art10.png',
    description: 'Vibrant Clay work in Black and Gold colour artwork with traditional Indian motifs.',
    size: '14" Circle',
    stock: 5
  },
  {
    id: 5,
    title: 'Black Buddha with Holo Light Efects',
    price: 3800,
    image: '/images/products/Art11.png',
    description: 'Majestic Black Buddha design with Holo Light Efects for Wall decoration.',
    size: '17.5 X 17.5" Circle',
    stock: 5
  },
  {
    id: 6,
    title: 'Green Buddha with Holo Light Efects',
    price: 3800,
    image: '/images/products/Art12.png',
    description: 'Majestic Green Tree Buddha design with Holo Light Efects for Wall decoration.',
    size: '17.5 X 17.5" Circle',
    stock: 5
  },
  {
    id: 7,
    title: 'Ornament Box',
    price: 200,
    image: '/images/products/Art13.png',
    description: 'MDF Ornament Box with glass work.',
    size: '4" X 4" Circle',
    stock: 5
  },
  {
    id: 8,
    title: 'Ornament Box',
    price: 200,
    image: '/images/products/Art14.png',
    description: 'MDF Ornament Box with glass work.',
    size: '4" X 4" Circle',
    stock: 5
  },
  {
    id: 9,
    title: 'Ornament Box',
    price: 200,
    image: '/images/products/Art15.png',
    description: 'MDF Ornament Box with glass work.',
    size: '4" X 4" Circle',
    stock: 5
  },
];

const ProductDetailPage = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return <div className="p-6 text-center text-red-600">Product not found.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-auto rounded shadow-md"
        />
        <div>
          <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
          <p className="text-gray-700 text-lg mb-2">Size: {product.size}</p>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <p className="text-2xl font-semibold mb-6 text-black">₹{product.price.toLocaleString()}</p>
          <button
  onClick={() => addToCart(product)}
  disabled={product.stock === 0}
  className={`px-4 py-2 rounded ${
    product.stock === 0
      ? 'bg-gray-400 cursor-not-allowed'
      : 'bg-black text-white hover:bg-gray-800'
  }`}
>
  {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
