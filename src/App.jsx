import { Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./Components/Navbar";
import NavbarBanner from "./Components/NavbarBanner";
import Footer from "./Pages/Footer";
import appRoutes from "./route";
import BackToTop from "./Components/BackToTop";
import ScrollToTop from "./animations/ScrollToTop";

const App = () => {
  const location = useLocation();

  const hideLayoutRoutes = ["/login", "/register"];
  const hideLayout = hideLayoutRoutes.includes(location.pathname);

  return (
    <>
      {!hideLayout && <Navbar />}
      {!hideLayout && <NavbarBanner />}
      <ScrollToTop /> {/* لتأكيد التمرير لأعلى */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          {appRoutes}
        </Routes>
      </AnimatePresence>
      {!hideLayout && <BackToTop />}
      {!hideLayout && <Footer />}
    </>
  );
};

export default App;
