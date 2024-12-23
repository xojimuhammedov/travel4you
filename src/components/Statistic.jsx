import { Box, Flex, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";

import Agoda from "../assets/agoda.png";
import Airways from "../assets/airways.png";
import Asia from "../assets/asia.svg";
import Easy from "../assets/easy.svg";
import Funsun from "../assets/funsun.png";
import Kompas from "../assets/kompas.png";
import Rate from "../assets/rate.jpg";
import Selfie from "../assets/selfie.png";
import Trip from "../assets/trip.jpg";

function Statistic() {
  var settings = {
    speed: 4000,
    dots: false,
    autoplay: true,
    infinite: true,
    slidesToShow: 5,
    autoplaySpeed: 0,
    slidesToScroll: 1,
    cssEase: "linear",
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1260,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1060,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
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
          mb={"108px"}
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
        <Slider {...settings}>
          <Box>
            <Image {...css.image} src={Agoda} />
          </Box>
          <Box>
            <Image {...css.image} src={Airways} />
          </Box>
          <Box>
            <Image {...css.image} src={Asia} />
          </Box>
          <Box>
            <Image {...css.image} src={Easy} />
          </Box>
          <Box>
            <Image {...css.image} src={Funsun} />
          </Box>
          <Box>
            <Image {...css.image} src={Kompas} />
          </Box>
          <Box>
            <Image {...css.image} src={Rate} />
          </Box>
          <Box>
            <Image {...css.image} src={Selfie} />
          </Box>
          <Box>
            <Image {...css.image} src={Trip} />
          </Box>
        </Slider>
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
  image: {
    width: {
      base: "120px",
      md: "200px",
    },
    height: "80px",
    objectFit: "contain",
  },
};
