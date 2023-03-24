import logo from './logo.svg';
import './App.css';
import UserLapTimeCard from './components/UserLapTimeCard';
import StateExample from './components/StateExample';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import React from 'react';

function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/LapTime" element={<UserLapTimeCard/>}/>
          <Route path="/Contact" element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
      <StateExample/>
    </div>
  
  );
}


export default App;


// Axios App.js

// import './App.css';
// import CatList from './components/CatList';
// import axios from 'axios'
// import {useState} from 'react'
// function App() {
//   const[cats,setCats] = useState([]);
//   const loadData=()=>{
//       axios.get('https://api.thecatapi.com/v1/breeds').then(r=>{
//           setCats(r.data)
//       })
//   }
//   return (
//     <div className="App">
//       <CatList cats={cats} header={'Cat Catalog'}/>
//       <button onClick={loadData}>Load data</button>
//     </div>
//   );
// }
// export default App;