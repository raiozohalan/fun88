import classNames from "@/utils/classNames";
import React from "react";

const Main = () => {
  return (
    <div
      className={classNames(
        "w-full h-[180px] rounded-lg",
        "bg-[url('/images/banner-bg.png')] bg-no-repeat bg-cover"
      )}
    >
      <div
        className={classNames(
          "flex flex-col justify-between w-[150px] h-full",
          "px-6 py-7"
        )}
      >
        <b className="text-sm text-white">RESCUE</b>
        <b className="text-sm text-secondary">BONUS</b>
        <b className="text-sm text-white">WE ARE HERE FOR YOU</b>
      </div>
    </div>
  );
};

export default Main;
