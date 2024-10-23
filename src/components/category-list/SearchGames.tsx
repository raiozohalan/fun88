import React from "react";
import { Search } from "../assets/game-category";
import classNames from "@/utils/classNames";
import Button from "../base/button/Button";
import SearchMenu from "../assets/SearchMenu";
import GameProviderMenu from "./GameProviderMenu/GameProviderMenu";

const SearchGames = () => {
  return (
    <>
      <div className="flex gap-3 w-full px-4 py-2">
        <div
          className={classNames(
            "flex-1 flex gap-1 pl-3 h-fit",
            "ring-1 ring-primary rounded-md items-center"
          )}
        >
          <Search className="flex-none size-5 text-tertiary" />
          <input
            type="search"
            name="search"
            placeholder="Search games"
            className={classNames(
              "w-full h-full flex-1 px-2 py-2 rounded-l-none rounded-r-md",
              "focus:outline-none focus:ring-0 focus:ring-transparent focus:border-primary"
            )}
          />
        </div>
        <GameProviderMenu />
      </div>
    </>
  );
};

export default SearchGames;
