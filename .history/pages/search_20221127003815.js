import { format } from 'date-fns/esm'
import { useRouter } from 'next/router'
import React from 'react'
import Header from '../components/Header'

function Search() {
    const router =useRouter()
    const{location, startDate, endDate, guest} = router.query
    const formattedStartDate = format(new Date(startDate), "dd MMM yy")
    const formattedEndDate = format(new Date(endDate), "dd MMM yy")
    const range = `${formattedStartDate} - ${formattedEndDate}`; 
  return (
    <div className="flex flex-col">
      <Header/>  
      <div className="flex flex-col bg-blue-300">
        
        <h1>You have booked a place in {location} with {guest} Guests</h1>
        <h1>You are staying from {range}</h1>
        <h1></h1>
      </div>
    </div>
  )
}

export default Search