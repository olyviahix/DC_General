import logo from './logo.svg';
import './App.css';
// import UserLapTimeCard from './components/UserLapTimeCard';
// import StateExample from './components/StateExample';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
// import Contact from './components/Contact';
import React from 'react';

function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/navbar" element={<navbar/>}/>
          <Route path="/grid" element={<grid/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  
  );
}


export default App;
