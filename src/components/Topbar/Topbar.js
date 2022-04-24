import { TextField } from "@mui/material";
import React, { Component } from "react";
import "./Topbar.css";
import logo from "./logoStoodle.png";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { Favorite } from "@mui/icons-material";
import { Link } from "react-router-dom";

class Topbar extends Component {


  render() {
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
            <Link className="topbar-links" to="/mypostpage">
              {" "}
              <NotificationsNoneIcon className="icon"></NotificationsNoneIcon>
              <text>Notifications</text>
            </Link>
            <Link className="topbar-links" to="/favoritpage">
              {" "}
              <Favorite id="favorit" className="icon"></Favorite> Favorites
            </Link>
            <Link className="topbar-links" to="/loginpage">
              <AccountCircleIcon className="icon"></AccountCircleIcon>Login
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Topbar;
