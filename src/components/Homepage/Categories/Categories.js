import React, {Component } from 'react';
import {CategoryItems} from './CategoryItems';
import './Categories.css'

/*
Animation sources:  https://www.youtube.com/watch?v=gW0dwO2JNmE&t=237s
*/

class Categoies extends Component {
    render(){
        return(
            <>
            <div className='category-container'>
            <div>
                <h1 className='welcome-title'>Welcome to St<span className='oo'>oo</span>dle</h1>
            </div>
            <div className='div-category'>
                <ul className='category-list'>
                    {CategoryItems.map ((item,index) => {
                        return(
                            <li key = {index} >
                                <div className='imgContainer'>
                                    <h2 className='categeryTitle'> {item.title}</h2>
                                    <img className='categoryImg' src = {item.image} ></img>
                                </div>
                            </li>
                        )
                    } 
                    )}
                </ul>

            </div>
            </div>
            </>
        )
    }

}


export default Categoies;