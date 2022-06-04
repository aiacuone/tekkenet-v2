import React from "react";
import { useRouter } from "next/router";
import { mixUps } from "../../mixUps";
import { CardPageTemplate } from "../pages";

export function CardPageProvider() {
  const router = useRouter();
  const { category, character, id } = router.query;
  const details = mixUps[character]?.[category]?.filter(
    (c) => c.uuiid?.toString() === id
  )[0];

  const props = {
    category,
    character,
    id,
    details,
  };

  return <CardPageTemplate {...props} />;
}

export default CardPageProvider;
