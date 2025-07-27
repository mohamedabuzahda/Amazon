import { IoIosArrowDown } from "react-icons/io";
import product1 from "../assets/Products/product-1.webp";
import locationIcon from "../assets/icon/Vector.webp";
import visa from "../assets/icon/visa.webp";
import box from "../assets/icon/box.webp";
import lock from "../assets/icon/lock.webp";
import avatar from "../assets/avatars/avatar.webp";
import avatar2 from "../assets/avatars/avatar-2.webp";
import avatar3 from "../assets/avatars/avatar-3.webp";
import avatar4 from "../assets/avatars/avatar-4.webp";

const reviews = [
  {
    id: 1,
    name: "Brooke",
    avatar: avatar,
    title: "Favorite dress",
    rating: 4,
    date: "6 August 2024",
    location: "United States",
    size: "40",
    color: "Black",
    verified: true,
    comment:
      "I initially purchased this dress on sale. It turned out to be my favorite dress of this summer. It is extremely versatile and unexpectedly flattering. When I accidentally tore it, I was really upset. My husband told me to buy it again, which I typically would not do. It was not on sale and I am so frugal. The dress washes very well and I always get compliments when I wear it.",
  },
  {
    id: 2,
    name: "Elva S. D.",
    avatar: avatar2,
    title: "Lindo!!",
    rating: 4,
    date: "11 August 2023",
    location: "Mexico",
    verified: true,
    comment:
      "Bien hecho, bonita tela y bonita caída, fresco y casual.La marca lo dice!!",
  },
  {
    id: 3,
    name: "Ana Patricia Rodriguez",
    avatar: avatar3,
    title: "COMODIDAD",
    rating: 4,
    date: "29 June 2023",
    location: "United State",
    verified: true,
    comment: "ES LINDO COMODO Y LIGERO PARA CLIMA CALIDO, ES LA TELA ADECUADA",
  },
  {
    id: 4,
    name: "Ivelisse",
    avatar: avatar4,
    title: "Excellent dress",
    rating: 4,
    date: "3 April 2019",
    location: "United State",
    verified: true,
    comment:
      "Lovely dress... I'm 5'1\" with pear form body (149 pounds mostly in hips and booty) and it fits perfect.",
  },
];

