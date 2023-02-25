import React, { useState } from 'react';
import { Box ,Image,Heading, SimpleGrid, Input, Select, Button, useToast} from '@chakra-ui/react';
import { Carousel } from './Carousel';
import HomepageTabs from "./HomepageTabs";
import {postCity} from "../../redux/HomeReducer/action";
import {useDispatch} from "react-redux";
import { useNavigate } from 'react-router-dom';

const Home = () => {
const [city, setCity] = useState(""); 
const dispatch  = useDispatch();
const nav = useNavigate();
const toast = useToast()

const handleCity = ()=>{
  if(city==""){
    toast({
      title: 'Select City First',
      status: 'error',
      duration: 2000,
      isClosable: true,
    })
  }
  else{
    console.log(city)
    dispatch(postCity(city))
    nav("/location")
  }
  
}


  return (
    <div>
        <Box>
  {/*---------------------------------------------    First image  --------------------------------------------------*/}
            <Box backgroundImage={"https://www.zoomcar.com/img/web_banner.jpg"} h="750px" border="1px solid white" > 
                <Box  style={{ border:"1px solid #585853", width:"70%", margin:"auto", marginTop:"100px",padding:"25px",backgroundColor:"#585853"}} > 
                    <Heading style={{color:"white",fontSize:"43px", textAlign:"center"}} >The perfect car for your next trip is just around the corner  </Heading>
                    <Heading style={{color:"white",fontSize:"30px", textAlign:"center",marginTop:"25px"}} > Book your drive now! </Heading>
                </Box>

                <Box style={{  width:"35%", margin:"auto", marginTop:"200px"}}>
                <Box style={{ border:"1px solid white", width:"100%",borderRadius:'25px',backgroundColor:"white"}}> 
                  <Select placeholder='Select City' variant='outline' borderRadius='25px'size='lg' value={city} onChange={(e)=>setCity(e.target.value)} >
                    <option value='chandigarh'>Chandigarh</option>
                    <option value='mumbai'>Mumbai</option>
                    <option value='delhi'>Delhi</option>
                  </Select>
                   </Box>
                   <Button style={{margin:'auto',width:'100%',backgroundColor:"#10a310" 
                   ,color:'white',marginTop:"20px",borderRadius:'25px'}}  onClick={handleCity}
                   >Find Cars</Button>
                </Box>
                
             </Box>
{/*---------------------------------------------    First Slider  --------------------------------------------------*/}
            <Heading style={{ textAlign:"center", marginTop:"50px"}} >CHOOSE FROM OUR WIDE RANGE OF CARS </Heading>

            <Box  style={{margin:"auto", marginTop:'90px', marginBottom:'120px',backgroundColor:'white', width:"96%" }} >
            <Carousel  
          dots= {false} infinite= {true}
          slidesToShow = {3}
          slidesToScroll= {1}
          autoplay= {true} autoplaySpeed= {3000} pauseOnHover= {true }
          Img={slider2}
          />
          </Box>
{/*---------------------------------------------    Second image  --------------------------------------------------*/}
            <Box backgroundImage={"https://zoomcar-assets.zoomcar.com/images/original/97c77ce8da5affded5e3c4bde712044a90728781.png?1672044755"} h="750px" border="1px solid white" > 
            <Box  style={{ border:"1px solid #585853", width:"70%", margin:"auto", marginTop:"100px",padding:"25px",backgroundColor:"#585853"}} >
                <Heading style={{color:"white",fontSize:"40px", textAlign:"center"}} >Largest car sharing marketplace</Heading>
                <Heading style={{color:"white",fontSize:"27px", textAlign:"center",marginTop:"25px"}} > Sedans for short distances, SUVs for tough terrains, luxury cars for surprises - we’ve got it all! </Heading>
                </Box>
             </Box>
{/*---------------------------------------------    Second Slider  --------------------------------------------------*/}
            <Heading style={{ textAlign:"center", marginTop:"50px"}} >UNMATCHED BENEFITS </Heading>
            <Heading style={{ textAlign:"center", marginTop:"20px",fontSize:"25px"}} >Drive everywhere with freedom </Heading>
            
            <Box width='90%' margin='auto' mt='70px'>
              <SimpleGrid minChildWidth='320px' spacing='40px' >
              <Box > <Image src='https://media.istockphoto.com/id/516174644/photo/driving-fast-on-the-forest.jpg?s=612x612&w=0&k=20&c=g2UsC3Hn8Ff6C4eQuJjbB1UqjBQGohMvG-xIgFqLM8A=' borderRadius='20px' width='100%' height='90%' alt='img1' /> </Box>
              <Box><Image src='https://img.freepik.com/premium-photo/driver-s-hand-holds-steering-wheel-car-vertical-view-travel-concept_97567-487.jpg?w=2000' width='100%' height='90%' borderRadius='20px' alt='img2'  />  </Box>
              <Box><Image src='https://media.istockphoto.com/id/504344649/photo/these-girls-packed-way-too-much.jpg?s=612x612&w=0&k=20&c=bx0vh7sJAk_8NylNQOJ4cUxK7tpfXLYCvSbQEIbUDdc=' borderRadius='20px' width='100%' height='90%' alt='img3'  />  </Box>
              </SimpleGrid>
            </Box>

            <Heading style={{ textAlign:"center", marginTop:"50px"}} >WE LOVE GIVING BEST EXPERIENCES </Heading>
            <Heading style={{ textAlign:"center", marginTop:"20px",fontSize:"23px",marginBottom:"60px"}} >We cover you under all the circumstances to ensure the best journey </Heading>
{/*---------------------------------------------    Third image  --------------------------------------------------*/}
            <Box backgroundImage={"https://zoomcar-assets.zoomcar.com/images/original/25371b7b5084fc451b0c3ec9eda278f791188c69.png?1672044863"} h="750px" border="1px solid #383838" > 
            <Box  style={{ border:"1px solid #585853", width:"50%", margin:"auto", marginTop:"100px",padding:"25px",backgroundColor:"#585853"}} > 
            <Heading style={{color:"white",fontSize:"40px", textAlign:"center"}} >Drive worry free with our cars!</Heading>
                <Heading style={{color:"white",fontSize:"27px", textAlign:"center",marginTop:"25px"}} >24X7 Roadside assistance whenever you need</Heading>
                </Box>
             </Box>
              <Box bg='#383838' color='white' >
              <HomepageTabs/>
              </Box>
        </Box>
    </div>
  )
}

