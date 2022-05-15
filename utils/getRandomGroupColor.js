export const groupColors = [
  "purple.200",
  "blue.200",
  "green.200",
  "red.200",
  "teal.200",
  "yellow.200",
  "gray.200",
];

export function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export const randomGroupColor = groupColors[getRandomInt(groupColors.length)];
