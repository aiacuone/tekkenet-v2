import { Box, Button, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { AiOutlineRollback } from "react-icons/ai";
import { GrAdd } from "react-icons/gr";
import Link from "next/link";
import { MixUpCard } from "./MixUpCard";

const groupColors = [
  "purple.200",
  "blue.200",
  "green.200",
  "red.200",
  "teal.200",
];

export function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const randomGroupColor = groupColors[getRandomInt(groupColors.length)];

export function CharacterTemplate({ character, moves, mixUps }) {
  const navIconSize = 20;

  const heading = (
    <Flex w={"100%"} justifyContent={"center"}>
      <Heading textTransform={"capitalize"}>{character}</Heading>
    </Flex>
  );

  const navHeader = (
    <Flex>
      <Flex flex={1}>
        <Link href={"/"}>
          <Button leftIcon={<AiOutlineRollback size={navIconSize} />}>
            Back
          </Button>
        </Link>
      </Flex>
      <Flex flex={1} justifyContent={"flex-end"}>
        <Link href={"/"}>
          <Button leftIcon={<GrAdd size={navIconSize} />}>Add</Button>
        </Link>
      </Flex>
    </Flex>
  );

  const DualNestedCardTemplate = ({ heading, background0, data }) => {
    return (
      <Box bg={background0} px={10} py={6} position={"relative"}>
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

  const mixUpsNode = (
    <DualNestedCardTemplate
      heading={"Mix Ups"}
      background0={"purple.100"}
      data={mixUps}
    />
  );

  return (
    <Flex w={"100%"} h={"100%"} direction={"column"} p={10}>
      <Stack spacing={10}>
        {heading}
        {navHeader}
        {mixUpsNode}
      </Stack>
    </Flex>
  );
}
