import './CartItem.css';

const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className="cart-item">
      <div>
        <h2>{props.name}</h2>
        <div className="item-summary">
          <span className="price">{price}</span>
          <span className="amount">x {props.amount}</span>
        </div>
      </div>
      <div className="actions">
        <button >−</button>
        <button >+</button>
      </div>
    </li>
  );
};

export default CartItem;
