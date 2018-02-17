import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => (
  <header >
    <nav className="container">
      <ul>
        <li><NavLink exact to='/'>Stock</NavLink></li>
        <li><NavLink to='/orders'  activeClassName="active">Orders</NavLink></li>
       </ul>
    </nav>
  </header>
)

export default Header
