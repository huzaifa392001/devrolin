import Image from "next/image";
import React from "react";
interface HeroImgTextProps {
  HeroimageSrc: string;
  content: string[];
}

const HeroImgText: React.FC<HeroImgTextProps> = ({ HeroimageSrc, content }) => {
  return (
    <>
      <div className="lg:pt-28 w-full h-full lg:h-[800px] grid grid-cols-1 lg:grid-cols-2">
        <div className="w-full relative col-span-1 aspect-square">
          <Image
            src={HeroimageSrc}
            layout="fill"
            alt=""
            className="lg:object-contain bg-cover"
          />
        </div>
        <div className="col-span-1 text-2xl flex flex-col leading-snug justify-center gap-10 tracking-wider pr-10 px-2 lg:px-0 max-sm:px-[20px] max-sm:mt-20 mt-4 lg:mt-0">
          {content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
      {/* <div className="lg:pt-28 w-full h-full lg:h-[800px] grid grid-cols-1 lg:grid-cols-2">
        <div className="w-full relative col-span-1 aspect-square">
          <Image
            src={"/work/monipol/louis-reed.jpg"}
            layout="fill"
            alt=""
            className="lg:object-contain bg-cover"
          />
        </div>
        <div className="col-span-1 text-2xl flex flex-col leading-snug justify-center gap-10 tracking-wider pr-10 px-2 lg:px-0 max-sm:px-[20px] max-sm:mt-20 mt-4 lg:mt-0">
          <p>
            The Bauhaus wallpaper collection captures the spirit of the
            movement, with its clean lines, bold shapes, and striking colors.
            Each design in the collection is a modern interpretation of the
            classic Bauhaus style, featuring geometric shapes and abstract
            patterns that reflect the movement’s commitment to simplicity and
            functionality.
          </p>
          <p>
            The wallpaper is available in a range of colors and patterns, from
            monochromatic designs to bold and colorful compositions that make a
            statement. Whether you’re looking for a subtle accent wall or a bold
            statement piece, there is a Bauhaus wallpaper design that will suit
            your needs.
          </p>
        </div>
      </div> */}
    </>
  );
};

export default HeroImgText;
