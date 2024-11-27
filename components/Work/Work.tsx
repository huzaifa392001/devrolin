import { useEffect, useRef, useState } from "react";
import Elements from "./Elements";
import s from "./work.module.scss";
import { data } from "./data";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
// import { WorkHeading } from "../Svg/Svg";
import Image from "next/image";
import { useSnapshot } from "valtio";
import { store } from "@/store";
// import Preloader from "../Preloader/Preloader";
import { useRouter } from "next/router";
import { memo } from "react";
// import Link from 'next/link';

const Work = () => {
  const container = useRef<HTMLElement>(null);
  const heading = useRef<HTMLDivElement>(null);
  const [counter, setCounter] = useState<number>(1);
  // const [loading, setLoading] = useState(false);
  const router = useRouter();

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
            rotationY: 0,
            rotationZ: 0,
            duration: 1.0,
            ease: "power3.out",
            delay: index * 0.6,
          }
        )
          .to(word, {
            rotationY: 89,
            rotationZ: 8,
            opacity: 1,
            duration: 2.0,
            ease: "power3.out",
            delay: 0.5,
          })

          .fromTo(
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
      let mm = gsap.matchMedia();

      mm.add(
        { isDesktop: `(min-width: 800px)`, isMobile: `(max-width: 799px)` },
        (context) => {
          let { isDesktop } = context.conditions as { isDesktop: boolean };

          gsap
            .timeline({
              scrollTrigger: {
                trigger: container.current!,
                start: "top 40%",
                toggleActions: "play none none reverse",
                fastScrollEnd: isDesktop,
                preventOverlaps: isDesktop,
              },
              defaults: {
                ease: "power1.out", // Change ease to a slower one for smoother effect
              },
            })
            .from(".work-heading path", {
              strokeDashoffset: 2340,
              duration: 2, // Increased duration
              ease: "none",
            })
            .to(".work-heading path", {
              duration: 2, // Increased duration
              fill: "black",
              ease: "power1.inOut", // Adjust easing
            });

          let tl = gsap.timeline({
            scrollTrigger: {
              trigger: `.slider`,
              start: isDesktop ? "top+=100 top" : "top top",
              end: "bottom+=8000 bottom",
              scrub: 2.5, // Slower scrub rate for smoother scrolling effect
              pin: true,
              pinSpacing: true,
            },
            defaults: { ease: "power2.out" }, // Use slower easing
          });

          data.forEach((_, i) => {
            tl.call(() => setCounter(i + 1))
              .to(`.slide-${i - 1}`, { yPercent: -100 })
              .from(`.slide-${i}`, { yPercent: i === 0 ? 0 : 100 }, "<")
              .from(`.work-path-${i + 1}`, {
                scale: 0,
                duration: 2.5, // Increased duration for slower scaling effect
                ease: "power2.out", // Slower easing
              })
              .from(
                `.image-${i}`,
                {
                  left: isDesktop ? "130%" : "80%",
                  top: isDesktop ? "60%" : "100%",
                  rotate: -40,
                  duration: 5.5, // Increased duration for slower movement
                },
                "<"
              ) // Image starts moving immediately
              .from(
                `.heading-${i}`,
                {
                  scale: 0.8,
                  duration: 1.5, // Slightly slower
                  ease: "power2.out", // Adjust easing
                },
                "-=6"
              ) // Heading animation starts with image animation
              .to(
                `.heading-${i}`,
                {
                  scale: 1.1,
                  duration: 5.5, // Slow down to match image movement
                  ease: "power2.out",
                },
                "<"
              ) // Heading scaling happens simultaneously
              .call(() => setCounter(i + 1))
              .to(`.work-path-${i + 1}`, {
                scale: 0,
                duration: 1.5, // Increased duration for slower scale-down
                ease: "power2.out",
              });
          });
        }
      );
    },
    { scope: container }
  );

  const { workHeadingPointerEnter, workHeadingPointerLeave } =
    useSnapshot(store);

  const handleCardClick = (id: number) => {
    // // setLoading(true);
    // setTimeout(() => {
    // setLoading(false);
    router.push(`/work/${id}`);
    // }, 1000);
  };

  return (
    <section id="work" ref={container} className={s.main}>
      {/* {loading && <Preloader />}  */}
      <div ref={heading} className={`work-heading ${s.heading}`}>
        <div className="word">
          {"Discover".split("").map((letter, index) => (
            <span key={index} className="letter">
              {letter}
            </span>
          ))}
        </div>
        <div className="word">
          {"Latest".split("").map((letter, index) => (
            <span key={index} className="letter">
              {letter}
            </span>
          ))}
        </div>
        <div className="word">
          {"Projects".split("").map((letter, index) => (
            <span key={index} className="letter">
              {letter}
            </span>
          ))}
        </div>
      </div>

      <div className={`slider ${s.slider}`}>
        <div className={s.counter}>
          <h2>0{counter}/07</h2>
        </div>

        {data.map(({ name }, i) => {
          return (
            <div
              key={i}
              className={`slide-${i} ${s.slide}`}
              onClick={() => handleCardClick(i)}
            >
              <Elements id={i} />
              <Image
                className={`image-${i} ${s.image}`}
                src={`/work/${i}.webp`}
                alt="image"
                height={2000}
                width={2000}
                loading="lazy"
              />

              <div
                onPointerEnter={workHeadingPointerEnter}
                onPointerLeave={workHeadingPointerLeave}
              >
                <h2 className={`heading-${i}`}>{name}</h2>
                <h2 className={`heading-${i}`} data-stroke>
                  {name}
                </h2>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default memo(Work);
