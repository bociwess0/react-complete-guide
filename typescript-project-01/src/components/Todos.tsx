import React from 'react';
import Todo from '../models/todo';

//FC - functional component
//We're defining here that Todos component will havean items prop
const Todos: React.FC<{items: Todo[]}> = (props) => {
    return <ul>
        {props.items.map((item) => (
            <li key={item.id}>{item.text}</li>
        ))}
    </ul>
}

export default Todos;