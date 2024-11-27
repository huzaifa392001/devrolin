import type { HTMLAttributes } from "react";
import React from "react";

interface BauhasheroProps extends HTMLAttributes<HTMLDivElement> {}
interface BauhasheroProps {
  text: string;
  textClassName?: string;
}

const Bauhashero: React.FC<BauhasheroProps> = ({
  text,
  textClassName,
  ...props
}) => {
  return (
    <div className="w-full flex justify-center h-fit m-0 p-0" {...props}>
      <h1
        className={`${textClassName} w-full md:max-w-[80%] text-center lg:leading-[200px] max-sm:leading-[85px] max-sm:mt-[60px] lg:tracking-wider md:tracking-wider`}
      >
        {text}
      </h1>
    </div>
  );
};

export default Bauhashero;
