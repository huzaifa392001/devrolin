import Link from "next/link";
import s from "./contact.module.scss";
// import Elements from "./Elements";
// import { ContactHeading, ContactPathOne } from "../Svg/Svg";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { memo } from "react";

const Contact = () => {
  const container = useRef<HTMLDivElement>(null);
  const heading = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (heading.current) {
      const words = heading.current.querySelectorAll(".word");

      words.forEach((word, index) => {
        const letters = word.querySelectorAll(".letter");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: heading.current,
            start: "top 90%",
            end: "bottom top",
            scrub: true,
          },
        });

        tl.fromTo(
          word,
          {
            opacity: 0,
            rotationZ: 0,
            rotationY: -90,
            transformPerspective: 1000,
            transformOrigin: "50% 50%",
          },
          {
            opacity: 1,
            rotationZ: 0,
            rotationY: 0,
            duration: 1.0,
            ease: "power3.out",
            delay: index * 0.3,
          }
        ).to(word, {
          rotationY: 90,
          rotationZ: 4,
          opacity: 0,
          duration: 1.5,
          ease: "power3.out",
          delay: 0.02,
        });

        tl.fromTo(
          letters,
          {
            opacity: 0,
            rotationY: -90,
            transformPerspective: 1000,
            transformOrigin: "50% 50%",
          },
          {
            opacity: 1,
            rotationY: 0,
            stagger: {
              each: 0.1,
              from: "end",
            },
            duration: 1,
            ease: "power3.out",
          },
          0
        );
      });
    }
  }, []);

  useGSAP(
    () => {
      const timeline1 = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 40%",
          toggleActions: "play none none reverse",
          fastScrollEnd: true,
          preventOverlaps: true,
        },
        defaults: {
          ease: "power4.inOut",
        },
      });

      timeline1
        .from(".contact-heading path", {
          strokeDashoffset: 1290,
          duration: 1,
          ease: "none",
        })
        .to(".contact-heading path", {
          duration: 1,
          fill: "black",
          ease: "power3.inOut",
        })
        .from(
          ".contact-path-2",
          {
            xPercent: 70,
            duration: 1,
            ease: "power4.inOut",
          },
          "<0.6"
        )
        .to(
          ".contact-path-3 path",
          {
            strokeDashoffset: 0,
            duration: 2,
            ease: "power4.inOut",
          },
          "<0.2"
        );

      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".contact-grid",
            start: "top center",
            toggleActions: "play none none reverse",
            fastScrollEnd: true,
            preventOverlaps: true,
          },
          defaults: {
            ease: "power4.inOut",
          },
        })
        .from(".contact-grid p", {
          clipPath: "inset(100% 0% 0% 0%)",
          stagger: 0.2,
          duration: 1,
        })
        .from(".contact-path-1", {
          scale: 0,
          duration: 1,
        });
    },
    { scope: container }
  );

  return (
    <section ref={container} id="contact" className={s.main}>
      {/* <Elements /> */}
      <div ref={heading} className={`contact-heading ${s.heading}`}>
        {/* <ContactHeading /> */}
        <div className="word">
          {"Let's".split("").map((letter, index) => (
            <span key={index} className="letter">
              {letter}
            </span>
          ))}
        </div>
        <div className="word">
          {"Work".split("").map((letter, index) => (
            <span key={index} className="letter">
              {letter}
            </span>
          ))}
        </div>
        <div className="word">
          {"Together".split("").map((letter, index) => (
            <span key={index} className="letter">
              {letter}
            </span>
          ))}
        </div>
      </div>
      <div className={`contact-grid ${s.grid}`}>
        <p>
          Lets start a project together
          {/* <span className={`contact-path-1 ${s.pathOne}`}>
            { <ContactPathOne /> }
          </span> */}
        </p>
        <div className={s.box}>
          <p>
            Mail:{" "}
            <Link scroll={false} href="mailto:ceo.mudassir@devrolin.com">
              ceo.mudassir@devrolin.com
            </Link>
          </p>
          <p>
            Phone:{" "}
            <Link scroll={false} href="tel:+92137837237327">
              +92137837237327
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default memo(Contact);
