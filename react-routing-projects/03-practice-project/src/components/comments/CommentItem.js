
import classes from './CommentItem.module.css';
import close from './closeButton.png';
import { useSelector } from 'react-redux';

const CommentItem = (props) => {

    const deleteCommentHandler = () => {
        console.log(props.commentId);
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