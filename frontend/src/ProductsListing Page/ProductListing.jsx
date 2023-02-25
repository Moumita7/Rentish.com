import { Box, Flex, Grid, Show } from "@chakra-ui/react";
import React from "react";
import ProductCard from "./ProductCard";
import ProductCardFilter from "./ProductCardFilter";

//CSS styling below
let main_content_area = {
  marginLeft: "2rem",
  marginRight: "2rem",
  // border: "1px solid green",
  padding: "1rem",
  justifyContent: "center",
};

let prod_flex_right = {
  padding: "0.5rem",
  // border: "1px solid red",
  width: "100%",
};

//CSS styling ends here

const ProductListing = () => {
  return (
    <Flex
      className="main-content-area"
      direction={{ base: "column", md: "row" }}
      style={main_content_area}
    >
      <Show breakpoint="(min-width: 1200px)">
        <ProductCardFilter />
      </Show>
      <Box className="prod-flex-right" style={prod_flex_right}>
        <Grid
          templateColumns={["repeat(1,1fr)", "repeat(2,1fr)","repeat(3,1fr)"]}
          style={{ width: "100%", gap: "20px" }}
        >
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </Grid>
      </Box>
    </Flex>
  );
};

export default ProductListing;
