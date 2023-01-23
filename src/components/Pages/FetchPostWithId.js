import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { useParams, useNavigate } from "react-router-dom";
import parse from "html-react-parser";

import { Flex, Text, Box, Stack, Button } from "@chakra-ui/react";

const FetchPostWithId = () => {
  const { postid } = useParams();
  const history = useNavigate();

  const FetchPostDetails = (postid) => {
    return axios.get(`http://blogpost.test/wp-json/wp/v2/posts/${postid}`);
  };

  const { data, isLoading, isFetching, isError, error } = useQuery(
    ["post-id", postid],
    () => FetchPostDetails(postid)
  );

  console.log("data is", data);

  if (isLoading || isFetching) {
    return (
      <Flex justify="center" h="90vh" mt="300">
        <Text fontWeight="bold" fontSize="4xl">
          Loading....
        </Text>
      </Flex>
    );
  }

  if (isError) {
    return (
      <Flex justify="center" h="90vh" mt="300">
        <Text fontWeight="bold" fontSize="4xl">
          {error.message}
        </Text>
      </Flex>
    );
  }
  return (
    <>
      <Box w="80%" m="auto" pt="20" h="60vh">
        <Stack spacing="20">
          <Text textTransform="uppercase" textColor="green">
            {data?.data.title.rendered}
          </Text>
          <p>{parse(data?.data.content.rendered)}</p>
        </Stack>
      </Box>

      <Flex w="80%" mx="auto" justifyContent="space-between" h="10vh"  >
        <Button colorScheme='teal' variant='outline' px="8" onClick={() => history('/posts')}> Back </Button>
      </Flex>
    </>
  );
};

export default FetchPostWithId;
