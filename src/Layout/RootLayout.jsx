import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Pages/Footer";
import NavbarBanner from "../Components/NavbarBanner";


const RootLayout = () => {
  return (
    <>
      <Navbar />
      <NavbarBanner />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
