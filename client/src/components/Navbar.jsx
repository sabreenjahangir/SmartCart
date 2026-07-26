import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar(props) {
  return (
    <nav>
      <div className="logo">
        🛒 SmartCart
      </div>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/products">Products</Link>
        </li>

        <li>
          <Link to="/cart">
            Cart
            <span className="cart-count">
              {props.cart.length}
            </span>
          </Link>
        </li>

        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
  <Link to="/register">Register</Link>
</li>
      </ul>
    </nav>
  );
}

export default Navbar;