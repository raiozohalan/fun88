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
    data,
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
      return setDataState(state, "gameProvider", payload);
    case "SET_GAME_LIST_LOADING":
      return setFetchingState(state, "gameList", payload);
    case "SET_GAME_LIST":
      return setDataState(state, "gameList", payload);
    default:
      return state;
  }
};
