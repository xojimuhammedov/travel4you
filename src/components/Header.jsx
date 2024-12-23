import { background, Box, Heading, Link, position } from "@chakra-ui/react";
import React from "react";
import HeaderBanner from "../assets/header-banner.avif";

function Header() {
  return (
    <Box {...css.header}>
      <Box className="container">
        <Heading {...css.title}>
          Weaving Your Dreams Into Unforgettable Adventures
        </Heading>
        <Link href="/" {...css.button}>
          Destinations
        </Link>
      </Box>
    </Box>
  );
}

export default Header;

const css = {
  header: {
    backgroundImage: `url(${HeaderBanner})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    height: {
      base: "80vh",
      lg: "90vh",
    },
  },
  title: {
    color: "#fff",
    fontSize: {
      base: "32px",
      lg: "56px",
    },
    lineHeight: {
      base: "40px",
      lg: "68px",
    },
    fontWeight: "500",
    textAlign: "center",
    textTransform: "capitalize",
    width: {
      base: "100%",
      lg: "750px",
    },
    margin: "0 auto",
    position: "absolute",
    left: {
      base: "0%",
      lg: "25%",
    },
    top: "25%",
  },
  button: {
    backgroundColor: "#27ac5e",
    color: "#fff",
    marginTop: "18px",
    height: "45px",
    width: "180px",
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: "500",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "0.3s",
    position: "absolute",
    top: {
      base: "44%",
      lg: "55%",
    },
    left: {
      base: "27%",
      lg: "43%",
    },
    borderRadius: "20px",

    _hover: {
      textDecoration: "none",
    },
  },
};
