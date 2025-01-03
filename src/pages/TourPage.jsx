import { Box, Heading, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import TourImage from "../assets/tour-image.avif";
import { useParams } from "react-router-dom";
import { BASE_URL, destinationData } from "../data";
import axios from "axios";

function TourPage() {
  const { id } = useParams();
  const [destination, setDestination] = useState([]);

  useEffect(() => {
    axios
      .get(`https://test.al-muamalat.uz/api/destination`)
      .then((res) =>
        setDestination(res.data.data.find((item) => item?.id === id))
      )
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <Box p={"18px 0"}>
      <Box className="container">
        <Image
          {...css.image}
          src={`${BASE_URL}/${destination?.images?.[0]?.url?.replace(
            "uploads/",
            ""
          )}`}
          alt="TourImage"
        />
        <Heading {...css.title}>{destination?.title}</Heading>
        <Text
          {...css.text}
          dangerouslySetInnerHTML={{ __html: destination?.description }}
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
