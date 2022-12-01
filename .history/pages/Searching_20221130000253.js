

import React from 'react'

function Searching({ id, title, about, img, price, star, location }) {
  return (
    <div className="flex flex-col">
        <div>
        <h1>{title} <span>{location}</span></h1>  
        <h1>{about}</h1>  
        </div>
        <div className="w-20 h-20">
            <img src={img} alt="pic" />
        </div>
        <div>
            <h1>{price} <span>{star}</span></h1>
        </div>
        
    </div>
  )
}

export default Searching