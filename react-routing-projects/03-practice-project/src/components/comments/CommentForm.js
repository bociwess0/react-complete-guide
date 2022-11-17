
import { Fragment } from 'react';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addComment, fetchComments } from '../../store/quote-actions';
import LoadingSpinner from '../UI/LoadingSinner';
import classes from './CommentForm.module.css';


const CommentForm = (props) => {

    const commentInputRef = useRef();
    const authorInputRef = useRef();
    const status = useSelector(state => state.quoteReducer.status);
    const comments = useSelector(state => state.quoteReducer.comments);

    const dispatch = useDispatch();

    const addCommentHandler = (event) => {
        event.preventDefault();

        const enteredComment = commentInputRef.current.value;
        const enteredAuthor = authorInputRef.current.value;

        dispatch(addComment(enteredAuthor, enteredComment, props.quoteId));
        props.onAddComment();
    }


    if (status === 'pending') {
        return (
          <div className='centered'>
            <LoadingSpinner />
          </div>
        );
    }

    return <Fragment>
        <div className={classes.card} >
            <form className={classes.form} onSubmit={addCommentHandler}>
                <div className={classes.control}>
                        <label htmlFor='author'>Author</label>
                        <input type='text' id='author' ref={authorInputRef}/>
                    </div>
                <div className={classes.control}>
                    <label htmlFor='text'>Comment</label>
                    <textarea id='text' rows='5' ref={commentInputRef}></textarea>
                </div>
                <div className={classes.actions}>
                    <button className='btn'>Add Comment</button>
                </div>
            </form>
        </div>
</Fragment>
}


export default CommentForm;