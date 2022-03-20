import { useRef } from 'react';
import classes from './Checkout.module.css';

const Checkout = (props) => {

    const nameInputref = useRef();
    const streetInputref = useRef();
    const postalCodeInputref = useRef();
    const cityInputref = useRef();
        
    const confirmHandler = (event) => {
        event.preventDefault();

        const enteredName = nameInputref.current.value;
        const enteredStreet = streetInputref.current.value;
        const enteredPostaCode = postalCodeInputref.current.value;
        const enteredCity = cityInputref.current.value;
    };

    return (
        <form className={classes.form} onSubmit={confirmHandler}>
        <div className={classes.control}>
            <label htmlFor='name'>Your Name</label>
            <input type='text' id='name' ref={nameInputref}/>
        </div>
        <div className={classes.control}>
            <label htmlFor='street'>Street</label>
            <input type='text' id='street' ref={streetInputref} />
        </div>
        <div className={classes.control}>
            <label htmlFor='postal'>Postal Code</label>
            <input type='text' id='postal' ref={postalCodeInputref} />
        </div>
        <div className={classes.control}>
            <label htmlFor='city'>City</label>
            <input type='text' id='city' ref={cityInputref} />
        </div>
        <div className={classes.actions}>
            <button type='button' onClick={props.onCancel}>
            Cancel
            </button>
            <button className={classes.submit}>Confirm</button>
        </div>
        </form>
    );
};

export default Checkout;