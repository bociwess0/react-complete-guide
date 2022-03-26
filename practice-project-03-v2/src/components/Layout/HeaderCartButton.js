import { useContext } from 'react';
import useHeaderCartNumber from '../../hooks/useHeaderCartNumber';
import CartContext from '../../store/cart-context';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
  const HeaderCartNumber = useHeaderCartNumber();
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{HeaderCartNumber}</span>
    </button>
  );
};

export default HeaderCartButton;
