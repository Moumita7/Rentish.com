import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { FaUserTie } from "react-icons/fa";

const cardetailsdiv = {
  marginTop: "1.5rem",
  boxShadow:
    "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
  padding: "1rem",
};

const Cardetails = () => {
  return (
    <Box style={cardetailsdiv}>
      <Flex direction={["column","column","row"]} style={{ directon: "space-between", gap: "200px" }}>
        <Box>
          <Heading>Hyundai Venue AT Petrol 2021</Heading>
          <Text style={{ color: "grey" }}>
            Venue . Automatic . Petrol . 5 Seats
          </Text>
        </Box>

        <Box>
          <Flex style={{ gap: "1rem" }}>
            <Box>
              <FaUserTie size={40} />
            </Box>

            <Box>
              <Text>Dua Lipa</Text>
              <Text style={{fontSize:"14px", color:"purple"}}>Rentish Host since 2022</Text>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Cardetails;
