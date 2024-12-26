import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { toast } from "react-toastify";

function Form() {
  const [nameValue, setNameValue] = useState("");
  const [numberValue, setNumberValue] = useState("");
  const [textValue, setTextValue] = useState("");
  const [emailValue, setEmailValue] = useState("");

  function changeNumber(item) {
    setNumberValue(item);
  }

  function changeName(item) {
    setNameValue(item);
  }
  function changeText(item) {
    setTextValue(item);
  }
  function changeEmail(item) {
    setEmailValue(item);
  }

  const handleClear = () => {
    setNameValue("");
    setNumberValue("");
    setTextValue("");
    setEmailValue("");
  };

  let bot = {
    TOKEN: "7387858859:AAFc_blnJnd64JG3OcUQHjz4BkYyv3OQPiA",
    chatID: "-1002325832754",
    message: `
        Assalomu alaykum sizga yangi xabar!%0A
        %0AIsmi 👤: ${nameValue}; 
        %0ATelefon raqami ☎: ${numberValue};
        %0AE-mail 📧: ${emailValue};
        %0ASizga xabar ☎: ${textValue};`,
  };

  function sendMessage(e) {
    e.preventDefault();
    if (nameValue === "") {
    } else {
      fetch(
        `https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatID}&text=${bot.message} `,
        {
          method: "GET",
        }
      ).then(
        (success) => {
          if (success.status === 200) {
            handleClear();
          }
          toast.success("Your message has been sent successfully!");
        },
        (error) => {}
      );
    }
  }
  return (
    <Box p={"36px 0"}>
      <Box className="container">
        <Flex
          flexDirection={{ base: "column", md: "row" }}
          justifyContent={"space-between"}
          align={"center"}>
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
          <Box width={{ base: "100%", md: "560px" }}>
            <Input
              value={nameValue}
              onChange={(e) => changeName(e.target.value)}
              {...css.input}
              placeholder="Name"
            />
            <Input
              value={emailValue}
              onChange={(e) => changeEmail(e.target.value)}
              {...css.input}
              placeholder="Email"
            />
            <Input
              value={numberValue}
              onChange={(e) => changeNumber(e.target.value)}
              {...css.input}
              placeholder="Phone"
            />
            <Textarea
              value={textValue}
              onChange={(e) => changeText(e.target.value)}
              {...css.textarea}
              placeholder="Message"
            />
            <Button type="submit" onClick={sendMessage} {...css.button}>
              Submit
            </Button>
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
    fontSize: {
      base: "32px",
      lg: "42px",
    },
    lineHeight: {
      base: "40px",
      lg: "58px",
    },
    fontWeight: "600",
    width: {
      base: "100%",
      lg: "560px",
    },
    textTransform: "capitalize",
  },
  text: {
    fontSize: {
      base: "14px",
      md: "16px",
    },
    lineHeight: "24px",
    fontWeight: "400",
    width: {
      base: "100%",
      lg: "550px",
    },
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
    transition: "0.3s",

    _hover: {
      backgroundColor: "#219653",
    },
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
    fontSize: {
      base: "32px",
      lg: "42px",
    },
    lineHeight: {
      base: "40px",
      lg: "58px",
    },
    fontWeight: "600",
    color: "#171717",
    marginTop: "72px",
    textAlign: "center",
    textTransform: "capitalize",
  },
  texts: {
    fontSize: {
      base: "14px",
      md: "16px",
    },
    lineHeight: "24px",
    fontWeight: "400",
    color: "rgb(162, 162, 162)",
    textAlign: "center",
    width: {
      base: "100%",
      lg: "850px",
    },
    margin: "18px auto",
  },
};