const SingleProduct = () => {
  return (
    <div className="border-t-2 py-10 px-[4%] transition-opacity ease-in duration-500 opacity-100">
      <div className="flex flex-col lg:flex-row gap-12">
        {/*==================
        1. Product Image
        =====================*/}
        <div className="flex flex-col-reverse flex-1 gap-3 lg:flex-row">
          <div className="flex sm:flex-col overflow-x-auto scroll-hide sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            <img
              src={product1}
              alt="product-img"
              className="w-[20%] sm:w-[65%] sm:mb-3 flex-shrink-0 cursor-pointer"
            />
          </div>
          <div className="w-[85%] sm:w-[58%] mx-auto flex-grow">
            <img src={product1} alt="Product-Image" className="w-full h-auto" />{" "}
          </div>
        </div>

        <div className="flex flex-1 gap-y-8 sm:flex-row flex-col">
          {/*=================
        2. Product Info
        ====================*/}
          <div className="lg:w-[58%] w-full">
            <p>BRAND: WDIRARA</p>
            <h1 className="text-2xl font-normal mt-2">
              LG 7 Kg, 5 Star, Direct Drive Technology, Steam Wash, 6 Motion DD,
              Smart Diagnosis, Fully-Automatic Front Load
            </h1>
            <div className="flex gap-5 text-[#1F8394] text-sm mt-1">
              <div className="flex text-yellow-400 gap-1 items-center">
                <p className="text-black text-sm ">4.1</p>
                {"★"}
                {"★"}
                {"★"}
                {"★"}
                {"☆"}
                <IoIosArrowDown className="text-black text-base" />
              </div>
              <p>67 rating</p>
              <p>|</p>
              <p>Search This Page</p>
            </div>
            <hr className="border-t border-[#D9D9D9] my-3 w-[90%]" />
            <div className="flex flex-col gap-3">
              <div className="flex">
                <p className="text-xs">SAR</p>
                <p className="text-3xl">203</p>
                <p className="text-xs">14</p>
              </div>

              <p className="font-light text-lg">All Price include VAT.</p>

              <p className="font-medium">
                <span className="text-[#5C5C5C] text-sm font-normal">
                  Sign To redeem.
                </span>{" "}
                <span className="bg-[#71ED58] px-1 mx-1 font-normal">
                  Extra 20%
                </span>{" "}
                Off with meen credit cards.
              </p>
              <p className="font-medium">
                Entre Code MEEM20 at checkout. Discount by Amazon.
              </p>

              <div className="flex gap-2 text-[#1F8394]">
                <div className="w-32 flex justify-center flex-col items-center text-center">
                  <img src={visa} alt="visa-ico" className="w-12" />
                  <p className="">Electronic Payment Only</p>
                </div>
                <div className="w-32 flex justify-center flex-col items-center text-center">
                  <img src={box} alt="visa-ico" className="w-12" />
                  <p className="">30 days Returnable</p>
                </div>
                <div className="w-32 flex justify-center flex-col items-center text-center">
                  <img src={lock} alt="visa-ico" className="w-12" />
                  <p className="">Secure transaction</p>
                </div>
              </div>
              <hr className="border-t border-[#D9D9D9] my-3 w-[90%]" />

              <div>
                <h2 className="font-bold mb-2.5">About this item</h2>
                <p>
                  Feature: square neck, cutout, puff sleeve, ruffle hem, tie
                  back aline dress
                </p>
                <p>Fabric has some stretch,and it is soft and comfortable</p>
                <p>
                  Suitable for daily wear, holidays, dating, vacation, weekend
                  casual
                </p>
                <p>Care Instructions: Machine wash or professional dry clean</p>
              </div>
            </div>
          </div>

          {/*=================
        3. Add To Cart
        ====================*/}
          <div className="border h-fit border-black rounded-[0.25rem] px-4 py-3 flex flex-col mx-auto gap-3 sm:w-[260px] w-[280px]">
            <div className="flex flex-col gap-3">
              <div className="flex">
                <p className="text-xs">SAR</p>
                <p className="text-3xl">203</p>
                <p className="text-xs">14</p>
              </div>
            </div>
            <p>
              SAR96 delivery <span className="font-medium">6-9 October.</span>
            </p>
            <p className="text-[#1F8394]">Details</p>
            <div className="flex items-start gap-2">
              <img src={locationIcon} alt="location-icon" />
              <p className="text-[#1F8394] text-sm">
                Delvery to Riyadh - Update Location
              </p>
            </div>
            <p className="text-[#B12704] font-bold">
              Usually Ships within 4 to 5 days
            </p>

            <form>
              <select
                id="Quantity"
                className="bg-gray-50 border mb-1 border-gray-300 font-medium rounded-lg block w-full p-2.5"
              >
                <option value="1">Quantity: 1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </form>

            <button className="bg-[#FFD814] py-1.5 rounded-full">
              Add To Cart
            </button>
            <button className="bg-[#FFA41C] py-1.5 rounded-full mb-3">
              Add To Cart
            </button>

            <div className="flex gap-4 text-sm text-[#1F8394]">
              <p>Ships from</p>
              <p>Monatik LLC</p>
            </div>
            <div className="flex gap-4 text-sm text-[#1F8394]">
              <p>Sold by</p>
              <p>Monatik LLC</p>
            </div>
            <div className="flex gap-4 text-sm text-[#1F8394]">
              <p>Payment</p>
              <p>Secure transaction</p>
            </div>
          </div>
        </div>
      </div>

      <hr className="border-t border-[#D9D9D9] my-10" />

      {/*==================
        4. Customer Reviews
        =====================*/}
      <div className="flex lg:gap-36 md:gap-[8%] flex-col md:flex-row gap-y-10">
        {/* Stars & Global Rating */}
        <div className="flex flex-col gap-2.5">
          <h1 className="font-medium text-lg">Customer Reviews</h1>
          <div className="flex text-yellow-400 gap-1 items-center">
            {"★"}
            {"★"}
            {"★"}
            {"★"}
            {"☆"}
            <p className="text-black">4.1 out of 5</p>
          </div>
          <p className="text-[#5C5C5C]">1 global rating</p>
          <div className="flex gap-3">
            <p className="font-medium text-lg">5 star</p>
            <div className="border border-black p-2.5 rounded relative w-52"></div>
            <p className="font-medium text-lg">0%</p>
          </div>
          <div className="flex gap-3">
            <p className="font-medium text-lg text-[#1F8394]">4 star</p>
            <div className="border border-black p-2.5 rounded relative w-52">
              <div className="border border-[#DE7921] bg-[#DE7921] p-[12px] top-0 left-0 rounded absolute w-32"></div>
            </div>
            <p className="font-medium text-lg text-[#1F8394]">71%</p>
          </div>
          <div className="flex gap-3">
            <p className="font-medium text-lg text-[#1F8394]">3 star</p>
            <div className="border border-black p-2.5 rounded relative w-52"></div>
            <p className="font-medium text-lg text-[#1F8394]">0%</p>
          </div>
          <div className="flex gap-3">
            <p className="font-medium text-lg text-[#1F8394]">2 star</p>
            <div className="border border-black p-2.5 rounded relative w-52">
              <div className="border border-[#DE7921] bg-[#DE7921] p-[12px] top-0 left-0 rounded absolute w-32"></div>
            </div>
            <p className="font-medium text-lg text-[#1F8394]">6%</p>
          </div>
          <div className="flex gap-3">
            <p className="font-medium text-lg text-[#1F8394]">1 star</p>
            <div className="border border-black p-2.5 rounded relative w-52"></div>
            <p className="font-medium text-lg text-[#1F8394]">0%</p>
          </div>
        </div>

        {/* Reviews */}
        <div className="flex-1">
          {reviews.map((review) => (
            <div key={review.id} className="max-w-[1000px] mt-7">
              {/* User Info */}
              <div className="flex items-center gap-2">
                <img src={review.avatar} alt="avatar-pic" />
                <h3>{review.name}</h3>
              </div>

              {/* Rating */}
              <div className="flex text-yellow-400 text-xl gap-3 items-center my-1.5">
                {Array.from({ length: 5 }, (_, i) =>
                  i < review.rating ? "★" : "☆"
                )}
                <p className="text-black text-lg font-bold">{review.title}</p>
              </div>

              {/* Date & Location */}
              <p className="font-light">
                Reviewed in the {review.location} on {review.date}
              </p>

              {/* Details */}
              <div className="flex gap-2 text-[#565959]">
                {review.size && <p>Size: {review.size}</p>}
                {review.size && review.color && <p className="opacity-30">|</p>}
                {review.color && <p>Color: {review.color}</p>}
                {(review.size || review.color) && review.verified && (
                  <p className="opacity-30">|</p>
                )}
                {review.verified && (
                  <p className="text-[#DE7921] font-semibold">
                    Verified Purchase
                  </p>
                )}
              </div>

              {/* Comment */}
              <p className="mt-1">{review.comment}</p>

              <p className="text-[#5C5C5C] mt-5">Report</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
