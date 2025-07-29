import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [availableBrands, setAvailableBrands] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showFilters, setShowFilters] = useState(false);
  const [activeFilters, setActiveFilters] = useState({
    delivery: false,
    rating: false,
    brands: [],
    priceRange: [],
  });

  // Search Bar
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("search")?.toLowerCase() || "";

  const clearAllFilters = () => {
    setActiveFilters({
      delivery: false,
      rating: false,
      brands: [],
      priceRange: [],
    });
  };

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        if (!cancelled && Array.isArray(res.data)) {
          const apiProducts = res.data.map((p) => ({
            id: p.id,
            name: p.title,
            image: p.image,
            rating: p.rating?.rate || 4,
            reviews: p.rating?.count || 100,
            originalPrice: Math.round(p.price * 1.3),
            currentPrice: Math.round(p.price),
            discount: 30,
            deliveryDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000)
              .toISOString()
              .slice(0, 10),
            brand: p.category,
            freeDelivery: true,
          }));

          const brandsSet = new Set(apiProducts.map((p) => p.brand));
          setAvailableBrands(Array.from(brandsSet).sort());

          setProducts(apiProducts);
          setFilteredProducts(apiProducts);
        }
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    let filtered = [...products];

    if (searchQuery) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(searchQuery)
      );
    }

    if (activeFilters.delivery) {
      filtered = filtered.filter((product) => {
        const deliveryDate = new Date(product.deliveryDate);
        const today = new Date();
        const daysDifference = Math.ceil(
          (deliveryDate - today) / (1000 * 60 * 60 * 24)
        );
        return daysDifference <= 2;
      });
    }

    if (activeFilters.rating) {
      filtered = filtered.filter((product) => product.rating >= 4.0);
    }

    if (activeFilters.brands.length > 0) {
      filtered = filtered.filter((product) =>
        activeFilters.brands.includes(product.brand)
      );
    }

    if (activeFilters.priceRange.length > 0) {
      filtered = filtered.filter((product) => {
        return activeFilters.priceRange.some((range) => {
          if (range === "2000+") {
            return product.currentPrice >= 2000;
          }
          const [min, max] = range.split("-").map(Number);
          return product.currentPrice >= min && product.currentPrice <= max;
        });
      });
    }

    setFilteredProducts(filtered);
  }, [activeFilters, products, searchQuery]);

  const handleDeliveryFilter = (e) => {
    setActiveFilters((prev) => ({
      ...prev,
      delivery: e.target.checked,
    }));
  };

  const handleRatingFilter = (e) => {
    setActiveFilters((prev) => ({
      ...prev,
      rating: e.target.checked,
    }));
  };

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

  const addToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existing = cart.find((item) => item.id === product.id);
    if (existing) {
      existing.qty = (existing.qty || 1) + 1;
    } else {
      cart.push({ ...product, qty: 1 });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    window.dispatchEvent(new Event("cartUpdated"));
    alert("Added to cart!");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-2xl text-gray-600">Loading...</div>
      </div>
    );
  }

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
                    <input
                      type="checkbox"
                      checked={activeFilters.rating}
                      onChange={handleRatingFilter}
                      className="w-4 h-4 text-blue-600 rounded"
                    />
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
                  {availableBrands.map((brand) => (
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
                  {[
                    { label: "Under ₹500", value: "0-500" },
                    { label: "₹500 to ₹1000", value: "500-1000" },
                    { label: "₹1000 to ₹2000", value: "1000-2000" },
                    { label: "Above ₹2000", value: "2000+" },
                  ].map(({ label, value }) => (
                    <label className="flex items-center" key={value}>
                      <input
                        type="checkbox"
                        value={value}
                        checked={activeFilters.priceRange.includes(value)}
                        onChange={handlePriceFilter}
                        className="w-4 h-4 text-blue-600 rounded"
                      />
                      <span className="ml-2 text-sm text-gray-700">
                        {label}
                      </span>
                    </label>
                  ))}
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
                        {range === "2000+"
                          ? "₹2000+"
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

            {filteredProducts.length === 0 ? (
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
                {filteredProducts.map((product) => (
                  <div key={product.id}>
                    <div className="bg-white shadow-sm hover:shadow-md transition-shadow duration-200 p-3 sm:p-4 border rounded-lg">
                      {/* Product Image */}
                      <Link
                        to={`/product/${product.id}`}
                        className="aspect-square mb-3 bg-gray-100 flex items-center justify-center rounded-lg overflow-hidden"
                      >
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
                        <button
                          className="mt-3 bg-yellow-400 hover:bg-yellow-500 text-gray-900 py-2 px-3 sm:px-4 rounded-full font-normal transition-colors duration-200 text-xs sm:text-sm"
                          onClick={() => addToCart(product)}
                        >
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
