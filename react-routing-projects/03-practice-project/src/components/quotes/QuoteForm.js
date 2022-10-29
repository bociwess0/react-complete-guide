import { Fragment } from 'react';
import classes from './QuoteForm.module.css';

const QuoteForm = (props) => {
  return (
    <Fragment>
        <form className={classes.form} >
            <div className={classes.control}>
                <label htmlFor='author'>Author</label>
                <input type='text' id='author' />
            </div>
            <div className={classes.control}>
                <label htmlFor='text'>Text</label>
                <textarea id='text' rows='5'></textarea>
            </div>
            <div className={classes.actions}>
                <button className='btn'>Add Quote</button>
            </div>
        </form>
    </Fragment>
  );
};

export default QuoteForm;
