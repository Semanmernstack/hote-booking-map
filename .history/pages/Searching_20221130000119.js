

import React from 'react'

function Searching({ id, title, about, img, price, star, location }) {
  return (
    <div>
        <div>
        <h1>{title} <span>{location}</span></h1>  
        <h1>{about}</h1>  
        </div>
        <div>
            <img src={img} alt="pic" />
        </div>
        <div>
            <h1>{price} <span>{star}</span></h1>
        </div>
        
    </div>
  )
}

export default Searching