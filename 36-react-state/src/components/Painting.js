import React from 'react'

/*
So you know at some point we want to do something when we click something here.
What do you want to click? What should happen when we click it?
*/

const Painting = props => {
  const handleClick = () => props.selectPainting(props.painting)
  return (
    <li>
      <h2>Title: {props.painting.title}</h2>
      <h3>Artist name: {props.painting.artist.name}</h3>
      <img onClick={handleClick} src={props.painting.image} />
    </li>
  )
}

export default Painting
