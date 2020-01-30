import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  componentDidMount () {
    console.log('PetBrowser finished rendering!')
  }

  render () {
    console.log('PetBrowser started rendering!')
    return (
      <div className='ui cards'>
        {this.props.pets.map(pet => (
          <Pet
            key={pet.id}
            adoptPet={this.props.adoptPet}
            pet={pet}
            removePet={this.props.removePet}
          />
        ))}
      </div>
    )
  }
}

export default PetBrowser
