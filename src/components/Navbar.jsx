import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <section className="nav-body">
      <h1>Zeb Shop</h1>

      <div className="nav-links">
        <Link to="/" className="nav-button">
          Home
        </Link>

        <Link to="/shop" className="nav-button">
          Shop
        </Link>

        <Link to="/cart" className="nav-button">
          Cart
        </Link>
      </div>
    </section>
  );
}

export default Navbar;
