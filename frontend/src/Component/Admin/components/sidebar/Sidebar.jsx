import { Box, Flex, Image, Text } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import React from 'react'
import './Sidebar.css'
import { useDispatch } from 'react-redux'
import {get_All_users} from "../../../../redux/AdminReducer/action"



const navigation = [  
     { path: '/users', title: 'Users', methods:get_All_users },
     { path: '/booking', title: 'Booking',methods:get_All_users },
     { path: '/cars', title: 'Cars',methods:get_All_users },
]


const Sidebar = () => {
     const dispatch=useDispatch()

     
     return (
          <Box>
               <Flex flexDir={'column'}>
                    {navigation.map((nav, i) => (
                         <NavLink to={nav.path} key={i} className={({ isActive }) => isActive ? "activelink" : ''}>
                              <Flex px='4' py='4' borderBottom={'1px'} borderColor='gray.200' textTransform={'uppercase'} fontSize={'1.1em'} fontWeight='semibold' color={'blackAlpha.800'} className='links' gap='10px'>
                                   {/* <Image src={nav.img} boxSize='25px' /> */}
                                   <Text onClick={()=>dispatch(nav.methods())}>{nav.title}</Text>
                                 
                              </Flex>
                         </NavLink>
                    ))}
               </Flex>
          </Box>
     )
}

export default Sidebar