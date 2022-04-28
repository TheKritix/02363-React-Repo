import React from "react";
import CommentForm from "./CommentForm.js"
import profileImg from "../../Profile/profileIcon.png";
import './Comment.css';

const Comment = ({
    comment,
    deleteComment,
    //replies,
}) => {
    return (
        <div className="comment" key={comment.CommentId}>
            <div className="comment-image-container">
                <img src={profileImg}/>
            </div>
            <div className="comment-right">
                <div className="comment-content">
                    <div className="comment-author">{comment.username}</div>
                    <div>{comment.createdAt}</div>
                    <div className="comment-text"> //-- {comment.CommentText}</div>
                    <button className="delete-button" onClick={() => deleteComment(comment.CommentId)}>Delete</button>
                </div>
                <div className="comment-reply">
                </div>
            </div>
        </div>
    )
};

export default Comment;