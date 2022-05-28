import { useRouter } from "next/router";
import { mixUps } from "../../mixUps";
import { isArray, isObject, flattenDeep } from "lodash";

export default function CardPage() {
  const { id } = useRouter().query; //to use later
  const getAllCards = () => {
    let cardArrays = [];
    Object.keys(mixUps).forEach((v) => {
      function pushOrMap(v) {
        if (isObject(v)) mapObject(v);
        if (isArray(v)) cardArrays.push(v);
      }

      function mapObject(obj) {
        Object.keys(obj).forEach((v) => {
          pushOrMap(obj[v]);
        });
      }
      pushOrMap(mixUps[v]);
    });
    return flattenDeep(cardArrays);
  };
  const allCards = getAllCards(); //to use later
  return <div></div>;
}
