import React, { Component } from 'react';
import './ProfileMenu.css';
import {ProfileMenuList} from './ProfileMenuList';

export const profileMenu  = () => {

    /*function for logout. removes user ID and token, and send the user back to homepage */
  const logout = () => {
    if (sessionStorage.getItem("token")){
      sessionStorage.clear()
      window.location.href='/'
      
    }
    console.log("logged out");
  };

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
            <div className='logout'>
            <button className="logoutBtn" onClick={logout} href="/">
            Logout
          </button>
          </div>
        </div>
    )
}


export default profileMenu;