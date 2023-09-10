// src\App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './screens/Home/Home';
// import About from './screens/About/About';
import Collection from './screens/Collection/Collection';
import Calculate from './screens/Calculate/Calculate';
import Suggestions from './screens/Suggestions/Suggestions';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/About"  element={<Home/>} />
          <Route path="/Calculate" element={<Calculate/>} />
          <Route path="/Collection" element={<Collection/>} />
          <Route path="/Suggestions" element={<Suggestions/>} />
          <Route path="/" element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;