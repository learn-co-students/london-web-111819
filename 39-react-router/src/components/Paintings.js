import React from 'react'
import Painting from './Painting'

class Paintings extends React.Component {
  state = {
    paintings: []
  }

  getPaintings = () => {
    fetch('http://localhost:3001/paintings')
      .then(resp => resp.json())
      .then(paintings => this.setState({ paintings }))
  }

  filterPaintings = () => {
    return this.state.paintings.filter(painting =>
      painting.title.toLowerCase().includes(this.props.searchTerm.toLowerCase())
    )
  }

  componentDidMount () {
    this.getPaintings()
  }

  render () {
    const filteredPainting = this.filterPaintings()
    return (
      <ul>
        {filteredPainting.map(painting => (
          // Should we pass anything else to each Painting?
          // Where will that thing come from? 🤔
          <Painting key={painting.id} painting={painting} />
        ))}
      </ul>
    )
  }
}

export default Paintings
