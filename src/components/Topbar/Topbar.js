import { TextField } from '@mui/material';
import React, { Component } from 'react';
import './Topbar.css';
import logo from './logoStoodle.png'
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { Favorite } from '@mui/icons-material';

class Topbar extends Component {
    render() {
        return(
            <nav className='Topbar'>
                <div className='divLogo'>
                <h1 className='logo'> <img src={logo} height="40px"/>Stoodle</h1>
                </div>
                <container>
                <MenuIcon>
                </MenuIcon>
                <TextField  className='search' size='small'></TextField>
                </container>
                <ul className='topbar-menu'>
                    <a className='topbar-links' href='#'> <NotificationsNoneIcon className='icon'></NotificationsNoneIcon>Notifications</a>
                    <a className='topbar-links' href='#'> <Favorite id="favorit"className='icon'></Favorite> Favorits</a>
                    <a className='topbar-links'  href='#'><AccountCircleIcon className='icon'></AccountCircleIcon>Profil</a>
                </ul>
            </nav>
        )
    }
}

export default Topbar;