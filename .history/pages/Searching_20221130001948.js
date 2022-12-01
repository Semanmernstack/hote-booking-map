

import React from 'react'

function Searching({ id, title, about, img, price, star, location }) {
  return (
    <div className="flex flex-col mb-4 md:mb-6 p-2 bg-slate-50">
        <div className="flex flex-col">
        <h1>{title} <span>{location}</span></h1>  
        <h1>{about}</h1>  
        </div>
        <div className="  object-cover">
            <img className='h-[300px] w-[300px] md:-h-[500px] md:-w-[500px]' src={img} alt="pic" />
        </div>
        <div>
            <h1>{price} <span>star:{star}</span></h1>
        </div>
        
    </div>
  )
}

export default Searching