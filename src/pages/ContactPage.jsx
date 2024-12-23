import { Box, Heading, Image } from "@chakra-ui/react";
import React from "react";
import ContactBanner from "../assets/contact-banner.avif";
import Form from "../components/Form";

function ContactPage() {
  return (
    <>
      <Box {...css.contact}>
        <Box className="container">
          <Heading {...css.title}>Contact Us</Heading>
        </Box>
      </Box>
      <Form />
    </>
  );
}

export default ContactPage;

const css = {
  contact: {
    backgroundImage: `url(${ContactBanner})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "168px 0",
  },
  title: {
    color: "#fff",
    fontSize: "36px",
    lineHeight: "48px",
    fontWeight: "600",
    textAlign: "center",
    textTransform: "capitalize",
  },
};
