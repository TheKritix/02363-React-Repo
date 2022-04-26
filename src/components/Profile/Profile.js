import React, { Component } from "react";
import "./Profile.css";
import profileImg from "./profileIcon.png";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { Link } from "react-router-dom";

class Profile extends Component {
  render() {
    return (
      <div className="profileLayout">
        <div className="infoContainer">
          <div className="divIcon">
            <CameraAltIcon
              className="cameraIcon"
              style={{ fontSize: 30, left: 200 }}
            ></CameraAltIcon>
            <img
              src={profileImg}
              alt="profileImg"
              width={180}
              height={180}
            ></img>
          </div>

          <div className="profileInfo">
            <span>Name </span>
            <br />
            <span>Email</span>
            <br />
            <span>Phone number</span>
          </div>
        </div>

        <div className="container">
          <div className="buttons">
            <Link className="postBtn" to="/sell">
              <text>Add new post</text>
            </Link>
            <button className="editBtn">
              <text>Edit profile</text>
            </button>
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
}

export default Profile;
