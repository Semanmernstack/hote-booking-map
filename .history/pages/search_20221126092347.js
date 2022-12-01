import { format } from 'date-fns/esm'
import { useRouter } from 'next/router'
import React from 'react'
import Header from '../components/Header'

function Search() {
    const router =useRouter()
    const{location, startDate, endDate, guest} = router.query
    const formattedStart = format(new Date(startDate), "dd mm yy")
    const formattedEnd = format(new Date(endDate), "dd mm yy")
    const range = `$(formattedStart)-${formattedEnd}` 
  return (
    <div className="flex flex-col">
      <Header/>  
      <div>
        
        <h1>You have booked a place in {location} with {guest} Guests</h1>
        <h1>You are staying from {range}</h1>
      </div>
    </div>
  )
}

export default Search