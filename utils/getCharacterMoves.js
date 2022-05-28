export const getCharacterMoves = {
  height: {
    specific: ({ height, moveList }) => {
      if (!moveList) return [];
      return moveList.filter((move) => move["Hit level"] === height);
    },
    startAndFinish: ({ attr1: start, attr2: finish, moveList }) => {
      if (!moveList) return [];
      const regex = new RegExp("^\\" + start + ".+" + "\\" + finish + "\\s*$");
      return moveList.filter((move) => regex.test(move["Hit level"]));
    },
  },
  launch: {
    normal: (moveList) => {
      if (!moveList) return [];
      const regex = /launch/i;
      return moveList.filter((move) => regex.test(move["Hit frame"]));
    },
    counter: ({ moveList }) => {
      if (!moveList) return [];
      let regex = /launch/i;
      return moveList.filter((move) => regex.test(move["Counter hit frame"]));
    },
  },
  frames: {
    group: ({ min, max, moveList }) => {
      if (!moveList) return [];
      if (!max) {
        return moveList.filter((move) => {
          const filteredMove = move["Start up frame"]
            .replace("~", " ")
            .substring(0, 3);
          return filteredMove >= min;
        });
      }
      return moveList.filter((move) => {
        const filteredMove = move["Start up frame"]
          .replace("~", " ")
          .substring(0, 3);
        return filteredMove >= min && filteredMove <= max;
      });
    },
    range: ({ min, max, moveList }) => {
      if (!moveList) return [];
      return moveList.filter((move) => {
        const filteredMove = move["Start up frame"]
          .replace("~", " ")
          .substring(0, 3);
        return filteredMove >= min && filteredMove <= max;
      });
    },
  },
  knockdown: {
    normal: (moveList) => {
      if (!moveList) return [];
      const regex = /knd/i;
      return moveList.filter((move) => regex.test(move["Hit frame"]));
    },
    counter: (moveList) => {
      if (!moveList) return [];
      const regex = /knd/i;
      return moveList.filter((move) => regex.test(move["Counter hit frame"]));
    },
  },
  rage: {
    rageArt: (moveList) => {
      if (!moveList) return [];
      return moveList.filter((move) => move["Notes"] === "Rage art");
    },
    rageDrive: (moveList) => {
      if (!moveList) return [];
      return moveList.filter((move) => move["Notes"] === "Rage drive");
    },
  },
  safety: {
    safe: (moveList) => {
      if (!moveList) return [];
      return moveList.filter((move) => {
        const filteredMove = move["Block frame"].replace("~", " ");
        if (filteredMove.substring(0, 3) > -10) {
          if (filteredMove !== "") {
            return move;
          }
        }
      });
    },
    unsafe: (moveList) => {
      if (!moveList) return [];
      return moveList.filter((move) => {
        const filteredMove = move["Block frame"].replace("~", " ");
        return filteredMove.substring(0, 3) < -9;
      });
    },
  },
  situational: {
    plusOnBlock: (moveList) => {
      if (!moveList) return [];
      return moveList.filter((move) => {
        const filteredMove = move["Block frame"].replace("~", " ");
        return filteredMove.substring(0, 3) > 0;
      });
    },
    powerCrush: (moveList) => {
      if (!moveList) return [];
      const regex = /power crush/i;
      return moveList.filter((move) => {
        return regex.test(move["Notes"]);
      });
    },
    wallBounce: (moveList) => {
      if (!moveList) return [];
      const regex = /wall bounce/i;
      return moveList.filter((move) => {
        return regex.test(move["Notes"]);
      });
    },
    homing: (moveList) => {
      if (!moveList) return [];
      const regex = /homing/i;
      return moveList.filter((move) => {
        return regex.test(move["Notes"]);
      });
    },
  },
  strings: {
    single: (moveList) => {
      if (!moveList) return [];
      const regex = /,/i;
      return moveList.filter((move) => {
        if (regex.test(move["Damage"]) === false) {
          if (move["Damage"] !== "") {
            return move;
          }
        }
      });
    },
    double: (moveList) => {
      if (!moveList) return [];
      const regex = /,/gi;
      return moveList.filter((move) => {
        if ((move["Damage"].match(regex) || []).length === 1) {
          if (move["Damage"] !== "") {
            return move;
          }
        }
      });
    },
    tripple: (moveList) => {
      if (!moveList) return [];
      const regex = /,/gi;
      return moveList.filter((move) => {
        if ((move["Damage"].match(regex) || []).length === 2) {
          if (move["Damage"] !== "") {
            return move;
          }
        }
      });
    },
  },
};

export default getCharacterMoves;
