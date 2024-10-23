import { GameData } from "@/context/interface";
import React from "react";
import Button from "../base/button/Button";
import SvgWrapper from "../base/wrapper/SvgWrapper";
import classNames from "@/utils/classNames";

function GameItem(props: Partial<GameData & { isLoading?: boolean }>) {
  const { name = "", banner = "", isLoading = false } = props;
  return (
    <Button
      className={classNames(
        "flex w-full h-auto aspect-square rounded-md overflow-hidden bg-gray-300",
        "pl-0 pr-0 pt-0 pb-0",
        isLoading ? "animate-pulse" : ""
      )}
    >
      {isLoading ? null : (
        <SvgWrapper
          width={512}
          height={512}
          src={banner}
          alt={name}
          className="flex-1 w-full h-full bg-cover"
        />
      )}
    </Button>
  );
}

export default GameItem;
