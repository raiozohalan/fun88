import { Dispatch } from "react";

export type GameCategory =
  | "Bingo"
  | "Jackpot"
  | "Live"
  | "New"
  | "Others"
  | "Search"
  | "Slots"
  | "Start"
  | "Table";
export interface GameData {
  id: string;
  name: string;
  providerID: string;
  category: GameCategory;
  banner: string; // Logo or game banner to display
  isFavorite?: boolean; // If the game is marked as favorite
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
    data: GameData[];
  };
  filters: {
    category?: GameCategory;
    search?: string;
    gameProviderID?: string;
    isFetching?: boolean;
  }
}

export interface GameContextProps {
  state: RootContextProps | null;
  dispatch: Dispatch<{ type: string; payload: any }>;
}
