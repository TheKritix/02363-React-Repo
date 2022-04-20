import React from "react";
import Profile from "../components/Profile/Profile.js";
import Menu from '../components/Profile/ProfilMenu/ProfileMenu';
import MyPost from "../components/MyPost/MyPost";

function ProfilePage(){
    return(
        <>
        <Profile></Profile>
        <Menu></Menu>
        <MyPost></MyPost>
        </>
    )
}

export default ProfilePage;
