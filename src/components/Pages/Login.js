import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
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
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [getData, setGetData] = useState([]);

  const history = useNavigate()
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

  const onSubmit = (data) => {
    const {email,password} = data;
    if (getData && getData.email && getData.password) {
      if (
        getData.email === email &&
        getData.password === password
      ) {
        history('/details')
      } else {
        alert('Invalid deatls !')
      }
    } else {
      alert('No data in LocalStorage')
    }
  };

  useEffect(()=>{
    const getItems = JSON.parse(localStorage.getItem("datakey"));
      setGetData(getItems);
  },[])

  

  return (
    <Flex justifyContent="center" alignItems="center" gap="10" mt="20">
      <Box
        width={["85%", "65%", "50%", "40%", "25%"]}
        p="10"
        height="fit-content"
        shadow="md"
        borderRadius="5"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing="5">
            <Text pb="5" color="blue.700">
              Login From here.....
            </Text>
            <FormControl isInvalid={errors.email}>
              <FormLabel color="gray.500">Email</FormLabel>
              <Input
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
              <Input
                id="password"
                type="password"
                {...register("password", {
                  required: "password is required",
                })}
              />
              <FormErrorMessage>
                {errors.password && errors.password.message}
              </FormErrorMessage>
            </FormControl>

            <Button type="submit" variant="solid" colorScheme="teal">
              Login
            </Button>
          </Stack>
        </form>
      </Box>
    </Flex>
  );
};

export default Login;
