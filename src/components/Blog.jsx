import { Box, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import BlogOne from "../assets/blog-1.avif";
import BlogTwo from "../assets/blog-2.avif";
import BlogThree from "../assets/blog-3.avif";

function Blog() {
  return (
    <Box p={"36px 0"}>
      <Box className="container-mix">
        <SimpleGrid gap={"36px"} columns={2}>
          <Box>
            <Image {...css.image} src={BlogOne} alt="BlogOne" />
            <Heading {...css.date}>Jul 29, 2024</Heading>
            <Heading {...css.name}>Tokyo, Japan</Heading>
            <Text {...css.text}>
              Immerse yourself in the vibrant energy of Tokyo, Japan, where
              ancient tradition meets modern innovation in a dynamic urban
              landscape.
            </Text>
          </Box>
          <Box>
            <Image {...css.image} src={BlogTwo} alt="BlogOne" />
            <Heading {...css.date}>Sep 5, 2023</Heading>
            <Heading {...css.name}>Goreme, Turkey</Heading>
            <Text {...css.text}>
              Experience the surreal beauty of Cappadocia, Turkey, where ancient
              history and natural wonders converge in a breathtaking landscape.
            </Text>
          </Box>
          <Box>
            <Image {...css.image} src={BlogThree} alt="BlogOne" />
            <Heading {...css.date}>Aug 29, 2024</Heading>
            <Heading {...css.name}>Tang An, Vietnam</Heading>
            <Text {...css.text}>
              Escape to the tranquil landscapes of Tang An, Vietnam, where
              emerald rice terraces cascade down misty mountains, creating a
              scene of
            </Text>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
}

export default Blog;

const css = {
  date: {
    color: "#a3a3a3",
    fontSize: "18px",
    lineHeight: "26px",
    fontWeight: "500",
    marginTop: "12px",
  },
  name: {
    color: "#171717",
    fontSize: "24px",
    lineHeight: "32px",
    fontWeight: "600",
    marginTop: "12px",
  },
  text: {
    color: "#a3a3a3",
    fontSize: "16px",
    lineHeight: "24px",
    marginTop: "12px",
    width: "500px",
  },
  image: {
    width: "100%",
    borderRadius: "12px",
    height: "360px",
    objectFit: "cover",
  },
};
