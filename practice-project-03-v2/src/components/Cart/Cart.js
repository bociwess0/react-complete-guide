import CartContext from '../../store/cart-context';
import CartItem from './CartItem';
import React, {useContext, useEffect, useState} from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import Checkout from './Checkout';


const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const [isOrdered, setIsOrdered] = useState(false);

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  }

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({...item, amount: 1});
  }

  const cartItems = <ul className={classes['cart-items']}>
    {cartCtx.items.map((item) => (
      <CartItem 
        key={item.id}
        name={item.name}
        price={item.price}
        amount={item.amount}
        onRemove={cartItemRemoveHandler.bind(null, item.id)}
        onAdd={cartItemAddHandler.bind(null, item)}
      />
    ))}
  </ul>

  const orderMadeHandler = () => {
    setIsOrdered(true);
  }

  const orderCancelHandler = () => {
    setIsOrdered(false);
  }

  const orderButtons = <div className={classes.actions}>
    <button className={classes['button--alt']} onClick={props.onClose}>
      Close
    </button>
    <button className={classes.button} onClick={orderMadeHandler}>Order</button>
  </div>


  const submitFormHandler = async (userData) => {
    await fetch('https://react-http-856b8-default-rtdb.firebaseio.com/orders.json', {
        method: 'POST',
        body: JSON.stringify({
          user: userData,
          ordeedItems: cartCtx.items
        })
      });
      cartCtx.clearCart();
  }
  
  
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isOrdered && <Checkout onCancel={orderCancelHandler} onSubmitForm={submitFormHandler}/>}
      {!isOrdered && orderButtons}
    </Modal>
  );
};

export default Cart;
