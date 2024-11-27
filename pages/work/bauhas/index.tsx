/* eslint-disable @next/next/no-img-element */
import Bauhashero from "@/components/Work/Main/BauhasHero";
import Image from "next/image";
import IphoneFrame from "../base/IphoneFrame";
import { Logo } from "@/components/Svg/Svg";
import Footer from "@/components/Footer/Footer";
import WelcomeNote from "@/components/Work/Main/WelcomeNote";
import Content from "@/components/Work/Main/Content";
import ImageTextOverlay from "@/components/Work/Main/ImageTextOverlay";
import Projects from "@/components/Work/Main/Projects";
import Banner from "@/components/Work/Main/Banner";
import MainHeading from "@/components/Work/Main/MainHeading";
import HeroImgText from "@/components/Work/Main/HeroImgText";

export default function Bauhas() {
  return (
    <div className="w-full container mx-auto mb-20">
      <Bauhashero
        text="Bauhas Tapete"
        textClassName="lg:text-[260px] text-[100px] "
      />
      <MainHeading
        mainText="Welcome to Bauhaustapete, the ultimate destination for anyone looking
        for stunning and high-quality Bauhaus wallpaper. The website has been
        designed to provide a seamless and enjoyable shopping experience."
      />

      <div className="grid gap-3 w-full break-words pt-28 grid-cols-1 lg:grid-cols-2 lg:min-h-[600px]">
        <div className="flex flex-col text-xl lg:text-4xl col-span-1 lg:pl-28 gap-10">
          <div className="col-span-1 relative aspect-square lg:hidden">
            <Image
              src={"/work/bauhas/RASCH_HM_1 1.jpg"}
              layout="fill"
              className="bg-contain object-cover"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-3">
            <Image
              src={"/work/bauhas/bauhas_logo.png"}
              width={300}
              height={300}
              alt="bauhas"
            />
          </div>
          <p className="text-2xl leading-snug max-sm:px-[20px] px-2 lg:px-0">
            Bauhaus Wallpaper: Celebrating the Iconic Style of the Modernist
            Movement.
          </p>
          <p className="text-2xl leading-snug max-sm:px-[20px] px-2 lg:px-0">
            Bauhaus, the art school that revolutionized the design world in the
            1920s
          </p>
          <p className="text-2xl leading-snug max-sm:px-[20px] px-2 lg:px-0">
            and 30s, is celebrated for its commitment to modernism, simplicity,
            and functionality. Today, this iconic style continues to inspire
            designers and enthusiasts alike, and is now available in the form of
            Bauhaus wallpaper.
          </p>
        </div>
        <div className="col-span-1 relative aspect-square hidden lg:block">
          <Image
            src={"/work/bauhas/RASCH_HM_1 1.jpg"}
            layout="fill"
            className="bg-contain object-cover"
            alt=""
          />
        </div>
      </div>

      <div className="w-full h-full mt-28 max-sm:mt-20 px-4 max-sm:px-8">
        <div className="lg:w-[75%] mx-auto border-black border-[5px] rounded-xl lg:border-[10px] lg:rounded-[50px] aspect-video bg-gray-300"></div>
      </div>

      <div className="relative w-full aspect-square lg:w-[90%] max-sm:w-[90%] lg:mx-auto max-sm:mx-auto lg:mt-28 max-sm:mt-24 px-4 lg:px-0 ">
        <Image
          src={"/work/bauhas/FireShot_Capture_053.jpg"}
          layout="fill"
          alt=""
          className="px-2 max-sm:px-0"
        />
      </div>
      {/* Overlay Image With Text */}
      <ImageTextOverlay
        OverlayImageSrc="/work/bauhas/RASCH_HM_4.jpg"
        OverlayText="Lorem ipsum dolor sit."
      />

      <HeroImgText
        HeroimageSrc="/work/bauhas/RASCH_HM_5.jpg"
        content={[
          "The Bauhaus wallpaper collection captures the spirit of the movement, with its clean lines, bold shapes, and striking colors. Each design in the collection is a modern interpretation of the classic Bauhaus style, featuring geometric shapes and abstract patterns that reflect the movement’s commitment to simplicity and functionality.",
          "The wallpaper is available in a range of colors and patterns, from monochromatic designs to bold and colorful compositions that make a statement. Whether you’re looking for a subtle accent wall or a bold statement piece, there is a Bauhaus wallpaper design that will suit your needs.",
        ]}
      />
      {/* PlaceHolder With Image */}
      <div className="relative w-full aspect-square lg:aspect-video mt-28 h-fit flex justify-center place-items-center object-cover bg-cover">
        <Image
          src={"/work/bauhas/bauhas_section_bg.jpeg"}
          layout="fill"
          alt=""
          className="-z-30"
        />
        <div className="lg:w-[75%] w-full mx-4 lg:mx-auto border-black border-[5px] rounded-xl lg:border-[10px] lg:rounded-[50px] aspect-video bg-gray-300"></div>
      </div>

      {/* Welcome Note */}
      <WelcomeNote />

      {/* Content Section */}
      <Content
        paragraph={[
          "At vero eos et accusam et justo duo dolores ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet takimata sanctus est Lorem ipsum dolor sit amet.",
          "Lorem ipsum dolor sit amet, consetetur.",
        ]}
        imageSrc="/work/bauhas/RASCH_HM_1.jpg"
      />

      {/* Banner Section */}
      <Banner BannerImageSrc="/work/bauhas/websites_frame.png" />

      {/* Iphone Frame Section */}
      <div className="flex justify-between max-sm:justify-center mt-28 max-sm:mt-[340px] place-items-end h-[1050px]">
        <div className="grid lg:grid-cols-3 lg:gap-32 max-sm:gap-20">
          <div>
            <IphoneFrame src="/work/bauhas/iphone_frame_1.png" />
          </div>
          <div className="relative lg:translate-y-[-60px]">
            <IphoneFrame
              src="/work/bauhas/iphone_frame_2.png"
              className="place-self-start"
            />
          </div>
          <div className="lg:block max-sm:hidden">
            <IphoneFrame src="/work/bauhas/iphone_frame_3.png" />
          </div>
        </div>
      </div>

      <div className="relative aspect-video h-full w-full mt-28">
        <Image
          src={"/work/bauhas/orange_chair.png"}
          alt=""
          layout="fill"
          className="object-contain"
        />
      </div>

      {/*Vertical Image Section  */}
      <div className="grid lg:grid-cols-2 gap-5 h-full place-items-start">
        <div className="w-full aspect-auto mt-28 relative flex h-auto max-sm:px-6">
          <img
            src={"/work/bauhas/_Damals_Rasch_Bauhaus_Desktop.jpg"}
            alt=""
            className="object-cover w-full h-auto"
          />
        </div>
        <div className="w-full aspect-auto mt-28 relative hidden lg:flex h-auto">
          <img
            src={"/work/bauhas/_Heute_Rasch_Bauhaus_Desktop.jpg"}
            alt=""
            className="object-cover w-full h-auto"
          />
        </div>
      </div>

      {/* Overlay Image With Text */}
      <ImageTextOverlay
        OverlayImageSrc="/work/bauhas/RASCH_Detail_1B_170410_rgb.jpg"
        OverlayText="Lorem ipsum dolor sit."
      />

      <div className="w-full flex justify-center h-fit m-0 p-0 lg:mt-28 max-sm:mt-20">
        <h1 className="lg:text-[150px] max-sm:text-[60px] max-sm:font-extrabold w-full md:max-w-[50%] text-center lg:leading-[150px]">
          Thyssen
          <br /> Bornemisza
        </h1>
      </div>
      {/* Projects */}
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
}
