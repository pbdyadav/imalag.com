import React from 'react';
import { Link } from 'react-router-dom';

const Success = () => {
  return (
    <div className="text-center py-16 px-4">
      <h1 className="text-3xl font-bold mb-4 text-green-600">Thank you for your purchase!</h1>
      <p className="mb-6 text-gray-700">Your order has been placed successfully. We will contact you soon.</p>
      <Link
        to="/store"
        className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
      >
        Back to Store
      </Link>
    </div>
  );
};

export default Success;