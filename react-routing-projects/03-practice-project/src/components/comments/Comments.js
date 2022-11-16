import { useState } from "react";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import CommentForm from "./CommentForm";
import LoadComments from "./LoadComments";

const Comments = () => {

    const comments =  useSelector(state => state.quoteReducer.comments);
    
    return <Fragment>
        <LoadComments />
        { comments.length == 0 && <CommentForm />}
    </Fragment>
}

export default Comments;