import { getCenter } from 'geolib';
import React from 'react'
import { useState } from 'react';

import ReactMapGL from 'react-map-gl';


function Mapp({ results }) {
  
  const coordinates = results.map((result) => ({
      long: result.long,
      lat: result.lat,
  }))

  const center = getCenter(coordinates)
  const [viewport, setViewport] = useState({
    width:"100%",
    height:"100%",
    long: center.long,
    lat: center.lat,
    zoom:11

  })
  
  return (
  <ReactMapGL

   
   style={{width: 600, height: 600}}
   mapStyle="mapbox://styles/semanmernstack/clb3eygyz000b15poi47oimc8"
   mapboxAccessToken={process.env.mapbox_key}
   {...viewport}
   onMove={evt => setViewport(evt.viewport)}
  >

  </ReactMapGL>

  )
}

export default Mapp