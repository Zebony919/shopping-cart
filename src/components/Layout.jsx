import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

function Layout() {
  const [cart, setCart] = useState([]);

  function addToCart(item, quantity) {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + quantity } : i,
        );
      }
      return [...prev, { ...item, quantity }];
    });
  }

  return (
    <>
      <Navbar cart={cart} />
      <Outlet context={{ cart, setCart, addToCart }} />
      <Footer />
    </>
  );
}

export default Layout;
