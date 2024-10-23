"use client";

import React, { useEffect, useMemo } from "react";
import DUMMY_GAME_PROVIDERS from "./game-provider-list";
import Image from "next/image";
import classNames from "@/utils/classNames";
import Button from "@/components/base/button/Button";
import { useRootContext } from "@/context/useRootContext";
import { GameProvider } from "@/context/interface";
import useFilter from "@/hooks/useFilter";

interface GameProviderListProps {
  closeMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const GameProviderList: React.FC<GameProviderListProps> = ({
  closeMenu,
}: GameProviderListProps) => {
  const { state, dispatch } = useRootContext();
  const { handleSetFilter } = useFilter();

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

  const handleSelectProvider = (id: string) => {
    handleSetFilter({ gameProviderID: id });
    closeMenu(false);
  };

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
                  "h-full flex items-center justify-center",
                  "bg-[#F2F2FA] rounded-md"
                )}
                onClick={() => handleSelectProvider(id)}
              >
                <Image
                  src={logo}
                  loading="lazy"
                  alt={name || "game-provider"}
                  className="rounded-full"
                  width={100}
                  height={20}
                  objectFit="fit"
                />
              </Button>
            );
          })}
    </div>
  );
};

export default GameProviderList;
