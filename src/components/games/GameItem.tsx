import { GameDataItem } from "@/context/interface";
import React, { useCallback } from "react";
import Button from "../base/button/Button";
import SvgWrapper from "../base/wrapper/SvgWrapper";
import classNames from "@/utils/classNames";
import { Favorite } from "../assets/footer";
import NonFavorite from "../assets/NonFavorite";
import { useRootContext } from "@/context/useRootContext";

function GameItem(props: Partial<GameDataItem & { isLoading?: boolean }>) {
  const { dispatch } = useRootContext();
  const {
    id = "",
    name = "",
    banner = "",
    isLoading = false,
    isFavorite = false,
  } = props;

  const handleAddFavorite = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault(); // Prevent default behavior
      e.stopPropagation(); // Stop event propagation to parent elements
      dispatch({ type: "UPDATE_GAME_DATA", payload: { id, isFavorite: !isFavorite } });
    },
    [id, isFavorite, dispatch]
  );

  return (
    <div
      className={classNames(
        "grid w-full h-auto aspect-square rounded-md overflow-hidden bg-gray-300",
        "pl-0 pr-0 pt-0 pb-0",
        isLoading ? "animate-pulse" : ""
      )}
    >
      {isLoading ? null : (
        <>
          <SvgWrapper
            width={512}
            height={512}
            src={banner}
            alt={name}
            loading="lazy"
            className="col-start-1 row-start-1 w-full h-full bg-cover"
          />

          <div
            className={classNames(
              "col-start-1 row-start-1 flex justify-end items-start transparent",
              "w-full h-full"
            )}
          >
            <Button
              size="fit"
              rounded="none"
              className="pb-[19px] pl-[18px] pt-0.5 pr-0.5 -mr-[0.5px] bg-[url('/assets/favorite-mask.svg')] bg-cover bg-no-repeat"
              onClick={handleAddFavorite}
            >
              {isFavorite ? (
                <Favorite className="text-secondary w-[16px] h-[16px]" />
              ) : (
                <NonFavorite className="w-4 h-4 " />
              )}
            </Button>
          </div>
        </>
      )}
    </div>
  );
}

export default GameItem;
