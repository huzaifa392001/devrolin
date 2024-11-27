import { useRef } from "react";
import RandomLetter from "./RandomLetter";
import s from "./footer.module.scss";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { memo } from "react";

const CustomLinkC = ({ text, isActive }: { text: string; isActive?: boolean }) => {
  const container = useRef<HTMLDivElement>(null); // Changed to div reference

  const { contextSafe } = useGSAP(
    () => {
      gsap.set(".outside", { opacity: 0 });
    },
    { scope: container }
  );

  const handlePointerEnter = contextSafe(() => {
    // gsap
    //   .timeline({
    //     defaults: { ease: "power4" },
    //   })
    //   .to(".inside", { opacity: 0, stagger: 0.1 })
    //   .to(".outside", { opacity: 1, stagger: 0.1 }, "<")
    //   .to(
    //     ".outside",
    //     {
    //       keyframes: { y: [0, 80, 0], opacity: [1, 0, 0] },
    //       stagger: {
    //         amount: 0.1,
    //         from: "random",
    //       },
    //       duration: 1.5,
    //     },
    //     "<0.1"
    //   )
    //   .to(".inside", { opacity: 1, duration: 0.2, stagger: 0.1 }, "<0.3");
    // isActive = true;
  });

  return (
    <div
      // onPointerEnter={handlePointerEnter}
      ref={container}
      className={`${s.linke} custom-link`} // Changed from Link to div
    >

      <span className={`${s.fonts} inside  ${isActive ? s.activeName : ''}`}>
        {text}
      </span>
      {/* <div>
        {Array.from(text).map((e, i) => (
          <span className={`${s.fonts} inside  ${isActive ? s.activeName : ''}`} key={i}>
            {e}
          </span>
        ))}
      </div> */}
      {/* <div className={s.linke_box}>
        {Array.from(text).map((e, i) => (
          <span className={`${s.fonts} outside`} key={i}>
            <RandomLetter />
          </span>
        ))}
      </div> */}
    </div>
  );
};

export default memo(CustomLinkC);