import React from 'react'
import { Link } from 'react-router-dom'

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header >
    <nav className="container">
      <ul>
        <li><Link to='/'>Stock</Link></li>
        <li><Link to='/orders'>Orders</Link></li>
       </ul>
    </nav>
  </header>
)

export default Header
