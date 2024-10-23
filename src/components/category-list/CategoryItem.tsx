import React from "react";
import Button from "../base/button/Button";
import classNames from "@/utils/classNames";

interface CategoryItemProps {
  title: string;
  Icon: any;
  isActive: boolean;
  onClick: (title: string) => void;
}
const CategoryItem = (props: CategoryItemProps) => {
  const { title, Icon, isActive, onClick } = props;

  const textColor = isActive ? "text-primary" : "text-[#888888]";
  return (
    <Button
      size="xs"
      className="w-auto flex flex-col gap-0 items-center px-auto snap-start"
      onClick={() => onClick(title)}
    >
      <Icon className={classNames("size-5", textColor)} />
      <span
        className={classNames(
          "flex-1 text-sm uppercase w-auto text-nowrap",
          isActive
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
