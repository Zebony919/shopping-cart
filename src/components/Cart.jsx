import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import "./Cart.css";
import CartItem from "./CartItem.jsx";

function Cart() {
  const { cart, setCart } = useOutletContext();

  if (cart.length === 0) {
    return (
      <section className="cartEmpty-body">
        <h1>Your Cart is Empty!</h1>
        <p>Add something from the Shop page</p>
      </section>
    );
  } else {
    return (
      <section className="cart-body">
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}

        <div className="cart-total">
          <h1>Total: </h1>

          <h1>
            $
            {cart
              .reduce((acc, item) => acc + item.price * item.quantity, 0)
              .toFixed(2)}
          </h1>
        </div>

        <button className="cart-checkoutBtn" onClick={() => setCart([])}>
          Checkout
        </button>
      </section>
    );
  }
}

export default Cart;
