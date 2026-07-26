function Cart(props) {
  return (
    <>
      <h2>Shopping Cart</h2>

      {props.cart.map((item) => (
        <div key={item.id}>
          <h4>{item.name}</h4>
          <p>₹{item.price}</p>
        </div>
      ))}
    </>
  );
}

export default Cart;