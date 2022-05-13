import { Button, Text } from "@chakra-ui/react";
import Link from "next/link";

export const CharacterCard = ({ character }) => {
  return (
    <Link href={`/characters/${character}`}>
      <Button w={150}>
        <Text textTransform={"capitalize"}>{character}</Text>
      </Button>
    </Link>
  );
};
