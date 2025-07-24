import { useEffect, useState } from "react";
import hero1 from "../assets/images/hero1.png";
import hero2 from "../assets/images/hero2.jpg";
import hero3 from "../assets/images/hero3.jpg";
import arrowLeft from "../assets/images/arrow-left.png";
import arrowRight from "../assets/images/arrow-right.png";

const slides = [hero1, hero2, hero3];

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // Manual navigation
  const prevSlide = () => {
    setIndex((index - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setIndex((index + 1) % slides.length);
  };

  return (
    <div className="relative w-full h-[400px] overflow-hidden">
      {slides.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`slide-${i}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Left Button (Image instead of Icon, no extra design) */}
      <button
        className="absolute left-2 top-1/2 transform -translate-y-1/2"
        onClick={prevSlide}
      >
        <img src={arrowLeft} alt="Previous" className="w-8 h-8" />
      </button>

      {/* Right Button */}
      <button
        className="absolute right-2 top-1/2 transform -translate-y-1/2"
        onClick={nextSlide}
      >
        <img src={arrowRight} alt="Next" className="w-8 h-8" />
      </button>
    </div>
  );
}

