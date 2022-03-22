import React, {Component} from "react";
import './Profile.css';
import {FaUserCircle, FaCamera} from 'react-icons/fa';
import profileImg from './profileIcon.png';


class Profile extends Component {
    render(){
        return(
            
            <div className="inputProfile">
                <ul className="profileLayout">
                <li>
                <div className="divIcon">
                <FaCamera className="cameraIcon" size={30}/>
                <img src={profileImg} alt="profileImg" width={180} height={180}></img> 
                </div>
                </li>

              <li>  
           <div className="profileInfo">
               <span>Name </span>
               <br/>
               <span>Email</span>
               <br/>
               <span>Phone number</span>
           </div>
           </li>

           <li>
           <div className="buttons">
               <button className="postBtn">Add new post</button>
               <button className="editBtn">Edit profile</button>
           </div>
           </li>
           </ul>
            </div>


        )
    }
}

export default Profile;