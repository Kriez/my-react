import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css';
import Home from './pages/home/Home';
import Add from './pages/add/Add';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
      </Routes>
      </BrowserRouter>
    )      
}

export default App;
