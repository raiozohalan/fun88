import Image from "next/image";
import React from "react";

interface SvgWrapperProps {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
}

const SvgWrapper: React.FC<SvgWrapperProps> = ({
  src,
  alt,
  width = 32,
  height = 32,
  className,
}) => {
  return (
    <Image
      src={src}
      alt={alt || "SVG Image"}
      width={width}
      height={height}
      className={className}
    />
  );
};

export default SvgWrapper;
