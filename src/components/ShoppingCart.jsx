import React from 'react';
import { useCart } from '@/hooks/useCart';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ShoppingCart = () => {
  const navigate = useNavigate();
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');

  const { cartItems, removeFromCart, clearCart, increaseQty, decreaseQty } = useCart();

  const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cartItems.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 text-center">
        <h2 className="text-3xl font-bold text-terracotta mb-4">Your Cart is Empty</h2>
        <Link to="/shop" className="text-white bg-terracotta px-6 py-2 rounded hover:bg-terracotta-dark transition">
          Go to Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-terracotta mb-6">Shopping Cart</h2>
      <ul className="space-y-6">
      {cartItems.map((item) => (
  <div key={item.id} className="flex items-center justify-between mb-4 border-b pb-4">
    <div className="flex items-center space-x-4">
      <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
      <div>
        <h4 className="text-lg font-semibold text-deep-brown">{item.name}</h4>
        <p className="text-terracotta font-medium">₹{item.price}</p>
        <div className="flex items-center mt-2 space-x-2">
          <button
            onClick={() => decreaseQty(item.id)}
            className="px-2 py-1 bg-terracotta text-white rounded hover:bg-terracotta-dark"
          >
            –
          </button>
          <span className="text-lg">{item.quantity}</span>
          <button
            onClick={() => increaseQty(item.id)}
            className="px-2 py-1 bg-terracotta text-white rounded hover:bg-terracotta-dark"
          >
            +
          </button>
        </div>
      </div>
    </div>
    <button
      onClick={() => removeFromCart(item.id)}
      className="text-sm text-red-600 hover:underline"
    >
      Remove
    </button>
  </div>
))}
      </ul>

      <div className="mt-8 space-y-4">
  <div>
  <label className="block text-sm font-medium text-deep-brown mb-1">Your Name</label>
  <input
    type="text"
    value={customerName}
    onChange={(e) => setCustomerName(e.target.value)}
    placeholder="Enter your name"
    className="w-full border border-gray-300 rounded px-4 py-2"
    required
    />
  </div>
  <div>
    <label className="block text-sm font-medium text-deep-brown mb-1">Email Address</label>
    <input
      type="email"
      value={customerEmail}
      onChange={(e) => setCustomerEmail(e.target.value)}
      placeholder="Enter your email"
      className="w-full border border-gray-300 rounded px-4 py-2"
      required
    />
  </div>
  <div>
    <label className="block text-sm font-medium text-deep-brown mb-1">Contact Number</label>
    <input
      type="tel"
      value={customerPhone}
      onChange={(e) => setCustomerPhone(e.target.value)}
      placeholder="Enter your contact number"
      className="w-full border border-gray-300 rounded px-4 py-2"
      required
    />
  </div>
</div>
      <div className="mt-8 flex justify-between items-center border-t pt-4">
        <h3 className="text-xl font-semibold text-deep-brown">Total: ₹{totalAmount.toLocaleString()}</h3>
        <div className="flex space-x-4">
          <button
            onClick={clearCart}
            className="px-4 py-2 border border-red-500 text-red-500 rounded hover:bg-red-50 transition"
          >
            Clear Cart
          </button>
          <button
  onClick={() => {
    localStorage.setItem('customer_name', customerName);
    localStorage.setItem('customer_email', customerEmail);
    localStorage.setItem('customer_phone', customerPhone);
    navigate('/success');
  }}
  className="bg-terracotta text-white px-6 py-2 rounded hover:bg-terracotta-dark transition"
>
  Checkout
</button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
