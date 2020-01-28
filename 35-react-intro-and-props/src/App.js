import React from 'react'

import './App.css'
import Paintings from './components/Paintings'
import paintings from './data/paintings'

function App () {
  const name = 'Nicolas'
  return (
    <div className='App'>
      <h1>Welcome to React, {name}!</h1>
      <Paintings paintings={paintings} />
    </div>
  )
}

export default App
