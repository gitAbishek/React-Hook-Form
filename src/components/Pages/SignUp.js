import React, { useState } from "react";

import { BiShow } from "react-icons/bi";

import { useForm } from "react-hook-form";

import axios from "axios";

import IMGSignin from "../Image/signshow.jpeg";

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  FormErrorMessage,
  Text,
  Button,
  Stack,
  InputRightElement,
  Link,
  Image,
  // AlertIcon,
  // AlertTitle,
  // Alert,
  // AlertDescription,
} from "@chakra-ui/react";
import { useNavigate, NavLink } from "react-router-dom";

const SignUp = () => {
  const [show, setShow] = useState(false);
  const history = useNavigate();

  const handleClick = () => {
    setShow(!show);
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      number: "",
      email: "",
      password: "",
      cpassword: "",
    },
  });
  const onSubmit = (value) => {
    const { name, username, email, password } = value;

    axios
      .post(
        "http://blogpost.test/wp-json/wp/v2/users",
        null,
        {
          params: { name, username, email, password },
          headers: {
            Authorization: "Bearer " + process.env.REACT_APP_JWT_TOKEN,
          },
        },
        {}
      )
      .then((data) => {
        console.log("res", data);
      })
      .catch((err) => {
        console.log(err);
      });
    localStorage.setItem("datakey", JSON.stringify(value));
    alert("Registration Successfull ...");
    history("/signin");
  };

  return (
    <>
    {/* <Alert
        status="success"
        variant="subtle"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        height="200px"
      >
        <AlertIcon boxSize="40px" mr={0} />
        <AlertTitle mt={4} mb={1} fontSize="lg">
          Application submitted!
        </AlertTitle>
        <AlertDescription maxWidth="sm">
          Thanks for submitting your application. Our team will get back to you
          soon.
        </AlertDescription>
      </Alert> */}
    <Flex justifyContent="space-evenly" gap="10" h="70vh" bgColor="black">
      <Box
        shadow="md"
        p="30"
        w={["90%", "75%", "60%", "50%", "25%"]}
        height="400px"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack>
            <Text color="pink" textAlign="center" fontSize="30">
              Sign Up
            </Text>

            <FormControl isInvalid={errors.name}>
              <FormLabel color="gray.500">FullName</FormLabel>
              <Input
                color="white"
                id="name"
                type="text"
                {...register("name", { required: "This field is required" })}
              />
              <FormErrorMessage>
                {errors.name && errors.name.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={errors.username}>
              <FormLabel color="gray.500">UserName</FormLabel>
              <Input
                color="white"
                id="username"
                type="text"
                {...register("username", {
                  required: "This field is required",
                })}
              />
              <FormErrorMessage>
                {errors.username && errors.username.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={errors.email}>
              <FormLabel color="gray.500">Email</FormLabel>
              <Input
                color="white"
                id="email"
                {...register("email", {
                  required: "This field is required",
                  pattern: {
                    value:
                      /^([a-zA-Z0-9-.]{1,50})@([a-zA-Z0-9]{2,25}).([a-z]{2,8})$/,
                    message: "Invalid ! email address",
                  },
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
                    required: "This field is required",
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

            <FormControl isInvalid={errors.cpassword}>
              <FormLabel color="gray.500">Confirm password</FormLabel>
              <InputGroup>
                <Input
                  color="white"
                  id="cpassword"
                  name="cpassword"
                  type={show ? "text" : "password"}
                  {...register("cpassword", {
                    required: "This field is required",
                    validate: (value) => {
                      if (watch("password") !== value) {
                        return "password not matching";
                      }
                    },
                  })}
                />
                <InputRightElement>
                  <BiShow color="pink" cursor="pointer" onClick={handleClick} />
                </InputRightElement>
              </InputGroup>

              <FormErrorMessage>
                {errors.cpassword && errors.cpassword.message}
              </FormErrorMessage>
            </FormControl>

            <Button type="submit" variant="solid" colorScheme="teal">
              Create
            </Button>
          </Stack>
          <Flex gap="3" pt="5" justifyContent="center">
            <Text color="pink">Already have an Account </Text>
            <Link color="blue">
              <NavLink to="/signin"> SignIn</NavLink>
            </Link>
          </Flex>
        </form>
      </Box>
      <Box alignSelf="center">
        <Image
          src={IMGSignin}
          boxSize="400px"
          objectFit="cover"
          borderRadius="2"
        ></Image>
      </Box>
      
    </Flex>
    </>
  );
};

export default SignUp;
