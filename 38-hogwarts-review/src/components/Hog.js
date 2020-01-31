import React from 'react'
import MoreHogDetails from './MoreHogDetails'

class Hog extends React.Component {
  state = {
    showDetails: false
  }

  toggleDetails = () => {
    this.setState({ showDetails: !this.state.showDetails })
  }

  render () {
    const { hog } = this.props
    const { showDetails } = this.state
    const { toggleDetails } = this

    const filePath = hog.name.toLowerCase().replace(/ /g, '_')
    const imageSrc = require(`../hog-imgs/${filePath}.jpg`)
    return (
      <li style={{ border: 'solid 1px black', margin: 10, padding: 10 }}>
        <h3>
          {hog.name} {hog.greased && '💧'}
        </h3>
        <img src={imageSrc} />
        <br />
        {showDetails && <MoreHogDetails hog={hog} />}
        <button onClick={toggleDetails}>
          {showDetails ? 'HIDE' : 'SHOW'} DETAILS
        </button>
      </li>
    )
  }
}

// {
//   name: 'Mudblood',
//   specialty: 'Mediocre magic',
//   greased: false,
//   weight: 2.0,
//   'highest medal achieved': 'bronze'
// }

export default Hog
