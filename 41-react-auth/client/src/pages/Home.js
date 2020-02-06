import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => (
  <div>
    <h1>Home page!</h1>
    We have 4 routes available:
    <p>
      <Link to='/'>Home</Link> (this page)
    </p>
    <p>
      <Link to='/signin'>Sign in</Link>
    </p>
    <p>
      <Link to='/inventory'>Inventory</Link>
    </p>
    <p>
      <Link to='/potato'>404</Link>
    </p>
  </div>
)

export default Home
