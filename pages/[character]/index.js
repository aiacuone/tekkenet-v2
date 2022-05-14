import { CharacterTemplate } from "../../components";
import { useRouter } from "next/router";
import { characters } from "../../characters";
import { mixUps } from "../../mixUps";

const CharacterProvider = () => {
  const route = useRouter();
  const { character } = route.query;
  const moves = characters[character];
  const characterMixUps = mixUps[character];

  const props = {
    character,
    moves,
    mixUps: characterMixUps,
  };

  return <CharacterTemplate {...props} />;
};

export default CharacterProvider;
