import React from 'react'
import { NavLink } from 'react-router-dom'
import '../assests/navbar.css'

const Navbar = () => {
  return (
    <>
        <header>
      <div className="container ">
        <nav>
        <div>
            <h1>Logo</h1>
        </div>

        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
        </nav>
    </div>
    
    </header>
    </>
  )
}

export default Navbar
