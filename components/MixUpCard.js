import mixUps from "../mixUps";
import { Flex } from "@chakra-ui/react";

const mixUpCard = ({ options, summary, notes }) => {
  const { options, summary, notes } = mixUp;
  return (
    <Flex direction={"column"}>
      <Text>{options}</Text>
      <Text>{summary}</Text>
      <Text>{notes}</Text>
    </Flex>
  );
};
