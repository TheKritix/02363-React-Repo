import React from "react";
import { useState, useEffect } from "react";
import CommentForm from "./CommentForm.js";
import Comment from "./Comment.js";
import './Comment.css';
import { 
    CommentItem as getCommentItemApi,
    createComment as createCommentApi,
    deleteComment as deleteCommentApi,
 } from "./CommentItem.js"

const CommentList = () => {

    const [comments, setComments] = useState([]);
    //const parentComment = CommentItem.filter(item => item.parentId === null);


    const addComment = (text, parentId) => {
        createCommentApi(text, parentId).then((comment) => {
            setComments([comment, ...comments]);
        }
        )
        console.log(comments);
    }

    const deleteComment = (commentId) => {
        if (window.confirm("ARE U SURE M8?")) {
            deleteCommentApi().then(() => {
                const newComments = comments.filter(
                (comments) => comments.id !== commentId
                );
                setComments(newComments);
            });
        }
    };

    //will later be updated to fetch from db API
    useEffect(() => {
        getCommentItemApi().then((data) => {
            setComments(data);
        });
    }, []);
    

    return (
        <div className="commentList">
            <h3 className="commentList-title">Comments</h3>
            <div className="comment-form-title">Comment here</div>
            <CommentForm submitLabel="Write" handleSubmit={addComment}/>
            <div className="comments-container">
                {comments.map((comment) => (
                    <Comment
                    key={comment.CommentId}
                    comment={comment}
                    deleteComment={deleteComment}
                    />
                ))
            }
            </div>
        </div>
    )
};

export default CommentList;