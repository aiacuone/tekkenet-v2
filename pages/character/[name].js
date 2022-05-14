import { CharacterTemplate } from "../../components";
import { useRouter } from "next/router";
import { characters } from "../../characters";
import { mixUps } from "../../mixUps";

const CharacterProvider = () => {
  const route = useRouter();
  const character = route.query.name;
  const moves = characters[character];
  const characterMixUps = mixUps[character];
  console.log(characterMixUps, "character mix ups");
  const props = {
    character,
    moves,
    mixUps: characterMixUps,
  };

  return <CharacterTemplate {...props} />;
};

export default CharacterProvider;
