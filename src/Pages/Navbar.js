import React from 'react'
import { NavLink } from 'react-router-dom'
import '../assests/navbar.css'

const Navbar = () => {
  return (
    <>
      <header>
        <div className="container">
          <nav>
            <ul>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/signup">SignUp</NavLink></li>
              {/* <li><NavLink to="/login">Login</NavLink></li> */}
            </ul>
          </nav>
        </div>

      </header>
    </>
  )
}

export default Navbar
