import { MixUpTemplate } from "../../../../components/pages/DetailsPageTemplate";
import { useRouter } from "next/router";
import { mixUps } from "../../../../mixUps";

const MixUpProvider = () => {
  const router = useRouter();
  const { category, character, id } = router.query;

  const details = mixUps[character]?.[category]?.filter(
    (c) => c.id?.toString() === id
  )[0];

  const props = {
    category,
    character,
    id,
    details,
  };

  return <MixUpTemplate {...props} />;
};

export default MixUpProvider;
