import { createHashRouter, Navigate } from "react-router-dom";
import RootLayout from "./Layout/RootLayout";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import SingleProduct from "./Pages/SingleProduct";
import Login from "./Components/Auth/Login";
import NotFound from "./Pages/NotFound";

const router = createHashRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "home", element: <Navigate to="/" /> },
      { path: "products", element: <Products /> },
      { path: "products/:id", element: <SingleProduct /> },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "*", element: <NotFound /> },
]);

export default router;
