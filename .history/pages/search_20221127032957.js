import { format } from 'date-fns/esm'
import { useRouter } from 'next/router'
import React from 'react'
import Header from '../components/Header'







function Search() {
  const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://travel-advisor.p.rapidapi.com/hotels/list',
  params: {
    location_id: '293919',
    adults: '1',
    rooms: '1',
    nights: '2',
    offset: '0',
    currency: 'USD',
    order: 'asc',
    limit: '30',
    sort: 'recommended',
    lang: 'en_US'
  },
  headers: {
    'X-RapidAPI-Key': '7a1706fbddmsh98a75c4bc93c077p1c919ejsn6d007d292f09',
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
  
    
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
      <h1>jjj</h1>
    </div>
  )
}

export default Search




