import React, { useState, useRef, useEffect, Component } from 'react';
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
    const useAnimationFrame = callback => {
        const requestRef = useRef();
      
        const animate = () => {
          callback();
          requestRef.current = requestAnimationFrame(animate);
        };
      
        useEffect(() => {
          requestRef.current = requestAnimationFrame(animate);
          return () => cancelAnimationFrame(requestRef.current);
         
        }, []);
      };



      const CANVAS_WIDTH = window.innerWidth;
      const SCROLL_SPEED = 0.3;
      
      function Bubble({ content, color, x, y }) {
        const [position, setPosition] = useState(x);
      
        useAnimationFrame(() =>
          setPosition(prevPosition => {
            const newPosition = prevPosition - SCROLL_SPEED;
      
            return newPosition < -200 ? CANVAS_WIDTH : newPosition;
          })
        );
      
        return (
          <div
            style={{
              transform: `translate(${position}px, ${y}px)`
            }}
            className={`hurdles-node hurdles-node5 hurdles-node hurdles-node--${color}`}
          >
            {content}
          </div>
        );
        }

export default Categoies;