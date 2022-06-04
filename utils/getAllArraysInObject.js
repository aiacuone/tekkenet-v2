import { flattenDeep, isArray, isObject } from "lodash";

export function getAllArraysInObject(data) {
  let cardArrays = [];
  Object.keys(data).forEach((v) => {
    function pushOrMap(v) {
      if (isArray(v)) return cardArrays.push(v);
      if (isObject(v)) return mapObject(v);
    }

    function mapObject(obj) {
      Object.keys(obj).forEach((v) => {
        pushOrMap(obj[v]);
      });
    }
    pushOrMap(data[v]);
  });
  return flattenDeep(cardArrays);
}
