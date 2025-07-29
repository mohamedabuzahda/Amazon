import React, { useEffect, useState } from "react";

const Order = () => {
  const [orderItems, setOrderItems] = useState([]);
  useEffect(() => {
    const stored = localStorage.getItem("cart");
    if (stored) {
      setOrderItems(JSON.parse(stored));
    }
  }, []);

  const orderId = "#AMZ" + Math.floor(Math.random() * 1000000000);
  const orderDate = new Date().toLocaleDateString();
  const totalAmount = "$" + orderItems.reduce((sum, item) => sum + ((item.price || item.currentPrice || 0) * (item.qty || 1)), 0).toFixed(2);
  const paymentMethod = "Credit Card (Visa **** 4587)";
  const shipping = {
    status: "Shipped",
    carrier: "FedEx",
    trackingNumber: "FDX-" + Math.floor(Math.random() * 1000000),
    address: "123 Main Street, Cairo, Egypt",
    estimatedDelivery: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toLocaleDateString(),
  };

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-6 space-y-6">
      
      <div className="bg-white shadow-md rounded-lg p-4 md:p-6">
        <h2 className="text-xl md:text-2xl font-bold mb-4">Order Summary</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 text-gray-700 text-sm md:text-base">
          <p><span className="font-semibold">Order ID: </span>{orderId}</p>
          <p><span className="font-semibold">Order Date: </span>{orderDate}</p>
          <p><span className="font-semibold">Total Amount: </span>{totalAmount}</p>
          <p><span className="font-semibold">Payment Method: </span>{paymentMethod}</p>
        </div>
        <div className="mt-6 text-right">
          <button
            className="bg-green-600 text-white px-6 py-2 rounded font-semibold text-base hover:bg-green-700"
            onClick={() => alert(`All items paid successfully!\nTotal: ${totalAmount}`)}
          >
            Pay All
          </button>
        </div>
      </div>

      
      <div className="bg-white shadow-md rounded-lg p-4 md:p-6">
        <h2 className="text-xl md:text-2xl font-bold mb-4">Purchased Items</h2>
        <div className="space-y-4">
          {orderItems.length === 0 ? (
            <div className="text-gray-500">No items in this order.</div>
          ) : (
            orderItems.map((item, i) => (
              <div
                key={item.id || i}
                className="flex flex-col md:flex-row md:items-center justify-between border-b pb-4 gap-4"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name || item.title}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-md object-cover"
                  />
                  <div>
                    <h3 className="text-base md:text-lg font-semibold text-gray-800 hover:text-blue-600 cursor-pointer">
                      {item.name || item.title || `Product ${i+1}`}
                    </h3>
                    <p className="text-gray-600 text-xs md:text-sm">
                      Quantity: {item.qty || 1} | Price: ${item.price || item.currentPrice || 0}
                    </p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      
      <div className="bg-white shadow-md rounded-lg p-4 md:p-6">
        <h2 className="text-xl md:text-2xl font-bold mb-4">Delivery & Shipping Details</h2>
        <div className="text-gray-700 text-sm md:text-base space-y-1">
          <p>
            <span className="font-semibold">Status:</span>{" "}
            <span
              className={`font-semibold ${
                shipping.status === "Delivered"
                  ? "text-green-600"
                  : shipping.status === "Shipped"
                  ? "text-blue-600"
                  : "text-yellow-600"
              }`}
            >
              {shipping.status}
            </span>
          </p>
          <p><span className="font-semibold">Carrier:</span> {shipping.carrier}</p>
          <p><span className="font-semibold">Tracking Number:</span> {shipping.trackingNumber}</p>
          <p><span className="font-semibold">Delivery Address:</span> {shipping.address}</p>
          <p><span className="font-semibold">Estimated Delivery:</span> {shipping.estimatedDelivery}</p>
        </div>
        <button className="mt-3 bg-blue-600 text-white px-4 py-2 text-sm md:text-base rounded hover:bg-blue-700">
          Track Package
        </button>
      </div>

      
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
