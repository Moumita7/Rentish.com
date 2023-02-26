import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemCarousel from "../ProductsListing Page/ItemCarousel";
import Cardetails from "./Cardetails";
import GoogleMaps from "./GoogleMaps";
import KeepinMind from "./KeepinMind";

import PreBilling from "./PreBilling";
import { useSelector, useDispatch } from "react-redux";
=======
import Loader from "./Loader";
import PreBilling from "./PreBilling";


const prod_deets_left_flex = {
  margin: "1%",
  boxShadow:
    "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
  padding: "1rem",
  margin: "auto",
};

const ProductDetails = () => {
  const products = useSelector((store) => store.ProductReducer);
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState([]);
  const params = useParams();


const ProductDetails = () => {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([])
  const [post, setPost] = useState([]);
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
  return (
    <Flex direction={["column", "column", "row"]}>
      <Box className="prod-deets-left-flex" style={prod_deets_left_flex}>
        <ItemCarousel slidesImages={post[0]?.url} />
        {
            post.map((items) => <Text>{i}</Text>)
        }
        <Image
          h="350px"
          src="https://zoomcar-assets.zoomcar.com/48697/HostCarImage/host_car_image_48697c70ac20f-3863-4e69-995d-b66c338a7ef1.jpg20230115-62-mlpl90"
          alt="car"
          margin="auto"
        />


  useEffect(() => {
    handleFetch(params);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Flex direction={["column", "column", "row"]} style={{gap:"2rem", width:"80%", margin:"auto"}}>
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
        <PreBilling />
      </Box>
    </Flex>
  );
};

// console.log(products)
export default ProductDetails;
export default ProductDetails;
