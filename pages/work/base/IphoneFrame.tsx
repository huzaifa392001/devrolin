import Image from "next/image";
import type { HTMLAttributes } from "react";
import React from "react";

interface IphoneFrameProps extends HTMLAttributes<HTMLDivElement> {
  src: string;
  className?: string;
}

const IphoneFrame: React.FC<IphoneFrameProps> = ({
  src,
  className = "",
  ...props
}) => {
  return (
    <div
      className={`h-[690px] max-sm:h-[523px] w-[320px] max-sm:w-[245px] border-[15px] border-black rounded-[40px] relative ${className}`}
      {...props}
    >
      <Image
        src={src}
        alt="website"
        layout="fill"
        objectFit="cover"
        className="rounded-[22px] max-sm:top-[-1px]"
      />
    </div>
  );
};

export default IphoneFrame;
