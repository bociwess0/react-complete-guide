import React  from "react";
import './MealItemForm.css';

function MealItemForm(props) {
    
    return <form className="form">
        <div className="input">
            <label>Amount</label>
            <input type="number" defaultValue="1" min="1" max="20" onChange={props.onChangeNumberOfOrders} />
        </div>
        <button type="button" onClick={props.onIncreaseNumber}  >+ Add</button>
    </form>
}

export default MealItemForm;