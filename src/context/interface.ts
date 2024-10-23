import { Dispatch } from "react";

export interface GameList {
  id: string;
  name: string;
  providerID: string;
}

export interface GameProvider {
  id: string;
  logo: string;
  name: string;
}

export interface RootContextProps {
  gameProvider: {
    isFetching: boolean;
    data: GameProvider[];
  };
  gameList: {
    isFetching: boolean;
    data: GameList[];
  };
}

export interface GameContextProps {
  state: RootContextProps | null;
  dispatch: Dispatch<{ type: string; payload: any }>;
}
