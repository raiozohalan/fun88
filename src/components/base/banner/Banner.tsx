import React from "react";
import Main from "./slides/Main";
import SvgWrapper from "../wrapper/SvgWrapper";

const Banner = () => {
  return (
    <div className="flex flex-col gap-2 w-full px-3 pt-3 pb-2">
      <Main />
      <p className="flex items-center gap-2 text-sm text-primary">
        <SvgWrapper src="/assets/bell.svg" className="w-4 h-4" />
        ¡FELICIDADES artxxxxipa! GANADOR DESTACADO
      </p>
    </div>
  );
};

export default Banner;
