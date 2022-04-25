import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage.js';  
import ProductPage from './Pages/ProductPage.js'; 
import BookOverview from './components/BodyComponents/Book/BookOverview'; 
import CreateProductPage from './Pages/CreateProductPage.js'; 
import ProfilePage from './Pages/ProfilePage.js'; 
import FavoritPage from './Pages/FavoritePage';
import MyPostPage from './Pages/MyPostPage';
import Topbar from "./components/Topbar/Topbar";
import Navbar from './components/Navbar/Navbar.js';
import LoginPage from './Pages/LoginPage';
import useToken from './components/Login/useToken';
import useUserId from './components/Login/useUserId';
import Login from './components/Login/Login';
import RegisterPage from './components/Login/Login';
import Footer from './components/Footer/Footer';
import About from './components/About-us/About-us';

function App() {
  document.title = "Stoodle";
  
  return (
    <BrowserRouter>
      <Topbar/>
      <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="sell" element={<CreateProductPage/>}/>
          <Route path="/productpage/:Book_Id" element={<ProductPage/>}/>
          <Route path="buy" element={<BookOverview/>}/>
          <Route path="profilepage" element={<ProfilePage/>}/>
          <Route path="favoritpage" element={<FavoritPage/>}/>
          <Route path="mypostpage" element={<MyPostPage/>}/>
          <Route path="loginpage" element={<LoginPage/>}/>
          <Route path="registerpage" element={<RegisterPage/>}/>
          <Route path="about-us" element={<About/>}/>
        </Routes>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;