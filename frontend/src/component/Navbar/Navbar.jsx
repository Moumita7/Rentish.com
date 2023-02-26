// import React from 'react'
import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
// import { authContext } from '../../routs/AuthContext';
import {
  Box,
  Text,
  Flex,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  useDisclosure,
  ButtonGroup,
  Image,
} from "@chakra-ui/react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const tok = useSelector((store) => store?.AuthReducer?.token);
  const { registerUser } = useSelector((store) => store?.AuthReducer);
  // console.log(registerUser)
  const token = localStorage.getItem("token");
  console.log(token);
  const isAdmin = localStorage.getItem("isAdmin");
  const userDetailsFromLs = JSON.parse(localStorage.getItem("userDetails"));
  console.log(" userDetailsFromLs", userDetailsFromLs.userName);

  const [tryy, setTryy] = useState(true);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("isAdmin");
    localStorage.removeItem("userName");

    navigate("/");
  };

  return (
    <>
      <div className="navv">
        <div>
          <div className="imgg">
            <Link to="/">
              {" "}
              <img
                src={
                  "https://user-images.githubusercontent.com/97180521/220604385-412b2f4a-f2eb-4a5a-a8e2-e2d018647c3b.png"
                }
                alt="ZeeApp Logo"
                className="nav-logo"
              />
            </Link>
          </div>
        </div>
        <div className="right_menu">
          <Button borderRadius={"50px"} gap="4">
            <Image
              w={"8"}
              src={
                "https://user-images.githubusercontent.com/97180521/220669627-a30e600e-5ba1-4156-b85e-69b7a9d18c2c.png"
              }
            />{" "}
            Become a host
          </Button>

          <div className="navv-linkss" id="navv-link">
            {isAdmin === "true" ? (
              <Link to={"/admin"}>
                <button className="login-button">admin</button>
              </Link>
            ) : null}

            {/* {
        token?
        <Link to="/profile"> <Text color={"white"}>
        {userDetailsFromLs.name? userDetailsFromLs.name: <Link to='/login'><button className='login-button' >Login</button></Link> }
        </Text></Link> 
          :
          <Link to='/login'><button className='login-button' >Login</button></Link>
     
       } */}
            {/* 
       {
        token.length>0?
       <Link to="/profile"> <Text  color={"white"} >{userDetailsFromLs.name}</Text></Link>
       :
       <Link to='/login'><button className='login-button' >Login</button></Link>

       } */}

            {/* <Link to='/login'><button className='login-button' >Login</button></Link> */}

            {token ? (
              <Link to="/profile">
                <Text color={"white"}>{userDetailsFromLs.userName}</Text>
              </Link>
            ) : (
              <Link to="/login">
                <button className="login-button">Login</button>
              </Link>
            )}
          </div>

          <div className="hum">
            <Flex alignItems="center" className="hum-Menu">
              <Button className="ham-btn" onClick={onOpen}>
                <GiHamburgerMenu className="ham_new" />
              </Button>
              <Drawer placement={"right"} onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                  <DrawerBody
                    bgColor={"white"}
                    color={"white"}
                    display={"grid"}
                    className="hum-link"
                  >
                    {/* box */}
                    <Box display={"flex"} gap="5" bg={"black"} h="auto">
                      <Image
                        w="20"
                        h="20"
                        borderRadius={"50"}
                        src="https://png.pngtree.com/png-vector/20190223/ourmid/pngtree-profile-glyph-black-icon-png-image_691589.jpg"
                      />
                      <Flex flexDir={"column"}>
                        <Text>{registerUser && registerUser.name}</Text>

                        <Text>{registerUser && registerUser.email}</Text>
                        {/* <Text color={"black"}>credit</Text> */}

                        <Text>{registerUser && registerUser.phone}</Text>
                      </Flex>
                    </Box>
                    <Text color={"black"}>credit</Text>
                    <Text color={"black"}>city</Text>
                    <Link>
                      {" "}
                      <Button onClick={handleLogout} color={"black"}>
                        Log out
                      </Button>
                    </Link>
                  </DrawerBody>
                </DrawerContent>
              </Drawer>
            </Flex>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
