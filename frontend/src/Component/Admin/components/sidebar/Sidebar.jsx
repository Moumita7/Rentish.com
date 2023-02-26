import { Box, Flex, Image, Text } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import React from 'react'
import './Sidebar.css'


const navigation = [  
     { path: '/users/', title: 'Users', img: '/Admin-images/user-profile.png' },
     { path: '/admin/booking', title: 'Booking', img: '/Admin-images/order.png' },
     { path: '/admin/cars', title: 'Cars', img: '/Admin-images/cubes.png' },
     { path: '/admin/add-cars', title: 'Add Cars', img: '/Admin-images/add-to-basket.png' },
]


const Sidebar = () => {
     return (
          <Box>
               <Flex flexDir={'column'}>
                    {navigation.map((nav, i) => (
                         <NavLink to={nav.path} key={i} className={({ isActive }) => isActive ? "activelink" : ''}>
                              <Flex px='4' py='4' borderBottom={'1px'} borderColor='gray.200' textTransform={'uppercase'} fontSize={'1.1em'} fontWeight='semibold' color={'blackAlpha.800'} className='links' gap='10px'>
                                   <Image src={nav.img} boxSize='25px' />
                                   {nav.title}
                              </Flex>
                         </NavLink>
                    ))}
               </Flex>
          </Box>
     )
}

export default Sidebar