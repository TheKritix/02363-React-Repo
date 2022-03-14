import { render } from '@testing-library/react';
import React from 'react';
import './HomePage.css';
import Navbar from './components/Navbar/Navbar';
import Topbar from './components/Topbar/Topbar';
import Book from './components/BodyComponents/Book/Book';

function HomePage() {
    document.title = "Stoodle"
    return (
        <>
        
        <Topbar/>
        <Navbar/>
        <Book/>
        </>
    )
  }
  export default HomePage;