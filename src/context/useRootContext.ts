"use client";

import { createContext, useContext } from "react";
import { GameContextProps, RootContextProps } from "./interface";

export const initialState: RootContextProps = {
  gameProvider: {
    isFetching: false,
    data: [],
  },
  games: {
    isFetching: false,
    data: [],
  },
};

export const RootContext = createContext<GameContextProps>({
  state: initialState,
  dispatch: () => {},
});

export const useRootContext = (): GameContextProps => {
  const { state, dispatch } = useContext(RootContext);
  if (!state) {
    throw new Error("useMyContext must be used within a MyProvider");
  }

  return {
    state,
    dispatch,
  };
};
