import { Route } from "react-router-dom";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import SingleProduct from "./Pages/SingleProduct";
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
import NotFound from "./Pages/NotFound";
import Cart from "./Pages/Cart";
import Order from "./Pages/Order";
import PageTransitionWrapper from "./animations/PageTransitionWrapper";

const appRoutes = (
  <>
    <Route
      path="/"
      element={
        <PageTransitionWrapper>
          <Home />
        </PageTransitionWrapper>
      }
    />
    <Route
      path="/products"
      element={
        <PageTransitionWrapper>
          <Products />
        </PageTransitionWrapper>
      }
    />
    <Route
      path="/product/:id"
      element={
        <PageTransitionWrapper>
          <SingleProduct />
        </PageTransitionWrapper>
      }
    />
    <Route
      path="/cart"
      element={
        <PageTransitionWrapper>
          <Cart />
        </PageTransitionWrapper>
      }
    />
    <Route
      path="/order"
      element={
        <PageTransitionWrapper>
          <Order />
        </PageTransitionWrapper>
      }
    />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route
      path="*"
      element={
        <PageTransitionWrapper>
          <NotFound />
        </PageTransitionWrapper>
      }
    />
  </>
);

export default appRoutes;
