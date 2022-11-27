import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import classes from './ProfileForm.module.css';

const WEB_API_LINK = 'AIzaSyA9ZDjAqXdywGVBpdFKyNB2RHvJMLr6IT8';


const ProfileForm = () => {
  const newPasswordInputRef = useRef();
  const token = useSelector(state => state.authReducer.token);
  const history = useHistory();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredPassword = newPasswordInputRef.current.value;

    fetch(`https://identitytoolkit.googleapis.com/v1/accounts:update?key=${WEB_API_LINK}`, {
      method: 'POST',
      body: JSON.stringify({
        idToken: token,
        password: enteredPassword,
        returnSecureToken: true
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      history.replace('/');
    })

  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' minLength='7' ref={newPasswordInputRef}/>
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
