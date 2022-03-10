import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Form.css';
import Card from '../../components/UI/Card';
import ErrorModal from "../UI/ErrorModal";

function Form(props) {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error,setErorr] = useState();

    const userNameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    }

    const AgeChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        if(enteredUsername.trim().length===0 ||  enteredAge.trim().length === 0) {
            setErorr({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values).'
            })
            return;
        }

        if(enteredAge < 1) {
            setErorr({
                title: 'Invalid input',
                message: 'Please enter a valid age (>0).'
            })
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

    const errorHandler = () => {
        setErorr(null);
    }

    return <div>
            {error && <ErrorModal title={error.title} message={error.message} closeError={errorHandler}/>}
            <Card>
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
    </div>
}

export default Form;
