import {
  Box,
  Button,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const FirstChild = ({ status, price }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const selectAUPIApp = [
    {
      url: "https://zoomcar-assets.zoomcar.com/images/original/4aef7198237a74ac187c75d270f8d516cfaa5e9b.png?1584453889",
      title: "Google Pay",
    },
    {
      url: "https://zoomcar-assets.zoomcar.com/images/original/2f05f4e5f91bf2f481569c3a3c4345b2cf447ff7.png?1584453837",
      title: "PhonePe",
    },
    {
      url: "https://zoomcar-assets.zoomcar.com/images/original/91871c2e202fd271724063a4a38033612d37c219.png?1584602070",
      title: "Paytm UPI",
    },
  ];

  return (
    <Box display={status ? "block" : "none"} padding="10px 10px">
      <Box display="flex">
        <Box width="70%">
          <Box
            display="flex"
            justifyContent="space-between"
            height="100px"
            alignItems="center"
            // border="1px solid blue"
            width="100%"
          >
            <Box>
              <Text fontWeight="600">Select a UPI App</Text>
              <Text fontSize="14px" color="gray">
                Amount: ₹{price}
              </Text>
            </Box>
            <Box>
              <Image
                src="https://www.zoomcar.com/build/760ee3019ff287f2caed7e40c92b1ca5.png"
                width="30px"
                height="30px"
              />
            </Box>
          </Box>
          <Box display="flex" flexDirection="column" gap="20px 0px">
            {selectAUPIApp.map((ele, i) => {
              return (
                <Accordion defaultIndex={[0]} allowMultiple key={i}>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box
                          as="span"
                          flex="1"
                          textAlign="left"
                          display="flex"
                          height="50px"
                          alignItems="center"
                          gap="5px 10px"
                        >
                          <Box width="40px" height="40px">
                            <Image src={ele.url} />
                          </Box>
                          <Box>
                            <Text>{ele.title}</Text>
                          </Box>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <Box height="60px" display="flex" gap="10px">
                        <Input
                          placeholder="Enter Upi Id"
                          height="100%"
                          width="70%"
                        />
                        <Button
                          height="100%"
                          padding="0px 10px"
                          bg="
                          #10a310 "
                          onClick={()=> onOpen()}
                        >
                          Verify & Pay
                        </Button>
                      </Box>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              );
            })}
          </Box>
        </Box>

        <Box
          width="30%"
          display="flex"
          alignItems="center"
          justifyContent="center
        "
        >
          <Box
            display="flex"
            flexDirection="column"
            gap="10px 0px"
            padding="10px"
          >
            <Text textAlign="center">Scan QR code</Text>
            <Box>
              <Image src="https://www.zoomcar.com/build/a148f34bec5de262d7bb5f6356fa348e.png" />
            </Box>
            <Link href="#" color="#10a310">
              Click to see QR code
            </Link>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Image src="https://www.zoomcar.com/build/b0e4e02f6e16bd9e2a822cfe5348cab8.svg" />
              <Image src="https://www.zoomcar.com/build/02e647c26b018da43502ffbb4f3a5801.svg" />
              <Image src="https://www.zoomcar.com/build/3ef19a1071cc8527266cd278b3782406.svg" />
            </Box>
          </Box>
        </Box>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Payment</ModalHeader>
          <ModalCloseButton />
          <ModalBody display="flex" justifyContent="center" alignItems="center">
            <Image src="https://fcs3pub.s3.amazonaws.com/photo-book/images/payment/success.gif"/>
          </ModalBody>
          <ModalFooter display="flex" justifyContent="center" alignItems="center">
            <Button colorScheme="blue"  onClick={onClose}> 
              <Link to="/">Go To Home</Link>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default FirstChild;
