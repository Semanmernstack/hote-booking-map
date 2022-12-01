import { format } from 'date-fns/esm'
import { useRouter } from 'next/router'
import React from 'react'
import Header from '../components/Header'

import searchPage from '../components/searchPage'

function Search() {
  const books = [
    {
        id:0,
        location: "Hotel De La Pems",
        description:" Amazing beach home on the island",
        ratings:5,
        price:"$150 / night",
        long: 3.601521,
        lat:  6.458985,
    },
    {
        id:1,
        location: "Elly Hotel, Abuja",
        description:" Welcome to paradise ",
        ratings:4.5,
        price:"$140 / night",
        long:  7.491302,
        lat:   9.072264,  
    },
    {
        id:2,
        location: "Passion Hotel Asaba",
        description:"Best vacation holiday for your family",
        ratings:4.8,
        price:"$100 / night",
        long: 6.695894,
        lat:   6.20593,
    },
    {
        id:3,
        location: "Awuli Hotel, Owerri",
        description:"Country side hotel with the top facility ",
        ratings:4.5,
        price:"$110 / night",
        long:  2.6277,
        lat:  5.503728 ,  
    },
]
   
  const router =useRouter()
  const{location, startDate, endDate, guest} = router.query
  const formattedStartDate = format(new Date(startDate), "dd MMM yy")
  const formattedEndDate = format(new Date(endDate), "dd MMM yy")
  const range = `${formattedStartDate} - ${formattedEndDate}`; 
 
  return (
    <div className="flex flex-col">
      <Header/>  
      <div className="flex flex-col bg-blue-300 p-1 shadow-xl">
        
        <h1>You have booked a place in {location} with <span className="font-extrabold text-blue-600">{guest} Guests</span></h1>
        <h1>You are staying from <span className="font-extrabold text-blue-600">{range}</span></h1>
        <h1></h1>
        
      </div>
      <div>
      {books?.map((book) => (
        
       <div>
        
       <searchPage
        
        
        location={book.location}
        description={book.description}

       /> 
       </div>
       
      ))}
      </div>
    </div>
  )
}

export default Search






