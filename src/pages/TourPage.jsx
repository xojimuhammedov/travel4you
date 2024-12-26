import { Box, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import TourImage from "../assets/tour-image.avif";
import { useParams } from "react-router-dom";
import { destinationData } from "../data";

function TourPage() {
  const { id } = useParams();
  const aboutData = destinationData.find((data) => data.id === Number(id));
  return (
    <Box p={"18px 0"}>
      <Box className="container">
        <Image {...css.image} src={aboutData?.image} alt="TourImage" />
        <Heading {...css.title}>{aboutData?.title}</Heading>
        <Text
          {...css.text}
          dangerouslySetInnerHTML={{ __html: aboutData?.text }}
        />
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
