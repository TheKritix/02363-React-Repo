import React, {Component} from "react";
import './Profile.css';
import profileImg from './profileIcon.png';
import CameraIcon from '@material-ui/icons/CameraAlt'
import StarIcon from '@material-ui/icons/StarOutline'
import PersonIcon from'@material-ui/icons/PersonOutline'

class Profile extends Component {
    render(){
        return(
            
            <div className="profileLayout">

            <div className="infoContainer">
                <div className="divIcon">
                <CameraIcon  className ="cameraIcon" style={{fontSize : 30, left:200}}/>
                <img src={profileImg} alt="profileImg" width={180} height={180}></img> 
                </div>
            
           <div className="profileInfo">
               <span>Name </span>
               <br/>
               <span>Email</span>
               <br/>
               <span>Phone number</span>
           </div>
           </div>
           

        <div className="container">
           <div className="buttons">
               <button className="postBtn">Add new post</button>
               <button className="editBtn">Edit profile</button>
           </div>

           <br/>

           <div className="raiting">
               <StarIcon></StarIcon>
               <StarIcon></StarIcon>
               <StarIcon></StarIcon>
               <StarIcon></StarIcon>
               <StarIcon></StarIcon>
               <PersonIcon></PersonIcon>
           </div>
           </div>
           
            </div>


        )
    }
}

export default Profile;