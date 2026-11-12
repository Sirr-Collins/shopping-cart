
import { Link } from "react-router-dom";

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
      <main className="empty-cart">
        <h1>Your Cart is Empty</h1>
        <p>You haven't added any products yet.</p>
        <Link to="/shop" className="shop-button">
          Explore Products
        </Link>
      </main>
    );
  }

  return (
    <main className="cart-page">
      <div className="cart-header">
        <h1>Your Shopping Cart</h1>
        <p>{cartCount} items in your cart</p>
      </div>

      <div className="cart-layout">
        <section className="cart-items">
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onIncrease={increaseQuantity}
              onDecrease={decreaseQuantity}
              onRemove={removeFromCart}
            />
          ))}
        </section>

        <aside className="cart-summary">
          <h2>Order Summary</h2>

          <div className="summary-row">
            <span>Total Items</span>
            <span>{cartCount}</span>
          </div>

          <div className="summary-divider"></div>

          <div className="summary-total">
            <span>Total</span>
            <span>${cartTotal.toFixed(2)}</span>
          </div>

          <p className="checkout-note">
            Checkout functionality is not available in this project.
          </p>

          <Link to="/shop" className="continue-shopping">
            Continue Shopping
          </Link>
        </aside>
      </div>
    </main>
  );
}

export default Cart;
