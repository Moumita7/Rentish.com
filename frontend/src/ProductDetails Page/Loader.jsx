import { Box, Center, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

const Loader = () => {
  return (
    <>
      <Heading style={{ textAlign: "center" }}>Please wait</Heading>
      <Center>
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif?20170503175831"
          alt="loader"
          width="10%"
        />
      </Center>
      <Text style={{ textAlign: "center", fontSize: "20px" }}>
        while we load the details
      </Text>
    </>
  );
};

export default Loader;
