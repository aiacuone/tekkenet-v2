import { useRouter } from "next/router";
import { characters } from "../../characters";
import { mixUps as allMixUps } from "../../mixUps";
import { getCharacterMoves } from "../../utils";
import { CharacterPageProvider } from "../../components";

export default function CharacterPage() {
  const route = useRouter();
  const { character } = route.query;
  const {
    frames: { range: getFramesRange },
  } = getCharacterMoves;
  const allCharacterMoves = characters[character];
  if (!allCharacterMoves) return null;

  const mixUps = allMixUps[character];
  const pokes = getFramesRange({
    min: 9,
    max: 13,
    moveList: allCharacterMoves,
  });

  //All the nested groups rendered
  const data = [
    { name: "mixUps", data: mixUps },
    { name: "pokes", data: pokes },
  ];
  const props = {
    character,
    allCharacterMoves,
    data,
  };
  return <CharacterPageProvider {...props} />;
}
