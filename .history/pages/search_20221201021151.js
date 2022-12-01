import { format } from 'date-fns'
import { useRouter } from 'next/router'
import React from 'react'
import Header from '../components/Header'
import Mapp from './Mapp'

import Searching from './Searching'



function Search({ results }) {
  console.log(results) 
  
   
  const router = useRouter()
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
      <div className='flex'>
      <div>
        {results.results?.map((result) => (   
          <Searching
            key={result.id}
            id={result.id}
            title={result.title}
            about={result.about}
            img={result.img}
            location={result.location}
            star={result.star}
            price={result.price}


          />
        ))}
      </div >
      <div className='h-400px w-200px   lg:h-[1500px] lg:w-[1500px]'>
       <Mapp results = {results} />
       </div>
      </div>
      
      
      
      
    </div>
  )
}

export default Search
export async function getServerSideProps() {
  const results = await fetch("https://www.jsonkeeper.com/b/JU8H")
  .then((res) => res.json())
  return {
    props: {
      results,
    },
  }
}






