import React from 'react'
import { useState } from 'react';

import ReactMapGl from 'react-map-gl';

function Mapp() {
  const [viewport, setViewport] = useState({
    width:"100%",
    height:"100%",
    longitude:3.6218,
    latitude:6.5227,
    zoom:11

  })
  
  return (
  <ReactMapGl

   
   style={{width: 1000, height: 1000}}
   mapStyle="mapbox://styles/semanmernstack/clb3eygyz000b15poi47oimc8"
   mapboxApiAccessToken={process.env.mapbox_key}
   {...viewport}
  ></ReactMapGl>

  )
}

export default Mapp