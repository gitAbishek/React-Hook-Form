import { Box, Text, Flex } from '@chakra-ui/react'
import React from 'react'

import IMGHome from "../Image/background.avif"

const Home = () => {
  const getItems = JSON.parse(localStorage.getItem("datakey"));
  var isLoggedIn = sessionStorage.getItem("Login details");
  return (
    <Box h="70vh" bgImage={IMGHome} bgRepeat="no-repeat" bgSize="cover">
      {isLoggedIn ? <Text align="center" p="10" fontSize="20px"> {getItems.name} </Text> : null}
      <Flex pl="40" flexDirection="column">
      <Text pt="20"  > Welcome  To </Text>
      <Text pt="5" pb="5" fontSize="30px"> Theme Grill</Text>
      
    
      <Text></Text>
      </Flex>
      
    </Box>
  )
}

export default Home