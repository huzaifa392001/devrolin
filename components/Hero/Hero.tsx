import s from "./hero.module.scss";
import { HeroArrowDown } from "../Svg/Svg";
import { useScrollTo } from "react-use-window-scroll";
import useWindowSize from "@/hooks/useWindowSize";
import dynamic from "next/dynamic";
import { useState, useEffect, memo } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const Lottie = dynamic(() => import("react-lottie"), { ssr: false });

type AnimationData = {
  default: object;
};

const Hero: React.FC = () => {
  const scrollTo = useScrollTo();
  const size = useWindowSize();
  const [showData2, setShowData2] = useState(false);
  const [animationData, setAnimationData] = useState<object | null>(null);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const loadAnimationData = async (showEnd: boolean) => {
    try {
      const data = showEnd
        ? await import("./lottie/end.json")
        : await import("./lottie/start.json");
      setAnimationData(data.default);
    } catch (error) {
      console.error("Failed to load animation data:", error);
    }
  };

  useEffect(() => {
    if (inView) {
      loadAnimationData(showData2);
    }
  }, [size, showData2, inView]);

  const handleAnimationComplete = () => {
    if (!showData2) {
      setShowData2(true);
      loadAnimationData(true); // Trigger loading of end.json immediately
    }
  };

  return (
    <section id="hero" className={s.main} ref={ref}>
      <div
        onClick={() =>
          scrollTo({ top: window.innerHeight, behavior: "smooth" })
        }
        className={s.arrow}
      >
        <HeroArrowDown />
      </div>
      <div className={s.lottie}>
        {(size?.width ?? 0) > 640 ? (
          animationData && (
            <Lottie
              options={{
                loop: showData2,
                autoplay: true,
                animationData: animationData,
              }}
              eventListeners={[
                { eventName: "complete", callback: handleAnimationComplete },
              ]}
            />
          )
        ) : (
          <Image
            style={{
              width: "80%", // Adjust as necessary for responsiveness
              height: "auto", // Maintain aspect ratio
              display: "block",
              margin: "0 auto", // Center the image horizontally
            }}
            src="/datam1.svg"
            alt="Mobile Animation"
            width={500} // Set your image width
            height={500} // Set your image height
          />
        )}
      </div>
    </section>
  );
};

export default memo(Hero);
