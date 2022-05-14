import { MixUpTemplate } from "../../../../components/MixUpTemplate";
import { useRouter } from "next/router";
import { mixUps } from "../../../../mixUps";

const MixUpProvider = () => {
  const router = useRouter();
  const { category, character, id } = router.query;

  const filteredMixUp = mixUps[character]?.[category]?.filter(
    (c) => c.id.toString() === id
  );
  const details = filteredMixUp?.[0];

  const props = {
    category,
    character,
    id,
    details,
  };

  return <MixUpTemplate {...props} />;
};

export default MixUpProvider;
