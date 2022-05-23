import { Box, Flex, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { mixUps } from "../../mixUps";

export function DetailsPageTemplate({ category, character, id, details }) {
  const router = useRouter();

  console.log({ category, character, id, router });

  return (
    <Box>
      <Text>{category}</Text>
      <Text>{character}</Text>
      <Text>{id}</Text>
      {details &&
        Object.keys(details).map((v) => {
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
