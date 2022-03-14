import { render } from '@testing-library/react';
import React from 'react';
import './HomePage.css';
import Navbar from './components/Navbar/Navbar';

function HomePage() {
    return (
        <>
        <Navbar></Navbar>
        </>
    )
  }
  export default HomePage;