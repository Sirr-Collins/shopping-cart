import { Link } from "react-router-dom";
import useCart from "../hooks/useCart";

function Navbar() {
  const { cartCount } = useCart();

  return (
    <nav>
      <h2>Shopping Cart</h2>

      <div>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/cart">Cart ({cartCount})</Link>
      </div>
    </nav>
  );
}

export default Navbar;