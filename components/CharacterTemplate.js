import { Button, Flex, Heading, Stack } from "@chakra-ui/react";
import { AiOutlineRollback } from "react-icons/ai";
import { GrAdd } from "react-icons/gr";
import Link from "next/link";
import { CardNestingTemplate } from "./templates";

export function CharacterTemplate({ character, data }) {
  if (!data) return null;
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

  const cardNestGroups = Object.keys(data).map((group, i) => {
    return (
      <CardNestingTemplate
        data={data[group]}
        metaName={group}
        character={character}
        key={`cardNestGroups/${group}/${i}`}
      />
    );
  });

  return (
    <Flex w={"100%"} h={"100%"} direction={"column"} p={10}>
      <Stack spacing={10}>
        {heading}
        {controls}
        {cardNestGroups}
      </Stack>
    </Flex>
  );
}
