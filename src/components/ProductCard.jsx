import { useState } from "react";

function ProductCard({ product, onAddToCart }) {
  const [quantity, setQuantity] = useState("1");

  function handleIncrement() {
    setQuantity((previousQuantity) => {
      return String((Number(previousQuantity) || 1) + 1);
    });
  }

  function handleDecrement() {
    setQuantity((previousQuantity) => {
      return String(Math.max(1, (Number(previousQuantity) || 1) - 1));
    });
  }

  function handleQuantityChange(event) {
    const value = event.target.value;

    if (value === "" || /^\d+$/.test(value)) {
      setQuantity(value);
    }
  }

  function handleQuantityBlur() {
    setQuantity(String(Math.max(1, Number(quantity) || 1)));
  }

  function handleAddToCart() {
    onAddToCart(product, Math.max(1, Number(quantity) || 1));
  }

  return (
    <article className="product-card">
      <img src={product.image} alt={product.title} />

      <div className="product-info">
        <h2>{product.title}</h2>

        <p className="product-price">
          ${product.price.toFixed(2)}
        </p>

        <p>{product.description}</p>

        <div className="quantity-controls">
          <button type="button" onClick={handleDecrement}>
            -
          </button>

          <input
            type="number"
            min="1"
            value={quantity}
            onChange={handleQuantityChange}
            onBlur={handleQuantityBlur}
            aria-label={`Quantity for ${product.title}`}
          />

          <button type="button" onClick={handleIncrement}>
            +
          </button>
        </div>

        <button
          type="button"
          className="add-to-cart"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </article>
  );
}

export default ProductCard;