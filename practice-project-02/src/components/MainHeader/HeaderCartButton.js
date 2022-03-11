import React from "react";
import CartIcon from "../Cart/CartIcon";
import './HeaderCartButton.css';

function HeaderCartButton() {
    return <div className="button">
        <div className="icon">
            <CartIcon />
        </div>
        <p>Your Cart</p>
        <div className="badge">3</div>
        
    </div>
}

export default HeaderCartButton;