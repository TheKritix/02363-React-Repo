import React from 'react';
import Profile from '../components/Profile/Profile';
import Menu from '../components/Profile/ProfilMenu/ProfileMenu';
import MyPost from '../components/MyPost/MyPost';

function MyPostPage () {
    return(
        <>
        <Profile></Profile>
        <Menu></Menu>
        <MyPost></MyPost>
        </>

    )
}

export default MyPostPage;