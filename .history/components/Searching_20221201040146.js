
import Image from 'next/image'
import React from 'react'

function Searching({ id, title, about, img, price, star, location }) {
  return (
    <div className="flex flex-col mb-4 md:mb-6 p-3 bg-slate-50 hover:opacity-50 hover:shadow-lg transtion duration-200 ease-in-out">
        <div className="flex flex-col ">
        <h1 className="text-xl font-extrabold  text-blue-900">{title} <span className="text-lg font-medium">{location}</span></h1>  
        <h1 className="mb-2">{about}</h1>  
        </div>
        <div className=" relative h-[400px] w-[400px] ">
            <Image layout='fill' objectFit='cover' className='rounded-xl' src={img} alt="pic" />
        </div>
        <div>
            <h1 className="font-bold mt-2 text-cyan-400">{price} </h1>
            <span className="font-bold text-gray-500">Star:  {star}</span>
        </div>
        
    </div>
  )
}

export default Searching