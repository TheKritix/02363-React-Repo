import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Topbar from "../components/Topbar/Topbar";
import Profile from "../components/Profile/Profile.js";

function ProfilePage(){
    return(
        <>
        <Topbar></Topbar>
        <Navbar></Navbar>
        <Profile></Profile>
        </>
    )
}

export default ProfilePage;
