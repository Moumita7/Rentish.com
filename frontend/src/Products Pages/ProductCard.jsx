import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

const ProductCard = ({ rating, title, desc, price, distance }) => {
  return (
    <Box style={{ border: "1px solid yellow" }}>
      <Image
        src="https://zoomcar-assets.zoomcar.com/76250/HostCarImage/host_car_image_762503a59d15b-bac5-46e9-9492-866cd74ff8af.jpg20230120-40-1wcoaxg"
        width="100%"
        alt="car"
      />
      <Box style={{ padding: "0.75rem" }}>
        <Text>⭐ Rating :D</Text>
        <Heading size="md">Honda Amaze</Heading>
        <Text style={{ opacity: "0.5" }}>Manual . Petrol . 5 seats</Text>
        <Flex
          style={{
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Heading size="md"> 250/hr</Heading>
          <Text style={{ backgroundColor: "ghostwhite", padding: "0.2rem" }}>
            10.2 km away
          </Text>
        </Flex>
      </Box>
    </Box>
  );
};

export default ProductCard;
