"use client";

import React, { useCallback, useEffect, useMemo } from "react";
import DUMMY_GAME_PROVIDERS from "./game-provider-list";
import classNames from "@/utils/classNames";
import Button from "@/components/base/button/Button";
import { useRootContext } from "@/context/useRootContext";
import { GameProvider } from "@/context/interface";
import useFilter from "@/hooks/useFilter";
import SvgWrapper from "@/components/base/wrapper/SvgWrapper";

interface GameProviderListProps {
  closeMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const GameProviderList: React.FC<GameProviderListProps> = () =>
  // {
  //   closeMenu,
  // } : GameProviderListProps
  {
    const { state, dispatch } = useRootContext();
    const { handleSetFilter, filters } = useFilter();

    const isLoading = useMemo(() => {
      return state?.gameProvider?.isFetching;
    }, [state]);

    const providerList = useMemo(() => {
      return state?.gameProvider?.data;
    }, [state]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          dispatch({ type: "SET_GAME_PROVIDER_LOADING", payload: true });
          const data: GameProvider[] = await new Promise((resolve) => {
            setTimeout(() => {
              resolve(DUMMY_GAME_PROVIDERS);
            }, 3000);
          });

          dispatch({ type: "SET_GAME_PROVIDER", payload: data });
        } catch (error) {
          console.error(error);
        }
      };

      fetchData();
    }, [dispatch]);

    const handleSelectProvider = useCallback(
      (id: string) => {
        const newFilter = new Set(filters?.gameProviderID || []);
        if (newFilter.has(id)) {
          newFilter.delete(id);
        } else {
          newFilter.add(id);
        }

        handleSetFilter({
          gameProviderID: newFilter.size ? Array.from(newFilter) : [],
        });
      },
      [handleSetFilter, filters]
    );

    return (
      <div
        className={classNames(
          "w-full grid grid-cols-2 items-center justify-center gap-3",
          "p-3"
        )}
      >
        {isLoading
          ? [...Array(6)].map((_, index) => (
              <div
                key={index}
                className={classNames(
                  "h-[60px] flex items-center justify-center",
                  "bg-gray-300 rounded-md animate-pulse"
                )}
              />
            ))
          : providerList?.map(({ name, id, logo }: GameProvider) => {
              return (
                <Button
                  key={id}
                  size="xs"
                  className={classNames(
                    "h-[60px] flex items-center justify-center rounded-md bg-[#F2F2FA]",
                    filters?.gameProviderID?.includes(id)
                      ? "ring-2 ring-primary"
                      : " "
                  )}
                  onClick={() => handleSelectProvider(id)}
                >
                  <SvgWrapper
                    src={logo}
                    loading="lazy"
                    alt={name || "game-provider"}
                    className="rounded-full"
                    width={100}
                    height={20}
                  />
                </Button>
              );
            })}
      </div>
    );
  };

export default GameProviderList;
