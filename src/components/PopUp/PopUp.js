import React from 'react';
import './PopUp.css';

// Pop up componenets that is used  in profilpage and ind Mypost componenet. 
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