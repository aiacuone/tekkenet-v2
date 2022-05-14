import { Box, Button, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { AiOutlineRollback } from "react-icons/ai";
import { GrAdd } from "react-icons/gr";
import Link from "next/link";
import { DualNestedCardTemplate } from "./templates";

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

  const mixUpsNode = (
    <DualNestedCardTemplate
      heading={"Mix Ups"}
      bg0={"purple.100"}
      data={mixUps}
      character={character}
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
