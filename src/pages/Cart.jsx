import CartItem from "../components/CartItem";
import useCart from "../hooks/useCart";

function Cart() {
  const {
    cartItems,
    cartCount,
    cartTotal,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  if (cartItems.length === 0) {
    return (
      <main>
        <h1>Your Cart</h1>
        <p>Your cart is currently empty.</p>
      </main>
    );
  }

  return (
    <main className="cart-page">
      <h1>Your Shopping Cart</h1>

      <p>{cartCount} items in your cart</p>

      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onIncrease={increaseQuantity}
            onDecrease={decreaseQuantity}
            onRemove={removeFromCart}
          />
        ))}
      </div>

      <div className="cart-summary">
        <h2>Order Summary</h2>

        <p>Total Items: {cartCount}</p>

        <h3>Total: ${cartTotal.toFixed(2)}</h3>
      </div>
    </main>
  );
}

export default Cart;