import React from "react";
import { Flex, Button, Fade, Text, Box } from "@chakra-ui/react";
import { Header } from "../../UI";
import { Follower } from "../../utils/api";

const labelOptions = [
  "Connecting to the private server...",
  "Choosing the best follower...",
  "Removing blacklisted users...",
  "Computing results...",
];

interface Props {
  followers: Array<Follower>;
}

export default function Picker({ followers }: Props) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [isShowing, setIsShowing] = React.useState<boolean>(false);
  const [currentLabel, setCurrentLabel] = React.useState<string>(
    labelOptions[0]
  );
  const [winner, setWinner] = React.useState<string>("");

  const handleWinner = () => {
    setWinner("");

    let interval: any;
    let counter = 0;

    if (interval) {
      return;
    }

    setIsShowing(true);
    setIsLoading(true);
    setCurrentLabel(labelOptions[0]);

    interval = setInterval(() => {
      if (counter <= labelOptions.length - 1) {
        setCurrentLabel(labelOptions[counter]);
        setIsShowing(false);
        counter++;
      } else {
        setIsShowing(false);
        setIsLoading(false);
        setCurrentLabel("");
        clearInterval(interval);
        interval = null;

        chooseWinner();
      }
      setIsShowing(true);
    }, 1000);
  };

  const chooseWinner = () => {
    const idx = Math.floor(Math.random() * followers.length);
    const winner = followers[idx];
    setWinner(winner.from_name);
  };

  return (
    <Flex p={4} direction="column" flex={1}>
      <Header />
      <Flex
        flex={1}
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        {!winner && (
          <>
            <Button
              size="lg"
              colorScheme="purple"
              isLoading={isLoading}
              onClick={handleWinner}
              mb={4}
            >
              Choose a winner!
            </Button>
            <Fade in={isShowing}>
              <Text color="purple.300">{currentLabel}</Text>
            </Fade>
            <Text>{isShowing}</Text>
          </>
        )}

        {winner && (
          <Box textAlign="center">
            <Fade in={!!winner}>
              <Text fontSize="4xl">
                And the winner is...{" "}
                <Text as="span" color="purple.600" fontWeight="bold">
                  {winner}!
                </Text>
              </Text>
              <Text fontSize="lg" color="purple.400" as="i">
                Ay!
              </Text>
            </Fade>

            <Button
              size="sm"
              colorScheme="purple"
              isLoading={isLoading}
              onClick={handleWinner}
              mt={4}
            >
              Re-roll?
            </Button>
          </Box>
        )}
      </Flex>
    </Flex>
  );
}
