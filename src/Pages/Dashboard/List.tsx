import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { Follower } from "../../utils/api";
import { Loader } from "../../UI";

interface Props {
  followers: Array<Follower>;
  total: number;
  isFetching: boolean;
}

export default function List({ followers, total, isFetching }: Props) {
  return (
    <Box h="100vh" bg="gray.900" w="300px">
      <Flex p={4} h="100%" direction="column">
        {isFetching && <Loader />}
        {!isFetching && (
          <>
            <Text color="white" fontSize="xl" mb={4}>
              You have{" "}
              <Text as="b" color="purple.300">
                {total} followers
              </Text>{" "}
              {total > 0 ? "❤️" : "😣"}
            </Text>
            <Box overflowY="scroll" flex="1">
              {followers.length &&
                followers.map((el) => (
                  <React.Fragment key={el.followed_at}>
                    <Text color="white">{el.from_name}</Text>
                  </React.Fragment>
                ))}
            </Box>
          </>
        )}
      </Flex>
    </Box>
  );
}
