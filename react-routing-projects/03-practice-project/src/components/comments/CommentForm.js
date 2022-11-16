
import { Fragment } from 'react';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addComment, fetchComments } from '../../store/quote-actions';
import classes from './CommentForm.module.css';


const CommentForm = (props) => {

    const commentInputRef = useRef();
    const dispatch = useDispatch();

    const addCommentHandler = (event) => {
        event.preventDefault();

        const enteredComment = commentInputRef.current.value;

        dispatch(addComment(enteredComment, props.quoteId));

    }

    return <Fragment>
        <div className={classes.card} >
            <form className={classes.form} onSubmit={addCommentHandler}>
                <div className={classes.control}>
                    <label htmlFor='text'>Comment</label>
                    <textarea id='text' rows='5' ref={commentInputRef}></textarea>
                </div>
                <div className={classes.actions}>
                    <button className='btn'>Add Quote</button>
                </div>
            </form>
        </div>
</Fragment>
}


export default CommentForm;