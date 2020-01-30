import React from 'react'

class Pet extends React.Component {
  // componentWillUnmount () {
  //   console.log(
  //     `WHYYYYYY!?!?! I WILL GET YOU! I'm ${this.props.pet.name} by the way...`
  //   )
  // }

  componentDidMount () {
    console.log('Pet finished rendering!')
  }

  render () {
    console.log('Pet started rendering!')
    const { gender, name, type, age, weight, isAdopted, id } = this.props.pet
    return (
      <div className='card'>
        <button onClick={() => this.props.removePet(id)}>X</button>
        <div className='content'>
          <a className='header'>
            {gender === 'female' ? '♀' : '♂'}
            {name}
          </a>
          <div className='meta'>
            <span className='date'>{type}</span>
          </div>
          <div className='description'>
            <p>Age: {age}</p>
            <p>Weight: {weight}</p>
          </div>
        </div>
        <div className='extra content'>
          {isAdopted ? (
            <button className='ui disabled button'>Already adopted</button>
          ) : (
            <button
              onClick={() => this.props.adoptPet(id)}
              className='ui primary button'
            >
              Adopt pet
            </button>
          )}
        </div>
      </div>
    )
  }
}

export default Pet
