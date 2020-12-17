import React, { useContext } from "react";
import { Box, Flex } from "@chakra-ui/react";
import List from "./List";
import Picker from "./Picker";
import { Follower, getFollowers } from "../../utils/api";
import { AuthContext } from "../../utils/authContext";

function Home(): React.ReactElement {
  const [followers, setFollowers] = React.useState<Array<Follower>>([]);
  const [isFetching, setIsFetching] = React.useState<boolean>(true);
  const [total, setTotal] = React.useState<any>(undefined);
  const { currentUser } = useContext(AuthContext);

  React.useEffect(() => {
    handleGetFollowers();
  }, []);

  const handleGetFollowers = async () => {
    const response = await getFollowers(
      currentUser?.user_id!,
      currentUser?.access_token!
    );
    setTotal(response.total);
    setFollowers(response.data);
    setIsFetching(false);
  };

  return (
    <Flex>
      <List followers={followers} total={total} isFetching={isFetching} />
      <Picker followers={followers} />
    </Flex>
  );
}

export default Home;
