import React from 'react';

import Login  from "../components/Login/Login";
import useToken from '../components/Login/useToken';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProfilePage from '../Pages/ProfilePage';

function LoginPage() {

    const {token, setToken} = useToken();
    if(!token) {
        return <Login setToken={setToken}/> 
      } 
    return 
  }
  export default LoginPage;