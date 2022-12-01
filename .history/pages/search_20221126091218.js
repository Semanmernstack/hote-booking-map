import { useRouter } from 'next/router'
import React from 'react'
import Header from '../components/Header'

function Search() {
    const router =useRouter()
    const{location, startDate, endDate, guest} = router.query
  return (
    <div className="flex flex-col">
      <Header/>  
      <div>
        <h1>From-to date</h1>
        <h1>You have booked a place in {location} with {guest} Guests</h1>
      </div>
    </div>
  )
}

export default Search