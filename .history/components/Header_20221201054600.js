import React from 'react'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { useState } from 'react'
import { DateRangePicker } from 'react-date-range';
import { useRouter } from 'next/router';


function Header() {
    const [search, setSearch] = useState("");
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())
    const [guest, setGuest] = useState(1)
    const router = useRouter() 

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection',
      }

    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate)
        setEndDate(ranges.selection.endDate)
    }
    const searching= () => {
        router.push({
            pathname:"/search",
            query: {
                location: search,
                startDate:startDate.toISOString(),
                endDate:endDate.toISOString(),
                guest,
            },
        })
    }

  return (
    <div className=" flex flex-col w-full  p-1 ">
        <div className=' flex  items-center justify-evenly bg-blue-500 h-14 md:h-20'>
       <div onClick={() => router.push("/")}  className="text-2xl cursor-pointer">
        <h1 className="text-lg md:text-2xl ml-2">PemsBooking</h1>
       </div>
       <div className="flex items-center shadow-2xl p-2 rounded-full">
        <input value={search} onChange={(e) => setSearch(e.target.value)} className='   outline-none border-none lg:w-full' type="text" placeholder='Book for a room' />
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="hidden md:inline-flex  w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>

       </div>
       </div  >
       {search && 
        <div className='flex flex-col max-w-[120px]   text-xm md:text-lg   md:max-w-[500px md:mx-auto lg:max-w[600px] lg:mx-auto  '>
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            onChange={handleSelect}
            rangeColors={["blue"]}
            
          />
          <div className=" text-red-700 flex items-center  gap-24 ">
            <h1 className='w-5 text-red bg-red-50 ml-4 text-sm'>Number of Guests</h1>
            <input placeholder='numb' className='text-blue flex-1 w-12 border-none outline-none' type="number" min={1} onChange={(e) => setGuest(e.target.value)} />
          </div>
          <div className="flex items-center  gap-24 mt-6 ml-4  ">
            <button className='cursor-pointer p-1 rounded-full text-sm md:text-lg bg-blue-500' onClick={() => setSearch("")}>Cancel</button>
            <button onClick={searching}  className='cursor-pointer p-1 rounded-full bg-slate-500 text sm lg:text-lg'>Search
                
            </button>
          </div>

        </div>
       }
       
       
    </div>
  )
}

export default Header