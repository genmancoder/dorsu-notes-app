import React from 'react';

import './App.css';

function App() {
  return (
    <>
      <header>
      <nav className="flex flex-col md:flex-row justify-between items-center bg-blue-400 text-white px-20 md:h-12">
          <h1>DORSU Notes - Dev Version.</h1>
          
          <ul id="mobile-menu" className="flex flex-col md:flex-row md:flex justify-between items-center w-56 sm:w-auto">
            <a href="#">
              <li>Link</li>
            </a>
            <a href="#" >
              <li>Link</li>
            </a>
            <a href="#" >
              <li>Link</li>
            </a>
          </ul>
      </nav>

      </header>
    </>
  );
}

export default App;
