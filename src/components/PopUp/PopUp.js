import React from 'react';
import './PopUp.css';

const PopUp = props => {
    return (
        <div className="popupBox">
            <div className="popup">
                <span className="close" onClick={props.handleClose}>x</span>
                {props.content}
            </div>
        </div>
    )

}

export default PopUp;