import { Box, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import TourImage from "../assets/tour-image.avif";

function TourPage() {
  return (
    <Box p={"18px 0"}>
      <Box className="container">
        <Image {...css.image} src={TourImage} alt="TourImage" />
        <Heading {...css.title}>About this tour</Heading>
        <Text {...css.text}>
          The Kophi-Thailand Tour is a unique experience that combines the
          natural beauty of Thailand with a love for coffee. Participants will
          be taken on a journey to explore beautiful coffee plantations, follow
          the coffee-making process from beans to a delightful cup of coffee,
          and taste various distinctive Thai coffee varieties. Additionally,
          this tour also offers the opportunity to enjoy stunning natural
          scenery while savoring a fresh cup of coffee. With expert guidance,
          participants will gain in-depth insights into the coffee culture of
          Thailand while enjoying a satisfying and memorable vacation.
        </Text>
      </Box>
    </Box>
  );
}

export default TourPage;

const css = {
  image: {
    w: "100%",
    h: "650px",
    borderRadius: "8px",
    objectFit: "cover",
  },
  title: {
    mt: "24px",
    color: "#171717",
    fontSize: "32px",
    lineHeight: "42px",
  },
  text: {
    mt: "12px",
    color: "#525252",
    fontSize: "16px",
    lineHeight: "24px",
    width: "850px",
  },
};
