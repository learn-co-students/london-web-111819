import React from 'react'
import { Link } from 'react-router-dom'

/*
So you know at some point we want to do something when we click something here.
What do you want to click? What should happen when we click it?
*/

const Painting = props => {
  return (
    <li>
      <h2>Title: {props.painting.title}</h2>
      <h3>Artist name: {props.painting.artist.name}</h3>
      <Link to={`/paintings/${props.painting.id}`}>
        <img src={props.painting.image} />
      </Link>
    </li>
  )
}

export default Painting
