import React from 'react';

import Login  from "../components/Login/Login";
import useToken from '../components/Login/useToken';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProfilePage from '../Pages/ProfilePage';
import useUserId from '../components/Login/useUserId';


function LoginPage() {

  const {token, setToken} = useToken();
  const {userId, setUserId} = useUserId();

  if(!token) {
    return <Login setToken={setToken} setUserId={setUserId}/> 
  } 

  return ( 
    <ProfilePage></ProfilePage>
  )
  }
  export default LoginPage;