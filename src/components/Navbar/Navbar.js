import { Box, Flex, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import React from "react";

const Navbar = () => {
  return (
    <>
      <Box
        as="header"
        w="100%"
        p={5}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        h="20"
      >
        <Text>Blogs</Text>

        <Flex pl="5" pr="5" gap="10">
          <NavLink to="/"> Home </NavLink>

          

          <NavLink to="/contact"> Contact </NavLink>

          <NavLink to="/login"> Login </NavLink>

          <NavLink to="/signup"> SignUp </NavLink>
        </Flex>
      </Box>
    </>
  );
};

export default Navbar;
