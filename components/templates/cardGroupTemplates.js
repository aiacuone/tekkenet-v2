import { Box, Flex, Heading, Stack } from "@chakra-ui/react";
import { MixUpCard } from "../index";
import { randomGroupColor } from "../../utils";

export const DualNestedCardTemplate = ({ heading, bg0, data, character }) => {
  return (
    <Box bg={bg0} px={10} py={6} position={"relative"}>
      <Heading
        size={"sm"}
        textTransform={"capitalize"}
        m={3}
        position={"absolute"}
        top={0}
        left={0}
      >
        {heading}
      </Heading>
      <Stack mt={5} spacing={10}>
        {data &&
          Object.keys(data).map((group) => {
            return (
              <Flex
                bg={randomGroupColor}
                p={10}
                justifyContent={"center"}
                alignItems={"center"}
                position={"relative"}
              >
                <Heading
                  size={"sm"}
                  textTransform={"capitalize"}
                  m={3}
                  position={"absolute"}
                  top={0}
                  left={0}
                >
                  {group}
                </Heading>
                <Stack spacing={5}>
                  {data[group].map((cardData) => {
                    return (
                      <MixUpCard
                        data={cardData}
                        character={character}
                        category={group}
                        fontSize={12}
                        cardWidth={"100%"}
                      />
                    );
                  })}
                </Stack>
              </Flex>
            );
          })}
      </Stack>
    </Box>
  );
};
