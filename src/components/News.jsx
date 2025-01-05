import {
  border,
  Box,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BASE_URL } from "../data";
import axios from "axios";

function News() {
  const [tour, setTour] = useState([]);

  useEffect(() => {
    axios
      .get("https://test.al-muamalat.uz/api/tour")
      .then((res) => setTour(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <Box id="blog" p={"36px 0"}>
      <Box className="container">
        <Heading {...css.name}>true roming tales</Heading>
        <Heading {...css.title}>letest useful blogs</Heading>
        <SimpleGrid
          mt={"36px"}
          gap={"24px"}
          columns={{ base: 1, sm: 2, lg: 3, xl: 4 }}>
          {tour?.data?.map((item, index) => (
            <Link key={index} to={`/tour/${item?.id}`}>
              <Box {...css.item}>
                <Image
                  src={`${BASE_URL}/${item?.images?.[0]?.url?.replace(
                    "uploads/",
                    ""
                  )}`}
                  {...css.image}
                />
                <Heading {...css.subname}>{item?.title}</Heading>
                <Text
                  {...css.text}
                  dangerouslySetInnerHTML={{
                    __html: item?.description?.slice(0, 95),
                  }}
                />
              </Box>
            </Link>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
}

export default News;

const css = {
  name: {
    color: "#27ac5e",
    fontSize: "18px",
    lineHeight: "25px",
    fontWeight: "500",
    textAlign: "center",
    textTransform: "capitalize",
  },
  title: {
    color: "#171717",
    fontSize: {
      base: "32px",
      lg: "42px",
    },
    lineHeight: {
      base: "40px",
      lg: "58px",
    },
    fontWeight: "600",
    textAlign: "center",
    textTransform: "capitalize",
    marginTop: "12px",
  },
  item: {
    position: "relative",
  },
  subname: {
    color: "#fff",
    fontSize: "20px",
    lineHeight: "28px",
    fontWeight: "500",
    position: "absolute",
    top: "65%",
    left: "3%",
  },
  text: {
    color: "#fff",
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: "500",
    position: "absolute",
    top: "80%",
    left: "3%",
  },
  image: {
    height: "380px",
    objectFit: "cover",
    borderRadius: "12px",
  },
};
