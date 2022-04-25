import React from "react";
import { useState } from "react";
import './Comment.css';

const CommentForm = () => {

    const [text, setText] = useState("Write Comment Here")
    
    const onSubmit = (event) => {
        event.preventDefault();
        //handleSubmit(text);
        setText("");
        console.log(text)
    }

    return (
        <form>
            <textarea onChange={(e) => setText(e.target.value)}>
            </textarea>
            <button className="comment-submit-btn">
            </button>
        </form>
    )
};

export default CommentForm;