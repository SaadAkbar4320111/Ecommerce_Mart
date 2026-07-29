function Cart({ cartItems , removeFromCart }) {

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <table className="cart-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>Rs. {item.price}</td>
                  <td>{item.quantity}</td>
                  <td>Rs. {item.price * item.quantity}</td>
                  <td><button className="delete-btn"
                            onClick={() => removeFromCart(item.id)}>
                            Delete
                            </button> </td>
                </tr>
              ))}
            </tbody>
          </table>

          <h3>Total: Rs. {total}</h3>
          <button className="confirm_order_btn">Confirm Your Order</button>
        </>
      )}
    </div>
  );
}

export default Cart;