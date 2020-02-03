import React from 'react'
import { Route, Switch } from 'react-router-dom'

import './App.css'
import NavBar from './components/NavBar'
import Paintings from './components/Paintings'
import PaintingDetails from './components/PaintingDetails'

const HomePage = props => <h1>Welcome to my Paintings App!</h1>

class App extends React.Component {
  state = {
    searchTerm: ''
  }

  updateSearchTerm = event => {
    this.setState({ searchTerm: event.target.value })
  }

  renderPaintingOrList = () => {
    if (this.state.selectedPainting !== null) {
      return <PaintingDetails painting={this.state.selectedPainting} />
    } else {
      return <Paintings searchTerm={this.state.searchTerm} />
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    console.log(this.state.formData)
  }

  render () {
    return (
      <div className='App'>
        <NavBar />
        <div>
          Search for a painting by title:
          <input
            onChange={this.updateSearchTerm}
            placeholder='enter painting title'
          />
        </div>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/paintings/:id' component={PaintingDetails} />
          <Route
            path='/paintings'
            component={props => (
              <Paintings {...props} searchTerm={this.state.searchTerm} />
            )}
          />
          <Route component={props => <h1>404 - Page not found</h1>} />
        </Switch>
      </div>
    )
  }
}

export default App
