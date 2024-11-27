import Image from "next/image";
import React from "react";

interface ImagesSectionProps {
  imageSources: string[];
}

const ImagesSection: React.FC<ImagesSectionProps> = ({ imageSources }) => {
  return (
    <div className="grid grid-cols-2">
      {imageSources.map((src, index) => (
        <div
          key={index}
          className="relative aspect-video lg:h-[600px] max-sm:h-[200px] w-full mt-20"
        >
          <Image
            src={src}
            alt={`Image ${index + 1}`}
            layout="fill"
            className="bg-contain object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default ImagesSection;
