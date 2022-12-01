import React from 'react'
import { useState } from 'react';

import ReactMapGL from 'react-map-gl';


function Mapp() {
  const [viewport, setViewport] = useState({
    width:"100%",
    height:"100%",
    longitude:3.6218,
    latitude:6.5227,
    zoom:11

  })
  
  return (
  <ReactMapGL

   
   style={{width: 600, height: 600}}
   mapStyle="mapbox://styles/semanmernstack/clb3eygyz000b15poi47oimc8"
   mapboxAccessToken={process.env.mapbox_key}
   {...viewport}
   onViewportChange={(nextViewport) => setViewport(nextViewport)}
  >

  </ReactMapGL>

  )
}

export default Mapp