import React from 'react'

// React.createElement('li')

const Painting = props => {
  return (
    <li>
      <h2>Title: {props.painting.title}</h2>
      <h3>Artist name: {props.painting.artist.name}</h3>
      <img src={props.painting.image} />
    </li>
  )
}

export default Painting
