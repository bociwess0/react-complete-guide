
import classes from './CommentItem.module.css';

const CommentItem = (props) => {
    return <div className={classes.commentWrapper} >
        <div className={classes.title}>{props.author}</div>
        <div className={classes.commentText}>{props.text}</div>
    </div>
}

export default CommentItem;