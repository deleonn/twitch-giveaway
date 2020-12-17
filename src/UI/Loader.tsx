import React from "react";
import { Flex, Spinner } from "@chakra-ui/react";

export default function Loader(): React.ReactElement {
  return (
    <Flex w="inherit" h="100vh" justifyContent="center" alignItems="center">
      <Spinner
        color="purple.500"
        size="xl"
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
      />
    </Flex>
  );
}
