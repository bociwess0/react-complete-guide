
import { Fragment } from 'react';
import { useRef } from 'react';
import classes from './CommentForm.module.css';


const CommentForm = (props) => {

    const commentInputRef = useRef();

    const addCommentHandler = (event) => {
        event.preventDefault();

        const enteredComment = commentInputRef.current.value;

    }

    return <Fragment>
        <div className={classes.card} >
            <form className={classes.form} onSubmit={props.onLoadComments}>
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