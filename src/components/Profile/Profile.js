import React, { Component, useState, useEffect } from "react";
import "./Profile.css";
import profileImg from "./profileIcon.png";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
export const Profile = () => {
  const userId = window.sessionStorage.getItem("userId");
  console.log(userId);

  const [userInfo, setUserInfo] = useState([]);

  const retriveUserInfo = () => {
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
        setUserInfo(JSON);
      });
  };

  useEffect(() => {
    retriveUserInfo();
  }, []);

  return (
    <div className="profileLayout">
      <div className="divIcon">
        <img src={profileImg} alt="profileImg" width={180} height={180}></img>
      </div>
      <div className="profileInfo">
        {userInfo.map((item, index) => {
          return (
            <ul key={index} className="profilList">
              <h5>
                {item.Firstname} {item.Lastname}
              </h5>
              <h5>{item.EMAIL}</h5>
              <h5>phonenumber</h5>
              <h5>Adresse</h5>
              <h5>country</h5>
              <h5>University</h5>
            </ul>
          );
        })}
      </div>

      <div className="container">
        <div className="buttons">
          <Button
            className="profilBtn"
            variant="outlined"
            style={{ borderRadius: 40, height: 44 }}
            component = {Link} to ='/sell' 
          >
            Add new post
          </Button>
          <Button id="EditProfile"
            className="profilBtn"
            variant="outlined"
            style={{ borderRadius: 40, height: 44 }}
          >
            Edit profile
          </Button>
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
};

export default Profile;

/* <CameraAltIcon
              className="cameraIcon"
              style={{ fontSize: 30, left: 200 }}
            ></CameraAltIcon>*/
