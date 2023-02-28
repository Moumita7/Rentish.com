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
  Center,
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
  const userDetailsFromLs =
    JSON.parse(localStorage.getItem("userDetails")) || null;
  // console.log(" userDetailsFromLs", userDetailsFromLs.userName);

  const isAdmin = userDetailsFromLs?.admin;
  // console.log(" admin",isAdmin);

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

          <Box display={"flex"} gap="5" className="navv-linkss" id="navv-link">
            {isAdmin == true ? (
              <Link to={"/admin"}>
                <button className="login-button">admin</button>
              </Link>
            ) : null}

            {token ? (
              <Link to="/profile">
                <Text color={"white"}>
                  {userDetailsFromLs ? userDetailsFromLs.userName : ""}
                </Text>
              </Link>
            ) : (
              <Link to="/login">
                <button className="login-button">Login</button>
              </Link>
            )}
          </Box>

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
                    <Box
                      display={"flex"}
                      gap="5"
                      bg={"blackAlpha.900"}
                      justifyContent="center"
                      borderRadius={"20"}
                      flexDir="column"
                      alignItems={"center"}
                      textAlign="center"
                      mb={"5"}
                      h={"auto"}
                    >
                      <Image
                        w="20"
                        h="20"
                        borderRadius={"50"}
                        src="https://png.pngtree.com/png-vector/20190223/ourmid/pngtree-profile-glyph-black-icon-png-image_691589.jpg"
                      />
                      <Flex flexDir={"column"}>
                        <Text color={"white"}>
                          {userDetailsFromLs ? userDetailsFromLs.userName : ""}
                        </Text>

                        <Text>
                          {userDetailsFromLs ? userDetailsFromLs.email : ""}
                        </Text>
                        {/* <Text color={"black"}>credit</Text> */}

                        <Text>
                          {userDetailsFromLs ? userDetailsFromLs.phone : ""}
                        </Text>
                      </Flex>
                    </Box>
                    {/* <Text color={"black"}>credit</Text>
                    <Text color={"black"}>city</Text> */}
                    <Link>
                      {" "}
                      <Center>
                        {" "}
                        <Button
                          bg=" #00BE2D"
                          onClick={handleLogout}
                          color={"black"}
                        >
                          Log out
                        </Button>
                      </Center>
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
