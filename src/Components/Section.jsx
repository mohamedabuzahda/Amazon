import { useState } from "react";
import card162 from "../assets/images/card162.png";
import card163 from "../assets/images/card163.png";
import card164 from "../assets/images/card164.png";
import card165 from "../assets/images/card165.png";
import card40 from "../assets/images/card40.png";
import card41 from "../assets/images/card41.png";
import card42 from "../assets/images/card42.png";
import card43 from "../assets/images/card43.png";
import card56 from "../assets/images/card56.png";
import card57 from "../assets/images/card57.png";
import card58 from "../assets/images/card58.png";
import card59 from "../assets/images/card59.png";
import crousel1 from "../assets/images/crousel1.png";
import crousel2 from "../assets/images/crousel2.png";
import crousel3 from "../assets/images/crousel3.png";
import crousel4 from "../assets/images/crousel4.png";
const cards = [
  //  DETAILED CARD
  {
    type: "detailed",
    title: "Storio Rechargeable Toys",
    description: "Talking Cactus Baby Toys for Kids Dancing Cactus Toys…",
    price: "$25.99",
    mainImage: crousel1, // Default big image
    miniImages: [crousel1, crousel2, crousel3, crousel4],
  },

  {
    title: "Revamp your home in style",
    ctaText: "Explore more",
    items: [
      { img: card56,  },
      { img: card57,  },
      { img: card58,  },
      { img: card59, },
    ],
  },
  {
    title: "Appliances for your home | Up to 55% off",
    items: [
      { img: card40,  },
      { img: card41,  },
      { img: card42,  },
      { img: card43, },
    ],
  },
  {
    title: "Starting $149 | Headphones",
    ctaText: "see more",
    items: [
      { img: card162, label: "T-Shirts" },
      { img: card163, label: "Jeans" },
      { img: card164, label: "Shoes" },
      { img: card165, label: "Accessories" },
    ],
  },
];
 
export default function SectionGrid() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="flex flex-wrap justify-center gap-[33px] p-4">
      {cards.map((card, index) =>
        card.type === "detailed" ? (
          <DetailedCard key={index} card={card} />
        ) : (
          <NormalCard key={index} card={card} />
        )
      )}
    </div>
  );
}

//  Normal Card as a Separate Component (same as before)
function NormalCard({ card }) {
  return (
    <div
      className="bg-white  shadow p-3 flex flex-col"
      style={{ width: "319px", height: "472px" }}
    >
      <h2 className="text-[22px] font-bold mb-3">{card.title}</h2>

      <div className="flex-grow">
        <div className="grid grid-cols-2 gap-x-2 gap-y-4">
          {card.items.map((item, i) => (
            <div key={i} className="flex flex-col items-start">
              {/*  If no label → Make image full width */}
              <img
                src={item.img}
                alt={item.label || `item-${i}`}
                className={
                  item.label
                    ? "w-[135px] h-[116px] object-cover rounded"
                    : "w-[135px] h-[162px] object-cover rounded"
                }
              />

              {/*  Show label only if exists */}
              {item.label && (
                <p className="text-left text-[12.39px] mt-1">{item.label}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      <p className="text-left text-[#1F8394] text-[15px] font-semibold cursor-pointer mt-auto">
        {card.ctaText}
      </p>
    </div>
  );
}


//  Detailed Card Component with Click-to-Change Main Image
function DetailedCard({ card }) {
  const [selectedImage, setSelectedImage] = useState(card.mainImage);

  return (
    <div
      className="bg-white  shadow p-3 flex flex-col"
      style={{ width: "319px", height: "472px" }}
    >
      {/* Title */}
      <h2 className="text-[22px] font-bold mb-3">{card.title}</h2>

      {/* Main Image */}
      <img
        src={selectedImage}
        alt="main"
        className="w-[296px] h-[149px] object-cover rounded mb-2"
      />

      {/* Description */}
      <p className="text-[11.58px] text-gray-800 mb-2">{card.description}</p>

      {/* Price */}
      <p className="text-[20.02px] font-bold text-black mb-3">{card.price}</p>

      {/* Mini Images Carousel */}
      <div className="flex gap-[13px]">
        {card.miniImages.map((img, i) => (
          <div key={i} className="relative w-[59px] h-[80px] flex items-center justify-center">
            {/* Active Bigger Rectangle Behind */}
            {selectedImage === img && (
              <div className="absolute w-[59px] h-[80px] border-2 border-[#1F8394] rounded"></div>
            )}

            {/*  Small Card (always same size) */}
            <img
              src={img}
              alt={`mini-${i}`}
              className="w-[39px] h-[60px] object-cover rounded cursor-pointer border-2 border-[#1F8394] relative z-10"
              onClick={() => setSelectedImage(img)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
