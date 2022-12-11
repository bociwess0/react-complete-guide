import React from 'react';

//FC - functional component
//We're defining here that Todos component will havean items prop
const Todos: React.FC<{items: string[]}> = (props) => {
    return <ul>
        {props.items.map((item) => (
            <li key={item}>{item}</li>
        ))}
    </ul>
}

export default Todos;