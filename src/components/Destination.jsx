import {
  Box,
  Button,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";

import DestinationOne from "../assets/destination-1.avif";
import DestinationTwo from "../assets/destination-2.avif";
import DestinationThree from "../assets/destination-3.avif";

function Destination() {
  return (
    <Box p={"36px 0"}>
      <Box className="container">
        <Heading {...css.name}>The perfect tour</Heading>
        <Heading {...css.title}>Trending destinations</Heading>
        <SimpleGrid
          mt={"48px"}
          gap={"24px"}
          columns={{ base: 1, sm: 2, lg: 3 }}>
          <Box {...css.item}>
            <Image src={DestinationOne} {...css.image} />
            <Heading {...css.subname}>Cappadocia-Turky</Heading>
            <Text {...css.text}>
              The Kophi-Thailand Tour is a unique experience that combines the
              natural
            </Text>
            <Button {...css.button}>Details</Button>
          </Box>
          <Box {...css.item}>
            <Image src={DestinationTwo} {...css.image} />
            <Heading {...css.subname}>Bali, Indonesia</Heading>
            <Text {...css.text}>
              Tour Bali is a captivating travel experience on the tropical
              island of Indonesia.
            </Text>
            <Button {...css.button}>Details</Button>
          </Box>
          <Box {...css.item}>
            <Image src={DestinationThree} {...css.image} />
            <Heading {...css.subname}>Venezia, Italy</Heading>
            <Text {...css.text}>
              Explore the renowned Piazza San Marco with its Basilica San Marco
              and iconic Bell
            </Text>
            <Button {...css.button}>Details</Button>
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
  },
};
