import React from "react";
import './Header.css';
import HeaderCartButton from "./HeaderCartButton";
import meals from './meals.jpg';

function Header() {
    return <div>
        <div className="header">
            <h1>ReactMeals</h1>
            <HeaderCartButton />
        </div>
        <div className="main-image">
            <img src={meals} />
        </div>
    </div>
}

export default Header;