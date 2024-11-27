import React from "react";
import Bauhashero from "@/components/Work/Main/BauhasHero";
import Image from "next/image";
import WelcomeNote from "@/components/Work/Main/WelcomeNote";
import Content from "@/components/Work/Main/Content";
import ImagesSection from "@/components/Work/Main/ImagesSection";
import ImageTextOverlay from "@/components/Work/Main/ImageTextOverlay";
import Projects from "@/components/Work/Main/Projects";
import { Logo } from "@/components/Svg/Svg";
import Footer from "@/components/Footer/Footer";
import Banner from "@/components/Work/Main/Banner";
import IphoneFrame from "../base/IphoneFrame";
import MainHeading from "@/components/Work/Main/MainHeading";
import HeroImgText from "@/components/Work/Main/HeroImgText";

const Monipol = () => {
  return (
    <div className="w-full container mx-auto mb-20">
      <Bauhashero
        text="Monipol"
        textClassName="lg:text-[260px] text-[100px] "
      />
      <MainHeading
        mainText="  Welcome to Monipol, the ultimate destination for anyone looking for
        stunning and high-quality Bauhaus wallpaper. The website has been
        designed to provide a seamless and enjoyable shopping experience."
      />

      {/* Text With Right Image */}
      <div className="grid gap-3 w-full break-words pt-28 grid-cols-1 lg:grid-cols-2 lg:min-h-[600px]">
        <div className="flex flex-col text-xl lg:text-4xl col-span-1 lg:pl-28 gap-10">
          <div className="col-span-1 relative aspect-square lg:hidden">
            <Image
              src={"/work/monipol/Frame_813.jpg"}
              layout="fill"
              className="bg-contain object-cover"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-3 max-sm:ms-5">
            <Image
              src={"/work/monipol/Monipol_Logo.png"}
              width={300}
              height={300}
              alt="monipol"
            />
          </div>
          <p className="text-2xl leading-snug max-sm:px-[20px] px-2 lg:px-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam qui
            facilis consectetur laborum sapiente dolorem. Et neque maxime minima
            non ex mollitia cum voluptate quidem, vitae reprehenderit nihil
            expedita minus in optio nemo officia, quo, assumenda voluptatem sint
            ipsam consequuntur quis! Deserunt recusandae eligendi cum numquam
            magnam veniam repellat libero quasi maiores totam? Aliquid adipisci
            officia ducimus quaerat, eos eaque deserunt iusto facere fugit
            quibusdam hic! Magni commodi itaque quia quisquam consequatur rem
            debitis exercitationem, nam animi harum. Perspiciatis cumque sit
            magnam veniam hic unde illum accusantium autem at consectetur porro
            iure quisquam illo.
          </p>
        </div>
        <div className="col-span-1 relative aspect-square hidden lg:block">
          <Image
            src={"/work/monipol/Frame_813.jpg"}
            layout="fill"
            className="bg-contain object-cover"
            alt=""
          />
        </div>
      </div>
      <p className="text-2xl lg:text-4xl max-sm:px-[20px] max-sm:pt-[30px] leading-snug px-2 lg:p-28">
        MONIPOL offers a complete range of clinical development and consulting
        services to a strong customer base of primarily small and mid-size
        pharmaceutical, biotechnology, and medical device companies
      </p>

      <div className="w-full h-full mt-28 max-sm:mt-20 px-4 max-sm:px-8">
        <div className="lg:w-[75%] mx-auto border-black border-[5px] rounded-xl lg:border-[10px] lg:rounded-[50px] aspect-video bg-gray-300"></div>
      </div>

      <div className="relative h-auto w-full  lg:w-[90%] max-sm:w-[90%] lg:mx-auto max-sm:mx-auto lg:mt-28 max-sm:mt-24 px-4 lg:px-0 ">
        <Image
          src={"/work/monipol/Home.jpg"}
          width={0}
          height={0}
          layout="responsive"
          alt=""
          className="object-contain px-2 max-sm:px-0"
        />
      </div>
      {/* Overlay Image With Text */}
      <ImageTextOverlay
        OverlayImageSrc="/work/monipol/dropping.jpg"
        OverlayText="Lorem ipsum dolor sit."
      />
      {/* IMAGE WITH LEFT TEXT */}
      <HeroImgText
        HeroimageSrc="/work/monipol/louis-reed.jpg"
        content={[
          "The Bauhaus wallpaper collection captures the spirit of the movement, with its clean lines, bold shapes, and striking colors. Each design in the collection is a modern interpretation of the classic Bauhaus style, featuring geometric shapes and abstract patterns that reflect the movement’s commitment to simplicity and functionality.",
          "The wallpaper is available in a range of colors and patterns, from monochromatic designs to bold and colorful compositions that make a statement. Whether you’re looking for a subtle accent wall or a bold statement piece, there is a Bauhaus wallpaper design that will suit your needs.",
        ]}
      />
      {/* Main Image */}
      <div className="relative h-auto w-full  lg:w-[90%] max-sm:w-[90%] lg:mx-auto max-sm:mx-auto lg:mt-28 max-sm:mt-24 px-4 lg:px-0 ">
        <Image
          src={"/work/monipol/main.jpeg"}
          width={0}
          height={0}
          layout="responsive"
          alt=""
          className="object-contain px-2 max-sm:px-0"
        />
      </div>
      {/* Welcome Note */}
      <WelcomeNote />

      {/* Content Component */}
      <Content
        paragraph={[
          "At vero eos et accusam et justo duo dolores ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet takimata sanctus est Lorem ipsum dolor sit amet.",
          "Lorem ipsum dolor sit amet, consetetur.",
        ]}
        imageSrc="/work/monipol/abstract-oil-drops.jpg"
      />

      {/* Banner Section */}
      <Banner BannerImageSrc="/work/monipol/GroupPhoto.png" />

      {/* Iphone Frame Section */}
      <div className="flex justify-between max-sm:justify-center mt-28 max-sm:mt-[340px] place-items-end h-[1050px]">
        <div className="grid lg:grid-cols-3 lg:gap-32 max-sm:gap-20">
          <div>
            <IphoneFrame src="/work/monipol/MonipolAdvantage.png" />
          </div>
          <div className="relative lg:translate-y-[-60px]">
            <IphoneFrame
              src="/work/monipol/Solution & Services.png"
              className="place-self-start"
            />
          </div>
          <div className="lg:block max-sm:hidden">
            <IphoneFrame src="/work/monipol/Solution & Services.png" />
          </div>
        </div>
      </div>

      {/* Image Section */}
      <ImagesSection
        imageSources={[
          "/work/monipol/image-1.jpg",
          "/work/monipol/image-2.jpg",
        ]}
      />

      {/*Vertical Image Section  */}
      <div className="grid lg:grid-cols-2 gap-5 h-full place-items-start">
        <div className="w-full aspect-auto mt-28 relative flex h-auto max-sm:px-6">
          <Image
            src={"/work/monipol/Success-Stories.png"}
            alt=""
            className="object-cover w-full h-auto"
          />
        </div>
        <div className="w-full aspect-auto mt-28 relative hidden lg:flex h-auto">
          <Image
            src={"/work/monipol/Advantage.png"}
            alt=""
            className="object-cover w-full h-auto"
          />
        </div>
      </div>

      {/* Overlay Image With Text */}
      <ImageTextOverlay
        OverlayImageSrc="/work/monipol/image-3.jpg"
        OverlayText="Lorem ipsum dolor sit."
      />
      {/* Footer Heading  */}
      <div className="w-full flex justify-center h-fit m-0 p-0 lg:mt-28 max-sm:mt-20">
        <h1 className="lg:text-[150px] max-sm:text-[60px] max-sm:font-extrabold w-full md:max-w-[50%] text-center lg:leading-[150px]">
          Thyssen
          <br /> Bornemisza
        </h1>
      </div>
      {/* Projects Section */}
      <Projects />

      {/* Footer Section */}
      <div className="mt-28 saolfont">
        <div className="w-full flex justify-center place-items-center flex-col gap-10">
          <div className="w-20 h-20">
            <Logo />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Monipol;
