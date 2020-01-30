import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  state = {
    pets: [],
    filters: {
      type: 'all'
    }
  }

  removePet = petId => {
    const pets = this.state.pets.filter(pet => pet.id !== petId)
    this.setState({ pets })
  }

  adoptPet = petId => {
    /*
    from: [m2, m3, m4, m5] << m1
    to: [m2, m7, m4, m5] << m6 
    */

    const pets = [...this.state.pets] // [m2, m3, m4, m5] << m6
    const petToChange = pets.find(pet => pet.id === petId) // m3
    const copyOfPetToChange = { ...petToChange } // m7
    copyOfPetToChange.isAdopted = true // m7
    const indexToSwap = pets.indexOf(petToChange)
    pets[indexToSwap] = copyOfPetToChange // [m2, m7, m4, m5] << m6

    this.setState({ pets: pets })
  }

  getPets = () => {
    const { type } = this.state.filters
    const url = type === 'all' ? '/api/pets' : `/api/pets?type=${type}`

    fetch(url)
      .then(resp => resp.json())
      .then(pets => this.setState({ pets: pets }))
  }

  updateFilter = e => {
    this.setState({
      filters: {
        ...this.state.filters,
        type: e.target.value
      }
    })
  }

  componentDidMount () {
    console.log('App finished rendering!')
    this.getPets()
  }

  render () {
    console.log('App started rendering!')
    const { updateFilter, getPets, adoptPet, removePet } = this
    const { pets } = this.state
    return (
      <div className='ui container'>
        <header>
          <h1 className='ui dividing header'>React Animal Shelter</h1>
        </header>
        <div className='ui container'>
          <div className='ui grid'>
            <div className='four wide column'>
              <Filters updateFilter={updateFilter} getPets={getPets} />
            </div>
            <div className='twelve wide column'>
              <PetBrowser
                pets={pets}
                adoptPet={adoptPet}
                removePet={removePet}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
