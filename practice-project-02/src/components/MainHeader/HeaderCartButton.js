import React, { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import OrderContext from "../Context/orderContext";
import './HeaderCartButton.css';

function HeaderCartButton(props) {
    const ctx = useContext(OrderContext);
    return <div className="button" onClick={props.showModal}>
        <div className="icon">
            <CartIcon />
        </div>
        <p>Your Cart</p>
        <div className="badge">{ctx.ordersNumber}</div>
        
    </div>
}

export default HeaderCartButton;