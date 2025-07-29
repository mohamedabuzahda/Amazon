import HeroCarousel from "../Components/HeroCarousel";
import SectionGrid from "../Components/SectionGrid";
import HorizontalSlider from "../Components/HorizontalSlider";
import Section from "../Components/Section";
import slider1 from "../assets/images/slider1.png";
import slider2 from "../assets/images/slider2.png";
import slider3 from "../assets/images/slider3.png";
import slider4 from "../assets/images/slider4.png";
import slider5 from "../assets/images/slider5.png";
import slider6 from "../assets/images/slider6.png";
import slider7 from "../assets/images/slider7.png";
import slider8 from "../assets/images/slider8.png";
import slider9 from "../assets/images/slider9.png";
import slider10 from "../assets/images/slider10.png";
import slider11 from "../assets/images/slider11.png";
import slider12 from "../assets/images/slider12.png";
import slider13 from "../assets/images/slider13.png";
import slider14 from "../assets/images/slider14.png";
import slider15 from "../assets/images/slider15.png";
import slider21 from "../assets/images/slider21.png";
import slider22 from "../assets/images/slider22.png";
import slider23 from "../assets/images/slider23.png";
import slider24 from "../assets/images/slider24.png";
import slider25 from "../assets/images/slider25.png";
import slider26 from "../assets/images/slider26.png";
import slider27 from "../assets/images/slider27.png";
import slider28 from "../assets/images/slider28.png";
import slider29 from "../assets/images/slider29.png";
import slider210 from "../assets/images/slider210.png";
import slider211 from "../assets/images/slider211.png";
import slider212 from "../assets/images/slider212.png";
import slider213 from "../assets/images/slider213.png";
import slider214 from "../assets/images/slider214.png";

export default function HomePage() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="bg-[#575757] min-h-screen">
      <HeroCarousel />
      <div className="relative z-20 -mt-[150px]">
        <SectionGrid />
      </div>
      <HorizontalSlider
        title="Best Sellers in Clothing & Accessories"
        images={[
          slider1,
          slider2,
          slider3,
          slider4,
          slider5,
          slider6,
          slider7,
          slider8,
          slider9,
          slider10,
          slider11,
          slider12,
          slider13,
          slider14,
          slider15,
        ]}
      />
      <Section />
      <HorizontalSlider
        title="Min. 50% off | Unique kitchen finds | Amazon Brands & more"
        images={[
          slider21,
          slider22,
          slider23,
          slider24,
          slider25,
          slider26,
          slider27,
          slider28,
          slider29,
          slider210,
          slider211,
          slider212,
          slider213,
          slider214,
        ]}
        imgWidth="250px"
        showSeeAll={true}
      />
      <br></br>
    </div>
  );
}
