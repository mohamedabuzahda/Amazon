import { IoMenuSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const list = [
  "Amazon mini TV",
  "Sell",
  "Best Sellers",
  "Today's Deals",
  "Mobiles",
  "Customer Service",
  "Prime",
  "Electronics",
  "Fashion",
  "New Releases",
  "Home & Kitchen",
  "Amazon pay",
];

const NavbarBanner = () => {
  return (
    <div className="bg-[#232f3e] text-white h-10 px-2 flex items-center gap-2">
      {/* زرار All */}
      <Link to="/products" className="flex items-center gap-1 px-3 py-1 cursor-pointer touch border border-transparent hover:border-white rounded-[3px] shrink-0">
        <IoMenuSharp className="text-xl" />
        <p className="text-sm whitespace-nowrap">All</p>
      </Link>

      {/* القائمة نفسها */}
      <div className="flex flex-row items-center gap-2 whitespace-nowrap overflow-x-auto scroll-smooth snap-x snap-mandatory  scroll-hide">
        {list.map((item, index) => (
          <p
            key={index}
            className="text-sm cursor-pointer px-3 py-1 border border-transparent hover:border-white rounded-[3px] snap-start shrink-0"
          >
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};

export default NavbarBanner;
