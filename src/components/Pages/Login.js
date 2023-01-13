import React, { useEffect, useState } from "react";
import { BiShow } from "react-icons/bi";
import { useForm } from "react-hook-form";


import IMGSignin from "../Image/signshow.jpeg"

import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Flex,
  Button,
  FormErrorMessage,
  Text,
  InputGroup,
  InputRightElement,
  Link,
  Image
} from "@chakra-ui/react";
import {  NavLink, useNavigate } from "react-router-dom";

const Login = () => {
  const [getData, setGetData] = useState([]);
  const [show, setShow] = useState(false);

  const history = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleClick = () => {
    setShow(!show);
  };

  const onSubmit = (data) => {
    const { email, password } = data;
    if (getData && getData.email && getData.password) {
      if (getData.email === email && getData.password === password) {
        sessionStorage.setItem("Login details",JSON.stringify(data))
        history("/details");
      } else {
        alert("Invalid deatls !");
      }
    } else {
      alert("No data in LocalStorage");
    }
  };

  useEffect(() => {
    const getItems = JSON.parse(localStorage.getItem("datakey"));
    setGetData(getItems);
  }, []);

  return (
    <Flex  justifyContent="space-evenly"  alignItems="center" gap="10" h="70vh" bgColor="black">
      <Box
        width={["85%", "65%", "50%", "40%", "25%"]}
        p="30"
        //shadow="md"
        borderRadius="5"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing="5">
            <Text pb="5" color="pink" textAlign="center" fontSize="30">
              Sign In 
            </Text>
            <FormControl isInvalid={errors.email}>
              <FormLabel color="gray.500">Email</FormLabel>
              <Input
                color="white"
                id="email"
                type="text"
                {...register("email", {
                  required: "Email is required",
                })}
              />
              <FormErrorMessage>
                {errors.email && errors.email.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={errors.password}>
              <FormLabel color="gray.500">Password</FormLabel>
              <InputGroup>
                <Input
                  color="white"
                  id="password"
                  type={show ? "text" : "password"}
                  {...register("password", {
                    required: "password is required",
                  })}
                />
                <InputRightElement>
                  <BiShow color="pink" cursor="pointer" onClick={handleClick} />
                </InputRightElement>
              </InputGroup>
              <FormErrorMessage>
                {errors.password && errors.password.message}
              </FormErrorMessage>
            </FormControl>

            <Button type="submit" variant="solid" colorScheme="teal">
              Login
            </Button>
          </Stack>
          <Flex gap="3" pt="5" justifyContent="center">
          <Text color="pink">Don't have a Account </Text><Link color="blue"><NavLink to="/signup"> SignUp</NavLink></Link>
          </Flex>
          
        </form>
      </Box>
      <Box>
      <Image
          src={IMGSignin}
          boxSize="400px"
          objectFit="cover"
          borderRadius="2"
        ></Image>
      </Box>
    </Flex>
  );
};

export default Login;
