import React from 'react'

const MoreHogDetails = ({ hog }) => (
  <div>
    <p>Specialty: {hog.specialty}</p>
    <p>Weight: {hog.weight}</p>
    <p>Highest medal achieved: {hog['highest medal achieved']}</p>
  </div>
)

export default MoreHogDetails
