import Link from "next/link";
import s from "./cookie.module.scss";
import { Accept, Decline } from "../Svg/Svg";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { memo } from "react"

const Cookie = () => {
  const container = useRef<HTMLDivElement>(null);

  const { contextSafe } = useGSAP(
    () => {
      gsap.from(container.current!, { y: 200, delay: 2 });
    },
    { scope: container }
  );

  const handleClick = contextSafe(() => {
    gsap.to(container.current!, { y: 200 });
  });

  return (
    <div ref={container} className={s.main}>
      <h4>
        Ce site utilise des{" "}
        <Link scroll={false} href="#">
          cookies.
          <br />
          Voir nos partenaires
        </Link>
      </h4>
      <div className={s.group}>
        <button onClick={handleClick}>
          (Refuser)
          <span>
            <Decline />
          </span>
        </button>
        <button onClick={handleClick}>
          (Accepter & Fermer)
          <span>
            <Accept />
          </span>
        </button>
      </div>
    </div>
  );
};

export default memo(Cookie);
