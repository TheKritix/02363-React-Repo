import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Topbar from '../components/Topbar/Topbar';
import Login  from '../components/Login/Login';

function LoginPage() {
    return (
        <>
        <Topbar></Topbar>
        <Navbar></Navbar>
        <Login></Login>  
        </>
    )
  }
  export default LoginPage;