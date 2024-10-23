import React, { useEffect, useMemo } from "react";
import GameItem from "./GameItem";
import { DUMMY_GAME_LIST } from "./game-list";
import { GameData, GameDataItem } from "@/context/interface";
import { useRootContext } from "@/context/useRootContext";
import useFilter from "@/hooks/useFilter";

const GameList = () => {
  const { dispatch, state } = useRootContext();
  const { filteredGames } = useFilter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch({ type: "SET_GAME_LIST_LOADING", payload: true });
        const data: GameData = await new Promise((resolve) => {
          setTimeout(() => {
            resolve(DUMMY_GAME_LIST);
          }, 3000);
        });

        dispatch({ type: "SET_GAME_LIST", payload: data });
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const isEmptyGames = useMemo(
    () => Object.keys(state?.games?.data ?? {})?.length === 0,
    [state?.games?.data]
  );

  if (!filteredGames?.length)
    return (
      <p className="w-full p-5 text-center text-tertiary">
        {isEmptyGames ? "No games available" : "No games found"}
      </p>
    );

  return (
    <div className="grid grid-cols-3 px-3 py-4 gap-3">
      {filteredGames?.map(
        (
          gameData: Partial<GameDataItem & { isLoading?: boolean }>,
          index: number
        ) => {
          const keyName = (gameData?.id ?? "") + index;
          return <GameItem key={keyName} {...gameData} />;
        }
      )}
    </div>
  );
};

export default GameList;
