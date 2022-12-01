import React from 'react'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { useState } from 'react'

function Header() {
    const [search, setSearch] = useState("")
  return (
    <div className="  ">
        <div className=' flex  items-center justify-evenly bg-blue-500 h-14 md:h-20'>
       <div className="text-2xl">
        <h1 className="">PemsBooking</h1>
       </div>
       <div className="flex items-center shadow-xl p-2 rounded-full">
        <input value={search} onChange={(e) => setSearch(e.target.value)} className='outline-none border-none lg:w-full' type="text" placeholder='Book for a room' />
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>

       </div>
       </div>
       {search && 
        <div>hi</div>
       }

    </div>
  )
}

export default Header