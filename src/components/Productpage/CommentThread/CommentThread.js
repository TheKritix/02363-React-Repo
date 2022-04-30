import React from "react";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import Comment from "./Comment.js";
import './Comment.css';

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
    
    const handleComment = (e) => {
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
        console.log(comment);

        if (
            comment.CommentText !== ""
        ) {
            fetch("HTTP://localhost:3001/api/comments", {
            method: "POST",
            action: "/",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(comment)
            }).then(() => {
            setDefaultComment();
            //rerender list of comments from db with inserted comment
            fetchComments();
            });
        } else {
            alert.show("Empty comment");
        }
    };

    const deleteComment = (comment) => {
        if (window.confirm("Are you sure you want to delete this comment?")) {
            fetch("HTTP://localhost:3001/api/comments", {
                method: "DELETE",
                headers: {
                    'content-type': 'application/json',
                    Accept: "application/json",
                },
                action: "/",
                body: JSON.stringify(comment)

            })
            .then(() => fetchComments())
        }   
    };

    const editComment = (comment) => {
        if (window.confirm("Are you sure you want to edit this comment?")) {
            fetch("HTTP://localhost:3001/api/comments", {
                method: "PUT",
                headers: {
                    'content-type': 'application/json',
                    Accept: "application/json",
                },
                action: "/",
                body: JSON.stringify(comment)
            })
            .then(() => fetchComments())
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
            <form className="submitCommentForm" onSubmit={submitComment}>
                <textarea
                    type="text"
                    value={comment.CommentText}
                    onChange={handleComment}
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
                    deleteComment={deleteComment}
                    editComment={editComment}
                    CommentId={comment.CommentId}
                    />
                ))
            }
            </div>
        </div>
    );
};

export default CommentThread;