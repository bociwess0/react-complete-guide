import React, { useContext, useState } from "react";
import OrderContext from "../Context/orderContext";
import './MealItemForm.css';

function MealItemForm() {
    const ctx = useContext(OrderContext);
    const [numberOfOrder, setNumberOfOrder] = useState(1);

    const changeNumberOfOrderHandler = (event) => {
        setNumberOfOrder(event.target.value);
    }
    
    const increaseNumberOfOrders = () => {
        ctx.onAddOrder(numberOfOrder);
    }

    return <form className="form">
        <div className="input">
            <label>Amount</label>
            <input type="number" defaultValue="1" min="1" max="20" onChange={changeNumberOfOrderHandler} />
        </div>
        <button type="button" onClick={increaseNumberOfOrders}  >+ Add</button>
    </form>
}

export default MealItemForm;