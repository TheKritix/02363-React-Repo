import React from "react";
import CommentForm from "./CommentForm.js"
import profileImg from "../../Profile/profileIcon.png";
import './Comment.css';

const Comment = ({
    comment
}) => {
    return (
        <div className="comment" key={comment.id}>
            <div className="comment-image-container">
                <img src={profileImg}/>
            </div>
            <div className="comment-right">
                <div className="comment-content">
                    <div className="comment-author">{comment.username}</div>
                    <div>00:00</div>
                    <div className="comment-text">{comment.body}</div>
                </div>
            </div>
        </div>
    )
};

export default Comment;