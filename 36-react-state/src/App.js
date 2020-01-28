import React from 'react'

import './App.css'
import Paintings from './components/Paintings'

class App extends React.Component {
  state = {
    searchTerm: '',
    selectedPainting: null
  }

  selectPainting = painting => {
    this.setState({ selectedPainting: painting })
  }

  updateSearchTerm = event => {
    this.setState({ searchTerm: event.target.value })
  }

  render () {
    const name = 'Nicolas'
    return (
      <div className='App'>
        <h1>Welcome to React, {name}!</h1>
        <input
          onChange={this.updateSearchTerm}
          placeholder='enter painting title'
        />
        <Paintings searchTerm={this.state.searchTerm} />
      </div>
    )
  }
}

export default App
