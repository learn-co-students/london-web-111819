import React from 'react'

const PaintingDetails = props => {
  const handleClick = () => props.selectPainting(props.painting)
  return (
    <div>
      <button onClick={props.deselectPainting}>BACK</button>
      <h2>Title: {props.painting.title}</h2>
      <h3>
        Artist name: {props.painting.artist.name}:{' '}
        {props.painting.artist.birthday} - {props.painting.artist.deathday}
      </h3>
      <img onClick={handleClick} src={props.painting.image} />
    </div>
  )
}

export default PaintingDetails
