import React from 'react';
import Navbar from '../components/Navbar/Navbar.js';
import Topbar from '../components/Topbar/Topbar.js';
import Book from '../components/Book.js';

function ProductPage() {
    return (
        <>
        <Topbar></Topbar>
        <Navbar></Navbar>
        <div>
            <Book/>
        </div>
        </>
    )
  }
  export default ProductPage;