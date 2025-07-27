import React from "react";
import slider1 from "../assets/images/slider1.png";
import slider2 from "../assets/images/slider2.png";
const order = {
  orderId: "#AMZ123456789",
  orderDate: "July 26, 2025",
  totalAmount: "$215.45",
  paymentMethod: "Credit Card (Visa **** 4587)",

  shipping: {
    status: "Shipped",
    carrier: "FedEx",
    trackingNumber: "FDX-894321",
    address: "123 Main Street, Cairo, Egypt",
    estimatedDelivery: "July 30, 2025",
  },

  items: [
    {
      id: 1,
      title: "Wireless Headphones",
      image: slider1,
      price: "$59.99",
      quantity: 1,
      seller: "TechStore",
      returnBy: "Aug 10, 2025",
    },
    {
      id: 2,
      title: "Smart Watch Series 5",
      image: slider2,
      price: "$120.00",
      quantity: 1,
      seller: "Amazon",
      returnBy: "Aug 5, 2025",
    },
  ],
};

const Order = () => {
  return (
    <div className="max-w-6xl mx-auto p-4 md:p-6 space-y-6">
      {/*  Order Summary */}
      <div className="bg-white shadow-md rounded-lg p-4 md:p-6">
        <h2 className="text-xl md:text-2xl font-bold mb-4">Order Summary</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 text-gray-700 text-sm md:text-base">
          <p><span className="font-semibold">Order ID: </span>{order.orderId}</p>
          <p><span className="font-semibold">Order Date: </span>{order.orderDate}</p>
          <p><span className="font-semibold">Total Amount: </span>{order.totalAmount}</p>
          <p><span className="font-semibold">Payment Method: </span>{order.paymentMethod}</p>
        </div>
      </div>

      {/*  Purchased Items */}
      <div className="bg-white shadow-md rounded-lg p-4 md:p-6">
        <h2 className="text-xl md:text-2xl font-bold mb-4">Purchased Items</h2>
        <div className="space-y-4">
          {order.items.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row md:items-center justify-between border-b pb-4 gap-4"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-md object-cover"
                />
                <div>
                  <h3 className="text-base md:text-lg font-semibold text-gray-800 hover:text-blue-600 cursor-pointer">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-xs md:text-sm">
                    Seller: <span className="font-medium">{item.seller}</span>
                  </p>
                  <p className="text-gray-600 text-xs md:text-sm">
                    Quantity: {item.quantity} | Price: {item.price}
                  </p>
                  <p className="text-gray-500 text-xs">
                    Return eligible until {item.returnBy}
                  </p>
                </div>
              </div>
              <div className="flex md:flex-col gap-2">
                <button className="bg-blue-600 text-white px-3 py-1 text-xs md:text-sm rounded hover:bg-blue-700">
                  Buy it Again
                </button>
                <button className="bg-yellow-500 text-white px-3 py-1 text-xs md:text-sm rounded hover:bg-yellow-600">
                  Return / Replace
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/*  Shipping & Delivery */}
      <div className="bg-white shadow-md rounded-lg p-4 md:p-6">
        <h2 className="text-xl md:text-2xl font-bold mb-4">Delivery & Shipping Details</h2>
        <div className="text-gray-700 text-sm md:text-base space-y-1">
          <p>
            <span className="font-semibold">Status:</span>{" "}
            <span
              className={`font-semibold ${
                order.shipping.status === "Delivered"
                  ? "text-green-600"
                  : order.shipping.status === "Shipped"
                  ? "text-blue-600"
                  : "text-yellow-600"
              }`}
            >
              {order.shipping.status}
            </span>
          </p>
          <p><span className="font-semibold">Carrier:</span> {order.shipping.carrier}</p>
          <p><span className="font-semibold">Tracking Number:</span> {order.shipping.trackingNumber}</p>
          <p><span className="font-semibold">Delivery Address:</span> {order.shipping.address}</p>
          <p><span className="font-semibold">Estimated Delivery:</span> {order.shipping.estimatedDelivery}</p>
        </div>
        <button className="mt-3 bg-blue-600 text-white px-4 py-2 text-sm md:text-base rounded hover:bg-blue-700">
          Track Package
        </button>
      </div>

      {/* Customer Support */}
      <div className="bg-white shadow-md rounded-lg p-4 md:p-6">
        <h2 className="text-xl md:text-2xl font-bold mb-4">Customer Support</h2>
        <div className="flex flex-wrap gap-3">
          <button className="bg-red-500 text-white px-3 py-2 text-sm rounded hover:bg-red-600">
            Report a Problem
          </button>
          <button className="bg-gray-700 text-white px-3 py-2 text-sm rounded hover:bg-gray-800">
            Contact Seller
          </button>
          <button className="bg-gray-700 text-white px-3 py-2 text-sm rounded hover:bg-gray-800">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default Order;
