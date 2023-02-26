
import React, { useState } from 'react'
import "./Profile.css"
import { RxCrossCircled } from "react-icons/rx";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { BsFillCreditCard2BackFill } from "react-icons/bs";
import { MdManageAccounts } from "react-icons/md";
import { TbBrandBooking } from "react-icons/tb";
import MyAccount from '../../Component/MyAccount/MyAccount';
import MyBooking from '../../Component/MyBooking/MyBooking';
// import { useSelector } from 'react-redux';


const Profile = () => {
  const [Component, setComponent]=useState("Account")
  const ID="focusdiv"
  
  // const {registerUser} = useSelector((store) => store?.AuthReducer);
  // console.log(registerUser)
  
  
  
  
  const handleChangeComponent =(val)=>{
    setComponent(val)
    
  }
  console.log("efwf")
  return (
    <div className='profile_main_box'>
      
       <div className='Profile_content'>
       
          <div className='person_profile'>
              <div className='user_desp'>
                 <div className='user_initial'>
                       <p>s</p>
                 </div>
                <p className='name'>Sumit shastrakar</p>
                <p className='mobile'>123456789</p>
                <p className='email'>sumitshastrakar@gmail.com</p>
              </div>
              <div className='user_verifly'>
                   <div className='per_verifly'>
                    <RxCrossCircled className='cross'/>
                    <p>Profile Document</p>
                   </div>

                   <div className='per_verifly'>
                    <AiFillSafetyCertificate className='right'/>
                    <p>Mobile Number</p>
                   </div>

                   <div className='per_verifly'>
                    <RxCrossCircled className='cross'/>
                    <p>Paytm Wallet</p>
                   </div>

              </div>
              <div className='user_details'>
                    <div className='user_credit'>
                        <div className='rightbox'>
                          <BsFillCreditCard2BackFill className="icon"/>
                          <p>Credits</p>
                        </div>
                       
                       <p style={{fontSize:"20px",}}>₹ 0</p>
                    </div>


                    <div className='user_booking' id={Component==="Booking"?ID:null} onClick={()=>handleChangeComponent("Booking")}>
                        <div className='rightbox'>
                        <TbBrandBooking  className="icon"/>
                       <p>My Booking</p>
                        </div>
                       
                       
                    </div>

                    <div className='user_account' id={Component==="Account"?ID:null} onClick={()=>handleChangeComponent("Account")}>
                        <div className='rightbox'>
                             <MdManageAccounts  className="icon"/>
                            <p>My Account</p>
                        </div>
                        
                    </div>
              </div>
          </div>
        <div className='profile_desp'>
                
                   {
                    Component=="Account" ?    <MyAccount/> :<MyBooking/>
                  }
            </div>    
       </div>
    </div>
  )
}

export default Profile