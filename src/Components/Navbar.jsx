import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Logo from "../assets/Logo/logo.webp";
import EG from "../assets/icon/EG.webp";
import CartIcon from "../assets/icon/cart.webp";

// CartCount component as a separate component for better organization
const CartCount = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const updateCount = () => {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      const totalItems = cart.reduce((sum, item) => sum + (item.qty || 1), 0);
      setCount(totalItems);
    };

    // Initial update
    updateCount();

    // Listen for cart updates
    window.addEventListener("cartUpdated", updateCount);
    window.addEventListener("storage", updateCount);

    // Cleanup
    return () => {
      window.removeEventListener("cartUpdated", updateCount);
      window.removeEventListener("storage", updateCount);
    };
  }, []);

  return (
    <Link
      to="/cart"
      className="flex items-center justify-center relative gap-1 touch"
    >
      <span className="absolute font-semibold top-[1%] right-[36%] lg:right-[65%] text-[#febd69]">
        {count > 0 ? count : ""}
      </span>
      <img src={CartIcon} alt="cart-icon" className="w-10" />
      <p className="text-sm font-medium hidden lg:flex">Cart</p>
    </Link>
  );
};

const Navbar = () => {
  const [showLangDropdown, setShowLangDropdown] = useState(false);
  const [selectedGovernorate, setSelectedGovernorate] =
    useState("Update Location");
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);

  const governorates = [
    "Cairo",
    "Giza",
    "Alexandria",
    "Dakahlia",
    "Red Sea",
    "Beheira",
    "Fayoum",
    "Gharbia",
    "Ismailia",
    "Menofia",
    "Minya",
    "Qaliubiya",
    "New Valley",
    "Suez",
    "Aswan",
    "Assiut",
    "Beni Suef",
    "Port Said",
    "Damietta",
    "Sharkia",
    "South Sinai",
    "Kafr El Sheikh",
    "Matrouh",
    "Luxor",
    "Qena",
    "North Sinai",
    "Sohag",
  ];

  return (
    <div className="flex flex-col md:h-[68px] md:flex-row md:items-center md:justify-between bg-black w-full text-white">
      {/* Left: Logo & Location */}
      <div className="flex gap-1 p-2.5 max-[766px]:justify-between">
        <Link to="/" className="flex items-center">
          <img
            src={Logo}
            alt="amazon-logo"
            className="w-24 h-11 cursor-pointer touch mx-1"
          />
        </Link>

        {/* Location */}
        <div className="relative">
          <div
            className="flex gap-1 cursor-pointer p-2 touch hover:outline hover:outline-1 hover:outline-white"
            onClick={() => setShowLocationDropdown(!showLocationDropdown)}
          >
            <div className="w-4 pt-2">
              <HiOutlineLocationMarker className="text-xl" />
            </div>
            <div className="flex flex-col">
              <p className="text-xs text-[#C0CCCC] tracking-wide font-medium">
                Deliver to
              </p>
              <p className="text-sm font-semibold leading-[10px]">
                {selectedGovernorate}
              </p>
            </div>
          </div>

          {/* Dropdown for governorates */}
          {showLocationDropdown && (
            <div className="absolute bg-white text-black mt-1 z-50 rounded shadow-lg w-40 max-h-[250px] overflow-y-auto">
              {governorates.map((gov) => (
                <div
                  key={gov}
                  className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => {
                    setSelectedGovernorate(gov);
                    setShowLocationDropdown(false);
                  }}
                >
                  {gov}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Middle: Search */}
      <div className="flex flex-grow justify-center items-center py-[10px] px-1 max-[766px]:px-3">
        <div className="flex w-full h-10 rounded-md">
          <div className="flex items-center justify-center text-[#676767] cursor-pointer bg-[#cdcdcd] gap-1 rounded-tl-md rounded-bl-md p-1.5 hover:bg-[#999] transition duration-200">
            <p className="text-xs">All</p>
            <IoMdArrowDropdown />
          </div>

          <input
            type="text"
            placeholder="Search Amazon.eg"
            className="p-1.5 w-full text-black placeholder:text-[#696969] font-medium placeholder:text-[15px] outline-none"
          />

          <button className="bg-[#febd69] hover:bg-yellow-500 cursor-pointer transition duration-100 rounded-tr-md rounded-br-md p-2.5 flex items-center justify-center">
            <IoSearch className="text-2xl text-black" />
          </button>
        </div>
      </div>

      {/* Right: Lang, Account, Orders, Cart */}
      <div className="flex p-2.5 max-[766px]:justify-between">
        {/* EG Flag */}
        <div className="relative">
          <div
            className="flex justify-center gap-1 items-center pt-2.5 mt-1 p-2 cursor-pointer touch hover:outline hover:outline-1 hover:outline-white"
            onClick={() => setShowLangDropdown(!showLangDropdown)}
          >
            <img src={EG} alt="eg-flag" className="w-5 h-3" />
            <span className="flex items-center font-bold text-sm">
              EN <IoMdArrowDropdown />
            </span>
          </div>

          {/* Dropdown menu */}
          {showLangDropdown && (
            <div className="absolute top-full left-0 mt-1 bg-white text-black rounded shadow-lg z-50 min-w-[70px] overflow-hidden">
              <button className="w-full text-left px-4 py-2">EN</button>
            </div>
          )}
        </div>

        {/* Account */}
        <Link
          to="/login"
          className="flex relative flex-col p-2 cursor-pointer touch hover:outline hover:outline-1 hover:outline-white"
        >
          <p className="text-xs font-medium">Hello, sign in</p>
          <span className="flex items-center font-bold leading-[10px] text-sm gap-0.5">
            Account & Lists <IoMdArrowDropdown />
          </span>
        </Link>

        {/* Orders */}
        <Link
          to="/order"
          className="flex justify-center items-center relative flex-col p-2 cursor-pointer touch hover:outline hover:outline-1 hover:outline-white"
        >
          <p className="text-xs font-medium hidden lg:flex">Returns</p>
          <p className="text-sm font-bold flex gap-1">
            <span className="hidden lg:flex">&</span> Orders
          </p>
        </Link>

        {/* Cart */}
        <CartCount />
      </div>
    </div>
  );
};

export default Navbar;
