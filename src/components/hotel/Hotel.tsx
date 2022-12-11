import React, { FC } from 'react'
import { IHotels } from '../../types/types'
import MyButton from './../button/MyButton'
import './../hotel/hotel.css'

interface HotelProps {
  hotel: IHotels
  className?: string
}
const Hotel: FC<HotelProps> = ({ hotel }) => {
  return (
      <div className="hotelItem">
        <img src={hotel.img} alt="" />
        <div className="aboutHotel">
          <div className="hotelName">
            <h5>{hotel.name}</h5>
            <div className="hotelPopular">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"  className="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
              <p>{hotel.popular}</p>
            </div>
          </div>
          <div className="geoPrice">
            <div className="hotelGeoPrice">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"  className="feather feather-map-pin"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              <h6>{hotel.geo}</h6>
            </div>
            <div className="hotelGeoPrice">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"  className="feather feather-dollar-sign"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
              <h6>{hotel.price}</h6>
            </div>
          </div>
          <div className="description">
            <p>{hotel.description}</p>
          </div>
        </div>
        <MyButton className='btnHotel'>Book Now</MyButton>
      </div>
  )
}

export default Hotel