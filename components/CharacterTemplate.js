import { Button, Flex, Heading, Stack } from "@chakra-ui/react";
import { AiOutlineRollback } from "react-icons/ai";
import { GrAdd } from "react-icons/gr";
import Link from "next/link";
import { mixUps } from "../mixUps";
import { CharacterCard } from "./CharacterCard";

export function CharacterTemplate({ character, list }) {
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

  const categoriesArr = ["neutral", "wake up", "throw", "unblockable"];

  const categories = (
    <Stack mt={"10"} spacing={10}>
      {categoriesArr.map((c) => {
        return (
          <Flex bg={"gray.100"} pb={10}>
            <Heading size={"sm"} textTransform={"capitalize"} m={3}>
              {c}
            </Heading>
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
