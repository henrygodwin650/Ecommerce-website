import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from 'react-router';
import Navbar from "./Navbar"

const Orders = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const order = location.state;

  if (!order) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold">
          No Order Found
        </h2>

        <button
          onClick={() => navigate("/")}
          className="mt-4 px-6 py-3 bg-green-600 text-white rounded-xl"
        >
          Go Home
        </button>
      </div>
    );
  }

  return (
    <>
     <Navbar />
    <div className="container dark:bg-gray-500 mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold mb-6">
        Order Confirmation
      </h1>

      <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow">
        <h2 className="text-xl font-semibold">
          Order ID: {order.orderId}
        </h2>

        <p>Date: {order.orderDate}</p>

        <div className="mt-6">
          <h3 className="font-bold text-lg mb-2">
            Customer Information
          </h3>

          <p>{order.customer.fullName}</p>
          <p>{order.customer.email}</p>
          <p>{order.customer.phone}</p>
          <p>{order.customer.address}</p>
          <p>{order.customer.city}</p>
        </div>

        <div className="mt-8">
          <h3 className="font-bold text-lg mb-4">
            Ordered Items
          </h3>

          {order.items.map((item) => (
            <div
              key={item.productId}
              className="flex gap-4 border-b py-4"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 rounded-xl object-cover"
              />

              <div>
                <p className="font-medium">{item.name}</p>
                <p>Qty: {item.quantity}</p>
                <p>
                  $
                  {(
                    (item.priceCents * item.quantity) /
                    100
                  ).toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-right">
          <p>Subtotal: ${(order.subtotal / 100).toFixed(2)}</p>
          <p>Shipping: ${(order.shipping / 100).toFixed(2)}</p>

          <h2 className="text-2xl font-bold mt-2">
            Total: ${(order.total / 100).toFixed(2)}
          </h2>
          <button
            onClick={() => navigate("/tracking")}
            className="mt-4 px-6 py-3 bg-green-600 text-white rounded-xl"
          >
            Track Order
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default Orders;