import { render } from '@testing-library/react';
import React from 'react';
import './HomePage.css';
import Navbar from '../components/Navbar/Navbar';
import Topbar from '../components/Topbar/Topbar';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <>
        <Topbar></Topbar>
        <Navbar></Navbar>
        <div>
            <span style={{margin: '0 10px'}}>
                <Link to="/productpage">Product Page</Link>
            </span>
        </div>
        </>
    )
  }
  export default HomePage;