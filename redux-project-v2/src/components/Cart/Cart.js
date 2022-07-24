import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux'


const Cart = (props) => {

  const cartItemsNumber = useSelector(state => state.updateCart.itemsNumber);
  const hasItems = cartItemsNumber > 0 ? true : false;
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {hasItems && <CartItem
          item={{ title: 'Test Item', quantity: cartItemsNumber, total: 18, price: 6 }}
        />}
      </ul>
    </Card>
  );
};

export default Cart;
