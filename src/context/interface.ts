import { Dispatch } from "react";
import { Action } from "./rootReducer";

export type GameCategory =
  | "Bingo"
  | "Jackpots"
  | "Live"
  | "New"
  | "Others"
  | "Search"
  | "Slots"
  | "Start"
  | "Table Games";
export interface GameDataItem {
  id: string;
  name: string;
  providerID: string;
  category: GameCategory;
  banner: string; // Logo or game banner to display
  isFavorite?: boolean; // If the game is marked as favorite
}
export interface GameData {
  [key: string]: GameDataItem;
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
  games: {
    isFetching: boolean;
    data: GameData;
  };
  filters: {
    category?: GameCategory;
    search?: string;
    showSearchField?: boolean;
    gameProviderID?: string[];
    isFetching?: boolean;
  };
}

export interface GameContextProps {
  state: RootContextProps | null;
  dispatch: Dispatch<Action>;
}
