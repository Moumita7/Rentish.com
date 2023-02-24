import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import Cardetails from './Cardetails'
import GoogleMaps from './GoogleMaps'
import KeepinMind from './KeepinMind'
import PreBilling from './PreBilling'

const prod_deets_left_flex = {
    margin:"1%",
    boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
    padding:"1rem"
}


const ProductDetails = () => {
  return (
    <Flex direction={["column","column","row"]}>
        <Box className='prod-deets-left-flex' style={prod_deets_left_flex}>

           <Image h='350px' src='https://zoomcar-assets.zoomcar.com/48697/HostCarImage/host_car_image_48697c70ac20f-3863-4e69-995d-b66c338a7ef1.jpg20230115-62-mlpl90' alt='car' margin="auto"/>

            <Cardetails />

            <Text style={{padding:"0.5rem"}}>⭐ 5.0 - 51,000 kms driven</Text>

            <Flex direction={["column","column","row"]} style={{justifyContent:"space-between", marginTop:"1rem", alignItems:"center", margin:"auto"}}>
            <GoogleMaps />
            <KeepinMind />
            </Flex>
        </Box>


        <Box className='prod-bill-right-flex'>
            <PreBilling />
        </Box>
    </Flex>
  )
}

export default ProductDetails