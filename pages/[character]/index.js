import { NestGroupTemplate } from "../../components";
import { useRouter } from "next/router";
import { characters } from "../../characters";
import { mixUps } from "../../mixUps";

const CharacterPage = () => {
  const route = useRouter();
  const { character } = route.query;
  const moves = characters[character];
  const data = mixUps[character];

  const props = {
    character,
    moves,
    data,
  };

  return <NestGroupTemplate {...props} />;
};

export default CharacterPage;
