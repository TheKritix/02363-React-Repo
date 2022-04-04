import React from 'react';
import Topbar from '../components/Topbar/Topbar';
import Navbar from '../components/Navbar/Navbar';
import Profile from '../components/Profile/Profile';
import Menu from '../components/Profile/ProfilMenu/ProfileMenu';
import MyPost from '../components/MyPost/MyPost';

function MyPostPage () {
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

export default MyPostPage;