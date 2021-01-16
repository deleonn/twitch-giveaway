import React, { useContext } from "react";
import { Flex } from "@chakra-ui/react";
import List from "./List";
import Picker from "./Picker";
import { Follower, getFollowers } from "../../utils/api";
import { AuthContext } from "../../utils/authContext";

const tempFollowers: any[] = [];

function Home(): React.ReactElement {
  const [followers, setFollowers] = React.useState<Array<Follower>>([]);
  const [computedFollowers, setComputedFollowers] = React.useState<
    Array<Follower>
  >([]);
  const [isFetching, setIsFetching] = React.useState<boolean>(true);
  const [total, setTotal] = React.useState<any>(undefined);
  const { currentUser } = useContext(AuthContext);

  React.useEffect(() => {
    handleGetFollowers();
    // eslint-disable-next-line
  }, []);

  const handleGetFollowers = async (cursor?: string): Promise<void> => {
    const response = await getFollowers(
      currentUser?.user_id!,
      currentUser?.access_token!,
      cursor
    );

    tempFollowers.push(...response.data);

    if (response.pagination.cursor) {
      return handleGetFollowers(response.pagination.cursor);
    } else {
      setTotal(response.total);
      setIsFetching(false);
      setFollowers(tempFollowers);
    }
  };

  const followersChanged = (updatedFollowers: Array<Follower>) => {
    setComputedFollowers(updatedFollowers.filter((f) => f.checked === true));
  };

  return (
    <Flex>
      <List
        followers={followers}
        total={total}
        isFetching={isFetching}
        handleFollowersChange={followersChanged}
      />
      <Picker followers={computedFollowers} />
    </Flex>
  );
}

export default Home;
