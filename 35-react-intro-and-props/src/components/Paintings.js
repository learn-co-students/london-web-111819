import React from 'react'
import Painting from './Painting'

const Paintings = props => (
  <ul>
    {props.paintings.map(painting => (
      <Painting key={painting.id} painting={painting} />
    ))}
  </ul>
)

export default Paintings
