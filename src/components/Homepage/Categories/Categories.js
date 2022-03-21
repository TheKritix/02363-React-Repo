import React, { Component } from 'react';
import {CategoryItems} from './CategoryItems';
import './Categories.css'
import math from './math.png'

class Categoies extends Component {
    render(){
        return(
            <>
            <div>
                <h1 className='welcome-title'>Welcome to St<span className='oo'>oo</span>dle</h1>
            </div>
            <div className='div-category'>
                <ul className='category-list'>
                    {CategoryItems.map ((item,index) => {
                        return(
                            <li key = {index} >
                                <div className='container'>
                                    <h2 className='categeryTitle'> {item.title}</h2>
                                    <img className='categoryImg' src = {item.image} ></img>
                                </div>
                            </li>
                        )
                    } 
                    )}
                </ul>

            </div>
            </>
        )
    }
}
export default Categoies;
