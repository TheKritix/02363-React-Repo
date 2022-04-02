import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Topbar from "../components/Topbar/Topbar";
import Profile from "../components/Profile/Profile.js";
import Menu from '../components/Profile/ProfilMenu/ProfileMenu';

function ProfilePage(){
    return(
        <>
        <Topbar></Topbar>
        <Navbar></Navbar>
        <Profile></Profile>
        <Menu></Menu>
        </>
    )
}

export default ProfilePage;
