import React from "react";
import { Flex, Button, Fade, Text } from "@chakra-ui/react";
import { Header } from "../../UI";

const labelOptions = [
  "Connecting to the private server...",
  "Choosing the best follower...",
  "Removing blacklisted users...",
  "Computing results...",
];

export default function Picker() {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [isShowing, setIsShowing] = React.useState<boolean>(false);
  const [currentLabel, setCurrentLabel] = React.useState<string>(
    labelOptions[0]
  );

  const handleWinner = () => {
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
        console.log("Counting", counter);
        console.log("Showing", isShowing);
      } else {
        setIsShowing(false);
        setIsLoading(false);
        setCurrentLabel("");
        console.log("Exiting", counter);
        clearInterval(interval);
        interval = null;
      }
      setIsShowing(true);
    }, 2500);
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
      </Flex>
    </Flex>
  );
}
