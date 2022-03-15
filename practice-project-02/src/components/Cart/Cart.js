import React, { useContext, useState } from "react";
import OrderContext from "../Context/orderContext";
import './Cart.css'
import CartItem from "./CartItem";

function Cart(props) {
    const ctx = useContext(OrderContext);

    return <div>
        <ul className="cart-items">
        {ctx.cartItems.map((item)=>(
            <CartItem 
                key={item.id}
                name={item.name}
                price={item.price}
                amount={item.amount}
            />
        ))}
        </ul>
        <div className="total">
            <h3>Total Amount</h3>
            <h3>{parseInt(ctx.total)}$</h3>
        </div>
        <div className="actions">
            <button type="button" onClick={props.closeModal}>Close</button>
            <button type="button">Order</button>
        </div>
    </div>
}

export default Cart;
