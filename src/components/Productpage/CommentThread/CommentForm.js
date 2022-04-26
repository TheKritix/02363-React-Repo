import React from "react";
import { useState } from "react";
import { useParams } from 'react-router-dom';
import './Comment.css';

const CommentForm = ({
    submitLabel,
    handleSubmit,
}) => {

    const { Book_Id } = useParams();
    const [threadId, setThreadId] = useState(parseInt(Book_Id));

    const [text, setText] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();  
        handleSubmit(text, null, threadId);
        setText("");
        console.log(text)
    }

    return (
        <form onSubmit={onSubmit}>
            <textarea onChange={(e) => setText(e.target.value)}>
            </textarea>
            <button className="comment-submit-button">Comment!</button>
        </form>
    )
};

export default CommentForm;