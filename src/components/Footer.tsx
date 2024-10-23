"use client";

import React, { useCallback, useState } from "react";
import Button from "./base/button/Button";
import classNames from "@/utils/classNames";
import {
  CasinoLive,
  Favorite,
  Invite,
  Sports,
  Cashier,
} from "./assets/footer/";

const FOTTER_MENU = [
  {
    title: "SPORTS",
    Icon: Sports,
  },
  {
    title: "FAVORITES",
    Icon: Favorite,
  },
  {
    title: "INVITE",
    Icon: Invite,
  },
  {
    title: "CASINO LIVE",
    Icon: CasinoLive,
  },
  {
    title: "CASHIER",
    Icon: Cashier,
  },
];

const Footer = () => {
  const [activeTab, setActiveTab] = useState<string>("");

  const isActiveTab = useCallback(
    (tabName: string): boolean => {
      return activeTab === tabName;
    },
    [activeTab]
  );

  return (
    <footer
      className={classNames(
        "sticky bottom-0 w-full h-[60px] bg-white",
        "flex-none flex items-center justify-evenly"
      )}
    >
      {FOTTER_MENU.map(({ title, Icon }, index) => {
        const isActive = isActiveTab(title);
        const textColor = isActive ? "text-primary" : "text-[#888888]";
        return (
          <Button
            key={index}
            size="xs"
            className="flex flex-col gap-0 items-center px-auto"
            onClick={() => setActiveTab(title)}
          >
            <div
              className={classNames(
                "p-1.5 aspect-square",
                "flex items-center justify-center",
                isActive
                  ? "bg-[url(/assets/footer/active-border.svg)] bg-no-repeat bg-center bg-cover " +
                      textColor
                  : ""
              )}
            >
              <Icon className="size-6" />
            </div>
            <span
              className={classNames(
                "text-sm w-full text-wrap line-clamp-1 truncate overflow-hidden",
                textColor
              )}
            >
              {title}
            </span>
          </Button>
        );
      })}
    </footer>
  );
};

export default Footer;
