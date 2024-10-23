import { ValueOf } from "next/dist/shared/lib/constants";
import { RootContextProps } from "./interface";

type Action = { type: string; payload: any };

const setFetchingState = (
  state: RootContextProps,
  key: keyof RootContextProps,
  isFetching: boolean
): RootContextProps => ({
  ...state,
  [key]: {
    ...state[key],
    ...(state?.gameProvider?.data?.length === 0 && { isFetching }),
  },
});

const setDataState = (
  state: RootContextProps,
  key: keyof RootContextProps,
  data: any
): RootContextProps => ({
  ...state,
  [key]: {
    isFetching: false,
    ...data,
  },
});

export const rootReducer = (
  state: RootContextProps,
  action: Action
): RootContextProps => {
  const { type, payload } = action;

  switch (type) {
    case "SET_GAME_PROVIDER_LOADING":
      return setFetchingState(state, "gameProvider", payload);
    case "SET_GAME_PROVIDER":
      return setDataState(state, "gameProvider", { data: payload });
    case "SET_GAME_LIST_LOADING":
      return setFetchingState(state, "games", payload);
    case "SET_GAME_LIST":
      return setDataState(state, "games", { data: payload });
    case "SET_FILTER_LOADING":
      return setFetchingState(state, "filters", payload);
    case "SET_FILTER":
      return setDataState(state, "filters", payload);
    default:
      return state;
  }
};
