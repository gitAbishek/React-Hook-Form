import {
  Stack,
  ButtonGroup,
  IconButton,
  Text,
  Box
} from "@chakra-ui/react";
import React from "react";

import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <Box
      as="footer"
      role="contentinfo"
      p="10"
      h="40"
      w="100%"
      position="fixed"
      left="0"
      bottom="0"
      right="0"
      //bgColor="skyblue"
      display="flex"
      justifyContent="center"
      alignContent="center"
    >
      <Stack spacing={{ base: "4", md: "5" }} align="center">
        <Stack justify="space-between" direction="row" align="center">
          <ButtonGroup variant="ghost">
            <IconButton
              as="a"
              href="#"
              aria-label="LinkedIn"
              icon={<FaLinkedin fontSize="1.25rem" />}
            />
            <IconButton
              as="a"
              href="#"
              aria-label="GitHub"
              icon={<FaGithub fontSize="1.25rem" />}
            />
            <IconButton
              as="a"
              href="#"
              aria-label="Twitter"
              icon={<FaTwitter fontSize="1.25rem" />}
            />
          </ButtonGroup>
        </Stack>
        <Text fontSize="sm" color="subtle">
          &copy; {new Date().getFullYear()} Creater Abishek Shah, All rights Reserved.
        </Text>
      </Stack>
    </Box>
  );
};

export default Footer;
