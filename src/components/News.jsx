import {
  border,
  Box,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";
import NewsOne from "../assets/news-1.avif";
import NewsTwo from "../assets/news-2.avif";
import NewsThree from "../assets/news-3.avif";
import NewsFour from "../assets/news-4.avif";
import { object } from "framer-motion/client";

function News() {
  return (
    <Box p={"36px 0"}>
      <Box className="container">
        <Heading {...css.name}>true roming tales</Heading>
        <Heading {...css.title}>letest useful news</Heading>
        <SimpleGrid
          mt={"36px"}
          gap={"24px"}
          columns={{ base: 1, sm: 2, lg: 3, xl: 4 }}>
          <Box {...css.item}>
            <Image {...css.image} src={NewsOne} alt="NewsOne" />
            <Heading {...css.subname}>Tokyo, Japan</Heading>
            <Text {...css.text}>
              Immerse yourself in the vibrant energy of Tokyo
            </Text>
          </Box>
          <Box {...css.item}>
            <Image {...css.image} src={NewsTwo} alt="NewsOne" />
            <Heading {...css.subname}>Goreme, Turkey</Heading>
            <Text {...css.text}>
              Experience the surreal beauty of Cappadocia
            </Text>
          </Box>
          <Box {...css.item}>
            <Image {...css.image} src={NewsThree} alt="NewsOne" />
            <Heading {...css.subname}>Tang An, Vietnam</Heading>
            <Text {...css.text}>
              Escape to the tranquil landscapes of Tang An
            </Text>
          </Box>
          <Box {...css.item}>
            <Image {...css.image} src={NewsFour} alt="NewsOne" />
            <Heading {...css.subname}> Bali, Indonesia</Heading>
            <Text {...css.text}>
              Embark on a journey to the enchanting island
            </Text>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
}

export default News;

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
    position: "relative",
  },
  subname: {
    color: "#fff",
    fontSize: "20px",
    lineHeight: "28px",
    fontWeight: "500",
    position: "absolute",
    top: "70%",
    left: "3%",
  },
  text: {
    color: "#fff",
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: "500",
    position: "absolute",
    top: "80%",
    left: "3%",
  },
  image: {
    height: "380px",
    objectFit: "cover",
    borderRadius: "12px",
  },
};
