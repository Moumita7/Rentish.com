import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
// import { getAllUser } from '../../../../../../backend/controllers/user.controllers';
import { get_All_cars, get_All_users } from '../../../../redux/AdminReducer/action';
import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Flex, Heading, Image, SimpleGrid, Stack, Text } from '@chakra-ui/react';



const Cars = () => {
  const dispatch=useDispatch()
  const { cars } = useSelector((store) => store.admin);
  console.log("cars",cars)

useEffect(()=>{
  dispatch( get_All_cars())
  
},[])
  return (
    <div>
    <SimpleGrid columns={[1,2, 3, 4]} spacing='40px' w="90%" m="auto">
   {cars.map((ele)=>(
    <Box p="8" bg={"green.100"} borderRadius="10" display={"flex"} flexDir="column" alignItems={"center"} justifyContent={"center"}>

    <Box >
     <Image src={ele.url[0]} />
    </Box>
     <Heading size={"md"}>{ele.car_title}</Heading>
     <Text fontSize={"sm"}>rating {ele.rating}</Text>
     <Text>City {ele.city}</Text>
     <Text>seats {ele.seats}</Text>
     <Text>transmission {ele.transmission}</Text>
     <Flex justifyContent={"space-between"} gap="4">
       <Button>Update</Button>
       <Button>Delete</Button>
     </Flex>
    </Box>
       
   ))}
     </SimpleGrid> 
   </div>
  )
}

export default Cars