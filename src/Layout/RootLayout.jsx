import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Pages/Footer";
import NavbarBanner from "../Components/NavbarBanner";
import BackToTop from "../Components/BackToTop";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <NavbarBanner />
      <Outlet />
      <BackToTop />
      <Footer />
    </>
  );
};

export default RootLayout;
