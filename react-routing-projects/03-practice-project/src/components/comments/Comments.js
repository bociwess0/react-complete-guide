import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchComments } from "../../store/quote-actions";
import LoadingSpinner from "../UI/LoadingSinner";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";
import classes from './Comments.module.css';
import NoCommentsFound from "./NoCommentsFound";


const Comments = (props) => {

    const comments =  useSelector(state => state.quoteReducer.comments);
    const status = useSelector(state => state.quoteReducer.status);
    const [commentFormVisible, setCommentFormVisible] = useState(false);
    const [commentsLoaded, setCommentsLoaded] = useState(false);
    const dispatch = useDispatch();

    const showCommentFormHandler = () => {
        setCommentFormVisible(!commentFormVisible);
    }

    const loadCommentsHandler = () => {
        // props.onLoadComments();
        dispatch(fetchComments(props.quoteId));
        setCommentsLoaded(true);
    }

    useEffect(() => {
        setCommentsLoaded(false);
        console.log(commentsLoaded);
    }, [])
    

    if (status === 'pending') {
        return (
          <div className='centered'>
            <LoadingSpinner />
          </div>
        );
    }


    return <Fragment>
        { !commentsLoaded  && <button className={`btn ${classes.btnComment}`} onClick={loadCommentsHandler} >Load Comments</button>}
        { commentsLoaded && status === 'completed' && comments.length > 0 && <CommentList quoteId = {props.quoteId} />}
        { commentsLoaded && status === 'completed' && comments.length === 0 && <NoCommentsFound />}
        { commentsLoaded && !commentFormVisible && status === 'completed' && <button className={`btn ${classes.btnComment}`} onClick={showCommentFormHandler} >Add Comment</button>}
        { commentsLoaded && commentFormVisible && status === 'completed' && comments.length >= 0 && <CommentForm quoteId = {props.quoteId} onAddComment={showCommentFormHandler} />}
    </Fragment>
}

export default Comments;