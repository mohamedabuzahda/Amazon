import card1 from "../assets/images/card1.png";
import card2 from "../assets/images/card2.png";
import card3 from "../assets/images/card3.png";
import card4 from "../assets/images/card4.png";
import card5 from "../assets/images/card5.png";
import card6 from "../assets/images/card6.png";
import card7 from "../assets/images/card7.png";
import card8 from "../assets/images/card8.png";

const cards = [
  {
    title: "Revamp your home in style",
    ctaText: "See more",
    items: [
      { img: card1, label: "Cushion covers" },
      { img: card2, label: "Bed sheets" },
      { img: card3, label: "Figurines" },
      { img: card4, label: "Lamps" },
    ],
  },
  {
    title: "Appliances for your home | Up to 55% off",
    ctaText: "Explore",
    items: [
      { img: card5, label: "Air Conditioners" },
      { img: card6, label: "Microwaves" },
      { img: card7, label: "Refrigerators" },
      { img: card8, label: "Washing Machines" },
    ],
  },
  {
    title: "Starting $149 | Headphones",
    ctaText: "Shop now",
    items: [
      { img: card1, label: "T-Shirts" },
      { img: card2, label: "Jeans" },
      { img: card3, label: "Shoes" },
      { img: card4, label: "Accessories" },
    ],
  },
  {
    title: "Starting $99 | Amazon Brands & more",
    ctaText: "Discover",
    items: [
      { img: card5, label: "Laptops" },
      { img: card6, label: "Headphones" },
      { img: card7, label: "Smartphones" },
      { img: card8, label: "Cameras" },
    ],
  },
  {
    title: "Automotive essentials | Up to 60% off",
    ctaText: "See details",
    items: [
      { img: card1, label: "Cookware" },
      { img: card2, label: "Cutlery" },
      { img: card3, label: "Plates" },
      { img: card4, label: "Glasses" },
    ],
  },
  {
    title: "Up to 60% off | Styles for women",
    ctaText: "View more",
    items: [
      { img: card5, label: "Makeup" },
      { img: card6, label: "Skincare" },
      { img: card7, label: "Haircare" },
      { img: card8, label: "Perfumes" },
    ],
  },
  {
    title: "Starting ₹199 | Amazon Brands & more",
    ctaText: "Check out",
    items: [
      { img: card1, label: "Gamepads" },
      { img: card2, label: "Keyboards" },
      { img: card3, label: "Mouse" },
      { img: card4, label: "Monitors" },
    ],
  },
  {
    title: "Starting ₹99 | Home improvement essentials",
    ctaText: "See more",
    items: [
      { img: card5, label: "Novels" },
      { img: card6, label: "Notebooks" },
      { img: card7, label: "Pens" },
      { img: card8, label: "Art supplies" },
    ],
  },
];


export default function SectionGrid() {
  return (
    <div className="flex flex-wrap justify-center gap-[33px] p-4">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-white  shadow p-3 flex flex-col"
          style={{ width: "319px", height: "472px" }}
        >
          {/* Title */}
          <h2 className="text-[22px] font-bold mb-3">{card.title}</h2>

          {/* Grid Items */}
          <div className="flex-grow">
            <div className="grid grid-cols-2 gap-x-2 gap-y-4">
              {card.items.map((item, i) => (
                <div key={i} className="flex flex-col items-start">
                  <img
                    src={item.img}
                    alt={item.label}
                    className="w-[135px] h-[116px] object-cover rounded"
                  />
                  <p className="text-left text-[12.39px] mt-1">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Text (dynamic) */}
          <p className="text-left text-[#1F8394] text-[15px] font-semibold cursor-pointer mt-auto">
            {card.ctaText}
          </p>
        </div>
      ))}
    </div>
  );
}
