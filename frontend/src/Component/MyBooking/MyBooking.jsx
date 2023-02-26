import React from 'react'
import BookedCar from '../BookedCar/BookedCar'
import "./MyBooking.css"
const MyBooking = () => {
  return (
    <div className='booking_box'>
        <div className='heading'>
           <p>MY Booking</p>
        </div>
       
        <div className='bookedcar_container'>
        <BookedCar/>
        <BookedCar/>
        <BookedCar/>
        <BookedCar/>
        <BookedCar/>
        <BookedCar/>
        </div>
    </div>
  )
}

export default MyBooking