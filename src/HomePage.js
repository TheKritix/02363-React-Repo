import { render } from '@testing-library/react';
import React, { Component } from 'react';
import './HomePage.css';
import Navbar from './components/Navbar/Navbar';
import Topbar from './components/Topbar/Topbar';
import Categories from './components/Homepage/Categories/Categories'
import About from './components/Homepage/About';



function HomePage() {
    return (
        <>
        <div className='head' >
        <Topbar ></Topbar>
        <Navbar></Navbar>
        </div>
        <Categories></Categories>
        <div className='divider'>
        </div>
        <About></About>
     
        
        

        </>
    )
  }
  export default HomePage;