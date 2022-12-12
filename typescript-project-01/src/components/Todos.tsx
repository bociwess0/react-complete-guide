import React from 'react';
import Todo from '../models/todo';
import classes from './Todos.module.css'

//FC - functional component
//We're defining here that Todos component will havean items prop
const Todos: React.FC<{items: Todo[]}> = (props) => {
    return <ul className={classes.todos}>
        {props.items.map((item) => (
            <li className={classes.item} key={item.id}>{item.text}</li>
        ))}
    </ul>
}

export default Todos;