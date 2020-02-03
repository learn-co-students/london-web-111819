import React from 'react'

class PaintingDetails extends React.Component {
  state = {
    painting: null,
    error: null
  }

  getPainting = () => {
    fetch(`http://localhost:3001/paintings/${this.props.match.params.id}`)
      .then(resp => resp.json())
      .then(painting => {
        if (painting.title === undefined) {
          this.setState({ error: 'Painting not found.' })
        } else {
          this.setState({ painting })
        }
      })
  }

  componentDidMount () {
    this.getPainting()
  }

  render () {
    if (this.state.error) return <h1>{this.state.error}</h1>
    if (this.state.painting === null) return <h1>Loading...</h1>

    return (
      <div>
        {/* <button onClick={props.deselectPainting}>BACK</button> */}
        <h2>Title: {this.state.painting.title}</h2>
        <h3>
          Artist name: {this.state.painting.artist.name}:{' '}
          {this.state.painting.artist.birthday} -{' '}
          {this.state.painting.artist.deathday}
        </h3>
        <img src={this.state.painting.image} />
      </div>
    )
  }
}

export default PaintingDetails
