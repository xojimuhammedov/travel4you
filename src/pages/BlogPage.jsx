import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import ContactBanner from "../assets/blog-banner.avif";
import Blog from "../components/Blog";

function BlogPage() {
  return (
    <>
      <Box {...css.blog}>
        <Box className="container">
          <Heading {...css.title}>Blog</Heading>
        </Box>
      </Box>
      <Blog />
    </>
  );
}

export default BlogPage;

const css = {
  blog: {
    backgroundImage: `url(${ContactBanner})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "144px 0",
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
