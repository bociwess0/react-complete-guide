import React from "react";
import Card from "./Card";
import './Modal.css';

function Modal() {
    return <div className="backdrop">
        <Card>
            <div className="modal">
                
            </div>
        </Card>
    </div>
}

export default Modal;