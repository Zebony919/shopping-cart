import { useState, useEffect } from "react";
import fetchItemImages from "../api/fakeStoreApi.js";
import ItemCard from "./ItemCard.jsx";
import "./Shop.css";

function Shop() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const loadImages = async () => {
      const images = await fetchItemImages("sports-accessories", 20);
      setItems(images);
    };

    loadImages();
  }, []);

  return (
    <section className="shop-body">
      {items.map((card) => (
        <ItemCard
          key={card.id}
          id={card.id}
          name={card.title}
          price={card.price}
          alt={card.description}
          img={card.thumbnail}
        />
      ))}
    </section>
  );
}

export default Shop;
