// import { Box, Button, Flex, Select, Table, TableCaption, TableContainer, Tbody, Td, Text, Th, Thead, Tooltip, Tr } from '@chakra-ui/react'
// import React, { useEffect, useState } from 'react'


// const Users = () => {
//      const { Toast } = UseToastMsg();





//      return (
//           <Box>
          


//                <Box>
//                     <TableContainer>
//                          <Table variant='simple'>
//                               <TableCaption>Imperial to metric conversion factors</TableCaption>
//                               <Thead>
//                                    <Tr>
//                                         <Th>S.no</Th>
//                                         <Th>Username</Th>
//                                         <Th>Email</Th>
//                                         <Th>
//                                              <Select cursor={'pointer'}>
//                                                   <option defaultValue={'true'} value="all">All</option>
//                                                   <option value="active">Active</option>
//                                                   <option value="passive">Passive</option>
//                                              </Select>
//                                         </Th>
//                                         <Th>Details</Th>
//                                         <Th>Delete</Th>
//                                    </Tr>
//                               </Thead>
//                               <Tbody>
//                                 <p>jg</p>
//                               </Tbody>
//                          </Table>
//                     </TableContainer>
//                </Box>
//           </Box>

//      )
// }

// export default Users

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

export default Users