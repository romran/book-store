import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => (
  <header >
    <nav className="container">
      <ul>
        <li className="logo">Books</li>
        <li><NavLink exact to='/'>Store</NavLink></li>
        <li><NavLink to='/orders'  activeClassName="active">Orders</NavLink></li>
        </ul>
    </nav>
  </header>
)

export default Header
