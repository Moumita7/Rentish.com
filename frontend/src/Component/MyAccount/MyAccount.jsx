import React, { useEffect } from 'react'
import { cities } from '../../Contant'
import "./MyAccount.css"

const MyAccount = () => {

   
  return (
    <div className='account_box'>
        <div className='heading'>
           <p>MY ACCOUNT</p>
        </div>

        <div className='account_detail'>
            <div className='head'>
            <p>Account Details</p> 
            </div>

            <div className='input_ele'>
                <p>E-mail</p>
                <input type="email" id='email' />
            </div>

            
            <div className='input_ele'>
                <p>Mobile Number</p>
                <input type="number" id='number' />
            </div>
             
            
            

        </div>
        <div className='personal_detail'>
        <div className='head'>
            <p>Personal Details</p> 
            </div>

            <div className='input_ele'>
                <p>Name</p>
                <input type="text" id='email' />
            </div>

            
            <div className='input_ele'>
                <p>Gender</p>
             
                <select name="" id="">
                    
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    

                </select>
            </div>
        </div>
        <div className='loaction_detail'>
        <div className='head'>
            <p>Location Details</p> 
            </div>
              <p className='location_desp'>Please share your current city for optimized experience</p>
            <div className='input_ele'>
                <p>Location</p>
                <select name="" id="">
                   
                    {
                     cities.map((city)=>(
                        <option key={city} value={city}>{city}</option>
                     ))
                    }
                </select>
            </div>

            
            
        </div>

        <div className='update_btn_box'>
            <button>Update</button>
        </div>
        
    </div>
  )
}

export default MyAccount