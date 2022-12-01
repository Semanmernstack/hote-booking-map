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

    const fetch = require('node-fetch');

const url = 'https://airbnb19.p.rapidapi.com/api/v1/getCategory';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '7a1706fbddmsh98a75c4bc93c077p1c919ejsn6d007d292f09',
    'X-RapidAPI-Host': 'airbnb19.p.rapidapi.com'
  }
};

fetch(url, options)
	.then(res => res.json())
	.then(json => console.log(json))
	.catch(err => console.error('error:' + err));
    
    
    
    
  return (
    <div className="flex flex-col">
      <Header/>  
      <div className="flex flex-col bg-blue-300 p-1 shadow-xl">
        
        <h1>You have booked a place in {location} with <span className="font-extrabold text-blue-600">{guest} Guests</span></h1>
        <h1>You are staying from <span className="font-extrabold text-blue-600">{range}</span></h1>
        <h1></h1>
        
      </div>
      <h1>jjj</h1>
    </div>
  )
}

export default Search




