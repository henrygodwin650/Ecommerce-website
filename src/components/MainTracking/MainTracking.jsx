import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaBox, FaTruck } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import Navbar from '../Navbar/Navbar';
import ProductData from '../Products/productData';

const Tracking = () => {
  const navigate = useNavigate();

  const [orderId, setOrderId] = useState('');
  const [trackingInfo, setTrackingInfo] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleTrack = () => {
    if (!orderId.trim()) {
      alert("Please enter your Order ID");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      const orders =
        JSON.parse(localStorage.getItem("orders")) || [];

      const foundOrder = orders.find(
        (order) =>
          order.orderId.toUpperCase() ===
          orderId.toUpperCase().trim()
      );

      if (!foundOrder) {
        alert("Order ID not found");
        setTrackingInfo(null);
        setLoading(false);
        return;
      }

      setTrackingInfo({
        ...foundOrder,
        progress: 65,
        steps: [
          {
            status: "Order Placed",
            done: true,
            date: "Apr 12",
          },
          {
            status: "Packed",
            done: true,
            date: "Apr 13",
          },
          {
            status: "Shipped",
            done: true,
            date: "Apr 14",
          },
          {
            status: "In Transit",
            done: true,
            date: "Apr 15",
          },
          {
            status: "Delivered",
            done: false,
            date: "Apr 28",
          },
        ],
      });

      setLoading(false);
    }, 800);
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 dark:text-white py-12">
        <div className="max-w-3xl mx-auto px-4">

          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 mb-8 text-green-600 hover:text-green-700"
          >
            <FaArrowLeft /> Back to Home
          </button>

          <h1 className="text-4xl font-bold text-center mb-10">
            Track Your Order
          </h1>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm">

            {/* INPUT */}
            <div className="flex gap-3 mb-8">
              <input
                type="text"
                placeholder="Enter Order ID"
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleTrack()}
                className="flex-1 border rounded-2xl px-5 py-4"
              />

              <button
                onClick={handleTrack}
                disabled={loading}
                className="bg-green-600 text-white px-8 py-4 rounded-2xl"
              >
                {loading ? "Tracking..." : "Track Order"}
              </button>
            </div>

            {/* RESULT */}
            {trackingInfo && (
              <div className="space-y-10">

                {/* HEADER */}
                <div className="flex justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Order ID</p>
                    <p className="font-mono text-2xl font-bold">
                      {trackingInfo.orderId}
                    </p>
                  </div>

                  <p className="font-semibold">
                    {trackingInfo.estimatedDelivery}
                  </p>
                </div>

                {/* ✅ PRODUCTS */}
                <div className="space-y-4">
                  {trackingInfo.items.map((item) => (
                    <div key={item.id} className="flex gap-4 border p-3 rounded-2xl">

                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-xl"
                      />

                      <div className="flex-1">
                        <p className="font-semibold">{item.name}</p>
                        <p className="text-sm">Qty: {item.quantity}</p>
                      </div>

                      <p className="font-bold text-green-600">
                        ${((item.priceCents * item.quantity) / 100).toFixed(2)}
                      </p>
                    </div>
                  ))}
                </div>

                {/* PROGRESS */}
                <div className="w-full bg-gray-200 h-3 rounded-full">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${trackingInfo.progress}%` }}
                    className="bg-green-500 h-3 rounded-full"
                  />
                </div>

                {/* TIMELINE */}
                <div className="space-y-6">
                  {trackingInfo.steps.map((step, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex gap-4"
                    >
                      <div className={`w-8 h-8 flex items-center justify-center rounded-full
                        ${step.done ? 'bg-green-500 text-white' : 'bg-gray-300'}`}>
                        {step.status === "Delivered" ? <FaBox /> : <FaTruck />}
                      </div>

                      <div>
                        <p className={step.done ? "text-green-600" : "text-gray-400"}>
                          {step.status}
                        </p>
                        <p className="text-sm text-gray-500">{step.date}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* LOCATION */}
                <p className="text-green-600">
                  📍 {trackingInfo.location}
                </p>

              </div>
            )}

          </div>
        </div>
      </div>
    </>
  );
};

export default Tracking;