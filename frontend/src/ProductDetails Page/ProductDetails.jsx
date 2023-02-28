import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemCarousel from "../ProductsListing Page/ItemCarousel";
import Cardetails from "./Cardetails";
import GoogleMaps from "./GoogleMaps";
import KeepinMind from "./KeepinMind";


import { useSelector, useDispatch } from "react-redux";

import Loader from "./Loader";
import PreBilling from "./PreBilling";


const prod_deets_left_flex = {
  margin: "1%",
  boxShadow:
    "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
  padding: "1rem",
  margin: "auto",
  width:"80%"
};




const ProductDetails = () => {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [post, setPost] = useState([]);
  const [price, setPrice] = useState(0);
  const params = useParams();


  const handleFetch = async (params) => {
    let authToken = localStorage.getItem("token");
    setLoading(true);
    try {
      let response = await axios.get(
        `https://worrisome-tick-tights.cyclic.app/cars/${params.id}`,
        {
          headers: {
            Authentication: authToken,
          },
        }
      );
      setPost(response.data.data);

      setPhotos(response.data.data[0].url);
      setPrice(response.data.data[0].per_hour_charge);
      localStorage.setItem("icardetails",JSON.stringify(response.data.data[0]));


      console.log(response);

      setPhotos(response.data.data[0].url)

      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    handleFetch(params);
  }, []);
  // console.log(params);
  // console.log(post);
  if (loading) {
    console.log("Before Loading");
    console.log(loading);
    console.log(post[0]);
    return <Text>...Loading</Text>;
  }
  console.log(post[0]);
  console.log("after loading");
  console.log(loading);
 
 

  if (loading) {
    return <Loader />;
  }

  return (
    <Flex
      direction={["column", "column", "row"]}
      style={{ gap: "2rem", width: "80%", margin: "auto" }}
    >
      <Box className="prod-deets-left-flex" style={prod_deets_left_flex}>
        <ItemCarousel slidesImages={photos} />

        <Cardetails {...post[0]} />
        <Flex
          direction={["column", "column", "row"]}
          style={{
            justifyContent: "space-between",
            marginTop: "1rem",
            alignItems: "center",
            margin: "auto",
          }}
        >
          <GoogleMaps />
          <KeepinMind />
        </Flex>
      </Box>




      <Box className="prod-bill-right-flex">
        <PreBilling totalPrice={price} />
      </Box>
    </Flex>
  );
};

// console.log(products)

export default ProductDetails;

