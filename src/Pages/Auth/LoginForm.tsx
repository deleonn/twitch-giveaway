import React from "react";
import { useForm } from "react-hook-form";
import { FormErrorMessage, FormControl, Button } from "@chakra-ui/react";
import { FaTwitch } from "react-icons/fa";
import { twitchAuthFlowURI } from "../../utils/api";

export default function LoginForm() {
  const { handleSubmit, errors, formState } = useForm();

  function onSubmit() {
    window.open(twitchAuthFlowURI, "_self");
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={errors.name}>
        <FormErrorMessage>
          {errors.name && errors.name.message}
        </FormErrorMessage>
      </FormControl>
      <Button
        mt={4}
        colorScheme="purple"
        isLoading={formState.isSubmitting}
        type="submit"
        w="100%"
        leftIcon={<FaTwitch />}
      >
        Sign in with Twitch
      </Button>
    </form>
  );
}
