import { Box, Flex, Heading, Image, Link, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../data";
import axios from "axios";

function DestinationPage() {
  const { id } = useParams();
  const [destination, setDestination] = useState([]);

  useEffect(() => {
    axios
      .get(`https://test.al-muamalat.uz/api/tour`)
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
        <Flex
          ml={{ base: "0", lg: "0" }}
          mt={"24px"}
          align={{ base: "baseline", lg: "center" }}
          flexDirection={{ base: "column", lg: "row" }}
          gap={"24px"}>
          <Link {...css.link} href="https://t.me/Ramziddin_wrt" target="_blank">
            Contact for Telegram
          </Link>
          <Link {...css.link} target="_blank" href="tel:+998335898888">
            Contact for Phone
          </Link>
        </Flex>
      </Box>
    </Box>
  );
}

export default DestinationPage;

const css = {
  image: {
    w: "100%",
    h: {
      base: "350px",
      md: "700px",
    },
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
    width: {
      base: "100%",
      md: "850px",
    },
  },
  link: {
    padding: "12px 24px",
    background: "#27ac5e",
    color: "#fff",
    borderRadius: "12px",
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: "500",
    transition: "0.3s",
    _hover: {
      textDecoration: "none",
    },
  },
};
