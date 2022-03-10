import React, { useState } from "react";
import Form from "./Form";

function NewUsers(props) {
    const [isEditing, setIsEditing] = useState(false);

    

    const savedUserHandler = (enteredUser) => {
        const newUser = {
            ...enteredUser,
            id: Math.random().toString()
        }

        console.log(newUser);
        props.onAddUser(newUser);
    }

    const startEditingHandler = () => {
        setIsEditing(true);
    }

    return <div className="new-user">
        <Form onSavedNewUser={savedUserHandler} startEditing={startEditingHandler}/>
    </div>
}

export default NewUsers;