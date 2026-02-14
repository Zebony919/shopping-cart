import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <section className="nav-body">
      <h1>Navbar</h1>

      <div className="nav-links">
        <Link to="/">
          <button>Home</button>
        </Link>

        <Link to="./shop">
          <button>Shop</button>
        </Link>

        <Link to="./cart">
          <button>Cart</button>
        </Link>
      </div>
    </section>
  );
}

export default Navbar;
