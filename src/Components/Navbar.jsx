import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo/logo.webp"
import EG from "../assets/icon/EG.webp"
import CartIcon from "../assets/icon/cart.webp"

const Navbar = () => {
  return (
    <div className="flex flex-col md:h-[68px] md:flex-row md:items-center md:justify-between bg-black w-full text-white">
      {/* Left: Logo & Location */}
      <div className="flex gap-1 p-2.5 max-[766px]:justify-between">
        <Link to="/">
          <img
            src={Logo}
            alt="amazon-logo"
            className="w-24 h-11 cursor-pointer touch mx-1"
          />
        </Link>

        <div className="flex gap-1 cursor-pointer p-2 touch">
          <div className="w-4 pt-2">
            <HiOutlineLocationMarker className="text-xl" />
          </div>
          <div className="flex flex-col">
            <p className="text-xs text-[#C0CCCC] tracking-wide font-medium">
              Deliver to
            </p>
            <p className="text-sm font-semibold leading-[10px]">
              Update Location
            </p>
          </div>
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

          <div className="bg-[#febd69] hover:bg-yellow-500 cursor-pointer transition duration-100 rounded-tr-md rounded-br-md p-2.5 flex items-center justify-center">
            <IoSearch className="text-2xl text-black" />
          </div>
        </div>
      </div>

      {/* Right: Lang, Account, Orders, Cart */}
      <div className="flex p-2.5 max-[766px]:justify-between">
        {/* EG Flag */}
        <div className="flex justify-center gap-1 items-center pt-2.5 p-2 cursor-pointer touch">
          <img src={EG} alt="eg-img" />
          <span className="flex items-center font-bold leading-[10px] text-sm">
            EN <IoMdArrowDropdown />
          </span>
        </div>

        {/* Account */}
        <Link
          to="/login"
          className="flex relative flex-col p-2 cursor-pointer touch"
        >
          <p className="text-xs font-medium">Hello, sign in</p>
          <span className="flex items-center font-bold leading-[10px] text-sm gap-0.5">
            Account & Lists <IoMdArrowDropdown />
          </span>
        </Link>

        {/* Orders */}
        <Link to="/order" className="flex justify-center items-center relative flex-col p-2 cursor-pointer touch">
          <p className="text-xs font-medium hidden lg:flex">Returns</p>
          <p className="text-sm font-bold flex gap-1">
            <span className="hidden lg:flex">&</span> Orders
          </p>
        </Link>

        {/* Cart */}
        <Link to="/cart" className="flex items-center justify-center relative gap-1 touch">
          <span className="absolute font-semibold top-[1%] right-[32%] lg:right-[62%] text-[#febd69]">
            2
          </span>
          <img src={CartIcon} alt="cart-icon" className="w-10" />
          <p className="text-sm font-medium hidden lg:flex">Cart</p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
