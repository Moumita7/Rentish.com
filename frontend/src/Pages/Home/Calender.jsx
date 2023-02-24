import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import {Box, Button} from "@chakra-ui/react";
import {FaLongArrowAltRight} from "react-icons/fa";
import {
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    SliderMark,
  } from '@chakra-ui/react'

const Calender = () => {
    const [value, onChange] = useState(new Date());
    const [value2, onChange2] = useState(new Date());
    const [sliderValue, setSliderValue] = useState(10);
    const [sliderValue2, setSliderValue2] = useState(10);
    const [time1, setTime1] = useState("10:00 AM");
    const [time2, setTime2] = useState("04:00 PM")
   
    const handleSliderValue = (val)=>{
        setSliderValue(val)
        if(val===0)  setTime1("00:00 AM");
        else if(val===1)  setTime1("01:00 AM");
        else if(val===2)  setTime1("02:00 AM");
        else if(val===3)  setTime1("03:00 AM");
        else if(val===4)  setTime1("04:00 AM");
        else if(val===5)  setTime1("05:00 AM");
        else if(val===6)  setTime1("06:00 AM");
        else if(val===7)  setTime1("07:00 AM");
        else if(val===8)  setTime1("08:00 AM");
        else if(val===9)  setTime1("09:00 AM");
        else if(val===10) setTime1("10:00 AM");
        else if(val===11) setTime1("11:00 AM");
        else if(val===12) setTime1("12:00 AM");
        else if(val===13) setTime1("01:00 PM");
        else if(val===14) setTime1("02:00 PM");
        else if(val===15) setTime1("03:00 PM");
        else if(val===16) setTime1("04:00 PM");
        else if(val===17) setTime1("05:00 PM");
        else if(val===18) setTime1("06:00 PM");
        else if(val===19) setTime1("07:00 PM");
        else if(val===20) setTime1("08:00 PM");
        else if(val===21) setTime1("09:00 PM");
        else if(val===22) setTime1("10:00 PM");
        else if(val===23) setTime1("11:00 PM");
    };
    const handleSliderValue2 = (val)=>{
        setSliderValue2(val)
        if(val===0)  setTime2("00:00 AM");
        else if(val===1)  setTime2("01:00 AM");
        else if(val===2)  setTime2("02:00 AM");
        else if(val===3)  setTime2("03:00 AM");
        else if(val===4)  setTime2("04:00 AM");
        else if(val===5)  setTime2("05:00 AM");
        else if(val===6)  setTime2("06:00 AM");
        else if(val===7)  setTime2("07:00 AM");
        else if(val===8)  setTime2("08:00 AM");
        else if(val===9)  setTime2("09:00 AM");
        else if(val===10) setTime2("10:00 AM");
        else if(val===11) setTime2("11:00 AM");
        else if(val===12) setTime2("12:00 AM");
        else if(val===13) setTime2("01:00 PM");
        else if(val===14) setTime2("02:00 PM");
        else if(val===15) setTime2("03:00 PM");
        else if(val===16) setTime2("04:00 PM");
        else if(val===17) setTime2("05:00 PM");
        else if(val===18) setTime2("06:00 PM");
        else if(val===19) setTime2("07:00 PM");
        else if(val===20) setTime2("08:00 PM");
        else if(val===21) setTime2("09:00 PM");
        else if(val===22) setTime2("10:00 PM");
        else if(val===23) setTime2("11:00 PM");
    } 

    return (
      <div>
        
         <Box style={{display:'flex',justifyContent:"space-between",
        width:"40%",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        margin:"auto", marginTop:"30px", padding:"20px"
        }} flexDirection={{lg:'row',md:'row',sm:'column',base:'column'}}  >

        <Box>
        <Box  >
            <h2>{`${value.getDay()===0?"Sun":value.getDay()===1?"Mon":value.getDay()===2?"Tue"
            :value.getDay()===3?"Wed":value.getDay()===4?"Thu":value.getDay()===5?"Fri":value.getDay()===6?"Sat":""},
            ${value.getDate()}/${value.getMonth()+1}/${value.getFullYear()}
        `}</h2></Box>
        <Box>  {time1}</Box>
        </Box> 
          
          <Box><FaLongArrowAltRight fontSize='32px'  /></Box>
         <Box>
         <Box><h2>{`${value2.getDay()===0?"Sun":value2.getDay()===1?"Mon":value2.getDay()===2?"Tue"
            :value2.getDay()===3?"Wed":value2.getDay()===4?"Thu":value2.getDay()===5?"Fri":value2.getDay()===6?"Sat":""},
            ${value2.getDate()}/${value2.getMonth()+1}/${value2.getFullYear()}
        `}</h2></Box>
        <Box>{time2}</Box>
         </Box>

        </Box>

        <Box style={{display:'flex',justifyContent:"space-between",
        width:"70%",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        margin:"auto",marginTop:"20px", padding:"40px"
        }} flexDirection={{lg:'row',md:'row',sm:'column',base:'column'}}  >
            <Box><Calendar onChange={onChange} value={value}  /></Box>     
            <Box><Calendar onChange={onChange2} value={value2} /></Box>
        </Box>
{/* //------------------------------------------------ Slider1     -----------------------------------------------------------// */}

   <Box pt={6} pb={2} style={{display:'flex',justifyContent:"space-between",
        width:"75%",boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
        margin:"auto",marginTop:"20px",padding:"50px 10px"
        }}> Pick Up Time:
      <Slider aria-label='slider-ex-6' defaultValue={10} min={0} max={23} 
      onChange={ (val)=>handleSliderValue(val)}  >
        
        <SliderMark
          value={sliderValue}
          textAlign='center'
          bg='blue.500'
          color='white'
          mt='-10'
          ml='-5'
          w='15'
        >
          {time1}
        </SliderMark>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    </Box>      
{/* //------------------------------------------------ Slider 2  -----------------------------------------------------------// */}       

    <Box pt={6} pb={2} style={{display:'flex',justifyContent:"space-between",
        width:"75%",boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
        margin:"auto",padding:"50px 10px"
        }}> Drop Off Time:
      <Slider aria-label='slider-ex-6' defaultValue={10} min={0} max={23} 
      onChange={ (val)=>handleSliderValue2(val)}  >
        
        <SliderMark
          value={sliderValue2}
          textAlign='center'
          bg='blue.500'
          color='white'
          mt='-10'
          ml='-5'
          w='15'
        >
          {time2}
        </SliderMark>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    </Box>      

    <Box width="70%" margin='auto'  marginTop='20px' marginBottom='40px' >
    <Box width="10%" margin='auto' >
        <Button style={{backgroundColor:"#10a310" ,color:'white' }}  >Continue</Button>
    </Box>
    </Box>
      </div>
    );
}

export default Calender