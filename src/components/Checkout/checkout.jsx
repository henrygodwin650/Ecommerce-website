// Checkout.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { FaCartShopping, FaArrowLeft } from 'react-icons/fa6';
import { useCart } from './CartContext';
import Navbar from './Navbar';
const Checkout = () => {
  const navigate = useNavigate();
  const { cart, removeFromCart, clearCart, cartCount, subtotal } = useCart();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    address: '',
    city: '',
    postalCode: '',
    phone: '',
    paymentMethod: 'card',
  });

  const formatMoney = (cents) => {
    return (cents / 100).toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });
  };


  const shipping = 599; // $5.99
  const total = subtotal + shipping;

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = () => {
    if (!formData.fullName || !formData.email || !formData.address) {
      alert("Please fill in all required fields (*)");
      return;
    }

    const orderData = {
      orderId: `ICE-${Date.now()}`,
      orderDate: new Date().toLocaleString(),
      customer: formData,
      items: cart,
      subtotal,
      shipping,
      total,
      status: "In Transit",
      location: "Lagos Hub",
      estimatedDelivery: "April 28, 2026",
    };

    const existingOrders =
      JSON.parse(localStorage.getItem("orders")) || [];

    existingOrders.push(orderData);

    localStorage.setItem(
      "orders",
      JSON.stringify(existingOrders)
    );

    clearCart();

    navigate("/orders", {
      state: orderData,
    });
  }
  if (cart.length === 0) {
    return (
      <div className="min-h-screen dark:bg-gray-950 bg-gray-50 flex items-center justify-center py-20">
        <div className="text-center">
          <FaCartShopping className="text-6xl text-gray-300 mx-auto mb-4" />
          <h2 className="text-2xl dark:text-white/30 font-semibold mb-2">Your cart is empty</h2>
          <button
            onClick={() => navigate('/')}
            className="bg-green-600 text-white px-8 py-3 rounded-2xl font-semibold hover:bg-green-700 transition mt-6"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Navbar cartCount={cartCount} />

      <div className="min-h-screen dark:bg-gray-950 bg-gray-50 py-10">
        <div className="container mx-auto px-4 max-w-6xl">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-gray-600 hover:text-green-600 mb-6 font-medium"
          >
            <FaArrowLeft /> Back to Home
          </button>

          <h1 className="text-4xl dark:text-gray-400 font-bold text-center mb-10">
            Checkout (<span className="text-green-600">{cartCount}</span>)
          </h1>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* Shipping & Payment */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm">
              <h2 className="text-2xl font-semibold mb-6">Shipping Information</h2>

              <div className="space-y-5">
                {['fullName', 'email', 'address'].map(field => (
                  <div key={field}>
                    <label className="block text-sm font-medium mb-1">
                      {field === 'fullName' ? 'Full Name' :
                        field === 'email' ? 'Email Address' : 'Street Address'} *
                    </label>
                    <input
                      type={field === 'email' ? 'email' : 'text'}
                      name={field}
                      value={formData[field]}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 dark:border-gray-600 rounded-2xl px-4 py-3 focus:outline-none focus:border-green-500"
                      required
                    />
                  </div>
                ))}

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">City</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 dark:border-gray-600 rounded-2xl px-4 py-3 focus:outline-none focus:border-green-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Postal Code</label>
                    <input
                      type="text"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 dark:border-gray-600 rounded-2xl px-4 py-3 focus:outline-none focus:border-green-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 dark:border-gray-600 rounded-2xl px-4 py-3 focus:outline-none focus:border-green-500"
                  />
                </div>
              </div>

              <h2 className="text-2xl font-semibold mt-10 mb-4">Payment Method</h2>
              <div className="space-y-3">
                {['card', 'cash'].map(method => (
                  <label key={method} className="flex items-center gap-3 border p-4 rounded-2xl cursor-pointer hover:border-green-500">
                    <input
                      type="radio"
                      name="paymentMethod"
                      checked={formData.paymentMethod === method}
                      onChange={() => setFormData({ ...formData, paymentMethod: method })}
                    />
                    {method === 'card' ? 'Credit / Debit Card' : 'Cash on Delivery'}
                  </label>
                ))}
              </div>

              <button
                onClick={handlePlaceOrder}
                className="w-full mt-10 bg-green-600 hover:bg-green-700 text-white font-semibold py-4 rounded-2xl text-lg transition active:scale-[0.98]"
              >
                Place Order - {formatMoney(total)}
              </button>
            </div>

            {/* Order Summary */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm h-fit sticky top-6">
              <h2 className="text-2xl font-semibold mb-6">Order Summary</h2>

              {cart.map((item) => (
                <div key={item.productId} className="flex gap-4 py-5 border-b last:border-none">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-xl"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="font-medium line-clamp-2">{item.name}</p>
                    <p className="text-sm text-gray-500 mt-1">Qty: {item.quantity}</p>
                    <p className="text-green-600 font-semibold mt-1">
                      {formatMoney(item.priceCents * item.quantity)}
                    </p>
                  </div>

                  <div className="flex flex-col items-end gap-2">
                    <button
                      onClick={() => removeFromCart(item.productId)}
                      className="text-red-500 hover:text-red-700 text-sm font-medium"
                    >
                      Remove
                    </button>
                    <Link href="/tracking" className="text-green-600 hover:underline text-sm font-medium">
                      Track
                    </Link>
                  </div>
                </div>
              ))}

              <div className="mt-8 space-y-3 text-lg">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>{formatMoney(subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>{formatMoney(shipping)}</span>
                </div>
                <div className="flex justify-between font-bold border-t pt-4 text-xl">
                  <span>Total</span>
                  <span>{formatMoney(total)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;