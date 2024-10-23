import React from "react";
import Button from "./base/button/Button";
import classNames from "@/utils/classNames";
import SvgWrapper from "./base/wrapper/SvgWrapper";

const DUMMY_WALLET_BALANCE = 1_990.6;
const Header = () => {
  return (
    <div
      className={classNames(
        "h-[50px] w-full sticky top-0 flex justify-between",
        "px-2 shadow-md"
      )}
    >
      <div className="flex-1 flex items-center justify-start gap-1">
        <Button size="xs">
          <SvgWrapper src="/assets/header/menu.svg" className="h-4 w-4" />
        </Button>
        <SvgWrapper src="/assets/header/fun88.svg" className="h-5 w-auto" />
      </div>
      <div className="flex items-center justify-end">
        <div className="flex gap-2 items-center">
          <SvgWrapper
            src="/assets/header/wallet.svg"
            className="h-[18px] w-[18px] -mt-1"
          />
          <b className="text-base text-primary">
            $
            {String(DUMMY_WALLET_BALANCE).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </b>
          <SvgWrapper src="/assets/header/divider.svg" className="h-[34px] w-auto" />
        </div>
        <Button size="xs">
          <SvgWrapper src="/assets/header/user.svg" className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
};

export default Header;
