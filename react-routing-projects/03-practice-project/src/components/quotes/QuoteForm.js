import { Fragment, useReducer, useRef } from 'react';
import { addQuote } from '../../api/api';


import classes from './QuoteForm.module.css';

const QuoteForm = (props) => {

    const authorInputRef = useRef();
    const textInputRef = useRef();

    const addQuoteHandler = (event) => {
        event.preventDefault();

        const quote = {};

        const enteredAuthor = authorInputRef.current.value;
        const enteredText = textInputRef.current.value;

        if(enteredAuthor === '') {
            alert('Plese fill the Author field');
            return;
        }

        if(enteredText === '') {
            alert('Plese fill the Text field');
            return;
        }

        quote.author = enteredAuthor;
        quote.text = enteredText;
        console.log(quote);
        addQuote(quote);
    }

  return (
    <Fragment>
        <form className={classes.form} onSubmit={addQuoteHandler}>
            <div className={classes.control}>
                <label htmlFor='author'>Author</label>
                <input type='text' id='author' ref={authorInputRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor='text'>Text</label>
                <textarea id='text' rows='5' ref={textInputRef}></textarea>
            </div>
            <div className={classes.actions}>
                <button className='btn'>Add Quote</button>
            </div>
        </form>
    </Fragment>
  );
};

export default QuoteForm;
