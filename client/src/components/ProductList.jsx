import iphone from "../assets/iphone.png";
import samsung from "../assets/samsung.png";
import macbook from "../assets/macbook.png";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
function ProductList(props) {
  const [products, setProducts] = useState([]);
  const productImages = {
  "iPhone 16": iphone,
  "Samsung Galaxy S25": samsung,
  "MacBook Air M4": macbook,
};

  // Fetch products from backend
  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);

  // Search filter
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(props.search.toLowerCase())
  );

  return (
    <>
      <h2>Products</h2>

      <div
        style={{
          display: "flex",
          gap: "25px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {filteredProducts.map((product) => (
          <ProductCard
            key={product._id}
            id={product._id}
            name={product.name}
            price={product.price}
            image={productImages[product.name] || iphone}
            onAddToCart={() =>
              props.setCart([...props.cart, product])
            }
          />
        ))}
      </div>
    </>
  );
}

export default ProductList;