import { mixUps } from "../mixUps";
import { flattenDeep, isArray, isObject } from "lodash";

export function getAllArraysInObject(data) {
  let cardArrays = [];
  Object.keys(data).forEach((v) => {
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
}
