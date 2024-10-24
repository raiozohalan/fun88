"use client";

import classNames from "@/utils/classNames";
import React, { useMemo } from "react";
import GameProviderHeader from "./Header";
import GameProviderList from "./GameProviderList";
import { useRootContext } from "@/context/useRootContext";

const GameProviderMenu = () => {
  const { state } = useRootContext();

  const showGameProviderMenu = useMemo(() => {
    return state?.gameProvider?.showMenu;
  }, [state?.gameProvider?.showMenu]);

  return (
    <>
      <div
        className={classNames(
          "w-screen fixed top-0 left-0",
          "overflow-y-auto overflow-x-hidden",
          "bg-black/50 transition-all duration-100 ease-in",
          showGameProviderMenu
            ? "h-screen max-h-screen opacity-100"
            : "h-0 opacity-0"
        )}
      >
        <div
          className={classNames(
            "relative h-fit w-full min-h-[calc(100vh-144px)] bg-white mt-36 pb-5",
            "transition-all duration-300 delay-75 ease-in-out",
            showGameProviderMenu ? "translate-y-0" : "translate-y-full"
          )}
        >
          <GameProviderHeader />
          {showGameProviderMenu ? <GameProviderList /> : null}
        </div>
      </div>
    </>
  );
};

export default GameProviderMenu;
