"use client";

import classNames from "@/utils/classNames";
import React, { useState } from "react";
import GameProviderHeader from "./Header";
import Button from "@/components/base/button/Button";
import SearchMenu from "@/components/assets/SearchMenu";
import GameProviderList from "./GameProviderList";

const GameProviderMenu = () => {
  const [showGameProviderMenu, setShowGameProviderMenu] = useState(false);

  return (
    <>
      <Button
        size="xs"
        className="flex-none ring-1 ring-tertiary rounded-md"
        onClick={() => setShowGameProviderMenu((prev) => !prev)}
      >
        <SearchMenu className="size-5 text-tertiary" />
      </Button>
      <div
        className={classNames(
          "w-screen absolute top-0 left-0",
          "overflow-y-auto overflow-x-hidden",
          "bg-black/50 z-50",
          "transition-all duration-100 ease-in",
          showGameProviderMenu ? "h-screen opacity-100" : "h-0 opacity-0"
        )}
      >
        <div
          className={classNames(
            "h-fit w-full min-h-[calc(100vh-144px)] bg-white mt-36 pb-5",
            "transition-all duration-300 delay-75 ease-in-out",
            showGameProviderMenu ? "translate-y-0" : "translate-y-full"
          )}
        >
          <GameProviderHeader closeMenu={setShowGameProviderMenu} />
          {showGameProviderMenu ? <GameProviderList /> : null}
        </div>
      </div>
    </>
  );
};

export default GameProviderMenu;
