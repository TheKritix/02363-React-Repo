import { render } from '@testing-library/react';
import React from 'react';
import './HomePage.css';
import Navbar from './components/Navbar/Navbar';
import Topbar from './components/Topbar/Topbar';
import AddBook from './AddBook.js'

function HomePage() {
    return (
        <>
        <Topbar></Topbar>
        <Navbar></Navbar>
        <AddBook></AddBook>
        </>
    )
  }
  export default HomePage;