import React, { useContext } from "react";
import { Flex } from "@chakra-ui/react";
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
    // eslint-disable-next-line
  }, []);

  const handleGetFollowers = async (cursor?: string) => {
    const response = await getFollowers(
      currentUser?.user_id!,
      currentUser?.access_token!,
      cursor
    );
    setFollowers([...response.data, ...followers]);

    if (response.pagination.cursor) {
      handleGetFollowers(response.pagination.cursor);
    } else {
      setTotal(response.total);
      setIsFetching(false);
    }
  };

  return (
    <Flex>
      <List followers={followers} total={total} isFetching={isFetching} />
      <Picker followers={followers} />
    </Flex>
  );
}

export default Home;
