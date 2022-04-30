import React, { Component, useState, useEffect } from "react";
import "./Profile.css";
import profileImg from "./profileIcon.png";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import PopUp from "../PopUp/PopUp";
import { color, fontFamily } from "@mui/system";
import { IconButton } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

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


  /*function for logout. removes user ID and token, and send the user back to homepage */
  const logout = () => {
    if (sessionStorage.getItem("token")){
      sessionStorage.clear()
      window.location.href='/'
      
    }
    console.log("logged out");
  };


  // function for opnening and closing popup window for editing userinformation
  const [isOpen, setisOpen] = useState(false);
  const togglePopup = () => {
    setisOpen(!isOpen);
  };

  const [updatedInfo, setUpdatedInfo] = useState([
    {
      Firstname: "",
      Lastname: "",
      Phonenumber: "",
      Address: "",
      City: "",
      Postalcode: "",
      Country: "",
    },
  ]);

  const sumbitUpdatedUserInfo = (e) => {
    e.preventDefault();
    const userObject = {
      Firstname: updatedInfo.Firstname,
      Lastname: updatedInfo.Lastname,
      Phonenumber: updatedInfo.Phonenumber,
      Address: updatedInfo.Address,
      City: updatedInfo.City,
      Postalcode: updatedInfo.Postalcode,
      Country: updatedInfo.Country,
      User_Id: userId,
    };
    fetch(`http://localhost:3001/api/updateuser`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userObject),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
    console.log("User information updated");
  };

  const handleChangeUserInfo = (e) => {
    setUpdatedInfo({
      ...updatedInfo,
      [e.target.name]: e.target.value,
    });
    console.log(updatedInfo);
  };

  return (
    <div className="profileLayout">
      <div className="divIcon">
        <img src={profileImg} className="profileImg" width={180} height={180}></img>
      </div>
      <div className="profileInfo">
        {userInfo.map((item, index) => {
          return (
            <ul key={index} className="profilList">
              <h5>{item.Firstname}</h5>
              <h5>{item.Lastname}</h5>
              <h5>{item.EMAIL}</h5>
              <h5>{item.Phonenumber}</h5>
              <h5 id="breakitem">{item.Address}</h5>
              <h5>{item.City},</h5>
              <h5>{item.Postalcode}</h5>
              <h5>{item.Country}</h5>
              <h5>{item.University}</h5>
            </ul>
          );
        })}
      </div>

      <div className="container">
        <div className="buttons">
          <Button
            className="profilBtn"
            variant="outlined"
            style={{ borderRadius: 40, height: 44, color: "#2d85cc", textTransform: 'none'}}
            sx={{ fontFamily: "Inter", fontSize: 17 }}
            component={Link}
            to="/sell"
          >
            Add new post
          </Button>

          <Button
            id="EditProfile"
            className="profilBtn"
            variant="outlined"
            style={{ borderRadius: 40, height: 44, color: "#2d85cc" , textTransform:'none'}}
            sx={{ fontFamily: "Inter", fontSize: 17 }}
            onClick={togglePopup}
          >
            Edit profile
          </Button>
          {isOpen && (
            <PopUp
              content={
                <form className="formdiv" onSubmit={sumbitUpdatedUserInfo}>
                  <h2 id="editHeader">Edit your profil information</h2>
                  <div className="group">
                    <input
                      type="firstname"
                      name="Firstname"
                      value={updatedInfo.Firstname}
                      placeholder="First name"
                      onChange={handleChangeUserInfo}
                    ></input>
                    <input
                      type="lastname"
                      name="Lastname"
                      value={updatedInfo.Lastname}
                      placeholder="Last name"
                      onChange={handleChangeUserInfo}
                    />
                  </div>
                  <input
                    type="phonenumber"
                    name="Phonenumber"
                    value={updatedInfo.Phonenumber}
                    placeholder="Phonenumber"
                    onChange={handleChangeUserInfo}
                  />
                  <br />
                  <input
                    type="address"
                    name="Address"
                    value={updatedInfo.Address}
                    onChange={handleChangeUserInfo}
                    placeholder="Address"
                  />
                  <div className="group">
                    <input
                      type="city"
                      name="City"
                      onChange={handleChangeUserInfo}
                      value={updatedInfo.City}
                      placeholder="City"
                    />
                    <input
                      type="postcode"
                      name="Postalcode"
                      onChange={handleChangeUserInfo}
                      value={updatedInfo.Postalcode}
                      placeholder="Postal code"
                    />
                  </div>
                  <input
                    type="country"
                    name="Country"
                    onChange={handleChangeUserInfo}
                    value={updatedInfo.Country}
                    placeholder="Country"
                  />
                  <br />
                  <input
                    type="university"
                    name="University"
                    onChange={handleChangeUserInfo}
                    value={updatedInfo.University}
                    placeholder="University"
                  />
                  <br />
                  <button>Confirm changes</button>
                </form>
              }
              handleClose={togglePopup}
            ></PopUp>
          )}
        </div>
        <br />

        <div className="logout">
          <button className="logoutBtn" onClick={logout} href="/">
            Logout
          </button>
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
