import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchComments } from "../../store/quote-actions";
import LoadingSpinner from "../UI/LoadingSinner";
import CommentForm from "./CommentForm";
import classes from './Comments.module.css';


const Comments = (props) => {

    const comments =  useSelector(state => state.quoteReducer.comments);
    const status = useSelector(state => state.quoteReducer.status);
    const dispatch = useDispatch();

    const loadCommentsHandler = () => {
        // props.onLoadComments();
        dispatch(fetchComments());
    }

    if (status === 'pending') {
        return (
          <div className='centered'>
            <LoadingSpinner />
          </div>
        );
    }


    return <Fragment>
        <button className={`btn ${classes.btnComment}`} onClick={loadCommentsHandler} >Load Comments</button>
        { comments.length === 0 && <CommentForm quoteId = {props.quoteId} />}
    </Fragment>
}

export default Comments;