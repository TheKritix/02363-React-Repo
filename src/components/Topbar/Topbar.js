import { TextField } from "@mui/material";
import React, { Component, useEffect} from "react";
import "./Topbar.css";
import logo from "./logoStoodle.png";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { Favorite } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { IconButton } from '@mui/material';


class Topbar extends Component {

  render() {

    const [login, setLogin] = useState("test");



   



    function LogoutBtn(props) {
  return <div> <Link to ="/homepage"></Link><AccountCircleIcon/>Logout</div>
}

function LoginBtn (props) {
  return <div> <Link to="/profilepage"></Link>
   <AccountCircleIcon/>Login</div>
}

function AuthBtn(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <LogoutBtn/>
  }
  return  <LoginBtn/>
}

const logout = () => {
  sessionStorage.clear();
  console.log('logged out');
};

const iconButton = {
  width: '50%',
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
            <IconButton size = "small" style = {{width:140}} className="topbar-links" onClick="">
              {" "}
              <NotificationsNoneIcon className="icon"></NotificationsNoneIcon>
              <text>Notifications</text>
            </IconButton>
            <IconButton size = "small" style={{width:80}} className="topbar-links" component = {Link} to = '/favoritpage' >
              <Favorite id="favorit" className="icon" ></Favorite> Favorites
            </IconButton>
            <IconButton size = "small" style={{width:80}} className="topbar-links" component = {Link} to ='/loginpage' >
              <AccountCircleIcon className="icon"></AccountCircleIcon>{login}
            </IconButton>
            
          </div>
        </div>
      </div>
    );
  }
}

export default Topbar;

/*<IconButton Size="small" style={{width:40}}> <AccountCircleIcon className="icon" onclick={logout}>
              </AccountCircleIcon>logout</IconButton>*/ 