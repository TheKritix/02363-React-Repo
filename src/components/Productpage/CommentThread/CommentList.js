import React from "react";
import CommentForm from "./CommentForm.js"

const CommentList = () => {
    return (
        <div className="commentList">
            <h3 className="comments-title">Comments</h3>
            <div className="commentformtitle">Comment here</div>
            <CommentForm>

            </CommentForm>
        </div>
    )
};

export default CommentList;