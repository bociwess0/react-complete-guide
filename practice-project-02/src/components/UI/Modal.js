import React from "react";
import Cart from "../Cart/Cart";
import Card from "./Card";
import './Modal.css';

function Modal() {
    return <div className="backdrop">
        <div className="modal">
            <Cart />
        </div>
    </div>
}

export default Modal;