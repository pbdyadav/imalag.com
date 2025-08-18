import React, { useEffect, useState } from 'react';
import { useCart } from '@/hooks/useCart';
import { useNavigate } from 'react-router-dom';
import supabase from "@/components/supabase";
import emailjs from '@emailjs/browser';

const Success = () => {
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();
  const [success, setSuccess] = useState(false);

  const customerName = localStorage.getItem('customer_name') || '';
  const customerEmail = localStorage.getItem('customer_email') || '';
  const customerPhone = localStorage.getItem('customer_phone') || '';

  const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  useEffect(() => {
    const placeOrder = async () => {
      if (!customerName || !customerEmail || !customerPhone) {
        alert("Customer details missing. Please go back to cart.");
        navigate('/cart');
        return;
      }

      const orderId = 'ORD' + Date.now();
      const formattedItemsString = cartItems.map(
        (item) => `${item.quantity}x ${item.name}`
      ).join(', ');

      try {
        // Save to Supabase
        const { error: orderSaveError } = await supabase
          .from('orders')
          .insert([
            {
              order_id: orderId,
              items: cartItems,
              total: totalAmount,
              status: 'Placed',
              email: customerEmail,
              phone: customerPhone,
              customer_name: customerName,
            },
          ]);

        if (orderSaveError) {
          console.error('❌ Order save failed:', orderSaveError);
          throw orderSaveError;
        }

        // Send email
        const templateParams = {
          to_email: customerEmail || "",
          customer_name: customerName || "",
          customer_phone: customerPhone || "",
          order_id: orderId || "",
          order_items: formattedItemsString || "",
          order_total: totalAmount || ""
        };
          console.log("Template Params being sent:", templateParams);
          emailjs.send(
            'imalagart_gmail', // Your service ID
            'template_ipkn5fu', // Your template ID
            templateParams, 
          '9Du31zMtfVSf4b5Lq' // replace with actual public key
          )
          .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
          })
          .catch((err) => {
            console.error('Order failed:', err);
          });

        clearCart();
        setSuccess(true);
        localStorage.setItem('orderId', orderId);
      } catch (error) {
        console.error('Order failed:', error);
        alert('Something went wrong. Please try again.');
      }
    };

    placeOrder();
  }, []);

  if (success) {
    return (
      <div className="max-w-2xl mx-auto text-center py-12">
        <h2 className="text-3xl font-bold text-terracotta mb-4">🎉 Order Placed!</h2>
        <p className="mb-6">Thank you for your purchase. We will contact you soon.</p>
        <button
          onClick={() => navigate('/shop')}
          className="bg-terracotta text-white px-6 py-2 rounded hover:bg-terracotta-dark transition"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="text-center py-12 text-lg font-medium">Placing your order...</div>
  );
};

export default Success;
