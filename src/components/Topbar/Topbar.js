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
            <div className='Topbar' >
                <div className='divLogo'>
                <a id='logoLink' href='/'> <h1 className='logo'><img src={logo} height="40px"/>Stoodle</h1></a>
                </div>
                <div className='search-div'>
                <MenuIcon> </MenuIcon>
                <TextField  className='search' size='small'></TextField>
                </div>
                <div className='options'>
                <ul className='topbar-menu'>
                    <a className='topbar-links' href='#'> <NotificationsNoneIcon className='icon'></NotificationsNoneIcon><text>Notifications</text></a>
                    <a className='topbar-links' href='#'> <Favorite id="favorit"className='icon'></Favorite> Favorits</a>
                    <a className='topbar-links'  href='/profilepage'><AccountCircleIcon className='icon'></AccountCircleIcon>Profil</a>
                </ul>
                </div>
            </div>
        )
    }
}

export default Topbar;