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
    <Box p="8" bg={"green.100"}>
    <Box  p="10">
     <Image src={ele.avatar} />
    </Box>
     <Heading size={"md"}>{ele.name}</Heading>
     <Text fontSize={"sm"}>{ele.email}</Text>
     <Text>{ele.phone}</Text>
     <Text>{ele.city}</Text>
     <Text>{ele.gender}</Text>
     <Text>{ele.isActive}</Text>
     <Flex justifyContent={"space-between"}>
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