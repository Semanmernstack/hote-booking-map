import { format } from 'date-fns/esm'
import { useRouter } from 'next/router'
import React from 'react'
import Header from '../components/Header'
import{ token } from "../keys"

function Search({ resultSearch }) {
    console.log(resultSearch)
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
    </div>
  )
}

export default Search

export async function getServerSideProps(context) {
  const resultSearch = await fetch("https://airbnb19.p.rapidapi.com/api/v1/getLanguages")
  .then((res) => res.json());
  return {
    props: {
      resultSearch: resultSearch,
    }
  }
  
}

