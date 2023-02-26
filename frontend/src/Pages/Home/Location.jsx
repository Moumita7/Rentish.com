import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Heading,
  Divider,
  Input,
  useToast,
} from "@chakra-ui/react";
import { GrLocation, GrMapLocation } from "react-icons/gr";
import { TbCurrentLocation } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { postLocation } from "../../redux/HomeReducer/action";

const Location = () => {
  const city = useSelector((store) => store.home.city);
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [location, setLocation] = useState("");
  const toast = useToast();
  const nav = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (city === "bangalore" || city === "Bangalore") {
      setData1(bgl1);
      setData2(bgl2);
    } else if (city === "mumbai" ||  city ==="Mumbai") {
      setData1(mumbai1);
      setData2(mumbai2);
    } else if (city === "delhi" ||  city ==="Delhi") {
      setData1(delhi1);
      setData2(delhi2);
    } else if (city === "bhopal" || city === "Bhopal") {
      setData1(bhopal1);
      setData2(bhopal2);
    } else if (city === "hyderabad" || city === "Hyderabad") {
      setData1(hyd1);
      setData2(hyd2);
    } else if (city === "indore" || city === "Indore") {
      setData1(indore1);
      setData2(indore2);
    } else if (city === "pune" ||  city ==="Pune") {
      setData1(pune1);
      setData2(pune2);
    }
  }, []);

  const handleLocation = (el) => {
    setLocation(el);
  };

  const handleClick = () => {
    if (location == "") {
      toast({
        title: "Select Location First",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    } else {
      console.log(location);
      dispatch(postLocation(location));
      nav("/calender");
    }
  };

  return (
    <div>
      <Box
        style={{
          margin: "auto",
          marginTop: "80px",
          marginBottom: "60px",
          padding: "30px 0px",
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        }}
        width={{ lg: "65%", md: "70%", sm: "80%", base: "80%" }}
      >
        <Box
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
          flexDirection={{ lg: "row", md: "row", sm: "column", base: "column" }}
        >
          <Box width={{ lg: "40%", md: "50%", sm: "60%", base: "70%" }}>
            <Input
              type="text"
              placeholder="Enter location"
              value={location}
              readOnly
            />
          </Box>
          <Box
            style={{ display: "flex", alignItems: "center" }}
            marginTop={{ lg: "none", md: "none", sm: "none", base: "15px" }}
          >
            <TbCurrentLocation fontSize="30px" /> Current Location
          </Box>
          <Box
            style={{ display: "flex", alignItems: "center" }}
            marginTop={{ lg: "none", md: "none", sm: "none", base: "15px" }}
          >
            <GrMapLocation fontSize="30px" />
            Select Location on Map
          </Box>
        </Box>

        <Box
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "30px",
            backgroundColor: "#f5f5f5",
            padding: "30px 0px",
          }}
          flexDirection={{ lg: "row", md: "row", sm: "column", base: "column" }}
        >
          <Box>
            <Box style={{ backgroundColor: "#cdcdcd" }}>
              RECENTLY SEARCHED LOCATIONS
            </Box>
            {data1.map((el, i) => (
              <Box
                key={i}
                style={{
                  height: "70px",
                  display: "flex",
                  borderRadius: "8px",
                  alignItems: "center",
                  marginBottom: "6px",
                  backgroundColor: "white",
                  padding: "0px 8px",
                  marginTop: "6px",
                  boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                }}
                onClick={() => handleLocation(el)}
              >
                {" "}
                <GrLocation fontSize="30px" /> {el}
                <hr />{" "}
              </Box>
            ))}
          </Box>

          <Box>
            <Box style={{ backgroundColor: "#cdcdcd" }}>
              SUGGESTED PICK UP LOCATIONS
            </Box>
            {data2.map((el, i) => (
              <Box
                key={i}
                style={{
                  height: "70px",
                  boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                  padding: "0px 8px",
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "6px",
                  backgroundColor: "white",
                  marginTop: "6px",
                  borderRadius: "8px",
                }}
                onClick={() => handleLocation(el)}
              >
                <GrLocation fontSize="30px" />
                {el}
              </Box>
            ))}
          </Box>
        </Box>
        <Box
          width={{ lg: "30%", md: "30%", sm: "46%", base: "70%" }}
          margin="auto"
          marginTop="20px"
        >
          <Button
            style={{ backgroundColor: "#10a310", color: "white" }}
            onClick={handleClick}
          >
            CONFIRM PICKUP LOCATION
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default Location;

const bgl1 = ["Bangalore International Airport", "Bangalore bus stand"];

const bgl2 = [
  "Bangalore International Airport",
  "Bangalore Railway Station",
  "Bangalore, India",
  "Bangalore bus stand",
  "Bangalore University",
];

const delhi1 = ["Delhi International Airport", "Delhi bus stand"];

const delhi2 = [
  "Delhi International Airport",
  "Delhi Railway Station",
  "Delhi, India",
  "Delhi bus stand",
  "Delhi University",
];

const mumbai1 = ["Mumbai International Airport", "Mumbai bus stand"];

const mumbai2 = [
  "Mumbai International Airport",
  "Mumbai Railway Station",
  "Mumbai, India",
  "Mumbai bus stand",
  "Mumbai University",
];

const bhopal1 = ["Bhopal International Airport", "Bhopal bus stand"];

const bhopal2 = [
  "Bhopal International Airport",
  "Bhopal Railway Station",
  "Bhopal, India",
  "Bhopal bus stand",
  "Bhopal University",
];

const hyd1 = ["Hyderabad International Airport", "Hyderabad bus stand"];

const hyd2 = [
  "Hyderabad International Airport",
  "Hyderabad Railway Station",
  "Hyderabad, India",
  "Hyderabad bus stand",
  "Hyderabad University",
];

const indore1 = ["Indore International Airport", "Indore bus stand"];

const indore2 = [
  "Indore International Airport",
  "Indore Railway Station",
  "Indore, India",
  "Indore bus stand",
  "Indore University",
];

const pune1 = ["Pune International Airport", "Pune bus stand"];

const pune2 = [
  "Pune International Airport",
  "Pune Railway Station",
  "Pune, India",
  "Pune bus stand",
  "Pune University",
];
