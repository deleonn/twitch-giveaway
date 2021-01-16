import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { Follower } from "../../utils/api";
import { Loader } from "../../UI";

interface Props {
  followers: Array<Follower>;
  total: number;
  isFetching: boolean;
  handleFollowersChange: (followers: Array<Follower>) => void;
}

export default function List({
  followers,
  total,
  isFetching,
  handleFollowersChange,
}: Props) {
  const [computedFollowers, setComputedFollowers] = React.useState<
    Array<Follower>
  >([]);

  React.useEffect(() => {
    return addCheckValueToEachFollower();
  }, [followers]);

  React.useEffect(() => {
    handleFollowersChange(computedFollowers);
  }, [computedFollowers]);

  const addCheckValueToEachFollower = () => {
    const computed = followers!.map((follower) => ({
      ...follower,
      checked: true,
    }));
    setComputedFollowers(computed);
  };

  const handleCheckAll = (
    e: React.MouseEvent<HTMLInputElement, MouseEvent>
  ) => {
    const computed = computedFollowers.map((follower) => ({
      ...follower,
      checked: (e.target as HTMLInputElement).checked,
    }));

    setComputedFollowers(computed);
  };

  const handleCheckboxChange = (idx: number) => {
    const computed = [...computedFollowers];
    computed[idx].checked = !computed[idx].checked;

    setComputedFollowers(computed);
  };

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
              <div style={{ display: "flex", flexDirection: "column" }}>
                <label
                  htmlFor="checkAll"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "0.5rem",
                  }}
                >
                  <input
                    type="checkbox"
                    id="Check All"
                    onClick={(e) => handleCheckAll(e)}
                    defaultChecked={true}
                  />
                  <Text color="white" style={{ marginLeft: "0.5rem" }}>
                    Check All
                  </Text>
                </label>
              </div>
              {computedFollowers.length &&
                computedFollowers.map((el, idx) => (
                  <div
                    key={el.followed_at}
                    style={{ display: "flex", flexDirection: "column" }}
                  >
                    <label
                      htmlFor={el.from_name}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "0.5rem",
                      }}
                    >
                      <input
                        type="checkbox"
                        id={el.from_name}
                        checked={el.checked}
                        onChange={() => handleCheckboxChange(idx)}
                      />
                      <Text color="white" style={{ marginLeft: "0.5rem" }}>
                        {el.from_name}
                      </Text>
                    </label>
                  </div>
                ))}
            </Box>
          </>
        )}
      </Flex>
    </Box>
  );
}
