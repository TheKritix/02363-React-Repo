import React from "react";
import Profile from "../components/Profile/Profile.js";
import Menu from '../components/Profile/ProfilMenu/ProfileMenu';
import MyPost from "../components/MyPost/MyPost";
import Login from "../components/Login/Login";
import useUserId from "../components/Login/useUserId";
import useToken from "../components/Login/useToken";

function ProfilePage(){
    const { token, setToken } = useToken();
    const { userId, setUserId } = useUserId();
  
    if (window.sessionStorage.getItem("token")) {
      return (
        <>
        <Profile></Profile>
        <Menu></Menu>
        <MyPost></MyPost>
        </>
      );
    } else {
      return (
        <>
          <Login setToken={setToken} setUserId={setUserId} />
        </>
      );
    }
}

export default ProfilePage;
