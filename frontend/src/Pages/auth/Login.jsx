import React from 'react'
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Icon,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  // Link,
  Select,
  Image,
  useToast,
  useDisclosure,
  InputLeftElement
} from '@chakra-ui/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ViewIcon, ViewOffIcon,PhoneIcon } from '@chakra-ui/icons';
import { useDispatch } from "react-redux";
import { LoginUser } from "../../redux/AuthReducer/action";
import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //

  // const tok = useSelector((store) => store?.AuthReducer?.token);
  // const token = localStorage.getItem("token") || tok;
  // console.log(token)
  // // const navigate = useNavigate();
  // // const token = localStorage.getItem("token");
  // const handleLogout = () => {
  //   localStorage.removeItem("token");
  //   localStorage.removeItem("userId");
  //   navigate("/");
  // };

  const hanldeLogin = () => {
    const payload = {
      email,
      password,
    };
    dispatch(LoginUser(payload, toast, navigate)).then(() => {
      onClose();
    });
  };





  return (
    <>
     {/* {!token && <Login />} */}
    <Flex
      >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={3}>
        {/* <Stack align={'center'}>
        
          
        </Stack> */}
       
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.300')}
          boxShadow={'lg'}
          pl={8}
          pr={8}
          pb={8}
          >
          <Image w="100%" src='https://www.zoomcar.com/build/fb65fcc43b8bededb813e093ea2d47d3.svg'/>
          <Heading pt="10" pb="10" fontSize={'4xl'} textAlign={'center'}>
          Enter details to Login
          </Heading>
          <Stack spacing={4}>
            {/* <HStack> */}
              <Box>
              
              </Box>    
            <FormControl id="email" isRequired>
              <FormLabel color={"#00BE2D"}>Email address</FormLabel>
              <Input type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel color={"#00BE2D"}  >Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? 'text' : 'password'} 
                   value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
          
  
              {/* phone */}
              {/* <InputGroup isRequired>
              <InputLeftElement>
              <PhoneIcon/>
            
              </InputLeftElement>
              <Input placeholder='Enter Mobile Number'/>
            </InputGroup> */}
            <Stack spacing={10} pt={2}>
            {/* {token ? 
              <Button
          
                size="lg"
                bg={' #00BE2D'}
                color={'white'}
                
               onClick={handleLogout}>Sign out</Button>: */}
              <Button
                loadingText="Submitting"
                size="lg"
                bg={' #00BE2D'}
                color={'white'}
                _hover={{
                  bg: '#00BE2D',
                }}
                onClick={hanldeLogin}
                >
                Login
              </Button>
           //
              {/* }  */}
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                Dont Have an Account? <Link to="/signup" color={'#00BE2D'}>Sign Up</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
    </>
  )
}

export default Login