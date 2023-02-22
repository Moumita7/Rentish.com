// import React from 'react'
import React, { useContext, useEffect, useState } from 'react'
// import { authContext } from '../../routs/AuthContext';
import {
  Box, Text, Flex, Button, Drawer, DrawerOverlay, DrawerContent, DrawerBody, useDisclosure, ButtonGroup,Image
} from "@chakra-ui/react"
import "./navbar.css";
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const handlelogout=()=>{

  }

  return (
    <>
    <div className="navv">
        <div>
      <div className='imgg'>
   
        <img src={"https://user-images.githubusercontent.com/97180521/220604385-412b2f4a-f2eb-4a5a-a8e2-e2d018647c3b.png"} alt="ZeeApp Logo" className="nav-logo" />
      </div>
      </div>
      <div className='right_menu'>
      <Button borderRadius={"50px"} gap="4"><Image w={"8"}  src={"https://user-images.githubusercontent.com/97180521/220669627-a30e600e-5ba1-4156-b85e-69b7a9d18c2c.png"}/> Become a host</Button>

      <div className='navv-linkss' id="navv-link">
     
          <Link to='/userdashboard'> <button className='admin-button'>USER</button></Link>

        <button className='login-button' onClick={handlelogout}>LOGIN</button>
      </div>

      <div className='hum'>
  

        <Flex alignItems="center" className="hum-Menu" >
          <Button  className='ham-btn' onClick={onOpen}>
            <GiHamburgerMenu className='ham_new' />
          </Button>
          <Drawer placement={"right"} onClose={onClose} isOpen={isOpen} >
            <DrawerOverlay />
            <DrawerContent >
              <DrawerBody bgColor={"rgb(15,6,23)"} color={"white"} display={"grid"} gap={"10px"} className='hum-link'>
         
                <p>home</p>

                <p>Settings</p>
                <p>Help Centre</p>
                <p>Privecy Policy</p>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Flex>
      </div>
    </div>
    </div>
  </>
  )
}

export default Navbar