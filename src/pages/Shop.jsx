import { useState, useEffect } from "react";
import fetchProducts from "../services/productApi";

import ProductCard from "../components/ProductCard";
import useCart from "../hooks/useCart";

function Shop() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useCart();

  function handleAddToCart(product, quantity) {
    addToCart(product, quantity);
    }

    
  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  if (loading) {
    return <h1>Loading products...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <main className="shop-page">
        <h1>Our Shop</h1>

        <div className="product-grid">
        {products.map((product) => (
            <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
            />
        ))}
        </div>
    </main>
    );
}

export default Shop;