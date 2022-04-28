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

const CommentThread = () => {

    const { Book_Id  } = useParams();
    const threadId = parseInt(Book_Id);
    console.log(threadId);

    const [comments, setComments] = useState([]);
    
    const addComment = (text, parentId, Book_Id) => {
        createCommentApi(text, parentId, Book_Id).then((comment) => {
            setComments([comment, ...comments]);
        }
        )
        console.log(comments);
    }

    const deleteComment = (commentId) => {
        if (window.confirm("ARE U SURE M8?")) {
            deleteCommentApi().then(() => {
                const newComments = comments.filter(
                (comments) => comments.CommentId !== commentId
                );
                setComments(newComments);
            });
        }
    };

    const [fetchedComments, setFetchedComments] = useState([]);
    const fetchComments = () => {
    fetch('https://stoodle.bhsi.xyz/api/comments',{
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
            <CommentForm submitLabel="Write" handleSubmit={addComment}/>
            <div className="comments-container">
                {fetchedComments.filter((comments) => comments.Book_Id === threadId).map((comment) => (
                    <Comment
                    key={comment.CommentId}
                    comment={comment}
                    //replies={fetchReplies(comments.filter(item => item.parentId !== null).CommentId)}
                    deleteComment={deleteComment}
                    />
                ))
            }
            </div>
        </div>
    )
};

export default CommentThread;