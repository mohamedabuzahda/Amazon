import { IoIosArrowDown } from "react-icons/io";
import locationIcon from "../assets/icon/Vector.webp";
import visa from "../assets/icon/visa.webp";
import box from "../assets/icon/box.webp";
import lock from "../assets/icon/lock.webp";
import avatar from "../assets/avatars/avatar.webp";
import avatar2 from "../assets/avatars/avatar-2.webp";
import avatar3 from "../assets/avatars/avatar-3.webp";
import avatar4 from "../assets/avatars/avatar-4.webp";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

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
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [qty, setQty] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(res => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  const handleAddToCart = () => {
    if (!product) return;
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existing = cart.find((item) => item.id === product.id);
    if (existing) {
      existing.qty = (existing.qty || 1) + qty;
    } else {
      cart.push({ ...product, qty });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    window.dispatchEvent(new Event("cartUpdated"));
    alert("Added to cart!");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl">
        Loading...
      </div>
    );
  }
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl">
        Product not found.
      </div>
    );
  }

  return (
    <div className="border-t-2 py-10 px-[4%] transition-opacity ease-in duration-500 opacity-100">
      <div className="flex flex-col lg:flex-row gap-12">
        {/*==================
        1. Product Image
        =====================*/}
        <div className="flex flex-col-reverse flex-1 gap-3 lg:flex-row">
          <div className="flex sm:flex-col overflow-x-auto scroll-hide sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            <img
              src={product.image}
              alt={product.title}
              className="w-[20%] sm:w-[50%] sm:mb-3 flex-shrink-0 cursor-pointer"
            />
          </div>
          <div className="w-[85%] sm:w-[58%] mx-auto">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-auto"
            />
          </div>
        </div>

        <div className="flex flex-1 gap-y-8 sm:flex-row flex-col">
          {/*=================
        2. Product Info
        ====================*/}
          <div className="lg:w-[58%] w-full">
            <p className="text-sm text-gray-500 mb-1">
              Category: {product.category}
            </p>
            <h1 className="text-2xl font-normal mt-2">{product.title}</h1>
            <div className="flex gap-5 text-[#1F8394] text-sm mt-1">
              <div className="flex text-yellow-400 gap-1 items-center">
                <p className="text-black text-sm ">
                  {product.rating?.rate || "-"}
                </p>
                {Array.from({ length: 5 }, (_, i) =>
                  i < Math.round(product.rating?.rate || 0) ? "★" : "☆"
                )}
                <IoIosArrowDown className="text-black text-base" />
              </div>
              <p>{product.rating?.count || 0} rating</p>
              <p>|</p>
              <p>Search This Page</p>
            </div>
            <hr className="border-t border-[#D9D9D9] my-3 w-[90%]" />
            <div className="flex flex-col gap-3">
              <div className="flex">
                <p className="text-xs">$</p>
                <p className="text-3xl">{product.price}</p>
              </div>
              <p className="font-light text-lg">All Price include VAT.</p>
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
                <p>{product.description}</p>
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
                value={qty}
                onChange={(e) => setQty(Number(e.target.value))}
              >
                {[...Array(10)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>
                    Quantity: {i + 1}
                  </option>
                ))}
              </select>
            </form>

            <button
              className="bg-[#FFD814] py-1.5 rounded-full mb-3"
              onClick={handleAddToCart}
            >
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
