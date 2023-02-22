import React from 'react'
import "./CreditCard.css"
const CreditCard = () => {
  return (
    <>
    <div className='Credit_heading' style={{marginTop:"-25px",marginBottom:"8px"}}>
    <div>
        <p className='Credit_content_head' style={{fontSize:"20px"}}>Enter Card Details</p> 
        <p>Amount: ₹2380.0</p>
    </div>
    <div style={{marginTop:"28px"}}>
        <img src="https://www.zoomcar.com/build/760ee3019ff287f2caed7e40c92b1ca5.png" alt="sdv" />
    </div>
  </div>
    <div className='cardNumber_div'>
        <input type="number" className='cardnumber' placeholder='Card Number'/>
    </div>
    <div className='cardD'>
    <input type="number" className='carddetail' placeholder='Expire (MM/YY)'/>
    <input type="number" className='carddetail cvv' placeholder='CVV'/>
    </div>
    <div className='cardsubmmit' style={{marginTop:"18px"}}>
        <div className='check'>
        <input type="checkbox" />
        <p>Securely save card details</p>
        </div>
        
        <button>PAY ₹2380.0</button>
    </div>
    </>
  )
}

export default CreditCard