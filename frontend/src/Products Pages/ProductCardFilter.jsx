import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Input,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { FaCar } from "react-icons/fa";
import { BsArrowDownRight } from "react-icons/bs";
import { BsArrowUpRight } from "react-icons/bs";
import { AiOutlineCar, AiOutlineStar } from "react-icons/ai";
import { RiPinDistanceLine } from "react-icons/ri";
import { TbCarCrane } from "react-icons/tb";
import { GiRoad } from "react-icons/gi";
import { GrAnnounce } from "react-icons/gr";
import { FaSearch } from "react-icons/fa";

import { TbCar } from "react-icons/tb";
import { TfiCar } from "react-icons/tfi";
import { RiCarWashingLine } from "react-icons/ri";

import { GiCarSeat } from "react-icons/gi";

import { MdOutlineLocalGasStation } from "react-icons/md";

import { GiGasStove } from "react-icons/gi";
import { GiElectric } from "react-icons/gi";

import { GiGearStickPattern } from "react-icons/gi";
import { MdHdrAuto } from "react-icons/md";

let filter_flex_left = {
  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
  alignItems: "center",
  gap: "30px",
  width: {base:"27rem", md:"20rem", sm:"10rem"},
  height:"1200px",
  padding: "0.5rem",
};

let grid_items_filter_one = {
  boxShadow:
    "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
  padding: "0.5rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

let filter_srearch_two = {
  // border: "1px solid red",
  padding: "0.2 rem",
};

const ProductCardFilter = () => {
  return (
    <Box className="filter-flex-left" style={filter_flex_left}>
      <Flex>
        <Box>
          <Flex
            style={{
              alignItems: "center",
              marginBottom: "1rem",
            }}
          >
            <Heading size="md">Sort & Filters</Heading>
            <Spacer />
            <Button>RESET</Button>
          </Flex>

          <Text style={{ marginBottom: "1rem" }}>Sort By</Text>
          <Box>
            <Grid
              templateColumns="repeat(4,1fr)"
              style={{ gap: "10px", width: "23rem" }}
            >
              <Box
                className="grid-items-filter-one"
                style={grid_items_filter_one}
              >
                <FaCar />
                <Text>Relevance</Text>
              </Box>
              <Box
                className="grid-items-filter-one"
                style={grid_items_filter_one}
              >
                <BsArrowDownRight />
                <Text>Low to High</Text>
              </Box>
              <Box
                className="grid-items-filter-one"
                style={grid_items_filter_one}
              >
                <BsArrowUpRight />
                <Text>High to Low</Text>
              </Box>
              <Box
                className="grid-items-filter-one"
                style={grid_items_filter_one}
              >
                <AiOutlineStar />
                <Text>Best Rated</Text>
              </Box>
              <Box
                className="grid-items-filter-one"
                style={grid_items_filter_one}
              >
                <RiPinDistanceLine />
                <Text>Distance</Text>
              </Box>
              <Box
                className="grid-items-filter-one"
                style={grid_items_filter_one}
              >
                <TbCarCrane />
                <Text>Car age</Text>
              </Box>
              <Box
                className="grid-items-filter-one"
                style={grid_items_filter_one}
              >
                <GiRoad />
                <Text>Kms Driven</Text>
              </Box>
              <Box
                className="grid-items-filter-one"
                style={grid_items_filter_one}
              >
                <GrAnnounce />
                <Text>Popularity</Text>
              </Box>
            </Grid>

            <Flex
              style={{
                alignItems: "center",
                padding: "1rem",
                borderTop: "1px solid",
                borderBottom: "1px solid",
                margin: "15px 0px",
              }}
            >
              <AiOutlineCar size={30} style={{ paddingRight: "5px" }} />
              <Box className="filter-srearch-two" style={filter_srearch_two}>
                <Text as="b">Include specific cars</Text>
                <Text fontSize="xs">
                  Any specific model in mind? Find it here. <br /> We will
                  include them to search
                </Text>
                <Flex
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <Input
                    size="sm"
                    placeholder="try search 'honda city'"
                    width="300px"
                  />
                  <Button variant="ghost">
                    <FaSearch />
                  </Button>
                </Flex>
              </Box>
            </Flex>

            <Text style={{ marginBottom: "1rem" }}>Car Type</Text>
            <Grid templateColumns="repeat(4,1fr)" style={{ gap: "10px" }}>
              <Box
                className="grid-items-filter-one"
                style={grid_items_filter_one}
              >
                <TbCar />
                <Text>Hatchback</Text>
              </Box>
              <Box
                className="grid-items-filter-one"
                style={grid_items_filter_one}
              >
                <TfiCar />
                <Text>Sedan</Text>
              </Box>
              <Box
                className="grid-items-filter-one"
                style={grid_items_filter_one}
              >
                <TbCar />
                <Text>SUV</Text>
              </Box>
              <Box
                className="grid-items-filter-one"
                style={grid_items_filter_one}
              >
                <RiCarWashingLine />
                <Text>Luxury</Text>
              </Box>
            </Grid>

            <Text style={{ marginBottom: "1rem" }}>Seats</Text>
            <Grid templateColumns="repeat(4,1fr)" style={{ gap: "10px" }}>
              <Box
                className="grid-items-filter-one"
                style={grid_items_filter_one}
              >
                <GiCarSeat />
                <Text>4 Seater</Text>
              </Box>
              <Box
                className="grid-items-filter-one"
                style={grid_items_filter_one}
              >
                <GiCarSeat />
                <Text>5 Seater</Text>
              </Box>
              <Box
                className="grid-items-filter-one"
                style={grid_items_filter_one}
              >
                <GiCarSeat />
                <Text>7 Seater</Text>
              </Box>
            </Grid>

            <Text style={{ marginBottom: "1rem" }}>Fuel Type</Text>
            <Grid templateColumns="repeat(4,1fr)" style={{ gap: "10px" }}>
              <Box
                className="grid-items-filter-one"
                style={grid_items_filter_one}
              >
                <MdOutlineLocalGasStation />
                <Text>Petrol</Text>
              </Box>
              <Box
                className="grid-items-filter-one"
                style={grid_items_filter_one}
              >
                <MdOutlineLocalGasStation />
                <Text>Diesel</Text>
              </Box>
              <Box
                className="grid-items-filter-one"
                style={grid_items_filter_one}
              >
                <GiGasStove />
                <Text>CNG</Text>
              </Box>
              <Box
                className="grid-items-filter-one"
                style={grid_items_filter_one}
              >
                <GiElectric />
                <Text>Electric</Text>
              </Box>
            </Grid>

            <Text style={{ marginBottom: "1rem" }}>Transmission</Text>
            <Grid templateColumns="repeat(4,1fr)" style={{ gap: "10px" }}>
              <Box
                className="grid-items-filter-one"
                style={grid_items_filter_one}
              >
                <GiGearStickPattern />
                <Text>Mannual</Text>
              </Box>
              <Box
                className="grid-items-filter-one"
                style={grid_items_filter_one}
              >
                <MdHdrAuto />
                <Text>Automatic</Text>
              </Box>
            </Grid>

            <Text style={{ marginBottom: "1rem" }}>Ratings</Text>
            <Grid templateColumns="repeat(4,1fr)" style={{ gap: "10px" }}>
              <Box
                className="grid-items-filter-one"
                style={grid_items_filter_one}
              >
                <Text>3+ Stars⭐</Text>
              </Box>
              <Box
                className="grid-items-filter-one"
                style={grid_items_filter_one}
              >
                <Text>4+ Stars⭐</Text>
              </Box>
              <Box
                className="grid-items-filter-one"
                style={grid_items_filter_one}
              >
                <Text>All</Text>
              </Box>
            </Grid>
          </Box>

          <Text style={{ marginBottom: "1rem" }}>Kms run</Text>
          <Slider defaultValue={60} min={0} max={300} step={30} width="400px">
            <SliderTrack bg="lightgreen">
              <Box position="relative" right={10} />
              <SliderFilledTrack bg="green" />
            </SliderTrack>
            <SliderThumb boxSize={5} />
          </Slider>

          <Text style={{ marginBottom: "1rem" }}>Car Age</Text>
          <Slider defaultValue={60} min={0} max={200} step={30} width="400px">
            <SliderTrack bg="lightblue">
              <Box position="relative" right={10} />
              <SliderFilledTrack bg="blue" />
            </SliderTrack>
            <SliderThumb boxSize={5} />
          </Slider>
        </Box>
      </Flex>
    </Box>
  );
};

export default ProductCardFilter;
