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
  useDisclosure,
  Select,
  Image,
  InputLeftElement,
  useToast,
} from '@chakra-ui/react';
import { useState,useReducer } from 'react';
import { Link } from 'react-router-dom';
import { ViewIcon, ViewOffIcon,PhoneIcon } from '@chakra-ui/icons';
import { useDispatch } from "react-redux";
import { signUp } from "../../redux/AuthReducer/action";
import { useNavigate } from "react-router-dom";



const initialState = {
  name: "",
  email: "",
  password: "",
  phone: "",
  city: "",
  gender:""
};
const reducer = (state, action) => {
  switch (action.type) {
    case "name":
      return { ...state, name: action.payload };
    case "email":
      return { ...state, email: action.payload };
    case "password":
      return { ...state, password: action.payload };
    case "phone":
      return { ...state, phone: action.payload };
    case "city":
      return { ...state, city: action.payload };
      case "gender":
      return { ...state, gender: action.payload };
    default:
      return state;
  }
};

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { onClose } = useDisclosure();
  const toast = useToast();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [state, setState] = useReducer(reducer, initialState);

  const hanldeSignUp = () => {
    dispatch(signUp(state, toast, navigate)).then(() => {
      onClose();
      localStorage.setItem("userName",state.name)
    });
  };

  return (
    <Flex
      >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={3}>
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
          Enter details to sign-up
          </Heading>
          <Stack spacing={4}>
            {/* <HStack> */}
              <Box>
                {/* <FormControl id="firstName" > */}
                <FormControl id="firstName" isRequired >

                  <FormLabel color={"#00BE2D"}>Full Name</FormLabel>

                  <Input  type="text" outline='none'
                  value={state.name}
                  placeholder="Name"
                  onChange={(e) =>
                    setState({ type: "name", payload: e.target.value })
                  }  />
                </FormControl>
              </Box>    
            <FormControl id="email" isRequired >
              <FormLabel color={"#00BE2D"}>Email address</FormLabel>
              <Input type="email" 
                  value={state.email}
                  onChange={(e) =>
                    setState({ type: "email", payload: e.target.value })
                  }
               />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel color={"#00BE2D"}  >Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? 'text' : 'password'}
                 placeholder="Password"
                  value={state.password}
                  onChange={(e) =>
                    setState({ type: "password", payload: e.target.value })
                  }
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
          
            <FormControl id="city" isRequired>
              <FormLabel color={"#00BE2D"}>Enter City</FormLabel>
              <Input type="text" 
                  value={state.city}
                  onChange={(e) =>
                    setState({ type: "city", payload: e.target.value })
                  }
                
              />
            </FormControl>
              {/* phone */}
              <InputGroup >
              <InputLeftElement>
              <PhoneIcon/>
            
              </InputLeftElement>
              <Input placeholder='Enter Mobile Number'
                     type="number"
                  value={state.phone}
                  onChange={(e) =>
                    setState({ type: "phone", payload: e.target.value })
                  }
              />
            </InputGroup>
<FormControl id="gender" isRequired>
                  <FormLabel color={"#00BE2D"}>Gender</FormLabel>

                  <Input  type="text" outline='none'
                  value={state.gender}
                  placeholder="gen"
                  onChange={(e) =>
                    setState({ type: "gender", payload: e.target.value })
                  }  />
                </FormControl>

            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={' #00BE2D'}
                color={'white'}
                onClick={hanldeSignUp}
                _hover={{
                  bg: '#00BE2D'}}>
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                Already a user? <Link to="/login" color={'#00BE2D'}>Login</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}

export default Register








