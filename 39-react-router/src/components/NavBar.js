import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = props => (
  <nav>
    <Link to='/'>Home</Link> - <Link to='/paintings'>Paintings</Link>
  </nav>
)

export default NavBar
