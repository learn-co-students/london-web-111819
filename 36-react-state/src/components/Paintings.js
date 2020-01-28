import React from 'react'
import Painting from './Painting'

import paintings from '../data/paintings'

class Paintings extends React.Component {
  // constructor (props) {
  //   super(props)
  //   this.state = {

  //   }
  // }

  state = {
    paintings: paintings
  }

  filterPaintings = () => {
    return this.state.paintings.filter(painting =>
      painting.title.toLowerCase().includes(this.props.searchTerm.toLowerCase())
    )
  }

  render () {
    const filteredPainting = this.filterPaintings()
    return (
      <ul>
        {filteredPainting.map(painting => (
          <Painting key={painting.id} painting={painting} />
        ))}
      </ul>
    )
  }
}

export default Paintings
