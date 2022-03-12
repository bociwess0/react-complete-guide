import React, {useState ,useContext } from 'react';
import OrderContext from '../Context/orderContext';
import './MealItem.css';
import MealItemForm from './MealItemForm';

function MealItem(props) {
    const ctx = useContext(OrderContext);
    const [numberOfOrder, setNumberOfOrder] = useState(1);

    const changeNumberOfOrderHandler = (event) => {
        setNumberOfOrder(event.target.value);
    }

    const increaseNumberOfOrders = () => {
        const cartItem = {
            id: props.id,
            name: props.name,
            price: props.price,
            amount: numberOfOrder
        }
        ctx.onAddOrder(cartItem);
    }

    return <div className='meal'>
        <div>
            <h3>{props.name}</h3>
            <p className='description'>{props.description}</p>
            <p className='price'>{props.price}</p>
        </div>
        <MealItemForm onIncreaseNumber={increaseNumberOfOrders} onChangeNumberOfOrders={changeNumberOfOrderHandler} />
    </div>
}

export default MealItem;
