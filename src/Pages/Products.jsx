import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import product1 from "../assets/Products/product-1.webp";
import product2 from "../assets/Products/product-2.webp";
import product3 from "../assets/Products/product-3.webp";
import product4 from "../assets/Products/product-4.webp";
import product5 from "../assets/Products/product-5.webp";
import product6 from "../assets/Products/product-6.webp";
import product7 from "../assets/Products/product-7.webp";
import product8 from "../assets/Products/product-8.webp";
import product9 from "../assets/Products/product-9.webp";
import product10 from "../assets/Products/product-10.webp";
import product11 from "../assets/Products/product-11.webp";
import product12 from "../assets/Products/product-12.webp";

const initialProducts = [
  {
    id: 1,
    name: "Fica 60 cm 1200 m3/hr Filterless Kitchen Chimney with 15 Years Warranty With LED Panel",
    image: product1,
    rating: 4.2,
    reviews: 14204,
    originalPrice: 16990,
    currentPrice: 12990,
    discount: 24,
    deliveryDate: "2025-07-28",
    freeDelivery: true,
    brand: "Fica",
  },
  {
    id: 2,
    name: "Godrej 1.5 Ton 3 Star, 5-in-1 Convertible Inverter Split AC (5 Years Warranty, Copper, I-Sense Technology, 2024 Model)",
    image: product2,
    rating: 4.1,
    reviews: 610,
    originalPrice: 54990,
    currentPrice: 32990,
    discount: 40,
    deliveryDate: "2025-08-15",
    brand: "Godrej",
    freeDelivery: true,
  },
  {
    id: 3,
    name: "LG 28 L Convection Microwave Oven (MC2846BG), Black, Quartz Heater",
    image: product3,
    rating: 4.2,
    reviews: 1522,
    originalPrice: 18990,
    currentPrice: 13490,
    discount: 29,
    deliveryDate: "2025-07-27",
    brand: "LG",
    freeDelivery: true,
  },
  {
    id: 4,
    name: "Samsung 8 Kg, 5 star, Eco Bubble Tech, Digital Inverter Motor, Soft Closing Door, Fully-Automatic Top Load Washing Machine",
    image: product4,
    rating: 4.3,
    reviews: 25505,
    originalPrice: 26990,
    currentPrice: 19990,
    discount: 26,
    deliveryDate: "2025-07-27",
    brand: "Samsung",
    freeDelivery: true,
  },
  {
    id: 5,
    name: "Samsung 7 kg, Eco Bubble Tech, 5 star, Digital Inverter, Soft Closing Door, Fully-Automatic, Top Load Washing Machine",
    image: product5,
    rating: 4.3,
    reviews: 6483,
    originalPrice: 24990,
    currentPrice: 17990,
    discount: 28,
    deliveryDate: "2025-07-27",
    brand: "Samsung",
    freeDelivery: true,
  },
  {
    id: 6,
    name: "Samsung 7 kg, 3 star, Fully-Automatic Top Load Washing Machine (WA70A4002GS/TL, Imperial Silver)",
    image: product6,
    rating: 4.2,
    reviews: 5123,
    originalPrice: 22990,
    currentPrice: 16590,
    discount: 28,
    deliveryDate: "2025-08-15",
    brand: "Samsung",
    freeDelivery: true,
  },
  {
    id: 7,
    name: "LG 6.5 Kg 5 Star Inverter TurboDrum Fully Automatic Top Loading Washing Machine (T65SKSF4Z, 5 Smart Motion Technology)",
    image: product7,
    rating: 4.3,
    reviews: 10122,
    originalPrice: 23990,
    currentPrice: 16490,
    discount: 31,
    deliveryDate: "2025-07-27",
    brand: "LG",
    freeDelivery: true,
  },
  {
    id: 8,
    name: "Godrej 6.5 Kg 5 Star I-Wash Technology for Automatic Top Touch Wash Fully-Automatic Top Load Washing Machine",
    image: product8,
    rating: 4.1,
    reviews: 1440,
    originalPrice: 18990,
    currentPrice: 12990,
    discount: 32,
    deliveryDate: "2025-07-27",
    brand: "Godrej",
    freeDelivery: true,
  },
  {
    id: 9,
    name: "Panasonic 20 L Solo Microwave Oven (NN-SM25JBFDG,Black)",
    image: product9,
    rating: 4.2,
    reviews: 13204,
    originalPrice: 16990,
    currentPrice: 12990,
    discount: 24,
    deliveryDate: "2025-07-27",
    brand: "Panasonic",
    freeDelivery: true,
  },
  {
    id: 10,
    name: "Samsung 183 L 4 Star Digital Inverter, Direct-Cool Single Door Refrigerator (RR20D2824CR/HL, Red, Base Stand with Drawer)",
    image: product10,
    rating: 4.2,
    reviews: 610,
    originalPrice: 54990,
    currentPrice: 32990,
    discount: 40,
    deliveryDate: "2025-08-15",
    brand: "Samsung",
    freeDelivery: true,
  },
  {
    id: 11,
    name: "LG 7 Kg, 5 Star, Direct Drive Technology, Steam Wash, 6 Motion DD, Smart Diagnosis, Fully-Automatic Front Load Washing Machine",
    image: product11,
    rating: 4.2,
    reviews: 1522,
    originalPrice: 18990,
    currentPrice: 13490,
    discount: 29,
    deliveryDate: "2025-07-27",
    brand: "LG",
    freeDelivery: true,
  },
  {
    id: 12,
    name: "Whirlpool 184 L 2 Star Direct-Cool Single Door Refrigerator (205 WDE CLS 2S SAPPHIRE BLUE -Z, Sapphire Blue, Base Stand with Drawer)",
    image: product12,
    rating: 4.3,
    reviews: 25505,
    originalPrice: 26990,
    currentPrice: 19990,
    discount: 26,
    deliveryDate: "2025-07-27",
    brand: "Whirlpool",
    freeDelivery: true,
  },
];

