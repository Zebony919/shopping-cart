import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import "./ItemCard.css";

function ItemCard({ id, name, price, img, alt }) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useOutletContext();

  return (
    <section className="card-body">
      <img className="card-image" src={img} alt={alt} />

      <div className="card-info">
        <div className="card-name-price">
          <h1>{name}</h1>
          <p>${price}</p>
        </div>

        <div className="card-quantity">
          <button
            className="card-minusBtn"
            onClick={() => setQuantity((q) => (q > 1 ? q - 1 : 1))}
          >
            -
          </button>

          <p>{quantity}</p>

          <button
            className="card-plusBtn"
            onClick={() => setQuantity((q) => q + 1)}
          >
            +
          </button>
        </div>

        <button
          className="card-addBtn"
          onClick={() => addToCart({ id, name, price, img }, quantity)}
        >
          Add to Cart
        </button>
      </div>
    </section>
  );
}

export default ItemCard;
