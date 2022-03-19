import {useEffect, useState} from 'react';


const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  useEffect (() => {
    if(enteredNameIsValid) {
      console.log('Name input is valid');
    }
    else {
      console.log('Name input is not valid');
    }
  }, [enteredNameIsValid]);

  const nameInputchangeHandler = (event) => {
    setEnteredNameIsValid(true);
    setEnteredName(event.target.value);
  }

  
  const formSubmitionHandler = (event) => {
    event.preventDefault();
    setEnteredNameTouched(true);
    if(enteredName.trim() === '') {
      setEnteredNameIsValid(false);
      return;
    }
    console.log(enteredName);
  }

  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const nameInputClasses = enteredNameIsValid ? 'form-control' : 'form-control invalid';

  return (
    <form onSubmit={formSubmitionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={nameInputchangeHandler} value={enteredName}/>
        {nameInputIsInvalid && <p className='error-text'>Name must not be empty.</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
