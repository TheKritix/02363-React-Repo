import React, { Component } from 'react';
import {MenuItems} from "./MenuItems";
import './Navbar.css'

// using class instead of function because we will  be using state. 
class Navbar extends Component {

    render(){
        return (
            <>
            <nav className="NavbarItems">
                    <ul className='nav-menu'>
                        {MenuItems.map((item, index) => {
                                   return (
                                    <li key={index}>
                                         <a className={item.cName} href={item.url}> 
                                            {item.title}
                                         </a> 
                                    </li>
                                )
                        })}
                    </ul>
                </nav>
                <div className='spacer'> </div>
                </>
        )
    }
}

export default Navbar;