import React from 'react'

import './App.css'
import Paintings from './components/Paintings'
import PaintingDetails from './components/PaintingDetails'

class App extends React.Component {
  state = {
    searchTerm: '',
    // Here's our selectedPainting, it should probably be
    // an id or a painting object, either way, it needs to be able to answer
    // these 2 questions:
    // - Is a painting selected?
    // - What painting is selected?
    selectedPainting: null,
    formData: {
      title: '',
      artist: {
        name: '',
        birthday: '',
        deathday: ''
      },
      image: ''
    }
  }

  selectPainting = painting => {
    this.setState({ selectedPainting: painting })
  }

  deselectPainting = () => {
    this.setState({ selectedPainting: null })
  }

  updateSearchTerm = event => {
    this.setState({ searchTerm: event.target.value })
  }

  renderPaintingOrList = () => {
    if (this.state.selectedPainting !== null) {
      return (
        <PaintingDetails
          painting={this.state.selectedPainting}
          deselectPainting={this.deselectPainting}
        />
      )
    } else {
      return (
        <Paintings
          selectPainting={this.selectPainting}
          searchTerm={this.state.searchTerm}
        />
      )
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    console.log(this.state.formData)
  }

  render () {
    const name = 'Nicolas'
    return (
      <div className='App'>
        <h1>Welcome to React, {name}!</h1>
        <form onSubmit={this.handleSubmit}>
          <input name='title' />
          <input name='image' />
          <input name='artist-name' />
          <input name='artist-bday' />
          <input name='artist-dday' />
          <button>ADD IMAGE!</button>
        </form>
        <div>
          Search for a painting by title:
          <input
            onChange={this.updateSearchTerm}
            placeholder='enter painting title'
          />
        </div>
        {/*
          How do we make it so this painting list doesn't always show?
          When should it NOT show?
          What do we show when we don't show the list?
          Remember: We can use any valid JS expression within brackets in our JSX.
        */}
        {this.renderPaintingOrList()}
      </div>
    )
  }
}

export default App
