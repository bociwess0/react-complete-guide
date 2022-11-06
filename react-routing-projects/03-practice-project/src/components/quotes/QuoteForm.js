import { Fragment, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addQuote } from '../../store/quote-actions';
import LoadingSpinner from '../UI/LoadingSinner';


import classes from './QuoteForm.module.css';

const QuoteForm = (props) => {

    const authorInputRef = useRef();
    const textInputRef = useRef();
    const dispatch = useDispatch();
    const status = useSelector(state => state.quoteReducer.status);


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
        quote.description = enteredText;
        
        dispatch(addQuote(quote));

    }

    if (status === 'pending') {
        return (
          <div className='centered'>
            <LoadingSpinner />
          </div>
        );
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
