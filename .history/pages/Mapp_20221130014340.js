import React from 'react'

import Map from 'react-map-gl';

function Mapp() {
  
  return (
   <Map

   initialViewState={{
    longitude: -100,
    latitude: 40,
    zoom: 11,
   }}
   style={{width: 1000, height: 1000}}
   mapStyle="mapbox://styles/semanmernstack/clb3eygyz000b15poi47oimc8"
   mapboxApiAccessToken={process.env.mapbox_key}
   />

  )
}

export default Mapp