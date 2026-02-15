import "./ItemCard.css";

function ItemCard({ name, price, img, alt }) {
  return (
    <section className="card-body">
      <img className="card-image" src={img} alt={alt} />

      <div className="card-info">
        <div className="card-name-price">
          <h1>{name}</h1>
          <p>${price}</p>
        </div>

        <div className="card-quantity">
          <button className="card-minusBtn">-</button>
          <p>0</p>
          <button className="card-plusBtn">+</button>
        </div>

        <button className="card-addBtn">Add to Cart</button>
      </div>
    </section>
  );
}

export default ItemCard;
