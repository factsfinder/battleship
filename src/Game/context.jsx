import React, { useReducer } from "react";

export const GameContext = React.createContext(null);

const playerState = {
  shipsArranged: false,
  shipsCoordinates: [],
  bombedCoordinates: [],
};
const initialState = {
  Player1: {
    ...playerState,
  },
  Player2: {
    ...playerState,
  },
};

export const GAME_ACTION_TYPES = {
  COMPLETE_SHIPS_ARRANGEMENT: "complete_ships_arrangement",
  ARRANGE_SHIP: "arrange_ship",
  PLACE_BOMB: "place_bomb",
};

const reducer = (state, action) => {
  switch (action.type) {
    case GAME_ACTION_TYPES.COMPLETE_SHIPS_ARRANGEMENT:
      return { ...state };
    case GAME_ACTION_TYPES.ARRANGE_SHIP:
      return { ...state };
    case GAME_ACTION_TYPES.PLACE_BOMB:
      return { ...state };
    default:
      return state;
  }
};

export function GameProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = {
    state,
    dispatch,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}
