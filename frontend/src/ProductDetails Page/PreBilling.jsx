import { Box, Button, Checkbox, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { CiDeliveryTruck } from "react-icons/ci";
import { TbLetterA } from "react-icons/tb";
import { TbLetterB } from "react-icons/tb";
import { TbLetterC } from "react-icons/tb";

const outerStyle = {
  boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
  padding: "1rem",
  width: "450px",
  marginRight:"1rem",
  margin:"auto"
};

const PreBilling = () => {
  return (
    <Box style={outerStyle}>
      <Heading style={{ fontSize: "18px", marginBottom: "1rem" }}>
        Other Charges
      </Heading>
      <Flex>
        <CiDeliveryTruck size={25} />
        <Text style={{marginBottom:"2rem"}}>
          Convience Fee <s style={{color:"red"}}>(₹199)</s> ₹99
        </Text>
      </Flex>

      <Heading style={{ fontSize: "20px", marginBottom: "1rem" }}>
        Trip Protection Pacakge
      </Heading>

      <Flex style={{ alignItems: "center", justifyContent: "space-around" }}>
        <TbLetterA />
        <Box style={{borderBottom:"1px solid", paddingBottom:"2rem", paddingTop:"1rem"}}>
          <Text><b>Basic (₹ 569/-)</b></Text>
          <Text>You pay up to INR 3499 in case of any damage</Text>
        </Box>
        <Checkbox size='lg'></Checkbox>
      </Flex>
      <Flex style={{ alignItems: "center", justifyContent: "space-around" }}>
        <TbLetterB />
        <Box style={{borderBottom:"1px solid", paddingBottom:"2rem", paddingTop:"1rem"}}>
          <Text style={{color:"purple"}}><b>Saver (₹ 1009/-)</b></Text>
          <Text>You pay up to INR 1099 in case of any damage</Text>
          <Text style={{ color: "green" }}>Most Opted</Text>
        </Box>
        <Checkbox size='lg'></Checkbox>
      </Flex>
      <Flex style={{ alignItems: "center", justifyContent: "space-around" }}>
        <TbLetterC />
        <Box style={{borderBottom:"1px solid", paddingBottom:"2rem", paddingTop:"1rem"}}>
          <Text style={{color:"gold"}}><b>Gold (₹ 1700/-)</b></Text>
          <Text>You pay up to INR 399 in case of any damage</Text>
          <Text style={{ color: "green" }}>Value for Money</Text>
        </Box>
        <Checkbox size='lg'></Checkbox>
      </Flex>

      <Box
        style={{
          fontSize: "14px",
          marginTop: "4rem",
          padding: "1.5rem",
          backgroundColor: "lightgrey",
        }}
      >
        <Text style={{ fontSize: "16px", fontWeight: "bold" }}>
          How Trip Protection Works?
        </Text>
        <Text>
          {" "}
          Zoomcar will assist in damage repair costs up to the amount as per the
          maximum deductible limit. • Does not cover any third-party liability
          or any intentional damage or damage that occurred due to intoxication
          or high speed, rash, or negligent driving. • Please read Zoomcar
          policy to know more.
        </Text>
      </Box>

      <Box mt="3rem">
            <Heading mb="2rem" size="lg"><Text fontSize="sm">Total Price:</Text>₹ 20,450</Heading>
            <Button colorScheme='whatsapp' w="100%">Proceed to Pay</Button>
      </Box>
    </Box>
  );
};

export default PreBilling;
