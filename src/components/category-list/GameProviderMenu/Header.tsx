import SearchMenu from "@/components/assets/SearchMenu";
import Button from "@/components/base/button/Button";
import SvgWrapper from "@/components/base/wrapper/SvgWrapper";
import classNames from "@/utils/classNames";
import App from "next/app";
import React, { Dispatch, SetStateAction } from "react";

interface GameProviderHeaderProps {
  closeMenu: Dispatch<SetStateAction<boolean>>;
}

const GameProviderHeader = ({ closeMenu }: GameProviderHeaderProps) => {
  return (
    <div
      className={classNames(
        "px-3 py-2 flex items-center justify-between",
        "bg-primary sticky top-0 text-white"
      )}
    >
      <div className="flex items-center gap-2">
        <SearchMenu className="size-6" />
        <span className="text-base">Game Provider</span>
        <span
          className={classNames(
            "px-3 py-auto rounded-full",
            "ring-1 ring-white text-sm"
          )}
        >
          119
        </span>
      </div>
      <Button size="xs" onClick={() => closeMenu((prev: boolean) => !prev)}>
        <SvgWrapper src="/assets/close.svg" className="size-4" />
      </Button>
    </div>
  );
};

export default GameProviderHeader;
