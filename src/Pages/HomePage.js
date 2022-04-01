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
            <button>
                <Link to="/productpage">Product Page</Link>
            </button>
        </div>

        <div>
            <button>
                <Link to="/buy">BookOverview</Link>
            </button>
        </div>
        </>
    )
  }
  export default HomePage;