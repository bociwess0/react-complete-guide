import React, { useState } from "react";
import './Header.css';
import HeaderCartButton from "./HeaderCartButton";
import meals from './meals.jpg';
import Modal from "../UI/Modal";

function Header() {

    const[isClicked, setIsClicked] = useState(false);
    const showModalHandler = () => {
        setIsClicked(true);
    }
    const closeModalHandler = () => {
        setIsClicked(false);
    }

    return <div>
        {isClicked && <Modal closeModal={closeModalHandler}  />}
        <div className="header" >
            <h1>ReactMeals</h1>
            <HeaderCartButton showModal={showModalHandler} />
        </div>
        <div className="main-image">
            <img src={meals} />
        </div>
    </div>
}

export default Header;