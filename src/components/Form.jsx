import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React from "react";

function Form() {
  return (
    <Box p={"36px 0"}>
      <Box className="container">
        <Flex justifyContent={"space-between"} align={"center"}>
          <Box>
            <Heading {...css.name}>Contact </Heading>
            <Heading {...css.title}>
              Have questions? feel free to write us
            </Heading>
            <Text {...css.text}>
              If you have any questions or need assistance, please feel free to
              contact us. We are here to help and ready to respond promptly to
              your inquiries.
            </Text>
          </Box>
          <Box width={"560px"}>
            <Input {...css.input} placeholder="Name" />
            <Input {...css.input} placeholder="Email" />
            <Input {...css.input} placeholder="Phone" />
            <Textarea {...css.textarea} placeholder="Message" />
            <Button {...css.button}>Submit</Button>
          </Box>
        </Flex>
        <Heading {...css.subname}>Find Us on Map</Heading>
        <Text {...css.texts}>
          We are located in the heart of the city, easily accessible by public
          transport and just a few minutes away from major landmarks. Whether
          you’re traveling by car or train, finding us is simple and
          straightforward. Use the map below to get directions and plan your
          visit.
        </Text>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.142235111557!2d69.26869407587436!3d41.30576927131033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b275d9925db%3A0x10f8036f160affd6!2sChimkent%20Street%207%2C%20100114%2C%20Tashkent%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1734779455096!5m2!1sen!2s"
          className="form-map"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"></iframe>
      </Box>
    </Box>
  );
}

export default Form;

const css = {
  name: {
    color: "#27ac5e",
    fontSize: "18px",
    lineHeight: "25px",
    fontWeight: "500",
  },
  title: {
    color: "#171717",
    fontSize: "42px",
    lineHeight: "58px",
    fontWeight: "600",
    width: "560px",
    textTransform: "capitalize",
  },
  text: {
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: "400",
    width: "550px",
    marginTop: "18px",
  },
  button: {
    backgroundColor: "#27ac5e",
    color: "#fff",
    marginTop: "18px",
    height: "45px",
    width: "100%",
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: "500",
  },
  input: {
    width: "100%",
    height: "45px",
    margin: "10px 0",
    borderRadius: "8px",

    _focus: {
      borderColor: "#27ac5e",
    },
  },
  textarea: {
    width: "100%",
    margin: "10px 0",
    borderRadius: "8px",
    resize: "none",

    _focus: {
      borderColor: "#27ac5e",
    },
  },
  subname: {
    fontSize: "42px",
    lineHeight: "58px",
    fontWeight: "600",
    color: "#171717",
    marginTop: "72px",
    textAlign: "center",
    textTransform: "capitalize",
  },
  texts: {
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: "400",
    color: "rgb(162, 162, 162)",
    textAlign: "center",
    width: "850px",
    margin: "18px auto",
  },
};
