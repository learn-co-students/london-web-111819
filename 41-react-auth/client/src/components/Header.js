import React from 'react'

import logoSrc from '../logo.svg'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core'

const Header = ({ username, signOut }) => (
  <header className='App-header'>
    <Link to='/'>
      <img src={logoSrc} className='App-logo' alt='logo' />
    </Link>
    <h1 className='App-title'>
      {username ? `Welcome back, ${username}!` : 'Welcome to React.'}
      <br />
      {username && (
        <Button onClick={signOut} variant='contained' color='primary'>
          SIGN OUT
        </Button>
      )}
    </h1>
  </header>
)

export default Header
