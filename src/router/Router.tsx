import {
  createBrowserRouter,
} from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../components/Home";
import Products from "../components/Products";
import Cart from "../components/Cart";
import Login from "../components/Login";
import ErrorPage from "../components/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

export default router;
