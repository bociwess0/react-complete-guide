import React from "react";
import './MealItemForm.css';

function MealItemForm(props) {
    return <form className="form">
        <div className="input">
            <label>Amount</label>
            <input />
        </div>
        <button>+Add</button>
    </form>
}

export default MealItemForm;