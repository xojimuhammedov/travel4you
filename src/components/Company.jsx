import { Box, Flex, Text, Heading, Image } from "@chakra-ui/react";
import React from "react";
import CompanyImage from "../assets/company-image.avif";

function Company() {
  return (
    <Box p={"36px 0"}>
      <Box className="container">
        <Flex
          flexDirection={{ base: "column", md: "row" }}
          align={"center"}
          justifyContent={"space-between"}>
          <Box>
            <Heading {...css.name}>Why us</Heading>
            <Heading {...css.title}>
              Choose your ideal vacation package through our services
            </Heading>
            <Text {...css.text}>
              Whether you're yearning for a romantic escape filled with
              enchanting moments, planning an exciting family-friendly adventure
              packed with cherished memories, or embarking on a thrilling solo
              journey to explore the world's wonders, a reputable travel agency
              possesses the expertise and resources to meticulously curate a
              custom-tailored itinerary that not only fulfills but far exceeds
              your wildest dreams and expectations.
            </Text>
          </Box>
          <Image {...css.image} src={CompanyImage} />
        </Flex>
      </Box>
    </Box>
  );
}

export default Company;

const css = {
  name: {
    color: "#27ac5e",
    fontSize: "18px",
    lineHeight: "25px",
    fontWeight: "500",
    textTransform: "capitalize",
  },
  title: {
    color: "#171717",
    fontSize: {
      base: "32px",
      md: "42px",
    },
    lineHeight: {
      base: "40px",
      md: "58px",
    },
    fontWeight: "600",
    width: {
      base: "100%",
      md: "600px",
    },
    textTransform: "capitalize",
  },
  text: {
    fontSize: "14px",
    lineHeight: "24px",
    fontWeight: "400",
    width: {
      base: "100%",
      lg: "600px",
    },
    marginTop: "18px",
  },
  image: {
    width: {
      base: "100%",
      lg: "580px",
    },
    height: {
      base: "450px",
      lg: "700px",
    },
    objectFit: "cover",
    marginTop: {
      base: "24px",
      md: "0",
    },
  },
};
