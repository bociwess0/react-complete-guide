import React from 'react';
import './MealItem.css';
import MealItemForm from './MealItemForm';

function MealItem(props) {
    return <div className='meal'>
        <div>
            <h3>{props.name}</h3>
            <p className='description'>{props.description}</p>
            <p className='price'>{props.price}</p>
        </div>
        <MealItemForm />
    </div>
}

export default MealItem;
