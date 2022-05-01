import React, { useEffect } from "react";
import { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';
import profileImg from "../../Profile/profileIcon.png";
import './Comment.css';
import { Check } from "@mui/icons-material";



const Comment = ({
    comment,
    deleteComment,
    editComment,
    userId,
}) => {

    const [isEditingComment, setIsEditingComment] = useState(false);
    const canEdit = userId === comment.userId;
    const [editedComment, setEditedComment] = useState(
        {
            CommentId: 0,
            CommentText: "",
            Book_Id: 0,
            userId: 0,
            username: "",
            createdAt: "",
        }
    )

    const handleEditComment = (e) => {
        setEditedComment({
            CommentId: comment.CommentId,
            CommentText: e.target.value,
            Book_Id: comment.Book_Id,
            parentId: comment.parentId,
            userId: comment.userId,
            username: comment.username,
            createdAt: comment.createdAt,
        });
    };

    const handleEditClick = () => {
        if (isEditingComment === false) {
            setIsEditingComment((isEditingComment) => {
                return !isEditingComment;
            });
        } else {
            editComment(editedComment);
            setIsEditingComment((isEditingComment) => {
                return !isEditingComment;
            });
        }
        console.log(editedComment);
    }

    

    return (
        <div className="comment" key={comment.CommentId}>
            <div className="comment-image-container">
                <img src={profileImg}/>
            </div>
            <div className="comment-box">
                <div className="comment-userinfo">
                    <div className="comment-author">{comment.username}</div>
                    <div className="comment-date">{comment.createdAt}</div>
                </div>
                <div className="comment-content">
                    <div className="comment-text">{comment.CommentText}</div>
                    {canEdit
                    ? (
                        <div className="comment-actions">
                        {isEditingComment
                        ? (
                            <form>
                                <input
                                    name="editingInput"
                                    type="text"
                                    defaultValue={comment.CommentText}
                                    onChange={handleEditComment}
                                >
                                </input>
                            <IconButton name="confirm" style={{width: 50}} onClick={() => handleEditClick()}><Check/></IconButton>
                            <IconButton style={{width: 50}} onClick={() => setIsEditingComment(false)}><CloseIcon/></IconButton>
                            </form>
                        ) : (
                            <IconButton 
                                style={{float: 'right'}} 
                                className="edit-button" 
                                onClick={() => handleEditClick()}>
                                    <EditIcon/>
                            </IconButton>
                        ) }
                        <IconButton 
                            style={{float: 'right'}} 
                            className="delete-button" 
                            onClick={() => deleteComment(comment)}>
                                <DeleteIcon/>
                        </IconButton>
                        </div>
                    ) 
                    : (
                        <div className="empty-div-comment"/>
                    )
                    }
                </div>
            </div>
        </div>
    )
};

export default Comment;