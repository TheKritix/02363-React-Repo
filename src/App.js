import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage.js';
import LoginPage from './LoginPage.js';


function App() {
  return (
  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="loginpage" element={<LoginPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}


    /*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello 02363 class
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Counter />
      </header>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="Counter">
      <p>
        Count: {count}
      </p>
      <button onClick={() => setCount(count + 1)}>
        Click me, bitch!
      </button>
      <Book />
    </div>*/
 


export default App;
