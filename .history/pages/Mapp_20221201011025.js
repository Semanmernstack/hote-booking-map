import { getCenter } from 'geolib';

import React from 'react'
import { useState } from 'react';
import { Marker, Popup } from 'react-map-gl';
import ReactMapGL from 'react-map-gl';


function Mapp({ results }) {
  const [locate, setLocate] = useState({})
  
  const coordinates =results.results?.map((result) => ({
      longitude: result.long,
      latitude: result.lat,
  }))

  const center = getCenter(coordinates)
  const [viewport, setViewport] = useState({
    width:"100%",
    height:"100%",
    longitude: center.longitude,
    latitude: center.latitude, 
    zoom:11,

  })
  
  return (
  <ReactMapGL

   
   style={{width: 600, height: 600}}
   mapStyle="mapbox://styles/semanmernstack/clb3eygyz000b15poi47oimc8"
   mapboxAccessToken={process.env.mapbox_key}
   {...viewport}
   onMove={evt => setViewport(evt.viewport)}
  >
    {results.results?.map((result) => (   
      <div key={result.long}>
        <Marker  
          longitude={result.long} 
          latitude={result.lat}
          offsetLeft={-20}
          offsetTop={-10}
        >
         <p onClick={() => setLocate(result)} className='text-red-500 text-3xl animate-bounce cursor-pointer'>+</p>
        </Marker>
        {setLocate.long === result.long ? (   
          <Popup onClose={() => setLocate({})}  closeOnClick={true}
           latitude={result.lat} longitude={result.long}
           >
            {result.title}
          </Popup>
        ):(
            true
        )
        }
      </div>
    ))}
  </ReactMapGL>

  )
}

export default Mapp