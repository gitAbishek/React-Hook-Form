import React from "react";

import { useForm } from "react-hook-form";

import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Flex,
  Button,
  Stack,
  Textarea,
  
} from "@chakra-ui/react";

const Contact = () => {
 
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, touchedFields, dirtyFields, isDirty, isSubmitted, submitCount },
  } = useForm({
    defaultValues: {
      Name: "",
      Email: "",
      Message: "",
    },
  });

  console.log("watch", watch());
  const onSubmit = (data) => {
    
    console.log(data);
  };
  console.log("errors", errors);
  console.log("touchfields", touchedFields);
  console.log("dirtyfields", dirtyFields);
  console.log("isDirty", isDirty);
  console.log('isSubmitted', isSubmitted)
  console.log("submitCount", submitCount)

  return (
    <Flex justifyContent="center" alignItems="center" gap="10"  bgColor="black" h="70vh" >
      <Box
        width={['100%','80%','70%','70%','50%']}
        p={['5','5','10','10','10']}
        height="fit-content"
        borderRadius="5"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack>
            <FormControl>
              <FormLabel color="gray.500">Your Name</FormLabel>
              <Input
                type="text"
                name="name"
                {...register("Name", {
                  required: true,
                  minLength: 3,
                  maxLength: 10,
                })}
                aria-invalid={errors.Name ? "true" : "false"}
              />
              {errors.Name?.type === "required" && (
                <label> Name is required.</label>
              )}
              {errors.Name?.type === "maxLength" && (
                <label> length should be smaller or equal 10 letters </label>
              )}
              {errors.Name?.type === "minLength" && (
                <label> Length should be greater or equal to 3 letters</label>
              )}
            </FormControl>

            <FormControl>
              <FormLabel color="gray.500">Your Email</FormLabel>
              <Input
                type="email"
                name="email"
                {...register("Email", { required: true })}
                aira-invalid={errors.Email ? "true" : "false"}
              />

              {errors.Email && <label>Email is required.</label>}
            </FormControl>

            <FormControl>
              <FormLabel color="gray.500">Message</FormLabel>
              <Textarea
                type="text"
                name="message"
                {...register("Message", { required: true, minLength: 5 })}
                aria-invalid={errors.Message ? "true" : "false"}
              />

              {errors.Message?.type === "required" && (
                <label>Message is required.</label>
              )}
              {errors.Message?.type === "minLength" && (
                <label>length should be greater than 5 letters</label>
              )}
            </FormControl>

            <Button type="submit" variant="solid" colorScheme="blue" w="20%">
              Send
            </Button>
          </Stack>
        </form>
      </Box>
      
    </Flex>
  );
};

export default Contact;
