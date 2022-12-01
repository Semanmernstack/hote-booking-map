import Image from 'next/image';
import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Hotel() {
  return (
    <div className="relative">
        <div className="flex flex-col items-center justify-center">
        <h1 className="text-xl text-gray-600 font-extrabold">Explore the amazing Hotels at PemsBooking</h1>
        <h1>Please search for your vacation home around Lagos</h1>
        </div>
        <div>
        <Carousel
              autoPlay
              infiniteLoop
              showStatus={false}
              showIndicators={false}
              showThumbs={false}
              interval={3000}
          >
              <div>
              
                  <Image width={500} height={500} loading="lazy" src="https://cdn.pixabay.com/photo/2015/05/01/11/29/gang-748312__340.jpg" alt="" />
              </div>
              <div>
                  <Image width={500} height={500} loading="lazy" src="https://cdn.pixabay.com/photo/2017/03/09/20/56/zanzibar-2130811__340.jpg" alt="" />
              </div>
              <div>
                  <Image width={500} height={500} loading="lazy"  src="https://cdn.pixabay.com/photo/2015/11/02/06/46/hotel-1018039__340.jpg" alt="" />
              </div>
              <div>
                  <Image width={500} height={500}  loading="lazy" src="https://cdn.pixabay.com/photo/2015/09/18/01/02/pool-944908__340.jpg" alt="" />
              </div>
  
          </Carousel>
          <h1 className="absolute top-60 right-10 left-10 bottom-60 text-center text-3xl text-white">Enter your search around Lagos</h1>
        </div>
        
    </div>
  )
}

export default Hotel