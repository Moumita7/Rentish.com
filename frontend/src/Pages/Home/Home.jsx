import React from 'react'
import { Box ,Image,Heading} from '@chakra-ui/react'
import { Carousel } from './Carousel'

const Home = () => {
  return (
    <div>
        <Box>
  {/*---------------------------------------------    First image  --------------------------------------------------*/}
            <Box backgroundImage={"https://www.zoomcar.com/img/web_banner.jpg"} h="750px" border="1px solid white" > 
                <Box  style={{ border:"1px solid #585853", width:"70%", margin:"auto", marginTop:"100px",padding:"25px",backgroundColor:"#585853"}} > 
                    <Heading style={{color:"white",fontSize:"43px", textAlign:"center"}} >The perfect car for your next trip is just around the corner  </Heading>
                    <Heading style={{color:"white",fontSize:"30px", textAlign:"center",marginTop:"25px"}} > Book your drive now! </Heading>
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
            <Heading mt={'40px'} mb="40px" > Slider 2 </Heading>

{/*---------------------------------------------    Third image  --------------------------------------------------*/}
            <Box backgroundImage={"https://zoomcar-assets.zoomcar.com/images/original/25371b7b5084fc451b0c3ec9eda278f791188c69.png?1672044863"} h="750px" border="1px solid white" > 
            <Box  style={{ border:"1px solid #585853", width:"70%", margin:"auto", marginTop:"100px",padding:"25px",backgroundColor:"#585853"}} > 
            <Heading style={{color:"white",fontSize:"40px", textAlign:"center"}} >Drive worry free with our cars!</Heading>
                <Heading style={{color:"white",fontSize:"27px", textAlign:"center",marginTop:"25px"}} >24X7 Roadside assistance whenever you need</Heading>
                </Box>
             </Box>

        </Box>
    </div>
  )
}

export default Home



const slider2 = [
{img:'https://zoomcar-assets.zoomcar.com/photographs/original/7a07422936433c49cbdfb1f6554324ed43b14cb0.png?1663873694',price:" RS 250 per hour", title:"KIA Sonet MT Petrol"},
{img:"https://zoomcar-assets.zoomcar.com/photographs/original/1e21626e16a18146a01051d48c8d596c02f2b7e4.png?1663876564",price:"RS 150 per hour", title:"tata Tigor XZ MT Petrol"},
{img:"https://zoomcar-assets.zoomcar.com/photographs/original/a21d2ba781794d6c3f3e310c6a70b3d7c39cac89.png?1663876143",price:"RS 160 per hour", title:"Triber MT Petrol"},
{img:"https://zoomcar-assets.zoomcar.com/photographs/original/766cddd02ab348157e42994ce7b64bad1c9ee634.png?1663875505",price:"RS 130 per hour", title:"Nissan Magnite MT Petrol"},
{img:"https://zoomcar-assets.zoomcar.com/photographs/original/c540e8644d9058f676584853980dea54974242b5.png?1663873270",price:"RS 130 per hour", title:"Hyundai Xcent AT Petrol"},
{img:"https://zoomcar-assets.zoomcar.com/photographs/original/42f650b8dee1baef441fef362e4a5efbd5b519a3.png?1663872410",price:"RS 160 per hour", title:"Honda Amaze 1.2V MT Petrol"},
{img:"https://zoomcar-assets.zoomcar.com/photographs/original/b556e2f2c6f389b3793d0100529cde8f20d35be1.png?1663872428",price:"RS 170 per hour", title:"Honda Amaze AT Petrol"},
{img:"https://zoomcar-assets.zoomcar.com/photographs/original/4d907a82c2c4302a44994b24e10faf0ea396d44f.png?1663873686",price:"RS 250 per hour", title:"KIA Sonet MT Diesel"},
{img:"https://zoomcar-assets.zoomcar.com/photographs/original/f39bcb1945a5efd3a2462a14dbf39d8d06ceb0aa.png?1663873982",price:"RS 180 per hour", title:"Mahindra TUV300 MT Diesel"},
{img:"https://zoomcar-assets.zoomcar.com/photographs/original/9fbe42c6dec2f9b14e99b47f455476d3a316062f.png?1663874087",price:"RS 200 per hour", title:"Mahindra XUV500 MT Diesel"},
{img:"https://zoomcar-assets.zoomcar.com/photographs/original/37ec28208771df03215d2753aa75f20b6ddc9aa7.png?1663873204",price:"RS 170 per hour", title:"Hyundai Venue MT Diesel"},
{img:"https://zoomcar-assets.zoomcar.com/photographs/original/14a199efc141a4279be3d232c528cdd4d79acfdc.png?1663873624",price:"RS 320 per hour", title:"KIA Seltos AT Petrol"}
];