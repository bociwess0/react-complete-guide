
import { Fragment, useState } from 'react';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addComment, fetchComments } from '../../store/quote-actions';
import LoadingSpinner from '../UI/LoadingSinner';
import classes from './CommentForm.module.css';


const CommentForm = (props) => {

    const commentInputRef = useRef();
    const authorInputRef = useRef();
    const status = useSelector(state => state.quoteReducer.status);
    const [validationMessage, setValidationMessage] = useState();

    const [authorFieldValid, setAuthorFieldValid] = useState(false);
    const [commentFieldValid, setCommentFieldValid] = useState(false);


    const dispatch = useDispatch();

    const handleValidation = (enteredAuthor, enteredComment) => {

        if(!(/\d/.test(enteredAuthor)) && enteredAuthor !== '') {
            setAuthorFieldValid(true);
        } else {
            setAuthorFieldValid(false);
            setValidationMessage('The author field must not be empty and must not contain numbers!');
        }

        if(enteredComment !== '') {
            setCommentFieldValid(true);
        } else {
            setCommentFieldValid(false);
            setValidationMessage('The comment field must not be empty!');
        }

        if(enteredAuthor === '' && enteredComment === '') {
            setValidationMessage('Fields must not be empty!');
            setCommentFieldValid(false);
            setAuthorFieldValid(false);
        }

    }

    const submitValidation = (enteredAuthor, enteredComment) => {
        handleValidation(enteredAuthor, enteredComment);

        console.log(authorFieldValid);
        console.log(commentFieldValid);

        return authorFieldValid && commentFieldValid;
    }

    const addCommentHandler = (event) => {
        event.preventDefault();

        const enteredComment = commentInputRef.current.value;
        const enteredAuthor = authorInputRef.current.value;

    
        if(submitValidation(enteredAuthor, enteredComment)) {
            dispatch(addComment(enteredAuthor, enteredComment, props.quoteId));
            props.onAddComment();
        }

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
                <div className={classes.validationFlex}>
                    <div className={classes.validationMessage}>{validationMessage}</div>
                    <div className={classes.actions}>
                        <button className='btn'>Add Comment</button>
                    </div>
                </div>
            </form>
        </div>
</Fragment>
}


export default CommentForm;