import { Link } from "react-router-dom";
import "./ProductCard.css";

function ProductCard(props) {
  return (
    <div className="product-card">

      <img
  src={props.image}
  alt={props.name}
  className="product-image"
/>

      <Link to={`/product/${props.id}`}>
        <h2 className="product-name">
          {props.name}
        </h2>
      </Link>

      <div className="rating">
        ⭐⭐⭐⭐⭐ <span style={{ color: "#555" }}>4.8</span>
      </div>

      <p className="product-price">
        ₹{props.price}
      </p>

      {props.onAddToCart && (
  <button
    className="add-btn"
    onClick={props.onAddToCart}
  >
    🛒 Add to Cart
  </button>
)}

    </div>
  );
}

export default ProductCard;