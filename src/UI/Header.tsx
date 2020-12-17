import React, { useContext } from "react";
import { Box, Button, Flex, Heading, Spacer, Text } from "@chakra-ui/react";
import { AuthContext } from "../utils/authContext";

export default function Header() {
  const { handleLogout, currentUser } = useContext(AuthContext);

  return (
    <Flex w="100%" alignItems="flex-start" mb={4}>
      <Box>
        <Heading size="md">
          Welcome,
          <br />
          <Text color="purple.300" as="i">
            {currentUser?.username}
          </Text>
          <br />
          to your followers giveaway! 🔥
        </Heading>
      </Box>
      <Spacer />
      <Box>
        <Button colorScheme="red" size="xs" onClick={handleLogout}>
          Log out
        </Button>
      </Box>
    </Flex>
  );
}
