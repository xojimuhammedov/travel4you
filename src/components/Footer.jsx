import {
  Box,
  Flex,
  Heading,
  Image,
  Link,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";
import FooterBanner from "../assets/footer-banner.avif";
import TelegramIcon from "../assets/tg.svg";
import InstagramIcon from "../assets/instagram.svg";
import WhatsappIcon from "../assets/whatsapp.png";

function Footer() {
  return (
    <>
      <Box {...css.footer}>
        <Box className="container">
          <Flex
            flexDirection={{ base: "column", lg: "row" }}
            align={{ base: "baseline", lg: "center" }}
            justify={"space-between"}>
            <Heading {...css.title}>
              sign up for our newletter to receive our news, deals, and special
              offers
            </Heading>
            <Link {...css.link} target="_blank" href={"tel:+998990024556"}>
              Contact with you
            </Link>
          </Flex>
        </Box>
      </Box>
      <Box bg={"#000"} p={"24px 0"}>
        <Box className="container">
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={"24px"}>
            <Flex align={"center"} direction={"column"}>
              <Heading {...css.name}>Phone</Heading>
              <Link {...css.links} target="_blank" href={"tel:+998335898888"}>
                +998 33 589 88 88
              </Link>
            </Flex>
            <Flex align={"center"} direction={"column"}>
              <Heading {...css.name}>Email</Heading>
              <Link {...css.links} href={"mailto:info@travel4you.uz"}>
                info@travel4you.uz
              </Link>
            </Flex>
            <Flex align={"center"} direction={"column"}>
              <Heading {...css.name}>Locations</Heading>
              <Link
                {...css.links}
                target="_blank"
                href={"https://maps.app.goo.gl/SWr6Dqkd9X9S79iz6"}>
                Uzbekistan, Tashkent city, Mirabad district, Chimkent street 7
              </Link>
            </Flex>
          </SimpleGrid>
          <Flex
            flexDirection={{ base: "column-reverse", lg: "row" }}
            gap={"18px"}
            justify={"space-between"}
            align={"center"}
            mt={"36px"}>
            <Flex direction={"column"} align={"center"}>
              <Heading {...css.name}>Social media</Heading>
              <Flex mt={"12px"} gap={"12px"} align={"center"}>
                <Link
                  href="https://www.instagram.com/whiterivertour/?next=%2Fdirect%2Finbox%2F#"
                  target="_blank">
                  <Image src={InstagramIcon} />
                </Link>
                <Link href="https://t.me/Ramziddin_wrt" target="_blank">
                  <Image src={TelegramIcon} />
                </Link>
                <Link href="/" target="_blank">
                  <Image w={'25px'} src={WhatsappIcon} />
                </Link>
              </Flex>
            </Flex>
            <Flex gap={"18px"}>
              <Link {...css.links} href="/">
                Home
              </Link>
              <Link {...css.links} href="/">
                About Us
              </Link>
              <Link {...css.links} href="/">
                Destination
              </Link>
              <Link {...css.links} href="/">
                Blog
              </Link>
            </Flex>
          </Flex>
        </Box>
      </Box>
    </>
  );
}

export default Footer;

const css = {
  footer: {
    background: `url(${FooterBanner}) no-repeat center center`,
    backgroundSize: "cover",
    padding: "120px 0",
    marginTop: "48px",
  },
  title: {
    color: "#fff",
    fontSize: {
      base: "32px",
      md: "42px",
    },
    lineHeight: {
      base: "46px",
      md: "58px",
    },
    fontWeight: "600",
    width: {
      base: "100%",
      lg: "650px",
    },
    textTransform: "capitalize",
  },
  link: {
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
    borderRadius: "20px",
    transition: "0.3s",

    _hover: {
      textDecoration: "none",
    },
  },
  name: {
    color: "#fff",
    fontSize: "18px",
    lineHeight: "25px",
    fontWeight: "500",
    textTransform: "capitalize",
    marginTop: "18px",
  },
  links: {
    color: "#fff",
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: "500",
    marginTop: "12px",
    transition: "0.3s",
    // display: "flex",
    // alignItems: "center",
    // justifyContent: "center",
    textAlign: "center",
    _hover: {
      textDecoration: "none",
      color: "#27ac5e",
    },
  },
};
