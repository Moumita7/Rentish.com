import React, { useEffect, useState } from "react";
import Navbar from "../../component/Navbar/Navbar";
import { Box, Image, Text } from "@chakra-ui/react";
import "./Checkout.css";
import FirstChild from "./FirstChild";
import SecondChild from "./SecondChild";
import ThirdChild from "./ThirdChild";
import FourthChild from "./FourthChild";

import {GiGearStickPattern,GiFuelTank} from "react-icons/gi"



const Checkout = () => {
  const [upi, setUpi] = useState(true);
  const [credit, setCredit] = useState(false);
  const [mobileWallet, setMobileWallet] = useState(false);
  const [netBanking, setNetBanking] = useState(false);

  const carDetails=JSON.parse(localStorage.getItem("icardetails"))
// console.log("car",carDetails)


  const upiHandle = () =>{
    setUpi(true)
    setCredit(false)
    setMobileWallet(false)
  setNetBanking(false)
  }
  const creditHandle = () =>{
    setUpi(false)
    setCredit(true)
    setMobileWallet(false)
  setNetBanking(false)
  }
  const mobileWalletHandle = () =>{
    setUpi(false)
    setCredit(false)
    setMobileWallet(true)
  setNetBanking(false)
  }
  const netBankingHandle = () =>{
    setUpi(false)
    setCredit(false)
    setMobileWallet(false)
  setNetBanking(true)
  }


  const otherPaymentOptions = [
    {
      url: "https://zoomcar-assets.zoomcar.com/images/original/9fcb8335a89265849f23225858489f2a9ce8e121.png?1584453574",
      title: "UPI",
      description: "Google Pay, PhonePe, BHIM UPI",
      method:upiHandle
    },
    {
      url: "https://zoomcar-assets.zoomcar.com/images/original/97f051d76793fffe5ab182ffa58b8eb47c5ba0cf.png?1584453494",
      title: "Credit / Debit / ATM Card",
      description: "All major card providers are supported",
      method:creditHandle
    },
    {
      url: "https://zoomcar-assets.zoomcar.com/images/original/1317404625e385185d23ea43a0c34569d6432d09.png?1632130014",
      title: "Mobile Wallet",
      description: "All major wallets are supported",
      method:mobileWalletHandle
    },
    {
      url: "https://zoomcar-assets.zoomcar.com/images/original/4dd051886e5403aafb9725b7d2ab42c80f9b1df6.png?1584453529",
      title: "Net Banking",
      description: "Net Banking",
      method:netBankingHandle
    },
  ];

  useEffect(()=>{
  },[upi,credit,mobileWallet,netBanking])


  return (
    <Box className="checkout_main_container">
      <Box className="checkout_container_left_child">
        <Box>
          <Text padding="20px 10px" fontWeight="600" textAlign="center">OTHER PAYMENT OPTIONS</Text>
          {otherPaymentOptions.map((ele, i) => {
            return (
              <Box key={i} className="checkout_payment_options" onClick={ele.method}>
                <Box>
                  <Image src={ele.url} />
                </Box>
                <Box>
                  <Text>{ele.title}</Text>
                  <Text>{ele.description}</Text>
                </Box>
              </Box>
            );
          })}
        </Box>
        <Box className="checkout_payment_options_child">
              <FirstChild status = {upi}/>
              <SecondChild  status = {credit}/>
              <ThirdChild status = {mobileWallet}/>
              <FourthChild status = {netBanking}/>
        </Box>
      </Box>
      <Box className="checkout_container_right_child">
        <Text padding="20px 10px" fontWeight="600" textAlign="center">Booking Details</Text>
          <Box  padding="10px">
            <Box display="flex" alignItems="center">
              <Box width="60%">
                <Text fontSize="20px" fontWeight="600" padding="10px 0px">{carDetails.car_title}</Text>
                <Box display='flex' gap="10px">
                  <Text display="flex" alignItems="center"><GiGearStickPattern/>Manual</Text>
                  <Text display="flex"><GiFuelTank/>Petrol</Text>
                </Box>
              </Box>
              <Box width="30%">
                <Image src={carDetails.url[0]}/>
              </Box>
            </Box>

            <Box>
              <Box>
                <Text marginTop="10px">{"Sun, 26 Feb, 11:00 PM"}</Text>
                <Text color="gray">{carDetails.city}</Text>
              </Box>
              <Box>
                <Text marginTop="10px">{"Sun, 26 Feb, 11:00 PM"}</Text>
                <Text color="gray">{carDetails.city}</Text>
              </Box>
            </Box>

            <Box display="flex" justifyContent="space-between" alignItems="center" padding="15px 0px">
              <Text fontWeight="600">Final Fare</Text>
              <Text>₹{"3,646"}</Text>
            </Box>
          </Box>
      </Box>
    </Box>
  );
};

export default Checkout;
