import { render } from '@testing-library/react';
import React from 'react';
import './HomePage.css';
import Navbar from './components/Navbar/Navbar';
import Topbar from './components/Topbar/Topbar';
import BookOverview from './components/BodyComponents/Book/BookOverview';

function HomePage() {
    document.title = "Stoodle"
    return (
        <>
        <Topbar/>
        <Navbar/>
        <BookOverview/>
        </>
    )
  }
  export default HomePage;