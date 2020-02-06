import React, { Component } from 'react'
import { Route, withRouter, Switch } from 'react-router-dom'

import Header from './components/Header'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import Inventory from './pages/Inventory'
import NotFound from './pages/NotFound'

import './App.css'
import API from './API'

class App extends Component {
  state = {
    username: null
  }

  signIn = data => {
    this.setState({ username: data.username })
    localStorage.token = data.token
  }

  signOut = () => {
    this.setState({ username: null })
    localStorage.removeItem('token')
  }

  componentDidMount () {
    if (localStorage.token) {
      API.validate()
        .then(data => {
          if (data.error) throw Error(data.error)
          this.signIn(data)
          this.props.history.push('/inventory')
        })
        .catch(error => alert(error))
    }
  }

  render () {
    return (
      <div className='App'>
        <Header username={this.state.username} signOut={this.signOut} />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route
            path='/signin'
            component={props => <SignIn {...props} signIn={this.signIn} />}
          />
          <Route
            path='/inventory'
            component={props => (
              <Inventory {...props} username={this.state.username} />
            )}
          />
          <Route component={NotFound} />
        </Switch>
      </div>
    )
  }
}

export default withRouter(App)