const Products = () => {
  const [products, setProducts] = useState(initialProducts);
  const [showFilters, setShowFilters] = useState(false);
  const [activeFilters, setActiveFilters] = useState({
    delivery: false,
    rating: false,
    brands: [],
    priceRange: [],
  });

  // Filter products based on active filters
  useEffect(() => {
    let filteredProducts = [...initialProducts];

    // Filter by delivery (2 days)
    if (activeFilters.delivery) {
      filteredProducts = filteredProducts.filter((product) => {
        const deliveryDate = new Date(product.deliveryDate);
        const today = new Date();
        const daysDifference = Math.ceil(
          (deliveryDate - today) / (1000 * 60 * 60 * 24)
        );
        return daysDifference <= 2;
      });
    }

    // Filter by rating (4 stars and up)
    if (activeFilters.rating) {
      filteredProducts = filteredProducts.filter(
        (product) => product.rating >= 4.0
      );
    }

    // Filter by brands
    if (activeFilters.brands.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        activeFilters.brands.includes(product.brand)
      );
    }

    // Filter by price ranges
    if (activeFilters.priceRange.length > 0) {
      filteredProducts = filteredProducts.filter((product) => {
        return activeFilters.priceRange.some((range) => {
          switch (range) {
            case "10000-15000":
              return (
                product.currentPrice >= 10000 && product.currentPrice <= 15000
              );
            case "15000-20000":
              return (
                product.currentPrice >= 15000 && product.currentPrice <= 20000
              );
            case "20000-35000":
              return (
                product.currentPrice >= 20000 && product.currentPrice <= 35000
              );
            case "35000+":
              return product.currentPrice >= 35000;
            default:
              return false;
          }
        });
      });
    }

    setProducts(filteredProducts);
  }, [activeFilters]);

  // Handle delivery filter
  const handleDeliveryFilter = (e) => {
    setActiveFilters((prev) => ({
      ...prev,
      delivery: e.target.checked,
    }));
  };

  // Handle brand filter
  const handleBrandFilter = (e) => {
    const brand = e.target.value;
    const isChecked = e.target.checked;

    setActiveFilters((prev) => ({
      ...prev,
      brands: isChecked
        ? [...prev.brands, brand]
        : prev.brands.filter((b) => b !== brand),
    }));
  };

  // Handle price range filter
  const handlePriceFilter = (e) => {
    const priceRange = e.target.value;
    const isChecked = e.target.checked;

    setActiveFilters((prev) => ({
      ...prev,
      priceRange: isChecked
        ? [...prev.priceRange, priceRange]
        : prev.priceRange.filter((p) => p !== priceRange),
    }));
  };

  // Clear all filters
  const clearAllFilters = () => {
    setActiveFilters({
      delivery: false,
      rating: false,
      brands: [],
      priceRange: [],
    });
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={i} className="text-yellow-400">
          ★
        </span>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <span key="half" className="text-yellow-400">
          ☆
        </span>
      );
    }

    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <span key={`empty-${i}`} className="text-gray-300">
          ★
        </span>
      );
    }

    return stars;
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 xl:px-32 py-6">
        {/* Mobile Filter Toggle Button */}
        <div className="lg:hidden mb-4">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 px-4 py-2 bg-white border rounded-lg shadow-sm"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.414A1 1 0 013 6.707V4z"
              />
            </svg>
            <span className="text-sm font-medium">Filters</span>
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar Filters */}
          <div
            className={`w-full lg:w-64 flex-shrink-0 ${
              showFilters ? "block" : "hidden lg:block"
            }`}
          >
            <div className="bg-white shadow-sm p-4 space-y-6 rounded-lg lg:rounded-none">
              {/* Mobile Close Button */}
              <div className="lg:hidden flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Filters</h2>
                <button onClick={() => setShowFilters(false)} className="p-1">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Delivery Day Filter */}
              <div>
                <h3 className="font-medium text-gray-900 mb-3">Delivery Day</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={activeFilters.delivery}
                      onChange={handleDeliveryFilter}
                      className="w-4 h-4 text-blue-600 rounded"
                    />
                    <span className="ml-2 text-sm text-gray-700">
                      Get it in 2 Days
                    </span>
                  </label>
                </div>
              </div>

              {/* Customer Reviews Filter */}
              <div>
                <h3 className="font-medium text-gray-900 mb-3">
                  Customer Reviews
                </h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <span className="ml-2 text-sm text-gray-700 flex items-center">
                      {renderStars(4)} <span className="ml-1">& Up</span>
                    </span>
                  </label>
                </div>
              </div>

              {/* Brands Filter */}
              <div>
                <h3 className="font-medium text-gray-900 mb-3">Brands</h3>
                <div className="space-y-2">
                  {[
                    "Samsung",
                    "LG",
                    "Whirlpool",
                    "Godrej",
                    "Panasonic",
                    "Fica",
                  ].map((brand) => (
                    <label key={brand} className="flex items-center">
                      <input
                        type="checkbox"
                        value={brand}
                        checked={activeFilters.brands.includes(brand)}
                        onChange={handleBrandFilter}
                        className="w-4 h-4 text-blue-600 rounded"
                      />
                      <span className="ml-2 text-sm text-gray-700">
                        {brand}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div>
                <h3 className="font-medium text-gray-900 mb-3">Price</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      value="10000-15000"
                      checked={activeFilters.priceRange.includes("10000-15000")}
                      onChange={handlePriceFilter}
                      className="w-4 h-4 text-blue-600 rounded"
                    />
                    <span className="ml-2 text-sm text-gray-700">
                      ₹10,000 to ₹15,000
                    </span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      value="15000-20000"
                      checked={activeFilters.priceRange.includes("15000-20000")}
                      onChange={handlePriceFilter}
                      className="w-4 h-4 text-blue-600 rounded"
                    />
                    <span className="ml-2 text-sm text-gray-700">
                      ₹15,000 to ₹20,000
                    </span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      value="20000-35000"
                      checked={activeFilters.priceRange.includes("20000-35000")}
                      onChange={handlePriceFilter}
                      className="w-4 h-4 text-blue-600 rounded"
                    />
                    <span className="ml-2 text-sm text-gray-700">
                      ₹20,000 to ₹35,000
                    </span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      value="35000+"
                      checked={activeFilters.priceRange.includes("35000+")}
                      onChange={handlePriceFilter}
                      className="w-4 h-4 text-blue-600 rounded"
                    />
                    <span className="ml-2 text-sm text-gray-700">
                      ₹35,000 & Above
                    </span>
                  </label>
                </div>
              </div>

              {/* Active Filters Display */}
              {(activeFilters.delivery ||
                activeFilters.rating ||
                activeFilters.brands.length > 0 ||
                activeFilters.priceRange.length > 0) && (
                <div className="pt-4 border-t">
                  <h4 className="font-medium text-gray-900 mb-2">
                    Active Filters:
                  </h4>
                  <div className="space-y-1 text-xs">
                    {activeFilters.delivery && (
                      <div className="text-blue-600">• 2-day delivery</div>
                    )}
                    {activeFilters.rating && (
                      <div className="text-blue-600">• 4+ star rating</div>
                    )}
                    {activeFilters.brands.map((brand) => (
                      <div key={brand} className="text-blue-600">
                        • {brand}
                      </div>
                    ))}
                    {activeFilters.priceRange.map((range) => (
                      <div key={range} className="text-blue-600">
                        •{" "}
                        {range === "35000+"
                          ? "₹35,000+"
                          : `₹${range.replace("-", " - ₹")}`}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Clear Filters Button - Mobile */}
              {(activeFilters.delivery ||
                activeFilters.rating ||
                activeFilters.brands.length > 0 ||
                activeFilters.priceRange.length > 0) && (
                <div className="lg:hidden">
                  <button
                    onClick={clearAllFilters}
                    className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    Clear all filters
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1 min-w-0">
            {/* Results Header */}
            <div className="mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              {(activeFilters.delivery ||
                activeFilters.rating ||
                activeFilters.brands.length > 0 ||
                activeFilters.priceRange.length > 0) && (
                <button
                  onClick={clearAllFilters}
                  className="text-sm text-blue-600 hover:underline self-start sm:self-auto"
                >
                  Clear all filters
                </button>
              )}
            </div>

            {products.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">
                  No products match your current filters.
                </p>
                <button
                  onClick={clearAllFilters}
                  className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
                {products.map((product) => (
                  <div key={product.id}>
                    <div className="bg-white shadow-sm hover:shadow-md transition-shadow duration-200 p-3 sm:p-4 border rounded-lg">
                      {/* Product Image */}
                      <Link to={`/product/${product.id}`} className="aspect-square mb-3 bg-gray-100 flex items-center justify-center rounded-lg overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-contain hover:scale-105 transition-transform duration-200"
                        />
                      </Link>

                      {/* Product Info */}
                      <div className="space-y-2">
                        {/* Product Name */}
                        <h3 className="text-xs sm:text-sm text-gray-900 line-clamp-3 leading-tight font-medium min-h-[3rem]">
                          {product.name}
                        </h3>

                        {/* Rating */}
                        <div className="flex items-center gap-1 flex-wrap">
                          <div className="flex text-xs">
                            {renderStars(product.rating)}
                          </div>
                          <span className="text-xs text-[#1F8394] hover:underline cursor-pointer">
                            ({product.reviews.toLocaleString()})
                          </span>
                        </div>

                        {/* Price */}
                        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                          <span className="text-base sm:text-lg font-medium text-gray-900">
                            {formatPrice(product.currentPrice)}
                          </span>
                          <div className="flex items-center gap-2">
                            <span className="text-xs sm:text-sm text-gray-500 line-through">
                              {formatPrice(product.originalPrice)}
                            </span>
                            <span className="text-xs sm:text-sm text-red-600 font-medium">
                              ({product.discount}% off)
                            </span>
                          </div>
                        </div>

                        {/* Delivery Info */}
                        <div className="text-xs text-gray-600">
                          {product.freeDelivery && (
                            <span className="font-medium">FREE delivery </span>
                          )}
                          <span>by </span>
                          <span className="text-black font-bold">
                            {new Date(product.deliveryDate).toLocaleDateString(
                              "en-US",
                              {
                                weekday: "short",
                                month: "short",
                                day: "numeric",
                              }
                            )}
                          </span>
                        </div>

                        {/* Add to Cart Button */}
                        <button className="mt-3 bg-yellow-400 hover:bg-yellow-500 text-gray-900 py-2 px-3 sm:px-4 rounded-full font-normal transition-colors duration-200 text-xs sm:text-sm">
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
