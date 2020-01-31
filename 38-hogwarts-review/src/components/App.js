import React, { Component } from 'react'
import '../App.css'
import Nav from './Nav'
import hogs from '../porkers_data'
import HogList from './HogList'

const by = prop => {
  const sorter = (a, b) => {
    if (prop) {
      a = a[prop]
      b = b[prop]
    }

    if (a > b) return 1
    if (a < b) return -1
    return 0
  }

  sorter.descending = (a, b) => 0 - sorter(a, b)

  return sorter
}

class App extends Component {
  state = {
    showOnlyGreased: false,
    sortBy: 'weight'
  }

  toggleShowGreasedOnly = () => {
    this.setState({ showOnlyGreased: !this.state.showOnlyGreased })
  }

  // returns either all the hogs or just the greased ones

  // when do I return all?
  // when showOnlyGreased is false

  // when do I return just the greased one?
  // when showOnlyGreased is true
  filterHogs = hogs =>
    this.state.showOnlyGreased ? hogs.filter(hog => hog.greased) : hogs

  sortHogs = hogs =>
    this.state.sortBy === 'none'
      ? hogs
      : [...hogs].sort(by(this.state.sortBy).descending)

  render () {
    const filteredHogs = this.filterHogs(hogs)
    const filteredAndSortedHog = this.sortHogs(filteredHogs)
    return (
      <div className='App'>
        <Nav
          showOnlyGreased={this.state.showOnlyGreased}
          toggleShowGreasedOnly={this.toggleShowGreasedOnly}
        />
        <HogList hogs={filteredAndSortedHog} />
      </div>
    )
  }
}

export default App
