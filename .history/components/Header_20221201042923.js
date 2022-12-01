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
    <div className=" flex flex-col overflow-x-hidden  ">
        <div className=' flex  items-center justify-evenly bg-blue-500 h-14 md:h-20'>
       <div onClick={() => router.push("/")}  className="text-2xl cursor-pointer">
        <h1 className="">PemsBooking</h1>
       </div>
       <div className="flex items-center shadow-xl p-2 rounded-full">
        <input value={search} onChange={(e) => setSearch(e.target.value)} className='outline-none border-none lg:w-full' type="text" placeholder='Book for a room' />
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>

       </div>
       </div  >
       {search && 
        <div className='flex flex-col sm:max-w-[200px] mr-4  justify-center'>
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            onChange={handleSelect}
            rangeColors={["blue"]}
            
          />
          <div className=" text-red-700 flex items-center gap-24 ">
            <h1 className='flex-1'>Number of Guests</h1>
            <input className='text-blue flex-1 w-12 border-none outline-none' type="number" min={1} onChange={(e) => setGuest(e.target.value)} />
          </div>
          <div className="flex items-center gap-24 mt-6  ">
            <button className='cursor-pointer p-2 rounded-full text-lg bg-blue-500' onClick={() => setSearch("")}>Cancel</button>
            <button onClick={searching}  className='cursor-pointer p-2 rounded-full bg-slate-500 text-lg'>Search
                
            </button>
          </div>

        </div>
       }
       
       
    </div>
  )
}

export default Header