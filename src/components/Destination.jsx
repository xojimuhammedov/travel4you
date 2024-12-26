import {
  Box,
  Button,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";

import DestinationOne from "../assets/istanbul.jpg";
import DestinationTwo from "../assets/kalizey.jpg";
import DestinationThree from "../assets/dubai.jpg";
import { Link } from "react-router-dom";

function Destination() {
  return (
    <Box id="destination" p={"36px 0"}>
      <Box className="container">
        <Heading {...css.name}>The perfect tour</Heading>
        <Heading {...css.title}>Trending destinations</Heading>
        <SimpleGrid
          mt={"48px"}
          gap={"24px"}
          columns={{ base: 1, sm: 2, lg: 3 }}>
          <Box {...css.item}>
            <Image src={DestinationOne} {...css.image} />
            <Heading {...css.subname}>Discover the Magic of Istanbul</Heading>
            <Text {...css.text}>
              Istanbul, the enchanting city straddling two continents, offers an
              unparalleled blend of history, culture, and modernity.
            </Text>
            <Link to={"/tour/1"}>
              <Button {...css.button}>Details</Button>
            </Link>
          </Box>
          <Box {...css.item}>
            <Image src={DestinationTwo} {...css.image} />
            <Heading {...css.subname}>Explore the Charm of Italy</Heading>
            <Text {...css.text}>
              Italy is a country that needs no introduction. Known for its
              breathtaking landscapes, rich history.
            </Text>
            <Link to={"/tour/2"}>
              <Button {...css.button}>Details</Button>
            </Link>
          </Box>
          <Box {...css.item}>
            <Image src={DestinationThree} {...css.image} />
            <Heading {...css.subname}>Discover the Futuristic of Dubai</Heading>
            <Text {...css.text}>
              Dubai is a city like no other, where modernity and tradition blend
              seamlessly. Known for its striking skyscrapers.
            </Text>
            <Link to={"/tour/3"}>
              <Button {...css.button}>Details</Button>
            </Link>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
}

export default Destination;

const css = {
  name: {
    color: "#27ac5e",
    fontSize: "18px",
    lineHeight: "25px",
    fontWeight: "500",
    textAlign: "center",
    textTransform: "capitalize",
  },
  title: {
    color: "#171717",
    fontSize: {
      base: "32px",
      lg: "42px",
    },
    lineHeight: {
      base: "40px",
      lg: "58px",
    },
    fontWeight: "600",
    textAlign: "center",
    textTransform: "capitalize",
    marginTop: "12px",
  },
  item: {
    borderRadius: "8px",
    boxShadow: "rgba(0, 0, 0, 0.08) 0px 1px 16px 0px",
    background: "#fff",
    width: "100%",
    paddingBottom: "24px",
  },
  subname: {
    fontSize: "20px",
    lineHeight: "28px",
    fontWeight: "600",
    color: "#171717",
    padding: "0 15px",
    margin: "10px 0",
    marginTop: "18px",
  },
  text: {
    fontSize: "16px",
    lineHeight: "24px",
    color: "#525252",
    padding: "0 15px",
  },
  image: {
    borderRadius: "8px 8px 0 0",
    objectFit: "cover",
    width: "100%",
    height: "260px",
  },
  button: {
    backgroundColor: "#27ac5e",
    color: "#fff",
    height: "45px",
    width: "90%",
    margin: "10px 15px",
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: "500",
    marginTop: "20px",
    transition: "0.3s",

    _hover: {
      backgroundColor: "#219653",
    },
  },
};