export default Home



const slider2 = [
{img:'https://zoomcar-assets.zoomcar.com/photographs/original/7a07422936433c49cbdfb1f6554324ed43b14cb0.png?1663873694',price:"₹ 250 per hour", title:"KIA Sonet MT Petrol"},
{img:"https://zoomcar-assets.zoomcar.com/photographs/original/1e21626e16a18146a01051d48c8d596c02f2b7e4.png?1663876564",price:"₹ 150 per hour", title:"tata Tigor XZ MT Petrol"},
{img:"https://zoomcar-assets.zoomcar.com/photographs/original/a21d2ba781794d6c3f3e310c6a70b3d7c39cac89.png?1663876143",price:"₹ 160 per hour", title:"Triber MT Petrol"},
{img:"https://zoomcar-assets.zoomcar.com/photographs/original/766cddd02ab348157e42994ce7b64bad1c9ee634.png?1663875505",price:"₹ 130 per hour", title:"Nissan Magnite MT Petrol"},
{img:"https://zoomcar-assets.zoomcar.com/photographs/original/c540e8644d9058f676584853980dea54974242b5.png?1663873270",price:"₹ 130 per hour", title:"Hyundai Xcent AT Petrol"},
{img:"https://zoomcar-assets.zoomcar.com/photographs/original/42f650b8dee1baef441fef362e4a5efbd5b519a3.png?1663872410",price:"₹ 160 per hour", title:"Honda Amaze 1.2V MT Petrol"},
{img:"https://zoomcar-assets.zoomcar.com/photographs/original/b556e2f2c6f389b3793d0100529cde8f20d35be1.png?1663872428",price:"₹ 170 per hour", title:"Honda Amaze AT Petrol"},
{img:"https://zoomcar-assets.zoomcar.com/photographs/original/4d907a82c2c4302a44994b24e10faf0ea396d44f.png?1663873686",price:"₹ 250 per hour", title:"KIA Sonet MT Diesel"},
{img:"https://zoomcar-assets.zoomcar.com/photographs/original/f39bcb1945a5efd3a2462a14dbf39d8d06ceb0aa.png?1663873982",price:"₹ 180 per hour", title:"Mahindra TUV300 MT Diesel"},
{img:"https://zoomcar-assets.zoomcar.com/photographs/original/9fbe42c6dec2f9b14e99b47f455476d3a316062f.png?1663874087",price:"₹ 200 per hour", title:"Mahindra XUV500 MT Diesel"},
{img:"https://zoomcar-assets.zoomcar.com/photographs/original/37ec28208771df03215d2753aa75f20b6ddc9aa7.png?1663873204",price:"₹ 170 per hour", title:"Hyundai Venue MT Diesel"},
{img:"https://zoomcar-assets.zoomcar.com/photographs/original/14a199efc141a4279be3d232c528cdd4d79acfdc.png?1663873624",price:"₹ 320 per hour", title:"KIA Seltos AT Petrol"}
];