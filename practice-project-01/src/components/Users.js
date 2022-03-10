import React,{useState} from "react";
import UserList from "./UserList";

function Users(props) {
    return <UserList users={props.users}/>;
}

export default Users;