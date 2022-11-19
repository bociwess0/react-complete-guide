
import classes from './CommentItem.module.css';
import close from './closeButton.png';
import { useDispatch, useSelector } from 'react-redux';
import { deleteComment, fetchComments } from '../../store/quote-actions';

const CommentItem = (props) => {

    const comments = useSelector(state => state.quoteReducer.comments);
    const dispatch = useDispatch();

    const deleteCommentHandler = () => {
        
        dispatch(deleteComment(props.commentId));
        
    }

    return <div className={classes.commentWrapper} >
        <div className={classes.commentContent} >
            <div className={classes.title}>{props.author}</div>
            <div className={classes.commentText}>{props.text}</div>
        </div>
        <div className={classes.closeButton}>
            <button onClick={deleteCommentHandler}>
                <img src={close} />
            </button>
        </div>
    </div>
}

export default CommentItem;