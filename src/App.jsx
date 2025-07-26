import { Routes, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar";
import NavbarBanner from "./Components/NavbarBanner";
import Footer from "./Pages/Footer";
import appRoutes from "./route";
import BackToTop from "./Components/BackToTop";

const App = () => {
  const location = useLocation();

  const hideLayoutRoutes = ["/login", "/register"];
  const hideLayout = hideLayoutRoutes.includes(location.pathname);

  return (
    <>
      {!hideLayout && <Navbar />}
      {!hideLayout && <NavbarBanner />}
      
      <Routes>{appRoutes}</Routes>

      {!hideLayout && <BackToTop />}
      {!hideLayout && <Footer />}
    </>
  );
};

export default App;
