import MealItemForm from './MealItemForm';
import classes from './MealItem.module.css';
import { useContext } from 'react';
import CartContext from '../../../store/cart-context';

const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  const cartCtx = useContext(CartContext);

  const addItemHandler = (itemAmount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      price: props.price,
      amount: itemAmount
    })
  }

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddItem={addItemHandler}/>
      </div>
    </li>
  );
};

export default MealItem;
