import React from 'react';

import {BrowserRouter, Routes, Route} from 'react-router-dom'

import './App.css';
import Header from './components/Header';
import About from './pages/About';
import Developers from './pages/Developers';
import Home from './pages/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}>
          </Route>
          <Route path='/developers' element={<Developers/>}>
          </Route>
          <Route path='/about' element={<About/>}>
          </Route>
        </Routes>
          
          
      </BrowserRouter>
    </>
  );
}

export default App;
