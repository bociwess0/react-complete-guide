import {useEffect, useState} from 'react';


const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(true);
  const [enteredEmailIsValid, setEnteredEmailIsValid] = useState(true);
  const [emailErrorMessage, setEmailErrorMessage] = useState('');

  useEffect (() => {
    if(enteredNameIsValid) {
      console.log('Name input is valid');
    }
    else {
      console.log('Name input is not valid');
    }

    if(enteredNameIsValid) {
      console.log('Email input is valid');
    }
    else {
      console.log('Email input is not valid');
    }
  }, [enteredNameIsValid, enteredEmailIsValid]);

  const nameInputChangeHandler = (event) => {
    setEnteredNameIsValid(true);
    setEnteredName(event.target.value);
  }

  const emailInputChangeHandler = (event) => {
    setEnteredEmailIsValid(true);
    setEnteredEmail(event.target.value);
  }



  const blurNameHandler = () => {
    if(enteredName.trim() === '') {
      setEnteredNameIsValid(false);
    }
  }

  const blurEmailHandler = () => {
    if(enteredEmail.trim() === '') {
      setEnteredEmailIsValid(false);
      setEmailErrorMessage("Email must not be empty.");
      return;
    }
    if(!enteredEmail.includes('@') || !enteredEmail.includes('.')) {
      setEnteredEmailIsValid(false);
      setEmailErrorMessage("Email is invalid");
    }
  }

  
  const formSubmitionHandler = (event) => {
    event.preventDefault();

    if(enteredName.trim() === '') {
      setEnteredNameIsValid(false);
      return;
    }

    if(enteredEmail.trim() === '') {
      setEnteredEmailIsValid(false);
      setEmailErrorMessage("Email must not be empty.");
      return;
    }
    if(!enteredEmail.includes('@') || !enteredEmail.includes('.')) {
      setEnteredEmailIsValid(false);
      setEmailErrorMessage("Email is invalid");
    }

    if(enteredNameIsValid && enteredEmailIsValid) {
      console.log("You have successfully entered the data.")
    }
  }

  const nameInputClasses = enteredNameIsValid ? 'form-control' : 'form-control invalid';
  const emailInputClasses = enteredEmail ? 'form-control' : 'form-control invalid';

  return (
    <form onSubmit={formSubmitionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={nameInputChangeHandler} onBlur={blurNameHandler} value={enteredName}/>
        {!enteredNameIsValid && <p className='error-text'>Name must not be empty.</p>}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='name'>Your Email</label>
        <input type='text' id='name' onChange={emailInputChangeHandler} onBlur={blurEmailHandler} value={enteredEmail}/>
        {!enteredEmailIsValid && <p className='error-text'>{emailErrorMessage}</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
