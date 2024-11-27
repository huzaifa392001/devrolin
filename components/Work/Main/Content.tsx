import Image from "next/image";

type ContentComponentProps = {
  paragraph: string[];
  imageSrc: string;
};

const Content: React.FC<ContentComponentProps> = ({ paragraph, imageSrc }) => {
  return (
    <div className="lg:pt-28 w-full h-[800px] max-sm:h-[650px] grid lg:grid-cols-2  max-sm:flex max-sm:flex-col-reverse">
      <div className="col-span-1 text-xl flex flex-col leading-snug justify-center gap-10 tracking-wider pr-10 max-sm:px-[20px] max-sm:mt-16 lg:ps-10">
        {paragraph.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      <div className="w-full relative col-span-1 lg:h-auto max-sm:h-[300px]">
        <Image
          src={imageSrc}
          layout="fill"
          alt=""
          className="lg:object-contain bg-cover"
        />
      </div>
    </div>
  );
};

export default Content;
