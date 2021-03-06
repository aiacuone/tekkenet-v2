import { Button, Flex, Heading, Stack } from "@chakra-ui/react";
import Link from "next/link";
import { AiOutlineRollback } from "react-icons/ai";
import { GrAdd } from "react-icons/gr";
import {MoveCard} from "../MoveCard";

export function CharacterPageTemplate({ character, allCharacterMoves, data }) {
  const navIconSize = 20;

  const heading = (
    <Flex w={"100%"} justifyContent={"center"}>
      <Heading textTransform={"capitalize"}>{character}</Heading>
    </Flex>
  );

  const controls = (
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

  return (
    <Flex w={"100%"} h={"100vh"} p={10} direction={"column"}>
      <Stack spacing={10}>
        {heading}
        {controls}
          {allCharacterMoves.map(move=>{
              return <MoveCard move={move}/>
          })}
      </Stack>
    </Flex>
  );
}
