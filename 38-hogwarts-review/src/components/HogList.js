import React from 'react'

import Hog from './Hog'

const HogList = ({ hogs }) => (
  <ul>
    {hogs.map(hog => (
      <Hog hog={hog} />
    ))}
  </ul>
)

export default HogList
