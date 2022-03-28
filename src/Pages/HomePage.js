import { render } from '@testing-library/react';
import React from 'react';
import './HomePage.css';
import Navbar from '../components/Navbar/Navbar';
import Topbar from '../components/Topbar/Topbar';
import { Link } from 'react-router-dom';
import Categories from '../components/Homepage/Categories/Categories';
import About from '../components/Homepage/About';

function HomePage() {
    return (
        <>
        <div>
            <Topbar></Topbar>
            <Navbar></Navbar>
        </div>
        <Categories></Categories>
        <div>
        <div className='homePageDivider'></div>
        <About></About>
        </div>
        </>
    )
  }
  export default HomePage;