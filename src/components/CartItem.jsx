import { useState } from "react";
import "./CartItem.css";

function CartItem({ item }) {
  const [quantity, setQuantity] = useState(item.quantity);

  return (
    <section className="cartItem-body">
      <div className="cartItem-imgWrapper">
        <img className="cartItem-img" src={item.img} alt={item.name} />
      </div>

      <div className="cartItem-desc">
        <div>
          <h1>{item.name}</h1>
          <p>${item.price}</p>
        </div>

        <div>
          <p className="cartItem-quantity">Amount: {quantity}</p>
        </div>
      </div>
    </section>
  );
}

export default CartItem;
