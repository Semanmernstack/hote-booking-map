import React from 'react'

function searchPage({ location, description }) {
  return (
    <div>
        <h1>{location}</h1>
        <h1>{description}</h1>
    </div>
  )
}

export default searchPage