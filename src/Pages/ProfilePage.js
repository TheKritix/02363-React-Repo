import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Topbar from "../components/Topbar/Topbar";
import Profile from "../components/Profile/Profile.js";
import Menu from '../components/Profile/ProfilMenu/ProfileMenu';
import MyPost from "../components/MyPost/MyPost";

function ProfilePage(){
    return(
        <>
        <Topbar></Topbar>
        <Navbar></Navbar>
        <Profile></Profile>
        <Menu></Menu>
        <MyPost></MyPost>
        </>
    )
}

export default ProfilePage;
