import React from "react";
import './Cart.css'


function Cart() {
    return <div>
        <ul className="cart-items">
        </ul>
        <div className="total">
            <h3>Total Amount</h3>
            <h3>135$</h3>
        </div>
        <div className="actions">
            <button type="button">Close</button>
            <button type="button">Order</button>
        </div>
    </div>
}

export default Cart;