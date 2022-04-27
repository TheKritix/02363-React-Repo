import { TextField } from "@mui/material";
import React, { Component, useEffect, useState } from "react";
import "./Topbar.css";
import logo from "./logoStoodle.png";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { Favorite } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import PropTypes from "prop-types";


export const Topbar = () => {

    const [login, setLogin] = useState([
      {
       Type: "login",
       URL: "./loginpage",
     }]
    );

        const checkUser = () => {
      if (sessionStorage.getItem('token')) { 
      handleProfileName();
      }
     else {
     handleLogin();
     
        
      }
    }
    
    useEffect(() => {
      checkUser();
    }, []);


    const logout = (setToken) => {
      setToken(sessionStorage.clear());
      console.log("logged out");
    };

   const handleLogin = () => {
      setLogin({Type:'Login', URL: './'});
    }
 
    const handleProfileName = () => {
      console.log("horse shit")
      setLogin({Type:'Profile'})
    }

    

    return (
      <div className="Topbar">
        <div className="divLogo">
          <Link id="logoLink" to="/">
            {" "}
            <h1 className="logo">
              <img src={logo} alt="logoImage" id="logoImage" />
              <div id="stoodleText">
                St<span className="oo">oo</span>dle
              </div>
            </h1>
          </Link>
        </div>
        <div className="search-div">
          <TextField
            alignItems
            className="search"
            size="small"
            placeholder="Search..."
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon id="searchIcon" />
                </InputAdornment>
              ),
            }}
          ></TextField>
        </div>
        <div className="options">
          <div className="topbar-menu">
            <IconButton
              size="small"
              style={{ width: 140 }}
              className="topbar-links"
              onClick=""
            >
              {" "}
              <NotificationsNoneIcon className="icon"></NotificationsNoneIcon>
              <text>Notifications</text>
            </IconButton>
            <IconButton
              size="small"
              style={{ width: 80 }}
              className="topbar-links"
              component={Link}
              to="/favoritpage"
            >
              <Favorite id="favorit" className="icon"></Favorite> Favorites
            </IconButton>
            <IconButton
              size="small"
              style={{ width: 80 }}
              className="topbar-links"
              component={Link}
              to="/loginpage"
              onClick={() => checkUser()}
            >
              <AccountCircleIcon className="icon" ></AccountCircleIcon>
              {login.Type}
            </IconButton>
          </div>
        </div>
      </div>
    );
  }


export default Topbar;



/*return (
        <IconButton Size="small" style={{width: 40}}>
          {" "}
          <AccountCircleIcon
            className="icon"
            onclick={logout}
          ></AccountCircleIcon>
          Logout
        </IconButton>
    
      )*/