import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { NavLink, useNavigate } from "react-router-dom";
import React from "react";

const Navbar = () => {
  const history = useNavigate();
  const getItems = JSON.parse(localStorage.getItem("datakey"));
  var isLoggedIn = sessionStorage.getItem("Login details");
  console.log("data :", isLoggedIn);
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
        bg="black"
        p={[null,null,null,null,"2"]}
      >
        {isLoggedIn ? (
          <Text pl={[null, null, "10", "20", "20"]} color="white">
            {getItems.name} Blogs
          </Text>
        ) : (
          <Text pl={[null, null, "10", "20", "20"]} color="white"> Blogs</Text>
        )}
        <Flex gap={["5", "10"]} alignItems="center"  textTransform="uppercase" color="pink" >
          <NavLink to="/"> Home </NavLink>
          <NavLink to="/contact"> Contact </NavLink>
          {isLoggedIn ? (
            <NavLink to="/details">Details</NavLink>
          ) : (
            <NavLink to="/signin"> SignIn </NavLink>
          )}

          {isLoggedIn ? (
            <NavLink to="/signout">
              
              <Button
                onClick={clear}
                alignItems="center"
                size="sm"
                colorScheme="blue"
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
