import { Link } from "react-router-dom";
import useCart from "../hooks/useCart";

function Navbar() {
  const { cartCount } = useCart();

  return (
    <nav className="navbar">
        <div className="navbar-container">
            <h2 className="logo">
            <span>SHOPLY.</span>
            </h2>

            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/shop">Shop</Link>
                <Link to="/cart">Cart ({cartCount})</Link>
            </div>
        </div>
    </nav>
  );
}

export default Navbar;