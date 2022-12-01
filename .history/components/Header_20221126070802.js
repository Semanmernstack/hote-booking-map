import React from 'react'

function Header() {
  return (
    <div className=" flex items-center justify-evenly bg-blue-500 h-7 ">
       <div className="text-2xl">
        <h1 className="">PemsBooking</h1>
       </div>
       <div className="flex items-center shadow-lg p-2 rounded-full">
        <input className='outline-none border-none' type="text" placeholder='Book for a room' />
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>

       </div>

    </div>
  )
}

export default Header