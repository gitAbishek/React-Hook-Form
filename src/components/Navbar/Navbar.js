import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { NavLink, useNavigate } from "react-router-dom";
import React from "react";

const Navbar = () => {
  const history = useNavigate()
  var isLoggedIn = sessionStorage.getItem("Login details");
  console.log('data :',isLoggedIn)
  const clear = (e) =>{
    e.preventDefault()
    sessionStorage.clear()
    history('/signin')
  }
  return (
    <>
      <Box
        w={["fit-content","100%"]}
        display="flex"
        flexDir={["column", "column", "row", "row", "row"]}
        gap={["5", "5", null, null, null]}
        justifyContent={["space-evenly","space-between"]}
        alignItems="center"
        h={['40','40','40','20','20']}
      >
        <Text pl={[null,null,'10','20','20']}  >Blogs</Text>

        <Flex gap={["5","10"]} alignItems="center" flexWrap="wrap">
          <NavLink to="/"> Home </NavLink>
          <NavLink to="/contact"> Contact </NavLink>
          {isLoggedIn ? <NavLink to="/details">Details</NavLink> :<NavLink to="/signin"> SignIn </NavLink>  }
          
           {isLoggedIn ? <NavLink to="/signout"> <Button onClick={clear} alignItems="center" size="sm" mr="2">SignOut</Button> </NavLink> : null }
          
        </Flex>
      </Box>
    </>
  );
};

export default Navbar;
