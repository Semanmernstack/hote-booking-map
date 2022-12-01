import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Hotel() {
  return (
    <div>
        <h1>Explore the amazing Hotels at PemsBooking</h1>
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
              
                  <img loading="lazy" src="https://cdn.pixabay.com/photo/2016/03/02/20/13/grocery-1232944__340.jpg" alt="" />
              </div>
              <div>
                  <img loading="lazy" src="https://cdn.pixabay.com/photo/2017/12/26/09/15/woman-3040029__340.jpg" alt="" />
              </div>
              <div>
                  <img loading="lazy"  src="https://cdn.pixabay.com/photo/2015/09/21/14/24/supermarket-949913__340.jpg" alt="" />
              </div>
              <div>
                  <img  loading="lazy" src="https://cdn.pixabay.com/photo/2016/11/29/09/00/doughnuts-1868573__340.jpg" alt="" />
              </div>
  
          </Carousel>
        </div>
    </div>
  )
}

export default Hotel