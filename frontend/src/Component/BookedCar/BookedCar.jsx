import React from 'react'
import "./BookedCar.css"
import { FaRegDotCircle } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
const BookedCar = () => {
  return (
    <div className='booked_car_box'>

        <div className='booked_car_head'>
          <p>COMPLETED TRIP</p>
          <p>ID:4786562</p>
          <p>INVOICE</p>
        </div>

      <div className='booked_car_desp'>
          <div className='booked_car_img'>
            <img src="https://zoomcar-assets.zoomcar.com/photographs/original/a21d2ba781794d6c3f3e310c6a70b3d7c39cac89.png?1663876143" alt="" />
            <p className='carName'>Ertiga MT Diesel</p>
            <p>AP684568</p>
          </div>
          <div className='booked_car_detail'>
              
              <div className='track'>
                <FaRegDotCircle className='start'/>
                 <hr />
                <FaRegDotCircle className='end'/>
              </div>

              <div className='track'>
                <p><b>Start</b> 17th Mar, 10.30 PM </p>
                <p><b>END</b> 19th Mar, 11.30 PM </p>
              </div>
              <div className='address'>
                  <GoLocation className='location'/>
                  <p>sdfgihjgfgdfsdfghjhgfb</p>

              </div>

          </div>

      </div>
       
    </div>
  )
}

export default BookedCar