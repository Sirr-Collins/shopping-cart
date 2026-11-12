function CartItem({
  item,
  onIncrease,
  onDecrease,
  onRemove,
}) {
  return (
    <article className="cart-item">
      <img src={item.image} alt={item.title} />

      <div className="cart-item-info">
        <h2>{item.title}</h2>

        <p>${item.price.toFixed(2)} each</p>

        <div className="quantity-controls">
          <button
            type="button"
            onClick={() => onDecrease(item.id)}
          >
            -
          </button>

          <span>{item.quantity}</span>

          <button
            type="button"
            onClick={() => onIncrease(item.id)}
          >
            +
          </button>
        </div>
      </div>

      <div className="cart-item-actions">
        <p>
          ${(item.price * item.quantity).toFixed(2)}
        </p>

        <button
          type="button"
          onClick={() => onRemove(item.id)}
        >
          Remove
        </button>
      </div>
    </article>
  );
}

export default CartItem;