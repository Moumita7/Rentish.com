import { Box } from '@chakra-ui/react';
import React from 'react'
import {useSelector, useDispatch} from "react-redux";
import {FaLongArrowAltRight} from "react-icons/fa";

const Result = () => {
 const home = useSelector((store)=>store.home)
const date = home.date
  return (
    <div>
        <Box style={{display:'flex',justifyContent:"space-between",
        width:"40%",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        margin:"auto", marginTop:"30px", padding:"20px"
        }} flexDirection={{lg:'row',md:'row',sm:'column',base:'column'}}  >

        <Box>
        <Box  >
            <h2>{`${date.startDate.getDay()===0?"Sun":date.startDate.getDay()===1?"Mon":date.startDate.getDay()===2?"Tue"
            :date.startDate.getDay()===3?"Wed":date.startDate.getDay()===4?"Thu":date.startDate.getDay()===5?"Fri":date.startDate.getDay()===6?"Sat":""},
            ${date.startDate.getDate()}/${date.startDate.getMonth()+1}/${date.startDate.getFullYear()}
        `}</h2></Box>
        <Box>  {date.startTime}</Box>
        </Box> 
          
          <Box><FaLongArrowAltRight fontSize='32px'  /></Box>
         <Box>
         <Box><h2>{`${date.endDate.getDay()===0?"Sun":date.endDate.getDay()===1?"Mon":date.endDate.getDay()===2?"Tue"
            :date.endDate.getDay()===3?"Wed":date.endDate.getDay()===4?"Thu":date.endDate.getDay()===5?"Fri":date.endDate.getDay()===6?"Sat":""},
            ${date.endDate.getDate()}/${date.endDate.getMonth()+1}/${date.endDate.getFullYear()}
        `}</h2></Box>
        <Box>{date.endTime}</Box>
         </Box>
         <Box>{home.city}/ {home.location}</Box>
        </Box>
          

    </div>
  )
}

export default Result