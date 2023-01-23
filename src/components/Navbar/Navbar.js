import { Box, Button, Flex, Text, Link } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import { NavLink as RouterLink } from "react-router-dom";
import { IconButton, useColorMode } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

import React from "react";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
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
          {/* {isLoggedIn ? (
            <NavLink to="/user" fontWeight="bold">
              USERS
            </NavLink>
          ) : null} */}

          <IconButton
            icon={colorMode === "light" ? <FaSun /> : <FaMoon />}
            isRound="true"
            size="lg"
            alignSelf="flex-end"
            onClick={toggleColorMode}
          />

          <Link as={RouterLink} to="/" _activeLink={{ color: "pink.400" }}>
            Home
          </Link>

          {isLoggedIn ? (
            <Link
              as={RouterLink}
              to="/posts"
              _activeLink={{ color: "pink.400" }}
            >
              Posts
            </Link>
          ) : (
            <Link
              as={RouterLink}
              to="/signin"
              //_activeLink={{ color: "pink.400" }}
            >
              posts
            </Link>
          )}

          <Link
            as={RouterLink}
            to="/create-post"
            _activeLink={{ color: "pink.400" }}
          >
            Create-Posts
          </Link>

          {isLoggedIn ? (
            <Link
              as={RouterLink}
              to="/details"
              _activeLink={{ color: "pink.400" }}
            >
              Details
            </Link>
          ) : (
            <Link
              as={RouterLink}
              to="/signin"
              _activeLink={{ color: "pink.400" }}
            >
              SignIn
            </Link>
          )}

          {isLoggedIn ? (
            <Link
              as={RouterLink}
              to="/signout"
              _activeLink={{ color: "pink.400" }}
            >
              <Button
                onClick={clear}
                alignItems="center"
                size="sm"
                colorScheme="blue"
              >
                SignOut
              </Button>
            </Link>
          ) : null}
        </Flex>
      </Box>
    </>
  );
};

export default Navbar;
