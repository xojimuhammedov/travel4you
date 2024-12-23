import { Box, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";

function Statistic() {
  return (
    <Box p={"36px 0"}>
      <Box className="container">
        <Heading {...css.title}>
          Our adventure started with a deep love for travel and a mission to
          share the world's beauty with others. Over the years, we’ve grown into
          a trusted travel agency, celebrated for our dedication, expertise, and
          commitment to delivering exceptional experiences.
        </Heading>
        <SimpleGrid
          mt={"36px"}
          gap={"36px"}
          columns={{ base: 1, sm: 2, md: 3 }}>
          <Flex align={"center"} flexDirection={"column"}>
            <Heading {...css.number}>200+</Heading>
            <Text {...css.text}>Happy Customer</Text>
          </Flex>
          <Flex align={"center"} flexDirection={"column"}>
            <Heading {...css.number}>40+</Heading>
            <Text {...css.text}>Top Hotels</Text>
          </Flex>
          <Flex align={"center"} flexDirection={"column"}>
            <Heading {...css.number}>World</Heading>
            <Text {...css.text}>Top Class Destination</Text>
          </Flex>
        </SimpleGrid>
      </Box>
    </Box>
  );
}

export default Statistic;

const css = {
  title: {
    fontSize: {
      base: "22px",
      lg: "46px",
    },
    lineHeight: {
      base: "32px",
      lg: "66px",
    },
    fontWeight: "500",
  },
  number: {
    fontSize: {
      base: "45px",
      lg: "60px",
    },
    lineHeight: {
      base: "55px",
      lg: "75px",
    },
    fontWeight: "400",
    color: "rgba(0, 0, 0, 1)",
    letterSpacing: "0.6px",
  },
  text: {
    fontSize: "22px",
    lineHeight: "normal",
    fontWeight: "400",
    letterSpacing: "0.22px",
    color: "rgba(0, 0, 0, 1)",
  },
};
