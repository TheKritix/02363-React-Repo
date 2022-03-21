import { TextField } from '@mui/material';
import React, { Component } from 'react';
import './Topbar.css';
import { TopbarItems } from './TopbarItems';
import logo from './logoStoodle.png'
import MenuIcon from '@mui/icons-material/Menu';



class Topbar extends Component {
    render() {
        return(
            <nav className='Topbar'>
                <div className='divLogo'> 
                <h1 className='logo'> <img src={logo} height="40px"/>Stoodle</h1>
                </div>
                <container>
                <MenuIcon>
                    {MenuIcon}
                </MenuIcon>
                <TextField  className='search' size='small'></TextField>
                </container>
                <ul className='topbar-menu'>
                    {TopbarItems.map((item,index)=>{
                        return (
                            <li><a className={item.cName} href={item.url} >  {item.icon} {item.title}</a></li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default Topbar;