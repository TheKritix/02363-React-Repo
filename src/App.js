import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage.js';  
import ProductPage from './Pages/ProductPage.js'; 
import BookOverview from './components/BodyComponents/Book/BookOverview'; 
import ProfilePage from './Pages/ProfilePage.js'; 
import FavoritPage from './Pages/FavoritePage';
import MyPostPage from './Pages/MyPostPage';
import Login from './components/Login/Login';
import RegisterPage from './Pages/RegisterPage.js';  
import Topbar from "./components/Topbar/Topbar";
import Navbar from './components/Navbar/Navbar.js';
import { useState } from 'react';
import LoginPage from './Pages/LoginPage';
import useToken from './components/Login/useToken';
import useUserId from './components/Login/useUserId';

function App() {
  document.title = "Stoodle";
  const {token, setToken} = useToken();
  const {userId, setUserId} = useUserId();

if(!token) {
    return <Login setToken={setToken} setUserId={setUserId}/> 
  } 

  return (  
    <BrowserRouter>
    <Topbar/>
    <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/productpage/:bookId" element={<ProductPage/>}/>
        <Route path="buy" element={<BookOverview/>}/>
        <Route path="profilepage" element={<ProfilePage/>}/>
        <Route path="favoritpage" element={<FavoritPage/>}/>
        <Route path="mypostpage" element={<MyPostPage/>}/>
        <Route path="loginpage" element={<LoginPage/>}/>
        <Route path="registerpage" element={<RegisterPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
