import { Button, Flex, Heading, Stack } from "@chakra-ui/react";
import { AiOutlineRollback } from "react-icons/ai";
import { GrAdd } from "react-icons/gr";
import Link from "next/link";
import { MixUpCard } from "./MixUpCard";

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

  const categories = (
    <Stack mt={"10"} spacing={10}>
      {mixUps &&
        Object.keys(mixUps).map((category) => {
          return (
            <Flex
              bg={"gray.300"}
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
                {category}
              </Heading>
              <Stack spacing={5}>
                {mixUps[category].map((mixUpData) => {
                  return (
                    <MixUpCard
                      data={mixUpData}
                      character={character}
                      category={category}
                      fontSize={12}
                    />
                  );
                })}
              </Stack>
            </Flex>
          );
        })}
    </Stack>
  );

  return (
    <Flex w={"100%"} h={"100%"} direction={"column"} p={10}>
      {heading}
      {navHeader}
      {categories}
    </Flex>
  );
}
