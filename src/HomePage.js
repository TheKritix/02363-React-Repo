import { render } from '@testing-library/react';
import React from 'react';
import './HomePage.css';
import Navbar from './components/Navbar/Navbar';
import Topbar from './components/Topbar/Topbar';
import ProfilMenu from './components/ProfilMenu/ProfileMenu';

function HomePage() {
    return (
        <>
        <div>
        <Topbar></Topbar>
        <Navbar></Navbar>
        </div>
        <ProfilMenu></ProfilMenu>
        </>
    )
  }
  export default HomePage;