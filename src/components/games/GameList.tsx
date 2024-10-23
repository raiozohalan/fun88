import React, { useEffect, useMemo } from "react";
import GameItem from "./GameItem";
import { DUMMY_GAME_LIST } from "./game-list";
import { GameData } from "@/context/interface";
import { useRootContext } from "@/context/useRootContext";

const GameList = () => {
  const { state, dispatch } = useRootContext();

  const isLoading = useMemo(() => {
    return state?.games?.isFetching;
  }, [state]);

  const gameList = useMemo(() => {
    return isLoading
      ? [...Array(6)].map(() => ({
          // Display 6 loading states
          isLoading: true,
          id: Math.random().toLocaleString(),
        }))
      : state?.games?.data; // Display the game list
  }, [state?.games?.data, isLoading]);

  const setLoading = (loading: boolean) => {
    dispatch({ type: "SET_GAME_LIST_LOADING", payload: loading });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data: GameData[] = await new Promise((resolve) => {
          setTimeout(() => {
            resolve([...DUMMY_GAME_LIST, ...DUMMY_GAME_LIST]);
          }, 3000);
        });

        dispatch({ type: "SET_GAME_LIST", payload: data });
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-3 px-3 py-4 gap-3">
      {gameList?.map(
        (
          gameData: Partial<GameData & { isLoading: boolean }>,
          index: number
        ) => (
          <GameItem key={index} {...gameData} />
        )
      )}
    </div>
  );
};

export default GameList;
