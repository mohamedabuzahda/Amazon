// routes.jsx
import { Route } from "react-router-dom";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import SingleProduct from "./Pages/SingleProduct";
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
import NotFound from "./Pages/NotFound";
import Cart from "./Pages/Cart";
import Order from "./Pages/Order";

const appRoutes = (
  <>
    <Route path="/" element={<Home />} />
    <Route path="/products" element={<Products />} />
    <Route path="/product/:productId" element={<SingleProduct />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/order" element={<Order />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="*" element={<NotFound />} />
  </>
);

export default appRoutes;
