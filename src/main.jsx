import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Layout from "./components/Layout.jsx";
import Home from "./components/Home.jsx";
import Shop from "./components/Shop.jsx";
import Cart from "./components/Cart.jsx";
import NotFoundPage from "./components/NotFoundPage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "shop", element: <Shop /> },
      { path: "cart", element: <Cart /> },
    ],
  },
  { path: "*", element: <NotFoundPage /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
