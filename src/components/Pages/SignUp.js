import React, { useState } from "react";

import { BiShow } from "react-icons/bi";

import { useForm } from "react-hook-form";
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
} from "@chakra-ui/react";

const SignUp = () => {
  const [show, setShow] = useState(false);
  const [value, setValue] = useState("");

  const handleClick = () => {
    setShow(!show);
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors},
  } = useForm();

  const onSubmit = (data) => {
    setValue(data);
  };

  console.log("usestate data : ", value);

  return (
    <Flex justifyContent="center" mt="20">
      <Box
        border="1px solid gray"
        p="10"
        width="25%"
        height="fit-content"
        borderRadius="5"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack>
            <Text pb="5" color="blue.300">
              Registration Form
            </Text>

            <FormControl isInvalid={errors.name}>
              <FormLabel color="gray.500">FullName</FormLabel>
              <Input
                id="name"
                type="text"
                {...register("name", { required: "This field is required" })}
              />
              <FormErrorMessage>
                {errors.name && errors.name.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={errors.number}>
              <FormLabel color="gray.500">Number</FormLabel>
              <Input
                id="number"
                type="number"
                {...register("number", {
                  required: "This field is required",
                  minLength: {
                    value: 10,
                    message:
                      "Exact 10 digit number : currently having less than 10 digit",
                  },
                  maxLength: {
                    value: 10,
                    message:
                      "Exact 10 digit number : currently having more than 10 digit",
                  },
                  pattern: {
                    value: /9[7-8]{1}[0-9]{8}/,
                    message: "Enter the valid number starting with 98 or 97",
                  },
                })}
              />
              <FormErrorMessage>
                {errors.number && errors.number.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={errors.email}>
              <FormLabel color="gray.500">Email</FormLabel>
              <Input
                id="email"
                {...register("email", {
                  required: "This field is required",
                  pattern: {
                    value:
                      /^([a-zA-Z0-9-.]{3,25})@([a-zA-Z0-9]{3,8}).([a-z]{2,5})$/,
                    message: "Invalid ! plz use gmail format ",
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
                  id="cpassword"
                  name="cpassword"
                  type={show ? "text" : "password"}
                  {...register("cpassword", {
                    required: "This field is required",
                    validate : (value) => {
                        if(watch('password') !== value){
                            return "password not matching";
                        }
                    }
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
        </form>
      </Box>
    </Flex>
  );
};

export default SignUp;
