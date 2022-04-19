
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage.js';  
import ProductPage from './Pages/ProductPage.js'; 
import BookOverview from './components/BodyComponents/Book/BookOverview'; 
import ProfilePage from './Pages/ProfilePage.js'; 
import FavoritPage from './Pages/FavoritePage';
import MyPostPage from './Pages/MyPostPage';
import Topbar from "./components/Topbar/Topbar";
import Navbar from './components/Navbar/Navbar.js';
import Login from './Pages/LoginPage';

function App() {
  document.title = "Stoodle";
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
        <Route path="loginpage" element= {<Login></Login>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
