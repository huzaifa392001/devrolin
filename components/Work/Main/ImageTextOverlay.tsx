import Image from "next/image";

type ImageTextOverlayProps = {
  OverlayImageSrc: string;
  OverlayText: string;
};

const ImageTextOverlay: React.FC<ImageTextOverlayProps> = ({
  OverlayImageSrc,
  OverlayText,
}) => {
  return (
    <div className="relative h-[500px] max-sm:h-[420px] lg:mt-28 md:mt-28 flex justify-center place-items-center">
      <div className="absolute aspect-1/2 w-32 lg:w-60 -z-30 mix-blend-multiply">
        <Image
          src={OverlayImageSrc}
          alt=""
          layout="fill"
          className="aspect-1/2 w-36 -z-30 -rotate-12 bg-cover"
        />
      </div>
      <p className="text-5xl max-sm:text-[43px] lg:text-[150px] text-nowrap z-50 saolfont">
        {OverlayText}
      </p>
    </div>
  );
};

export default ImageTextOverlay;
