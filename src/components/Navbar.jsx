import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";
import React from "react";
import LogoIcon from "../assets/logo.jpg";
import { Link as Alink } from "react-router-dom";

function Navbar() {
  return (
    <Box p={"18px 0"}>
      <Box className="container">
        <Flex {...css.list}>
          <Alink to="/">
            <Image {...css.image} src={LogoIcon} alt="LogoIcon" />
          </Alink>
          <Flex alignItems={"center"} gap={"36px"}>
            <Link {...css.link} href="/">
              Home
            </Link>
            <Link {...css.link} href="/">
              About Us
            </Link>
            <Link {...css.link} href="/">
              Destination
            </Link>
            <Link {...css.link} href="/">
              Blog
            </Link>
            <Alink to="/contact">
              <Text {...css.link}>Contact</Text>
            </Alink>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}

export default Navbar;

const css = {
  image: {
    width: {
      base: "120px",
      lg: "150px",
    },
  },
  link: {
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: "500",
    color: "#171717",
    transition: "0.3s",
    display: {
      base: "none",
      lg: "block",
    },

    _hover: {
      color: "#27ac5e",
      textDecoration: "none",
    },
  },
  list: {
    alignItems: "center",
    justifyContent: "space-between",
  },
};