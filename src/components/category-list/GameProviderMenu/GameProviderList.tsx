import React, { useEffect, useState } from "react";
import gameProviderList from "./game-provider-list";
import Image from "next/image";
import classNames from "@/utils/classNames";
import Button from "@/components/base/button/Button";

const GameProviderList: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [fetchGameProviderList, setFetchGameProviderList] = useState<string[]>(
    []
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data: string[] = await new Promise((resolve) => {
          setTimeout(() => {
            resolve(gameProviderList);
          }, 3000);
        });
        setFetchGameProviderList(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div
      className={classNames(
        "w-full grid grid-cols-2 items-center justify-center gap-3",
        "p-3"
      )}
    >
      {loading
        ? [...Array(6)].map((_, index) => (
            <div
              key={index}
              className={classNames(
                "h-[60px] flex items-center justify-center",
                "bg-gray-300 rounded-md animate-pulse"
              )}
            />
          ))
        : fetchGameProviderList.map((gameProvider) => {
            const name = gameProvider.split("/").pop()?.replaceAll(".png", "");
            return (
              <Button
                key={gameProvider}
                size="xs"
                className={classNames(
                  "h-full flex items-center justify-center",
                  "bg-[#F2F2FA] rounded-md"
                )}
              >
                <Image
                  src={gameProvider}
                  loader={() => gameProvider}
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
