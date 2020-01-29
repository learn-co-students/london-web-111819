import React from 'react'
import Painting from './Painting'

import paintings from '../data/paintings'

class Paintings extends React.Component {
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
          // Should we pass anything else to each Painting?
          // Where will that thing come from? 🤔
          <Painting
            selectPainting={this.props.selectPainting}
            key={painting.id}
            painting={painting}
          />
        ))}
      </ul>
    )
  }
}

export default Paintings
