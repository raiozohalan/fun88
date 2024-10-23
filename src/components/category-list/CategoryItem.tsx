import React, { useCallback, useMemo } from "react";
import Button from "../base/button/Button";
import classNames from "@/utils/classNames";
import useFilter from "@/hooks/useFilter";
import { GameCategory } from "@/context/interface";

interface CategoryItemProps {
  title: GameCategory;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  isActive?: boolean;
}
const CategoryItem = (props: CategoryItemProps) => {
  const { handleSetFilter, filters } = useFilter();
  const { title, Icon, isActive } = props;

  const isActiveTab = useMemo(
    () => filters?.category === title || isActive,
    [filters?.category, title, isActive]
  );

  const textColor = useMemo(
    () => (isActiveTab ? "text-primary" : "text-[#888888]"),
    [isActiveTab]
  );

  const handleSelectCategory = useCallback(() => {
    handleSetFilter(
      title === "Search"
        ? { showSearchField: !isActiveTab }
        : { category: title }
    );
  }, [handleSetFilter, title, isActiveTab]);

  return (
    <Button
      size="xs"
      className="w-auto flex flex-col gap-0 items-center px-auto snap-start"
      onClick={handleSelectCategory}
    >
      <Icon className={classNames("size-5", textColor)} />
      <span
        className={classNames(
          "flex-1 text-sm uppercase w-auto text-nowrap",
          isActiveTab
            ? "decoration-[1.5px] underline underline-offset-2 underline-primary"
            : "",
          textColor
        )}
      >
        {title}
      </span>
    </Button>
  );
};

export default CategoryItem;
