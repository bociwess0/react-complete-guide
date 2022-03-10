import React from "react";
import Card from "./Card";
import './User.css';

function User(props) {

    const showUser = props.username + ' ' + '(' + props.age + ')';

    return <Card>
        <div className="user">{showUser}</div>
    </Card>
}

export default User;