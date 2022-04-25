import React, { Component, useState, useEffect } from "react";
import "./Profile.css";
import profileImg from "./profileIcon.png";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";


export  const Profile = () => {

  const userId = window.sessionStorage.getItem('userId');
  console.log(userId);

  const [userInfo, setUserInfo] = useState([]);
  
  const retriveUserInfo = () => {
    fetch(`http://localhost:3001/api/userinfo/${userId}`, {
      headers: {
        'content-type': 'application/json',
        'Accept': 'application/json'
          }
    })
    .then ((response) => {
      console.log(response)
      return response.json();
    })
    .then((JSON) => {
      console.log(JSON);
      setUserInfo(JSON);
    });
  }

  useEffect(() => {
    retriveUserInfo()
  }, [])

    return (
      <div className="profileLayout">
          <div className="divIcon">
            <img
              src={profileImg}
              alt="profileImg"
              width={180}
              height={180}
            ></img>
          </div>
          <div className="profileInfo">
          {userInfo.map((item, index)=> { 
            return (
            <li key={index}>
                <h5>{item.Firstname}</h5>
                <h5>{item.Lastname}</h5>
                <h5>{item.EMAIL}</h5>
            </li>
            );
          })}
            <span>  </span>
            <br />
            <span></span>
            <br />
            <span></span>
          </div>

        <div className="container">
          <div className="buttons">
            <button className="postBtn">Add new post</button>
            <button className="editBtn">Edit profile</button>
          </div>

          <br />

          <div className="raiting">
            <StarOutlineIcon></StarOutlineIcon>
            <StarOutlineIcon></StarOutlineIcon>
            <StarOutlineIcon></StarOutlineIcon>
            <StarOutlineIcon></StarOutlineIcon>
            <StarOutlineIcon></StarOutlineIcon>
            <PersonOutlineIcon></PersonOutlineIcon>
          </div>
        </div>
      </div>
    );
  }

export default Profile;

/* <CameraAltIcon
              className="cameraIcon"
              style={{ fontSize: 30, left: 200 }}
            ></CameraAltIcon>*/