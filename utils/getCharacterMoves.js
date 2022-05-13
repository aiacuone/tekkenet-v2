export const getCharacterMoves = {
  HEIGHT: {
    SPECIFIC: ({ attr1: height, character: moveList }) => {
      if (!moveList) {
        return []
      }
      return moveList.filter((move) => {
        return move['Hit level'] === height
      })
    },

    'START & FINISH': ({
      attr1: start,
      attr2: finish,
      character: moveList,
    }) => {
      if (!moveList) {
        return []
      }
      const regex = new RegExp('^\\' + start + '.+' + '\\' + finish + '\\s*$')
      return moveList.filter((move) => {
        return regex.test(move['Hit level'])
      })
    },
  },

  LAUNCH: {
    NORMAL: ({ character: moveList }) => {
      if (!moveList) {
        return []
      }
      const regex = /launch/i
      return moveList.filter((move) => {
        return regex.test(move['Hit frame'])
      })
    },

    COUNTER: ({ character: moveList }) => {
      if (!moveList) {
        return []
      }
      let regex = /launch/i
      return moveList.filter((move) => {
        return regex.test(move['Counter hit frame'])
      })
    },
  },

  FRAMES: {
    GROUP: ({ attr1: min, attr2: max, character: moveList }) => {
      if (!moveList) {
        return []
      }
      if (!max) {
        return moveList.filter((move) => {
          const filteredMove = move['Start up frame']
            .replace('~', ' ')
            .substring(0, 3)
          return filteredMove >= min
        })
      }
      return moveList.filter((move) => {
        const filteredMove = move['Start up frame']
          .replace('~', ' ')
          .substring(0, 3)
        return filteredMove >= min && filteredMove <= max
      })
    },

    RANGE: ({ attr1: min, attr2: max, character: moveList }) => {
      if (!moveList) {
        return []
      }
      return moveList.filter((move) => {
        const filteredMove = move['Start up frame']
          .replace('~', ' ')
          .substring(0, 3)
        return filteredMove >= min && filteredMove <= max
      })
    },
  },

  KNOCKDOWN: {
    NORMAL: ({ character: moveList }) => {
      if (!moveList) {
        return []
      }
      const regex = /knd/i
      return moveList.filter((move) => {
        return regex.test(move['Hit frame'])
      })
    },

    COUNTER: ({ character: moveList }) => {
      if (!moveList) {
        return []
      }
      const regex = /knd/i
      return moveList.filter((move) => {
        return regex.test(move['Counter hit frame'])
      })
    },
  },

  RAGE: {
    'RAGE ART': ({ character: moveList }) => {
      if (!moveList) {
        return []
      }
      return moveList.filter((move) => {
        return move['Notes'] === 'Rage art'
      })
    },

    'RAGE DRIVE': ({ character: moveList }) => {
      if (!moveList) {
        return []
      }
      return moveList.filter((move) => {
        return move['Notes'] === 'Rage drive'
      })
    },
  },

  SAFETY: {
    SAFE: ({ character: moveList }) => {
      if (!moveList) {
        return []
      }
      return moveList.filter((move) => {
        const filteredMove = move['Block frame'].replace('~', ' ')
        if (filteredMove.substring(0, 3) > -10) {
          if (filteredMove !== '') {
            return move
          }
        }
      })
    },

    UNSAFE: ({ character: moveList }) => {
      if (!moveList) {
        return []
      }
      return moveList.filter((move) => {
        const filteredMove = move['Block frame'].replace('~', ' ')

        return filteredMove.substring(0, 3) < -9
      })
    },
  },

  SITUATIONAL: {
    '+ON BLOCK': ({ character: moveList }) => {
      if (!moveList) {
        return []
      }
      return moveList.filter((move) => {
        const filteredMove = move['Block frame'].replace('~', ' ')
        return filteredMove.substring(0, 3) > 0
      })
    },

    'POWER CRUSH': ({ character: moveList }) => {
      if (!moveList) {
        return []
      }
      const regex = /power crush/i
      return moveList.filter((move) => {
        return regex.test(move['Notes'])
      })
    },

    'WALL BOUNCE': ({ character: moveList }) => {
      if (!moveList) {
        return []
      }
      const regex = /wall bounce/i
      return moveList.filter((move) => {
        return regex.test(move['Notes'])
      })
    },

    HOMING: ({ character: moveList }) => {
      if (!moveList) {
        return []
      }
      const regex = /homing/i
      return moveList.filter((move) => {
        return regex.test(move['Notes'])
      })
    },
  },

  STRINGS: {
    SINGLE: ({ character: moveList }) => {
      if (!moveList) {
        return []
      }
      const regex = /,/i
      return moveList.filter((move) => {
        if (regex.test(move['Damage']) === false) {
          if (move['Damage'] !== '') {
            return move
          }
        }
      })
    },

    DOUBLE: ({ character: moveList }) => {
      if (!moveList) {
        return []
      }
      const regex = /,/gi
      return moveList.filter((move) => {
        if ((move['Damage'].match(regex) || []).length === 1) {
          if (move['Damage'] !== '') {
            return move
          }
        }
      })
    },

    TRIPPLE: ({ character: moveList }) => {
      if (!moveList) {
        return []
      }
      const regex = /,/gi
      return moveList.filter((move) => {
        if ((move['Damage'].match(regex) || []).length === 2) {
          if (move['Damage'] !== '') {
            return move
          }
        }
      })
    },
  },
}

export default getCharacterMoves
