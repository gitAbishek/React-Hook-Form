import React, { useEffect, useState } from "react";
import axios from "axios";

import { Container, Box, Heading, Button, Avatar } from "@chakra-ui/react";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    let url = `${process.env.REACT_APP_API_ROOT}/posts`;
    axios.get(url).then((res) => {
      setPosts(res.data);
    });
  }, []);

  console.log(posts);
  return (
    <>
      <Container display="flex" flexWrap="wrap" mt="10" gap="1">
        {posts.map((curElem) => {
          return (
            <Box
              w="250px"
              h="250px"
              p={4}
              color="white"
              m={4}
              display="flex"
              flexDir="column"
              justifyContent="space-between"
              alignItems="center"
              boxShadow="md"
              rounded="lg"
              borderRadius="2"
            >
              <Heading as="h3" size="sm" color="gray" textAlign="center" >
                {curElem.title.rendered}
              </Heading>

              <Avatar size='lg' name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />

              <Button colorScheme="blue" variant="solid" size="md">
                Visit Blog Details
              </Button>
            </Box>
          );
        })}
      </Container>
    </>
  );
};

export default Posts;
