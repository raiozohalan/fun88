import { GameDataItem, RootContextProps } from "@/context/interface";
import { useRootContext } from "@/context/useRootContext";
import { useCallback, useMemo } from "react";

const useFilter = () => {
  const { state, dispatch } = useRootContext();

  const gamesFilter = useCallback(
    (game: GameDataItem) => {
      const { filters } = state || {};

      if (!filters) return true;

      const { search, category, gameProviderID } = filters;

      // Filter by search keyword
      if (search) {
        const isSearchMatch = game?.name
          ?.toLocaleLowerCase()
          ?.search(search?.toLocaleLowerCase());
        if (isSearchMatch === -1) return false;
      }

      // Filter by category
      if (category && !["Start", "Search"].includes(category)) {
        if (game?.category !== category) return false;
      }

      // Filter by game provider
      if (gameProviderID && game.providerID !== gameProviderID) return false;

      return true;
    },
    [state]
  );

  /**
   * Check if any of the keys are fetching
   * @param {string[]} keys
   * @returns {boolean} isLoading
   */
  const isLoading = useCallback(
    (keys: (keyof RootContextProps)[]): boolean => {
      return keys?.some((key) => state?.[key]?.isFetching);
    },
    [state]
  );

  /**
   * Filter games based on search keyword, category, and game provider
   * @returns {GameData[]} filteredGames
   */
  const filteredGames = useMemo(() => {
    // Dummy data
    if (isLoading(["games"]))
      return [...Array(6)].map(() => ({
        // Display 6 loading states
        isLoading: true,
        id: Math.random().toLocaleString(),
      }));

    return Object.values(state?.games?.data ?? {})?.filter(gamesFilter);
  }, [state, gamesFilter, isLoading]);

  const handleSetFilter = useCallback(
    (payload: RootContextProps["filters"]) => {
      // Fetch data
      dispatch({
        type: "SET_FILTER",
        payload,
      });
    },
    [dispatch]
  );

  const filters = useMemo(() => state?.filters, [state?.filters]);

  return { filteredGames, isLoading, handleSetFilter, filters };
};
export default useFilter;
