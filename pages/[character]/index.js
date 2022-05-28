import { NestGroupTemplate } from "../../components";
import { useRouter } from "next/router";
import { characters } from "../../characters";
import { mixUps as allMixUps } from "../../mixUps";
import { getCharacterMoves } from "../../utils";

const CharacterPage = () => {
  const route = useRouter();
  const { character } = route.query;
  const {
    frames: { range: getFramesRange },
  } = getCharacterMoves;
  const moves = characters[character];
  const mixUps = allMixUps[character];
  const pokes = getFramesRange({ min: 9, max: 10, moveList: moves });

  //All the nested groups rendered
  const data = { "Mix Ups": mixUps, Pokes: pokes };
  const props = {
    character,
    moves,
    data,
  };
  return <NestGroupTemplate {...props} />;
};

export default CharacterPage;
