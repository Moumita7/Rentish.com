import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
// import ItemCarousel from "./ItemCarousel";


const ProductCard = ({ rating, car_title, transmission, fuel_type,seats,per_hour_charge, km_away,url }) => {
  // console.log(imgs);
  return (
    <Box style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", padding: "5px" }}>
      <Image src={url[0]}/>
      {/* <ItemCarousel slidesImages={url} /> */}

      <Box style={{ padding: "0.75rem" }}>
        <Text>⭐ Rating : {rating}</Text>
        <Flex style={{ alignItems: "center", justifyContent: "space-between" }}>
          <Heading size="md">{car_title}</Heading>
          <Button colorScheme="green">View More</Button>
        </Flex>
        <Text style={{ opacity: "0.5" }}>{transmission} . {fuel_type} . {seats} seats</Text>
        <Flex
          style={{
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Heading size="md">₹ {per_hour_charge}/hr</Heading>
          <Text style={{ backgroundColor: "ghostwhite", padding: "0.2rem" }}>
            {km_away} km away
          </Text>
        </Flex>
      </Box>
    </Box>
  );
};

export default ProductCard;
