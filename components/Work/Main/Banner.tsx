import Image from "next/image";
import React from "react";

type BannerProps = {
  BannerImageSrc: string;
};

const Banner: React.FC<BannerProps> = ({ BannerImageSrc }) => {
  return (
    <div className="relative aspect-video h-full w-full mt-28 max-sm:mb-20">
      <Image
        src={BannerImageSrc}
        alt=""
        layout="fill"
        className="bg-contain object-cover"
      />
    </div>
  );
};

export default Banner;
