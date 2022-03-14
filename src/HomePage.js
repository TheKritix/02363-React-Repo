import { render } from '@testing-library/react';
import React from 'react';
import './HomePage.css';
import Navbar from './components/Navbar/Navbar';
import Topbar from './components/Topbar/Topbar';

function HomePage() {
    return (
        <>
        <Topbar></Topbar>
        <Navbar></Navbar>
        </>
    )
  }
  export default HomePage;