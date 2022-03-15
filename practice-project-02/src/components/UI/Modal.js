import React from "react";
import Cart from "../Cart/Cart";
import './Modal.css';

function Modal(props) {
    return <div className="backdrop" >
        <div className="modal">
            <Cart closeModal={props.closeModal} />
        </div>
    </div>
}

export default Modal;