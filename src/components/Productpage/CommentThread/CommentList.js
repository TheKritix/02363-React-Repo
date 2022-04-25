import React from "react";
import { useState } from "react";
import CommentForm from "./CommentForm.js";
import Comment from "./Comment.js";
import './Comment.css';
import { CommentItem } from "./CommentItem.js"

const CommentList = () => {

    const [comments, setComments] = useState([]);
    const parentComment = CommentItem.filter(comment => comments.parentId === null);



    return (
        <div className="commentList">
            <h3 className="comments-title">Comments</h3>
            <div className="comment-form-title">Comment here</div>
            <CommentForm/>
            <div className="comments-container">
                <Comment
                key={parentComment.id}
                comment={parentComment}
                />
            </div>
        </div>
    )
};

export default CommentList;