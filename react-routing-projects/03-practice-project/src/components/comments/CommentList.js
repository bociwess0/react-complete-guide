import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import CommentItem from './CommentItem';
import classes from './CommentList.module.css';

const CommentList = (props) => {

    const comments = useSelector(state => state.quoteReducer.comments);

    return <Fragment>
            <h2>Comment List</h2>
            <div className={classes.card} >
                <div className={classes.commentListWrapper} >
                {comments.map((comment, index) => (
                    <CommentItem 
                        key={index}
                        quoteId = {props.quoteId}
                        author = {comment.author}
                        text={comment.text}
                    />
                ))}
                
                </div>
            </div>
    </Fragment>
}

export default CommentList;

