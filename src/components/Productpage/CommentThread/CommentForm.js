import React from "react";
import { useState } from "react";
import './Comment.css';

const CommentForm = ({
    submitLabel,
    handleSubmit
}) => {

    const [text, setText] = useState("")
    
    const onSubmit = (event) => {
        event.preventDefault();
        handleSubmit(text);
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