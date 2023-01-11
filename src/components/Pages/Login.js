import React,{useState} from "react";
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
  Text
} from "@chakra-ui/react";

const Login = () => {
  const [value,setValue] = useState()
  const { register, handleSubmit, formState :{ errors } } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  console.log(errors);

  const onSubmit = (data) => {
    console.log('onSubmit data : ',data);
    setValue(data)
  };
  console.log('usestate data',value)
  return (
    <Flex justifyContent="center" alignItems="center" gap="10" mt="20">
      <Box
        width={['85%','65%','50%','40%','25%']}
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
            <FormControl isInvalid={errors.username}>
              <FormLabel color="gray.500">UserName</FormLabel>
              <Input
                id="username"
                type="text"
                {...register("username", {
                  required: "This field is requird",
                  minLength: {
                    value: 4,
                    message: "Minimum Length should be 4",
                  },
                })}
              />
              <FormErrorMessage>
                {errors.username && errors.username.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={errors.password}>
              <FormLabel color="gray.500">Password</FormLabel>
              <Input
                id="password"
                type="password"
                {...register("password", {
                  required: "This field is requird",
                  minLength: {
                    value: 5,
                    message: "Minimun Length should be 5",
                  },
                })}
              />
              <FormErrorMessage>{errors.password && errors.password.message}</FormErrorMessage>
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
