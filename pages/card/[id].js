import { useRouter } from "next/router";
import { mixUps } from "../../mixUps";
import { find } from "lodash";
import { getAllArraysInObject } from "../../utils";
import { characters } from "../../characters";
import { Text } from "@chakra-ui/react";

export default function CardPage() {
  const { id } = useRouter().query;
  const allCharacterMixUps = getAllArraysInObject(mixUps);
  const allCharacterMoves = getAllArraysInObject(characters);
  const allCards = [...allCharacterMixUps, ...allCharacterMoves];
  const card = find(allCards, (v) => {
    return v["uuid"] === id;
  });
  return (
    <div>
      {Object.keys(card).map((v) => (
        <Text>{`${v} : ${card[v]}`}</Text>
      ))}
    </div>
  );
}
