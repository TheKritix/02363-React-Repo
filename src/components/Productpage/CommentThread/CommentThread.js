import React from "react";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import CommentForm from "./CommentForm.js";
import Comment from "./Comment.js";
import './Comment.css';
import { 
    CommentItem as getCommentItemApi,
    createComment as createCommentApi,
    deleteComment as deleteCommentApi,
 } from "./CommentItem.js"

export const CommentThread = () => {

    const { Book_Id  } = useParams();
    const threadId = parseInt(Book_Id);

    const [fetchedComments, setFetchedComments] = useState([]);
    const [comment, setComment] = useState(
        {
            CommentText: "",
            Book_Id: 0,
            userId: 0,
            username: "",
            createdAt: "",

        }
    );
    
    const handleChangeComment = (e) => {
        setComment({
            CommentText: e.target.value,
            Book_Id: threadId,
            userId: 0,
            username: "John",
            createdAt: Date().toString().slice(0, 10)
        });
    };

    const setDefaultComment = () => {
        setComment(
            {
                CommentText: "",
                Book_Id: 0,
                userId: 0,
                username: "",
                createdAt: "",
            }
        )
    };

    const submitComment = (e) => {
        e.preventDefault();
        const commentObject = {
            CommentText: comment.CommentText,
            Book_Id: comment.Book_Id,
            userId: comment.userId,
            username: comment.username,
            createdAt: comment.createdAt,
        };

        const formComment = new FormData();
        formComment.append("CommentText", comment.CommentText);
        formComment.append("Book_Id", comment.Book_Id);
        formComment.append("userId", comment.userId);
        formComment.append("username", comment.username);
        formComment.append("createdAt", comment.createdAt);
        
        console.log(commentObject);
        console.log(formComment);
        console.log(comment);

        if (
            !(
            commentObject.CommentText === ""
            //commentObject.Book_Id === null
            //commentObject.userId === "" &&
            //commentObject.username === "" &&
            //commentObject.createdAt === ""
            )
        ) {
            fetch("HTTP://localhost:3001/api/comments", {
            method: "POST",
            action: "/",
            body: comment,
            }).then(() => {
            setDefaultComment();
            console.log();
            });
        } else {
            alert.show("Empty comment");
        }
    };

    const fetchComments = () => {
    fetch('HTTP://localhost:3001/api/comments',{
      headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then ((response) => {
        console.log(response)
        return response.json();
      })
      .then((JSON) => {
        console.log(JSON);
        setFetchedComments(JSON)
      });
    }

    useEffect(() => {
        fetchComments();
    }, []);
    

    return (
        <div className="commentList">
            <h3 className="commentList-title">Comments</h3>
            <div className="comment-form-title">Comment here</div>
            <form className="submitCommentForm" onSubmit={submitComment}>
                <textarea
                    type="text"
                    value={comment.CommentText}
                    onChange={handleChangeComment}
                    >
                </textarea>
                <button className="comment-submit-button">Comment!</button>
            </form>
            <div className="comments-container">
                {fetchedComments.filter((comments) => comments.Book_Id === threadId).map((comment) => (
                    <Comment
                    key={comment.CommentId}
                    comment={comment}
                    //replies={fetchReplies(comments.filter(item => item.parentId !== null).CommentId)}
                    //deleteComment={deleteComment}
                    />
                ))
            }
            </div>
        </div>
    );
};

export default CommentThread;