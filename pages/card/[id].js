import { useRouter } from "next/router";
import { mixUps } from "../../mixUps";
import { find } from "lodash";
import { getAllArraysInObject } from "../../utils";
import { Text } from "@chakra-ui/react";

export default function CardPage() {
  const { id } = useRouter().query;
  const allCards = getAllArraysInObject(mixUps);
  const card = find(allCards, (v) => {
    return v.id === parseInt(id);
  });
  return (
    <div>
      {Object.keys(card).map((v) => (
        <Text>{`${v} : ${card[v]}`}</Text>
      ))}
    </div>
  );
}
