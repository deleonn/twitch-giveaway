import React from "react";
import { Box, Button, Flex } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";

import LoginForm from "./LoginForm";

function Login(): React.ReactElement {
  return (
    <Flex
      bg={"gray.900"}
      height="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <Box bg={"white"} w="400px" p={4} borderRadius={5}>
        <Text fontSize="3xl">Sign in</Text>
        <Text fontSize="sm">
          Give your followers something special ❤️ <br />
          Use your twitch account to get started.
        </Text>
        <LoginForm />
      </Box>
    </Flex>
  );
}

export default Login;
