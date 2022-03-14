import React, { Component } from 'react';
import './Topbar.css'
import { TopbarItems } from './TopbarItems';


class Topbar extends Component {
    render() {

        return(
            <nav className='TopbarItems'>
                <h1 className='brand'> Stoodle</h1>
                <div className='logo'>
                    
                    </div>
                <ul className='topbar-menu'>
                    {TopbarItems.map((item,index)=> {

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
        )
    }
}

export default Topbar;