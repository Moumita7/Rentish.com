import { Box, Flex, Grid } from "@chakra-ui/react";
import React from "react";
import ProductCard from "./ProductCard";
import ProductCardFilter from "./ProductCardFilter";

//CSS styling below
let main_content_area = {
  marginLeft: "2rem",
  marginRight: "2rem",
  border: "1px solid green",
  padding: "1rem",
};

let prod_flex_right = {
  padding: "0.5rem",
  border: "1px solid red",
  width: "100%",
};

//CSS styling ends here

const ProductListing = () => {
  return (
    <Flex className="main-content-area" style={main_content_area}>
      <ProductCardFilter />
      <Box className="prod-flex-right" style={prod_flex_right}>
        <Grid
          templateColumns="repeat(2,1fr)"
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
