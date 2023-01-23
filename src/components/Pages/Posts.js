import { NavLink } from "react-router-dom";

import { useQuery } from "react-query";
import axios from "axios";

import {
  Container,
  Box,
  Heading,
  Button,
  Avatar,
  Text,
  Flex,
} from "@chakra-ui/react";
import { useState } from "react";

const Posts = () => {
  const [page, setPage] = useState(1);
  const onSuccess = (data) => {
    console.log("perform side effects after data fetching", data);
  };

  const onError = (error) => {
    console.log("perform side effects after encountering error", error);
  };

  const fetchPostData = async (pageparam) => {
    return await axios.get(
      `http://blogpost.test/wp-json/wp/v2/posts?per_page=3&page=${pageparam}`
    );
  };

  const { isLoading, data, error, isError, isPreviousData } = useQuery(
    ["key", page],
    () => fetchPostData(page),
    {
      onSuccess,
      onError,
      keepPreviousData: true,
    }
  );

  console.log("post data", data);

  if (isLoading) {
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
    <Container
      h="70vh"
      display="flex"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      gap="10"
      maxWidth="auto"
      //mt="20"
      position="sticky"
    >
      <Flex justify="center">
        {data?.data.map((curElem) => {
          return (
            <NavLink to={`/post/${curElem.id}`}>
              <Box
                key={curElem.id}
                w="350px"
                h="350px"
                p={4}
                color="white"
                m={4}
                display="flex"
                flexDir="column"
                justifyContent="space-around"
                alignItems="center"
                boxShadow="md"
                rounded="lg"
                borderRadius="2"
              >
                <Heading as="h3" size="sm" color="gray" textAlign="center">
                  {curElem.title.rendered}
                </Heading>

                <Avatar
                  size="lg"
                  name="Dan Abrahmov"
                  src="https://bit.ly/dan-abramov"
                />

                {/* <Button colorScheme="blue" variant="solid" size="md">
                  Visit Blog Details
                </Button> */}
              </Box>
            </NavLink>
          );
        })}
      </Flex>
      <Flex w="80%" mx="auto" justifyContent="space-between">
        <Button
          colorScheme="blue"
          disabled={page === 1}
          onClick={() => {
            setPage(page - 1);
          }}
        >
          Previous
        </Button>
        <Button
          colorScheme="blue"
          onClick={() => {
            setPage(page + 1);
          }}
          disabled={isPreviousData}
        >
          Next Page
        </Button>
      </Flex>
    </Container>
  );
};

export default Posts;
