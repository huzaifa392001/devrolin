import React from "react";

type MainHeadingProps = {
  mainText: string;
};

const MainHeading: React.FC<MainHeadingProps> = ({ mainText }) => {
  return (
    <div>
      <p className="w-full text-[35px] font-semibold max-sm:px-[25px] px-2 lg:text-[90px] flex justify-center break-words lg:max-w-[90%] lg:mx-auto pt-28 saolfont ">
        {mainText}
      </p>
    </div>
  );
};

export default MainHeading;
