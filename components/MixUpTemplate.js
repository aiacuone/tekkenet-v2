import { Box, Flex, Text } from "@chakra-ui/react";

export function MixUpTemplate({ category, character, id, details }) {
  return (
    <Box>
      <Text>{category}</Text>
      <Text>{character}</Text>
      <Text>{id}</Text>
      {Object.keys(details).map((v) => {
        return (
          <Flex>
            <Text mr={3} fontWeight={"bold"} textTransform={"capitalize"}>
              {`${v}:`}
            </Text>
            <Text>{details[v]}</Text>
          </Flex>
        );
      })}
    </Box>
  );
}
