import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Form.css';
import Card from '../../components/UI/Card';

function Form(props) {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const userNameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    }

    const AgeChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        if(enteredUsername.trim().length===0 ||  enteredAge.trim().length === 0) {
            return;
        }

        if(enteredAge < 1) {
            return;
        }

        const newUser = {
            username: enteredUsername,
            age: enteredAge,
        }


        props.onSavedNewUser(newUser);
        props.startEditing(true);
        
        setEnteredUsername('');
        setEnteredAge('');
    }

    return <Card>
            <form className="form" onSubmit={submitHandler}>
            <div className="form-group">
                <label >Username</label>
                <input type="text" className="form-control" value={enteredUsername} onChange={userNameChangeHandler}/>
            </div>
            <div className="form-group">
                <label >Age(Years)</label>
                <input type="number" className="form-control" value={enteredAge} onChange={AgeChangeHandler}/>
            </div>
            <button type="submit" className="btn btn-primary">Add User</button>
        </form>
    </Card>
}

export default Form;
