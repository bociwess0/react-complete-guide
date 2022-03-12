import React from "react";
import Cart from "../Cart/Cart";
import './Modal.css';

function Modal(props) {
    return <div className="backdrop" onClick={props.closeModal}>
        <div className="modal">
            <Cart closeModal={props.closeModal} />
        </div>
    </div>
}

export default Modal;