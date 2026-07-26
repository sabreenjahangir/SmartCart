import { useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();

  const products = [
    {
      id: 1,
      name: "iPhone 16",
      price: 80000,
      description: "Latest Apple smartphone with A18 chip.",
    },
    {
      id: 2,
      name: "Samsung Galaxy S25",
      price: 70000,
      description: "Samsung flagship with Galaxy AI features.",
    },
    {
      id: 3,
      name: "MacBook Air M4",
      price: 100000,
      description: "Apple's lightweight laptop with the M4 chip.",
    },
  ];

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <h2>Product Not Found</h2>;
  }

  return (
    <>
      <h2>📦 Product Details</h2>

      <h1>{product.name}</h1>

      <h3>Price: ₹{product.price}</h3>

      <p>{product.description}</p>
    </>
  );
}

export default ProductDetails;