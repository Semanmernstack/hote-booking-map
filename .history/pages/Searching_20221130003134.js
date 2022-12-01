

import React from 'react'

function Searching({ id, title, about, img, price, star, location }) {
  return (
    <div className="flex flex-col mb-4 md:mb-6 p-2 bg-slate-50">
        <div className="flex flex-col ">
        <h1 className="text-xl font-extrabold  text-blue-900">{title} <span className="text-lg font-medium">{location}</span></h1>  
        <h1 className="mb-2">{about}</h1>  
        </div>
        <div className="  ">
            <img className='h-[300px] w-[300px] md:h-[600px] md:w-[600px] rounded-md object-cover' src={img} alt="pic" />
        </div>
        <div>
            <h1 className="font-semibold text-cyan-400">{price} </h1>
            <span className="font-bold text-gray-500">Star:  {star}</span>
        </div>
        
    </div>
  )
}

export default Searching