import { useRef } from "react";
import RandomLetter from "./RandomLetter";
import s from "./footer.module.scss";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { memo } from "react"

const CustomLink = ({ text, href }: { text: string; href: string }) => {
  const container = useRef<HTMLAnchorElement>(null);

  const { contextSafe } = useGSAP(
    () => {
      gsap.set(".outside", { opacity: 0 });
    },
    { scope: container }
  );

  const handlePointerEnter = contextSafe(() => {
    gsap
      .timeline({
        defaults: { ease: "power4" },
      })
      .to(".inside", { opacity: 0, stagger: 0.1 })
      .to(".outside", { opacity: 1, stagger: 0.1 }, "<")
      .to(
        ".outside",
        {
          keyframes: { y: [0, 80, 0], opacity: [1, 0, 0] },
          stagger: {
            amount: 0.1,
            from: "random",
          },
          duration: 1.5,
        },
        "<0.1"
      )
      .to(".inside", { opacity: 1, duration: 0.2, stagger: 0.1 }, "<0.3");
  });

  return (
    <Link
      href={href}
      target="_blank"
      onPointerEnter={handlePointerEnter}
      ref={container}
      className={`${s.link} custom-link`}
    >
      <div>
        {Array.from(text).map((e, i) => {
          return (
            <span className={`${s.font} inside`} key={i}>
              {e}
            </span>
          );
        })}
      </div>
      <div className={s.link_box}>
        {Array.from(text).map((e, i) => {
          return (
            <span className={`${s.font} outside`} key={i}>
              <RandomLetter />
            </span>
          );
        })}
      </div>
    </Link>
  );
};

export default memo(CustomLink);
