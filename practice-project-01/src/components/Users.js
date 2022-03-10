import React,{useState} from "react";
import Card from "./Card";
import UserList from "./UserList";

function Users(props) {
    return <Card>
        <UserList users={props.users}/>
    </Card>
}

export default Users;