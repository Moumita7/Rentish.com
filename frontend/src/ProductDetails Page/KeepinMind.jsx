import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { HiOutlineIdentification } from "react-icons/hi";
import { GiGasPump } from "react-icons/gi";
import { BsFillCreditCardFill } from "react-icons/bs";

const outerStyle = {
boxShadow: "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
  padding: "2rem",
  width: "400px",
  margin: "auto",
};

const KeepinMind = () => {
  return (
    <Box style={outerStyle}>
      <Heading style={{ marginBottom: "1rem", gap: "15px", color: "darkgray" }}>
        Keep in Mind
      </Heading>

      <Flex style={{ marginBottom: "1rem", gap: "15px" }}>
        <HiOutlineIdentification size={25} />
        <Text style={{ color: "Red" }}>* Driving License Mandatory</Text>
      </Flex>
      <Flex style={{ marginBottom: "1rem", gap: "15px" }}>
        <GiGasPump size={55} />
        <Text style={{ color: "green" }}>Fare & Fuel Policy</Text>
        <Text>
          Fare is inclusive of all taxes. Kindly return the car at the same fuel
          level as the trip start time
        </Text>
      </Flex>
      <Flex style={{ marginBottom: "1rem", gap: "15px" }}>
        <BsFillCreditCardFill size={25} />
        <Text>Hassle free cancellations and refunds at nominal charges</Text>
      </Flex>
      <Flex style={{ marginBottom: "1rem", gap: "15px" }}>
        <HiOutlineIdentification size={65} />
        <Text style={{ color: "green" }}>Agreement Policy</Text>
        <Text>
          I hereby agree to the terms and conditions of the Lease Agreement with
          Host
        </Text>
      </Flex>
    </Box>
  );
};

export default KeepinMind;
