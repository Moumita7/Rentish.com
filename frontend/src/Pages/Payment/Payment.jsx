import React, { useState } from 'react'
import "./Payment.css"
import Upi from './PaymentMethod/UPI_Method/Upi'
import CreditCard from './PaymentMethod/CreditCard/CreditCard'
import MobileWallet from './PaymentMethod/MobileWallet/MobileWallet'
import NetBanking from './PaymentMethod/NetBanking/NetBanking'
const Payment = () => {
    const [paymentmethod,SetpaymentMethod]=useState("UPI")
  return (
    <>
        <div className='payment_main_box'>
            
              <div className='payment_method_box'>
               
                 <div className='payment_heading'>
                     <p>Select a Payment method</p>
                 </div>
                    
                 <div className='payment_method_content'>
                        <div className='payment_option' >
                            <h4>OTHER PAYMENT OPTIONS</h4>
                            <div className='per_option' onClick={()=>SetpaymentMethod("UPI")}>
                                <div className='img_div'>
                                   <img src="https://zoomcar-assets.zoomcar.com/images/original/9fcb8335a89265849f23225858489f2a9ce8e121.png?1584453574" alt="UPI IMAGE" />

                                </div>
                                <div>
                                    <p className='content_heading'>UPI</p>
                                    <p className='subtext'>Google Pay, PhonePe, BHIM UPI</p>
                                </div>
                            </div>
                            <div className='per_option' onClick={()=>SetpaymentMethod("Credit")}>
                                <div className='img_div'>
                                <img src="https://zoomcar-assets.zoomcar.com/images/original/97f051d76793fffe5ab182ffa58b8eb47c5ba0cf.png?1584453494" alt="UPI IMAGE    " />

                                </div>
                                <div>
                                    <p className='content_heading'>Credit / Debit / ATM Card</p>
                                    <p className='subtext'>All major card providers are supported</p>
                                </div>
                            </div>
                            <div className='per_option' onClick={()=>SetpaymentMethod("Mobile")}>
                                <div className='img_div'>
                                <img src="https://zoomcar-assets.zoomcar.com/images/original/1317404625e385185d23ea43a0c34569d6432d09.png?1632130014" alt="UPI IMAGE    " />

                                </div>
                                <div>
                                    <p className='content_heading'>Mobile Wallet</p>
                                    <p className='subtext'>All major wallets are supported</p>
                                </div>
                            </div>

                            <div className='per_option' onClick={()=>SetpaymentMethod("Net")}>
                                <div className='img_div'>
                                <img src="https://zoomcar-assets.zoomcar.com/images/original/4dd051886e5403aafb9725b7d2ab42c80f9b1df6.png?1584453529" alt="UPI IMAGE    " />

                                </div>
                                <div>
                                    <p className='content_heading '>Net Banking</p>
                                    <p className='subtext'>All major wallets are supported</p>
                                </div>
                            </div>
                           
                        </div>
                        <div className='select_upi'>
                            
                       

                               {
                                paymentmethod&&(paymentmethod=="Mobile")? <MobileWallet/>:paymentmethod&&(paymentmethod=="UPI")?<Upi/>:paymentmethod&&(paymentmethod=="Credit")? <CreditCard/>:paymentmethod&&(paymentmethod=="Net")?<NetBanking/>:null
                               } 
                            
                        
                        
                            
                        </div>
                        <div className='Qrcodebox'></div>
                 </div>

             </div>

             <div className='booking_detail_box'>
                    <div className='booking_heading'>
                        <h1>Booking Details</h1>
                    </div>
             </div>


        </div>

    </>
  )
}

export default Payment


// "<img  />"

{/*  */}


{/*  */}

{/*  */}