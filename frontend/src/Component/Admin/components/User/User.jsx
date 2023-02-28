
import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Flex, Heading, Image, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
// import { getAllUser } from '../../../../../../backend/controllers/user.controllers';
import { get_All_users } from '../../../../redux/AdminReducer/action';


const Users = () => {
  const dispatch=useDispatch()
  const { users } = useSelector((store) => store.admin);
  console.log("users",users)
useEffect(()=>{
  dispatch( get_All_users())
  
},[])
// console.log("usersss",users)

  return (
    
    <div>
     <SimpleGrid columns={[1,2, 3, 4]} spacing='40px' w="90%" m="auto">
    {users.map((ele)=>(
     <Box p="8" bg={"green.100"} borderRadius="10" display={"flex"} flexDir="column" alignItems={"center"} justifyContent={"center"}>
     <Box  >
      <Image w="20"  src={ele.avatar} />
     </Box>
      <Heading size={"md"}>{ele.name}</Heading>
      <Text fontSize={"sm"}>{ele.email}</Text>
      <Text>{ele.phone}</Text>
      <Text>{ele.city}</Text>
      <Text>{ele.gender}</Text>
      <Text>{ele.isActive}</Text>
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

export default Users