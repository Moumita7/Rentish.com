import { Box, Flex, Grid, Show } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import ProductCardFilter from "./ProductCardFilter";
import axios from "axios";
import { Link } from "react-router-dom";

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
  const [data, setData] = useState([]);

  const handleFetch = async () => {
    let authToken = localStorage.getItem("token");
  try {
    const res = await axios.get(
      "https://worrisome-tick-tights.cyclic.app/cars",
      {
        headers: {
          Authentication: authToken,
        },
      }
    );

    setData(res.data.data);
    
  } catch (error) {
    console.log(error)
  }
    
    // tokenFetcher();
  };

  useEffect(() => {
    handleFetch();
  }, []);

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
          templateColumns={["repeat(1,1fr)", "repeat(2,1fr)", "repeat(3,1fr)"]}
          style={{ width: "100%", gap: "20px" }}
        >
          {data &&
            data.map((items) => (
              <Link key={items._id} to={`details/${items._id}`}>
                <ProductCard {...items} />
              </Link>
            ))}
        </Grid>
      </Box>
    </Flex>
  );
};

export default ProductListing;
