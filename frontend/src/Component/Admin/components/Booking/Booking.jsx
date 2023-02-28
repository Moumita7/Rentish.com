import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { get_All_booking } from '../../../../redux/AdminReducer/action';

const Booking = () => {
    const dispatch=useDispatch()
    const { booking } = useSelector((store) => store.admin);
    console.log("booking",booking)
  useEffect(()=>{
    dispatch(get_All_booking())
    
  },[])
  return (
    <div>Booking</div>
  )
}

export default Booking