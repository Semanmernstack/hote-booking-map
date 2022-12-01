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
              
                  <img loading="lazy" src="https://cdn.pixabay.com/photo/2015/05/01/11/29/gang-748312__340.jpg" alt="" />
              </div>
              <div>
                  <img loading="lazy" src="https://cdn.pixabay.com/photo/2017/03/09/20/56/zanzibar-2130811__340.jpg" alt="" />
              </div>
              <div>
                  <img loading="lazy"  src="https://cdn.pixabay.com/photo/2015/11/02/06/46/hotel-1018039__340.jpg" alt="" />
              </div>
              <div>
                  <img  loading="lazy" src="https://cdn.pixabay.com/photo/2015/09/18/01/02/pool-944908__340.jpg" alt="" />
              </div>
  
          </Carousel>
        </div>
    </div>
  )
}

export default Hotel