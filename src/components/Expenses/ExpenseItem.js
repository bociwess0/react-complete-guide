import React, { useState } from 'react';

import './ExpenseItem.css';
import ExpenseDate from "./ExpenseDate";
import Card from '../UI/Card';

function ExpenseItem(props) {
    // let title = props.title;
    
    // const clickHandler = () => {
    //     title = "Updated!";
    // }
    //This is not a solution for this intention

    const [title, setTitle] = useState(props.title);

    // useState always returns an array
    // where the first value is the variable itself,
    // you could say, the value itself.
    // And the second element in the array
    // is that updating function.

    const clickHandler = () => {
        setTitle('Updated!');
        console.log(title);
    }


    return <Card className='expense-item'>
        <ExpenseDate date={props.date}/>
        <div className='expense-item__description'>
            <h2>{title}</h2>
            <div className='expense-item__price'>${props.amount}</div>
        </div>
        <button onClick={clickHandler}>Change Title</button>
    </Card>
}

export default ExpenseItem;