import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function HorizontalSlider({
  title = "",
  images = [],
  imgWidth = 162 ,
  imgHeight =225 ,
  showSeeAll = false, 
}) {
  const sliderRef = useRef();

  const scrollLeft = () =>
    sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });

  const scrollRight = () =>
    sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });

  return (
    <div className="w-full max-w-[1380px] mx-auto bg-white p-4 mb-6 ">
      {/*  Title & See all */}
      <div className="flex mb-3">
        <h2 className="text-[22px] font-bold">{title}</h2>
        {showSeeAll && (
          <p className="text-[16px] font-normal mt-2 m-2 text-[#1F8394] cursor-pointer">
            See all
          </p>
        )}
      </div>

      {/*  Slider */}
      <div className="relative">
        <div
          ref={sliderRef}
          className="flex overflow-x-auto gap-[16px] pr-[60px] scroll-smooth scrollbar-hide"
        >
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Item ${i + 1}`}
              style={{ width: `${imgWidth}px`, height: `${imgHeight}px` }}
              className="object-cover"
            />
          ))}
        </div>

        {/*  Buttons */}
        <button
          onClick={scrollLeft}
          className="absolute top-1/2 -translate-y-1/2 left-0 w-[40px] h-[100px] bg-white flex items-center justify-center shadow-md"
        >
          <FaChevronLeft className="text-black w-[13px] h-[24px]" />
        </button>
        <button
          onClick={scrollRight}
          className="absolute top-1/2 -translate-y-1/2 right-0 w-[40px] h-[100px] bg-white flex items-center justify-center shadow-md"
        >
          <FaChevronRight className="text-black w-[13px] h-[24px]" />
        </button>
      </div>
    </div>
  );
}

