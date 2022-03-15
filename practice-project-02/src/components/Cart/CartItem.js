import { useState } from 'react';
import './CartItem.css';

const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  const [amount, setAmount] = useState(parseInt(props.amount));

  const increaseAmount = () => {
    setAmount(amount + 1)
  }

  const reduceAmount = () => {
    setAmount(amount - 1);
  }

  return (
    <li className="cart-item">
      <div>
        <h2>{props.name}</h2>
        <div className="item-summary">
          <span className="price">{price}</span>
          <span className="amount">x {amount}</span>
        </div>
      </div>
      <div className="actions">
        <button onClick={reduceAmount}>−</button>
        <button onClick={increaseAmount}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
