import React from "react";
import './User.css';

function User(props) {

    const showUser = props.username + ' ' + '(' + props.age + ')';

    return <div className="user">{showUser}</div>
}

export default User;