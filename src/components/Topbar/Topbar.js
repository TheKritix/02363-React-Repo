import { TextField } from "@mui/material";
import React, { Component } from "react";
import "./Topbar.css";
import logo from "./logoStoodle.png";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { Favorite } from "@mui/icons-material";

class Topbar extends Component {
  render() {
    return (
      <div className="Topbar">
        <div className="divLogo">
          <a id="logoLink" href="/">
            {" "}
            <h1 className="logo">
              <img src={logo} alt="logoImage" id="logoImage" />
              <div id="stoodleText">
                St<span className="oo">oo</span>dle
              </div>
            </h1>
          </a>
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
          <ul className="topbar-menu">
            <a className="topbar-links" href="/mypostpage">
              {" "}
              <NotificationsNoneIcon className="icon"></NotificationsNoneIcon>
              <text>Notifications</text>
            </a>
            <a className="topbar-links" href="/favoritpage">
              {" "}
              <Favorite id="favorit" className="icon"></Favorite> Favorits
            </a>
            <a className="topbar-links" href="/profilepage">
              <AccountCircleIcon className="icon"></AccountCircleIcon>Profil
            </a>
          </ul>
        </div>
      </div>
    );
  }
}

export default Topbar;
