import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import ItemCarousel from "./ItemCarousel";

const images = [
  {
    url: "https://zoomcar-assets.zoomcar.com/48700/HostCarImage/host_car_image_48700b87f10d5-da83-4170-b152-0a590cf602ff.jpg20230115-38-rx2sim",
  },
  {
    url: "https://zoomcar-assets.zoomcar.com/48699/HostCarImage/host_car_image_48699ee1508c4-a75f-4c40-8b3e-e7dbe72e4176.jpg20230115-27-1e29how",
  },
  {
    url: "https://zoomcar-assets.zoomcar.com/48705/HostCarImage/host_car_image_48705877414a2-c3a1-45c2-819b-12e1fd651804.jpg20230208-55-htvsac",
  },
  {
    url: "https://zoomcar-assets.zoomcar.com/48697/HostCarImage/host_car_image_48697c70ac20f-3863-4e69-995d-b66c338a7ef1.jpg20230115-62-mlpl90",
  },
];

const ProductCard = ({ rating, title, desc, price, distance }) => {
  return (
    <Box style={{ border: "1px solid yellow", padding: "5px" }}>
      <ItemCarousel slidesImages={images} />

      {/* <Image
        src="https://zoomcar-assets.zoomcar.com/76250/HostCarImage/host_car_image_762503a59d15b-bac5-46e9-9492-866cd74ff8af.jpg20230120-40-1wcoaxg"
        width="95%"
        alt="car"
      /> */}
      <Box style={{ padding: "0.75rem" }}>
        <Text>⭐ Rating :D</Text>
        <Flex style={{ alignItems: "center", justifyContent: "space-between" }}>
          <Heading size="md">Honda Amaze</Heading>
          <Button colorScheme="purple">View More</Button>
        </Flex>
        <Text style={{ opacity: "0.5" }}>Manual . Petrol . 5 seats</Text>
        <Flex
          style={{
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Heading size="md">₹ 250/hr</Heading>
          <Text style={{ backgroundColor: "ghostwhite", padding: "0.2rem" }}>
            10.2 km away
          </Text>
        </Flex>
      </Box>
    </Box>
  );
};

export default ProductCard;
