import React from 'react'
import "./Upi.css"
const Upi = () => {
  return (
    <>

  <div className='upi_heading' style={{marginTop:"-15px"}}>
    <div>
        <p className='upi_content_head' style={{fontSize:"20px"}}>Select a UPI App</p> 
        <p>Amount: ₹2380.0</p>
    </div>
    <div>
        <img src="https://www.zoomcar.com/build/760ee3019ff287f2caed7e40c92b1ca5.png" alt="sdv" />
    </div>
  </div>

  <div className='upiPayment' style={{marginTop:"-12px"}}>
    <img src="https://zoomcar-assets.zoomcar.com/images/original/4aef7198237a74ac187c75d270f8d516cfaa5e9b.png?1584453889" alt="" />
    <p>Google Pay</p>
    <input type="checkbox" className='inputcheck'/>
  </div>

  <div className='upiPayment'>
  <img src="https://zoomcar-assets.zoomcar.com/images/original/2f05f4e5f91bf2f481569c3a3c4345b2cf447ff7.png?1584453837" alt="" />
    <p>PhonePe</p>
    <input type="checkbox" className='inputcheck'/>
  </div>


  <div className='upiPayment'>
  <img src="https://zoomcar-assets.zoomcar.com/images/original/91871c2e202fd271724063a4a38033612d37c219.png?1584602070" alt="" />
    <p>Paytm UPI</p>
    <input type="checkbox" className='inputcheck'/>
  </div>
  <div className='upiIDSubmmit'>
    <input type="text" className='upiID' placeholder='Enter Upi Id
'/>
    <button>VERIFY & PAY</button>
  </div>
    </>
  )
}

export default Upi