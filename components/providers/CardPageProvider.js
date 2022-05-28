import React from "react";
import { useRouter } from "next/router";
import { mixUps } from "../../mixUps";
import { CardPageTemplate } from "../pages/CardPageTemplate";

export function CardPageProvider() {
  const router = useRouter();
  const { category, character, id } = router.query;
  console.log(router.query, "router.query");
  const details = mixUps[character]?.[category]?.filter(
    (c) => c.id?.toString() === id
  )[0];

  const values = {
    category,
    character,
    id,
    details,
  };

  return <CardPageTemplate {...values} />;
}

export default CardPageProvider;
