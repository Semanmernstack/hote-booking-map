

import React from 'react'

function Searching({ id, title, about, img, price, star, location }) {
  return (
    <div className="flex flex-col mb-4 md:mb-6">
        <div className="flex flex-col">
        <h1>{title} <span>{location}</span></h1>  
        <h1>{about}</h1>  
        </div>
        <div className="w-[350px] h-[300px] object-cover">
            <img src={img} alt="pic" />
        </div>
        <div>
            <h1>{price} <span>star:{star}</span></h1>
        </div>
        
    </div>
  )
}

export default Searching