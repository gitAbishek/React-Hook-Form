import React, { useEffect, useState } from "react";

import { Box, Text, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import IMG1 from "../Image/reactimage.jpeg";

const Details = () => {
  const [getData, setGetData] = useState([]);
  const history = useNavigate();
  console.log("data", getData.name);
  useEffect(() => {
    const getItems = JSON.parse(localStorage.getItem("datakey"));
    if (getItems) {
      setGetData(getItems);
    } else {
      history("/signin");
    }
  }, [history]);

  return (
    <Box
      w="80%"
      m="auto"
      display="flex"
      flexDirection={["column", "row"]}
      justifyContent="space-evenly"
      h="70vh"
    >
      <Box alignSelf="center">
        <Image
          src={IMG1}
          boxSize="250px"
          objectFit="cover"
          borderTopRadius="10"
        ></Image>
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignSelf="center"
        gap="10"
      >
        <Box display="flex" flexDirection="column">
          <Text color="green">Name </Text>
          <Text color="green">Email Id </Text>
          {/* <Text color="green">Contact Number </Text> */}
        </Box>
        <Box display="flex" flexDirection="column">
          <Text color="purple">{getData.name}</Text>

          <Text color="purple">{getData.email}</Text>

          {/* <Text color="purple">{getData.number}</Text> */}
        </Box>
      </Box>
    </Box>
  );
};

export default Details;
