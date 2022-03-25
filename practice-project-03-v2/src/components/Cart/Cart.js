import CartContext from '../../store/cart-context';
import CartItem from './CartItem';
import React, {useContext} from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';


const Cart = (props) => {
  const cartCtx = useContext(CartContext)
  const cartItems = <ul className={classes['cart-items']}>
    {cartCtx.items.map((item) => (
      <CartItem 
        key={item.id}
        name={item.name}
        price={item.price}
        amoun={item.amount}
      />
    ))}
  </ul>
  

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
