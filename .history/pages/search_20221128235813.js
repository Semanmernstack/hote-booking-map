import { format } from 'date-fns/esm'
import { useRouter } from 'next/router'
import React from 'react'
import Header from '../components/Header'

import SearchPage from '../components/SearchPage'

function Search({ books }) {
  console.log(books)
  
   
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
       <SearchPage
        key={book.id}
        id={book.id}
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
export async function getServerSideProps() {
  const books = await fetch("https://www.jsonkeeper.com/b/5NPS")
  .then((res) => res.json())
  return {
    props: {
      books:books,
    }
  }
}






