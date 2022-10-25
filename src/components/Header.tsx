import React from 'react'
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
        <nav className="flex flex-col md:flex-row justify-between items-center bg-blue-400 text-white px-20 md:h-12">
            <h1>DORSU Notes - Dev Version.</h1>
            
            <ul id="mobile-menu" className="flex flex-col md:flex-row md:flex justify-between items-center w-56 sm:w-auto">
              <li className='mr-4'>
                <Link to="/">Home</Link>
              </li>
              <li className='mr-4'>
                <Link to="/developers">Developers</Link>
              </li>
              <li className='mr-4'>
                <Link to="/about">About</Link>
              </li>
            </ul>
        </nav>

    </header>
  )
}

export default Header