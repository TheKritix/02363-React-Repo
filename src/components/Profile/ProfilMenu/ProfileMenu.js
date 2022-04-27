import React, { Component } from 'react';
import './ProfileMenu.css';
import {ProfileMenuList} from './ProfileMenuList';

class profileMenu extends Component {
render() {
    return(
        <div className='profileMenuDiv'>
            <ul className='profil-menu'>
            {ProfileMenuList.map((item,index)=>{
                return(
                    <li > 
                        <a className={item.cname} href={item.url}> {item.name} </a>
                    </li>
                )
            })}

            </ul>
        </div>
    )
}

} 

export default profileMenu;