import React from "react";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import Comment from "./Comment.js";
import './Comment.css';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import Button from "@material-ui/core/Button";


export const CommentThread = () => {

    const { Book_Id  } = useParams();
    const threadId = parseInt(Book_Id);
    const userIdString = sessionStorage.getItem("userId");
    const userId = JSON.parse(userIdString);
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const [fetchedComments, setFetchedComments] = useState([]);
    const [currentUserInfo, setCurrentUserInfo] = useState([]);
    const [comment, setComment] = useState(
        {
            CommentText: "",
            Book_Id: 0,
            userId: 0,
            username: "",
            createdAt: "",

        }
    );

    const isUserLoggedIn = () => {
        if (userId === null) {
            setUserLoggedIn(false)
        } else {
            setUserLoggedIn(true)
        }
    } 
    
    const handleComment = (e) => {
        setComment({
            CommentText: e.target.value,
            Book_Id: threadId,
            userId: userId,
            username: [currentUserInfo[0].Firstname, currentUserInfo[0].Lastname].join(' '),
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
            fetch("HTTPS://stoodle.bhsi.xyz/api/comments", {
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
            fetch("HTTPS://stoodle.bhsi.xyz/api/comments", {
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
            fetch("HTTPS://stoodle.bhsi.xyz/api/comments", {
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
    fetch("HTTPS://stoodle.bhsi.xyz/api/comments",{
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

    const fetchUsername = () => {
        fetch(`http://localhost:3001/api/userinfo/${userId}`, {
          headers: {
            "content-type": "application/json",
            Accept: "application/json",
          },
        })
          .then((response) => {
            console.log(response);
            return response.json();
          })
          .then((JSON) => {
            console.log(JSON);
            setCurrentUserInfo(JSON);
          });
      };

    useEffect(() => {
        fetchComments();
        fetchUsername();
        isUserLoggedIn();
    }, []);
    

    return (
        <div className="commentList">
            <h3 className="commentList-title">Comments</h3>
                <div className="comment-form-parent">
                    {userLoggedIn
                    ? (
                        <form className="submit-comment-form">
                            <input
                                type="text"
                                value={comment.CommentText}
                                onChange={handleComment}
                            >
                            </input>
                            <Button 
                                className="comment-submit-button"
                                style={{
                                    backgroundColor: "rgb(45, 133, 204)", 
                                    fontColor: "white",
                                    width: 50,
                                    float: 'right',
                                    marginLeft: 8,
                                }}
                                onClick={submitComment}
                            ><InsertCommentIcon style={{color: "white"}}/></Button>
                        </form>
                    )
                    : (
                        <div className="empty-div-comment"/>
                    )
                    }
                </div>
                    <div className="comments-container">
                        {fetchedComments.filter((comments) => comments.Book_Id === threadId).map((comment) => (
                            <Comment
                            key={comment.CommentId}
                            comment={comment}
                            //replies={fetchReplies(comments.filter(item => item.parentId !== null).CommentId)}
                            deleteComment={deleteComment}
                            editComment={editComment}
                            CommentId={comment.CommentId}
                            userId={userId}
                            />
                        ))
                    }
            </div>
        </div>
    );
};

export default CommentThread;