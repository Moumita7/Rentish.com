import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FaUserTie } from "react-icons/fa";


const cardetailsdiv = {
  marginTop: "1.5rem",
  boxShadow:
    "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
  padding: "1rem",
};

const Cardetails = ({
  url,
  car_title,
  transmission,
  fuel_type,
  seats,
  hosted_by,
  owner,
  rating,
}) => {
    return (
      <Box style={cardetailsdiv}>
        <Flex
          direction={["column", "column", "row"]}
          style={{ directon: "space-between", gap: "200px" }}
        >
          <Box>
            <Heading>{car_title}</Heading>
            <Text style={{ color: "grey" }}>
              {transmission} . {fuel_type} . {seats}{" "}
              Seats
            </Text>
          </Box>

          <Box>
            <Flex style={{ gap: "1rem" }}>
              <Box>
                <FaUserTie size={40} />
              </Box>

              <Box>
                <Text>{owner}</Text>
                <Text style={{ fontSize: "14px", color: "purple" }}>
                  {hosted_by} {owner} 2022
                </Text>
              </Box>
            </Flex>
          </Box>
        </Flex>
        <Text style={{ padding: "0.5rem" }}>
          ⭐ {rating} - 51,000 kms driven
        </Text>
      </Box>
    );
  }

export default Cardetails;
