import { Box, Button, Flex, Link, Text, useDisclosure } from "@chakra-ui/react";
import React from "react";
import MenuButton from "../assets/MenuButton";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

import { Link as Alink } from "react-router-dom";

function NavbarMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button {...css.button} onClick={onOpen}>
        <MenuButton />
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent {...css.menuList}>
          <ModalCloseButton />
          <ModalBody>
            <Flex
              pt={"48px"}
              flexDirection={"column"}
              alignItems={"center"}
              gap={"36px"}>
              <Alink onClick={onClose} to="/">
                <Text {...css.link}>Home</Text>
              </Alink>
              <Link onClick={onClose} {...css.link} href="#about">
                About Us
              </Link>
              <Link onClick={onClose} {...css.link} href="#destination">
                Destination
              </Link>
              <Link onClick={onClose} href="#blog" {...css.link}>
                Blog
              </Link>
              <Alink onClick={onClose} to="/contact">
                <Text {...css.link}>Contact</Text>
              </Alink>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default NavbarMenu;

const css = {
  link: {
    fontSize: "18px",
    lineHeight: "24px",
    fontWeight: "500",
    color: "#171717",
    transition: "0.3s",

    _hover: {
      color: "#27ac5e",
      textDecoration: "none",
    },
  },
  menuList: {
    borderRadius: "0",
    margin: "0",
    height: "100%",
  },
  button: {
    backgroundColor: "transparent",
    width: "55px",
    display: {
      base: "block",
      md: "none",
    },
  },
};
