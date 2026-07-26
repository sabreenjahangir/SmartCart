function CartPage(props) {
  // Remove product from cart
  function removeItem(indexToRemove) {
    const updatedCart = props.cart.filter(
      (_, index) => index !== indexToRemove
    );

    props.setCart(updatedCart);
  }

  // Calculate total price
  const totalPrice = props.cart.reduce(
    (total, product) => total + product.price,
    0
  );

  return (
    <>
      <h2>🛒 Your Cart</h2>

      {props.cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {props.cart.map((product, index) => (
            <div key={index}>
              <h3>{product.name}</h3>

              <p>₹{product.price}</p>

              <button onClick={() => removeItem(index)}>
                Remove
              </button>

              <hr />
            </div>
          ))}

          <h3>Total Items: {props.cart.length}</h3>

          <h2>Total Price: ₹{totalPrice}</h2>
        </>
      )}
    </>
  );
}

export default CartPage;