import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { NavLink, useNavigate } from "react-router-dom";

import React from "react";

const Navbar = () => {
  const history = useNavigate();
  const getItems = JSON.parse(localStorage.getItem("datakey"));
  var isLoggedIn = sessionStorage.getItem("Login details");
  const clear = (e) => {
    e.preventDefault();
    sessionStorage.clear();
    history("/signin");
  };
  return (
    <>
      <Box
        w={["100%", "100%"]}
        display="flex"
        flexDir={["column", "column", "row", "row", "row"]}
        gap={["5", "5", null, null, null]}
        justifyContent={["space-evenly", "space-between"]}
        alignItems="center"
        h={["40", "40", "40", "20", "20"]}
        //bg="black"
        p={[null, null, null, null, "2"]}
      >
        {isLoggedIn ? (
          <Flex flexDirection="row" gap="2">
            <Text pl={[null, null, "10", "20", "20"]} color="red">
              Employee
            </Text>
            <Text color="blue" fontWeight="bold">
              {getItems.name}
            </Text>
          </Flex>
        ) : (
          <Text pl={[null, null, "10", "20", "20"]} color="red">
              Employee
            </Text>
        )}
        <Flex gap={["5", "10"]} alignItems="center" textTransform="uppercase">
          <NavLink to="/" fontWeight="bold">
            {" "}
            Home{" "}
          </NavLink>
          <NavLink to="/contact" fontWeight="bold">
            {" "}
            Contact{" "}
          </NavLink>
          {isLoggedIn ? (
            <NavLink to="/details" fontWeight="bold">
              Details
            </NavLink>
          ) : (
            <NavLink to="/signin" fontWeight="bold">
              {" "}
              SignIn{" "}
            </NavLink>
          )}

          {isLoggedIn ? (
            <NavLink to="/signout">
              <Button
                onClick={clear}
                alignItems="center"
                size="sm"
                colorScheme="blue"
                fontWeight="bold"
              >
                SignOut
              </Button>
            </NavLink>
          ) : null}
        </Flex>
      </Box>
    </>
  );
};

export default Navbar;
