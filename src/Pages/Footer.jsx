import { MdLanguage } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";

const Footer = () => {
  return (
    <>
      <div className="w-full py-11 bg-[#232F3E] text-white">
        {/* Important Links */}
        <div className="gap-5 px-5 flex justify-between lg:w-[80%] md:w-[95%] w-full flex-wrap gap-y-9 mx-auto">
          <div className="flex flex-col gap-2 w-[120px]">
            <h2 className="text-xl font-medium">Get to know Us</h2>
            <div className="flex flex-col gap-1.5">
              <p>About Us</p>
              <p>Careers</p>
              <p>Press Releases</p>
              <p>Amazon Science</p>
            </div>
          </div>

          <div className="flex flex-col gap-2 w-[120px]">
            <h2 className="text-xl font-medium">Connect with Us</h2>
            <div className="flex flex-col gap-1.5">
              <p>Facebook</p>
              <p>Twitter</p>
              <p>Instagram</p>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-medium">make money with Us</h2>
            <div className="flex flex-col gap-1.5">
              <p>Sell on Amazon</p>
              <p>Sell under Amazon</p>
              <p>Accelerator</p>
              <p>Protect and Build Your Brand</p>
              <p>Amazon Global Selling</p>
              <p>Supply to Amazon</p>
              <p>Become an Affiliate</p>
              <p>Fulifilment by Amazon</p>
              <p>Advertise Your Products</p>
              <p>Amazon Pay on Merchants</p>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-medium">Let Us Help You</h2>
            <div className="flex flex-col gap-1.5">
              <p>Your Account</p>
              <p>Returns Center</p>
              <p>Recalls and Products Safety</p>
              <p>Alerts</p>
              <p>100% Purchase Protection</p>
              <p>Amazon App Download</p>
              <p>Help</p>
            </div>
          </div>
        </div>

        <hr className="border-t border-[#4C4C4C] my-10" />

        {/* Logo & Dropdown Languages */}
        <div className="flex items-center justify-center flex-wrap gap-x-12 gap-y-5">
          <img src="logo.webp" alt="logo" />

          <div className="flex gap-2">
            <div className="relative inline-block text-left group">
              <button className="inline-flex items-center gap-1 px-4 py-2 text-sm font-medium bg-[#232F3E] text-[#B4B4B4] border border-[#B4B4B4] rounded-sm hover:bg-[#1e2733]">
                <MdLanguage className="text-lg" />
                English
                <IoMdArrowDropdown className="ml-1" />
              </button>

              {/* Dropdown Menu */}
              <div className="absolute left-0 z-10 hidden w-full mt-1 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-sm shadow-lg group-hover:block dark:bg-gray-700 dark:border-gray-600">
                <div className="py-1">
                  <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600">
                    English
                  </button>
                </div>
              </div>
            </div>

            <div className="relative inline-block text-left group">
              <button className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-[#232F3E] text-[#B4B4B4] border border-[#B4B4B4] rounded-sm hover:bg-[#1e2733]">
                <img src="icon/EG.webp" alt="logo" />
                Egypt
              </button>

              {/* Dropdown Menu */}
              <div className="absolute left-0 z-10 hidden w-full mt-1 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-sm shadow-lg group-hover:block dark:bg-gray-700 dark:border-gray-600">
                <div className="py-1">
                  <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600">
                    English
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full pt-10 pb-5 bg-[#131A22] text-white">
        <div className="gap-[18%] px-5 hidden sm:flex lg:w-[80%] md:w-[95%] w-full flex-wrap gap-y-9 mx-auto">
          <div className="flex flex-col gap-2">
            <h2 className="text-lg">AbeBooks</h2>
            <div className="flex flex-col gap-1 text-[#999999]">
              <p>Books, art</p>
              <p>& collectibles</p>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-lg">Amazon web Services</h2>
            <div className="flex flex-col gap-1 text-[#999999]">
              <p>Scalable Cloud</p>
              <p>Computing Services</p>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-lg">Audible</h2>
            <div className="flex flex-col gap-1 text-[#999999]">
              <p>Download</p>
              <p>Audio Books</p>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-lg">IMDb</h2>
            <div className="flex flex-col gap-1 text-[#999999]">
              <p>Movies, TV</p>
              <p>& Celebrities</p>
            </div>
          </div>
        </div>

        <div className="gap-10 mt-8 px-5 hidden sm:flex lg:w-[80%] md:w-[95%] w-full flex-wrap gap-y-9 mx-auto">
          <div className="flex flex-col gap-2 w-[22%]">
            <h2 className="text-lg">Shop bop</h2>
            <div className="flex flex-col gap-1 text-[#999999]">
              <p>Designer</p>
              <p>Fashion Brands</p>
            </div>
          </div>

          <div className="flex flex-col gap-2 w-[26%]">
            <h2 className="text-lg">Amazon Business</h2>
            <div className="flex flex-col gap-1 text-[#999999]">
              <p>Everything For</p>
              <p>Your Business</p>
            </div>
          </div>

          <div className="flex flex-col gap-2 w-[22%]">
            <h2 className="text-lg">Prime Now</h2>
            <div className="flex flex-col gap-1 text-[#999999]">
              <p>2-Hour Delivery</p>
              <p>on Everyday Items</p>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-lg">Amazon Prime Music</h2>
            <div className="flex flex-col gap-1 text-[#999999]">
              <p>100 million sings, ad-free</p>
              <p>Over 15 million Podcast episodes</p>
            </div>
          </div>
        </div>

        {/* Logo & Dropdown Languages */}
        <div className="flex items-center justify-center flex-col gap-y-3 sm:pt-14">
          <div className="flex gap-x-6 flex-wrap justify-center">
            <p>Conditions of Use & Sale</p>
            <p>Privacy Notice</p>
            <p>Interset-Based Ads</p>
          </div>
          <p>1996-2024, Amazon.com, Inc. or its affiliates</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
