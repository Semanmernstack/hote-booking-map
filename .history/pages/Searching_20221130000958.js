

import React from 'react'

function Searching({ id, title, about, img, price, star, location }) {
  return (
    <div className="flex flex-col mb-4 md:mb-6">
        <div className="flex flex-col">
        <h1>{title} <span>{location}</span></h1>  
        <h1>{about}</h1>  
        </div>
        <div className="w-[160px] h-160px] md:w-[200px] md:h-[200px] lg:w-[240px] lg:h-240px] object-cover">
            <img src={img} alt="pic" />
        </div>
        <div>
            <h1>{price} <span>{star}</span></h1>
        </div>
        
    </div>
  )
}

export default Searching