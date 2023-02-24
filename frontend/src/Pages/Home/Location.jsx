import React, { useState } from 'react'
import { Box, Button, Heading, Divider, Input  } from '@chakra-ui/react';
import {GrLocation, GrMapLocation} from "react-icons/gr"
import {TbCurrentLocation} from "react-icons/tb"
import { useNavigate } from 'react-router-dom';

const Location = () => {

const [location, setLocation] = useState(data1[0]);
const nav = useNavigate();
const handleLocation = (el)=>{
   setLocation(el)
};

const handleClick = ()=>{
  console.log(location);
  nav("/calender")
}


  return (
    <div>
        <Box style={{width:'65%', margin:'auto', marginTop:"80px",padding:"30px 0px",boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'}} >
          <Box style={{display:"flex",justifyContent:'space-evenly',alignItems:'center'}} >
            <Box width="40%" ><Input type="text" placeholder="Enter location" value={location}  /></Box>
            <Box style={{display:"flex", alignItems:"center"}} ><TbCurrentLocation fontSize='30px' /> Current Location</Box>
            <Box style={{display:"flex", alignItems:"center"}}><GrMapLocation fontSize='30px' />Select Location on Map</Box>
          </Box>

          <Box style={{display:"flex",justifyContent:'space-around',marginTop:"30px" , backgroundColor:'#f5f5f5',padding:"30px 0px" }}>

            <Box  >
              <Box>RECENTLY SEARCHED LOCATIONS</Box>
              {data1.map((el,i)=>(
                <Box  key={i} style={{height:"70px",
                display:"flex",borderRadius:"8px",
                 alignItems:"center",marginBottom:"6px",backgroundColor:'white',padding:"0px 8px",
                 marginTop:"6px", boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px'}}  
                  onClick={()=>handleLocation(el)}> <GrLocation fontSize='30px' /> {el}
                <hr /> </Box>
              ))}
            </Box>

            <Box >
            <Box>SUGGESTED PICK UP LOCATIONS</Box>
            {data2.map((el,i)=>(
                <Box  key={i} style={{height:"70px",boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',padding:"0px 8px",
                display:"flex", alignItems:"center",marginBottom:"6px",backgroundColor:'white',
                marginTop:"6px",borderRadius:"8px"}} 
                onClick={()=>handleLocation(el)} >
                  <GrLocation fontSize='30px' />{el}</Box>
              ))}
            </Box>

          </Box >
          <Box width="30%" margin='auto' marginTop='20px' >
          <Button style={{backgroundColor:"#10a310" ,color:'white' }} onClick={handleClick} >CONFIRM PICKUP LOCATION</Button>
          </Box>
           
        </Box>
    </div>
  )
}

export default Location


const data1 = ["Chandigarh International Airport", "Chandigarh bus stand"]

const data2 = [
  "Chandigarh International Airport","Chandigarh Railway Station", 'Chandiagrh, India', 'Chandiagrh bus stand',
  'Chandigarh University', 'Zirakpur Bus Stand'
]