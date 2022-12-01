import React from 'react'
import Map from 'react-map-gl';

function Mapp() {
  return (
   <Map

   initialViewState={{
    longitude: -100,
    latitude: 40,
    zoom: 8
   }}
   style={{width: 600, height: 400}}
   mapStyle="mapbox://styles/semanmernstack/clb3eygyz000b15poi47oimc8"
   />

  )
}

export default Mapp