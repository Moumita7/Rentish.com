import React, { useState ,useEffect} from 'react'
import QRCode from 'qrcode.react';
import { TbCircleDot,TbSquareAsterisk } from "react-icons/tb";

import "./Payment.css"
import Upi from './PaymentMethod/UPI_Method/Upi'
import CreditCard from './PaymentMethod/CreditCard/CreditCard'
import MobileWallet from './PaymentMethod/MobileWallet/MobileWallet'
import NetBanking from './PaymentMethod/NetBanking/NetBanking'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Box,
    Divider,
  } from '@chakra-ui/react'
const Payment = () => {
     const [paymentmethod,SetpaymentMethod]=useState("UPI")
     const { isOpen, onOpen, onClose } = useDisclosure()
     const finalRef = React.useRef(null)
     const [State,setState] = useState({timestamp: Date.now()})
     const [time, setTime] = useState(0);
     const [running, setRunning] = useState(false);
     const [ID,setID]=useState("")
      const handleNewQRCode = () => {
        setState({ timestamp: Date.now() });
        onOpen()
        setRunning(true)
      };
      const handleReset = () => { 
        setTime(0);
        setRunning(false);
      };


      useEffect(() => {
        let intervalId;
    
        if (running) {
          intervalId = setInterval(() => {
            setTime((time) => time + 1);
          }, 1000);
        }
    
        return () => clearInterval(intervalId);
      }, [running]);


      const formatTime = (time) => {
        const hours = Math.floor(time / 3600);
        const minutes = Math.floor((time - hours * 3600) / 60);
        const seconds = time - hours * 3600 - minutes * 60;
    
        const pad = (value) => (value < 10 ? '0' + value : value);
    
        return `${pad(minutes)}:${pad(seconds)}`;
      };

      const HandlePaymentOption =(val)=>{
        SetpaymentMethod(val)
        setID("focus")
      }
   
      


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
                            <div className='per_option' onClick={()=>HandlePaymentOption("UPI")} id={paymentmethod=="UPI"?ID:null}>
                                <div className='img_div'>
                                   <img src="https://zoomcar-assets.zoomcar.com/images/original/9fcb8335a89265849f23225858489f2a9ce8e121.png?1584453574" alt="UPI IMAGE" />

                                </div>
                                <div>
                                    <p className='content_heading'>UPI</p>
                                    <p className='subtext'>Google Pay, PhonePe, BHIM UPI</p>
                                </div>
                            </div>
                            <div className='per_option' onClick={()=>HandlePaymentOption("Credit")} id={paymentmethod=="Credit"?ID:null}>
                                <div className='img_div'>
                                <img src="https://zoomcar-assets.zoomcar.com/images/original/97f051d76793fffe5ab182ffa58b8eb47c5ba0cf.png?1584453494" alt="UPI IMAGE    " />

                                </div>
                                <div>
                                    <p className='content_heading'>Credit / Debit / ATM Card</p>
                                    <p className='subtext'>All major card providers are supported</p>
                                </div>
                            </div>
                            <div className='per_option' onClick={()=>HandlePaymentOption("Mobile")} id={paymentmethod=="Mobile"?ID:null}>
                                <div className='img_div'>
                                <img src="https://zoomcar-assets.zoomcar.com/images/original/1317404625e385185d23ea43a0c34569d6432d09.png?1632130014" alt="UPI IMAGE    " />

                                </div>
                                <div>
                                    <p className='content_heading'>Mobile Wallet</p>
                                    <p className='subtext'>All major wallets are supported</p>
                                </div>
                            </div>

                            <div className='per_option' onClick={()=>HandlePaymentOption("Net")} id={paymentmethod=="Net"?ID:null}>
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
                        <div className='Qrcodebox'>
                            <p className='QR_heading'>Scan QR code</p>
                            <img src="https://www.zoomcar.com/build/a148f34bec5de262d7bb5f6356fa348e.png" alt="qr code" className='QR_img'/>
                            <p onClick={handleNewQRCode}>Click to see QR code</p>
                            
                            <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
                              <ModalContent className='modal_box' bg="red" w="400px" p="20px"  m="auto" mt="100px" background="white" >
                               <ModalCloseButton  background={"none"} border="none" onClick={handleReset}/>
                                 <ModalBody width="400px" h="360px"   pb={6} textAlign="center" fontSize={17}>
                                       <p>Scan here from your mobile with any UPI app</p>
                                       <p>Amount: ₹2248.0</p>
                                        <Box >
                                        <QRCode value={State.timestamp} 
                                                 size={256}
                                                style={{ height: "auto", maxWidth: "100%", width: "50%" }}
                                                 viewBox={`0 0 256 256`}
                                        />
                                            <div style={{marginTop:"30px"}}>{formatTime(time)}</div>
                                        </Box>
                                 </ModalBody>
                            </ModalContent>
                          </Modal>
                           
                            <div>
                                <img src="https://www.zoomcar.com/build/b0e4e02f6e16bd9e2a822cfe5348cab8.svg" alt="google pay" />
                                <img src="https://www.zoomcar.com/build/02e647c26b018da43502ffbb4f3a5801.svg" alt="phone pay" />
                                <img src="https://www.zoomcar.com/build/3ef19a1071cc8527266cd278b3782406.svg" alt="Bhim" />
                            </div>
                        </div>
                 </div>
                
             </div>

             <div className='booking_detail_box'>
                    <div className='booking_heading'>
                        <p>Booking Details</p>
                    </div >

                    <div className="booking_content">
                        <div className='car_detail'>
                           <div className='car_name'>
                             <h2>Triber MT Petrol</h2>
                             <div>
                            <img src="https://zoomcar-assets.zoomcar.com/images/original/2aceee9e84a7bf79ae8928ace92944abbac907d4.png?1584455088" alt="" />
                            <p>Manual
</p>
<img src="https://zoomcar-assets.zoomcar.com/images/original/4c611ba1fb54d1e42553020d9022e5ab2dac14ea.png?1584455110" alt="" />
                            <p>petrol
</p>
                          </div>
                               </div>
                           <div className='car_img'>
                          <img src="https://zoomcar-assets.zoomcar.com/photographs/original/a21d2ba781794d6c3f3e310c6a70b3d7c39cac89.png?1663876143" alt="car" />
                            </div>

                        </div>

                       <div className='sheduled_box'>
                             <div className='startdate' >
                                 <TbCircleDot className='dot'/>
                                 <div style={{margin:"0"}}>
                                    <p style={{fontSize:"18px"}}>Wed, 22 Feb, 07:00 PM</p>
                                     <p >इंगवले नगर , पिंपळे निलख</p>
                                </div>

                            </div>
                            <div className='startdate'>
                                 <TbSquareAsterisk className='squaredot'/>
                                 <div style={{margin:"0"}}>
                                    <p style={{fontSize:"18px"}}>
Thu, 23 Feb, 03:00 AM</p>
                                     <p >इंगवले नगर , पिंपळे निलख</p>
                                </div>

                            </div>
                             <div className='cancel'>
                              <p>Free cancellation up to 22 February 2023, 01:00 PM</p>
                             </div>
                       </div>
                     
                       <div className='totalAmount'>
                         <div><p>Final Fare</p></div>
                         <div><p>₹2,854</p></div>
                       </div>

                    </div>
             </div>


        </div>

    </>
  )
}

export default Payment

