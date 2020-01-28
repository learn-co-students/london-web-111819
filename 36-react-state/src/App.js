import React from 'react'

import './App.css'
import Paintings from './components/Paintings'

class App extends React.Component {
  state = {
    searchTerm: '',
    // Here's our selectedPainting, it should probably be
    // an id or a painting object, either way, it needs to be able to answer
    // these 2 questions:
    // - Is a painting selected?
    // - What painting is selected?
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
        {/*
          How do we make it so this painting list doesn't always show?
          When should it NOT show?
          What do we show when we don't show the list?
          Remember: We can use any valid JS expression within brackets in our JSX.
        */}
        <Paintings searchTerm={this.state.searchTerm} />
      </div>
    )
  }
}

export default App
