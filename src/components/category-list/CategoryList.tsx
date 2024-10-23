"use client";

import React, { useCallback, useState } from "react";
import CATEGORY_LIST from "./categories";
import classNames from "@/utils/classNames";
import CategoryItem from "./CategoryItem";
import { Search } from "../assets/game-category";

const CategoryList = () => {
  const [activeTab, setActiveTab] = useState<string>("start");

  const isActiveTab = useCallback(
    (tabName: string): boolean => {
      return activeTab.toLocaleLowerCase() === tabName.toLocaleLowerCase();
    },
    [activeTab]
  );
  return (
    <div
      className={classNames(
        "max-w-full h-fit bg-white pl-2",
        "flex-none flex items-center justify-evenly"
      )}
    >
      <CategoryItem
        title="Search"
        Icon={Search}
        isActive={isActiveTab("Search")}
        onClick={setActiveTab}
      />
      <div className="block w-[1px] h-[30px] bg-[#88888880]" />
      <div className="flex items-center gap-1  overflow-x-auto overflow-y-hidden hide-scrollbar snap-proximity snap-x">
        {CATEGORY_LIST.map(({ title, Icon }, index) => {
          const isActive = isActiveTab(title);
          return (
            <CategoryItem
              key={index}
              title={title}
              Icon={Icon}
              isActive={isActive}
              onClick={setActiveTab}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CategoryList;
