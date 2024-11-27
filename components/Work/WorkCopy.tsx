import { useEffect, useRef, useState } from "react";
import Elements from "./Elements";
import s from "./work.module.scss";
import { data as importedData } from "@/components/Work/data";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
// import { WorkHeading } from "../Svg/Svg";
import Image from "next/image";
import { useSnapshot } from "valtio";
import { store } from "@/store";
// import Preloader from "../Preloader/Preloader";
import { useRouter } from "next/router";
import { memo } from "react";
import Link from "next/link";

interface WorkData {
  id: number;
  name: string;
}

// Data array for work items
const data: WorkData[] = [
  { id: 0, name: "Bauhas" },
  { id: 1, name: "Everphone" },
  { id: 2, name: "Monipol" },
  { id: 3, name: "Myndyoga" },
  { id: 4, name: "Vermietet" },
  { id: 5, name: "WWTF" },
];

// Define a mapping of ids to paths
const workPaths: { [key: number]: string } = {
  0: "/work/bauhas",
  1: "/work/everphone",
  2: "/work/monipol",
  3: "/work/myndyoga",
  4: "/work/vermietet",
  5: "/work/wwtf",
};

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
              end: "+=25000",
              scrub: 2.5, // Slower scrub rate for smoother scrolling effect
              pin: true,
              pinSpacing: true,
            },
            defaults: { ease: "none" }, // Use slower easing
          });

          data.forEach((_, i) => {
            tl.call(() => setCounter(i + 1))
              .to(`.slide-${i - 1}`, { yPercent: -100 })
              .from(`.slide-${i}`, { yPercent: i === 0 ? 0 : 100, duration: 2 }, "<")
              .from(`.work-path-${i + 1}`, {
                scale: 0,
                duration: 2.5, // Increased duration for slower scaling effect
                ease: "none", // Slower easing
              })
              .from(
                `.image-${i}`,
                {
                  left: isDesktop ? "130%" : "80%",
                  top: isDesktop ? "60%" : "100%",
                  rotate: -40,
                  duration: 9.5, // Increased duration for slower movement
                },
                "<"
              ) // Image starts moving immediately
              // .from(
              //   `.heading-${i}`,
              //   {
              //     scale: 1,
              //     duration: 1.5, // Slightly slower
              //     ease: "none", // Adjust easing
              //   },
              //   "-=10"
              // ) // Heading animation starts with image animation
              .to(
                `.heading-${i}`,
                {
                  scale: 1.1,
                  duration: 5.5, // Slow down to match image movement
                  ease: "none",
                },
                "<"
              ) // Heading scaling happens simultaneously
              .call(() => setCounter(i + 1))
              .to(`.work-path-${i + 1}`, {
                scale: 0,
                duration: 1.5, // Increased duration for slower scale-down
                ease: "none",
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
    const path = workPaths[id];
    if (path) {
      router.push(path);
    } else {
      console.error("Path not found for id:", id);
    }
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
        {data.map(({ id, name }, i) => (
          <Link
            key={id}
            href={`${workPaths[id]}`}
            className={`slide-${i} ${s.slide}`}
            onClick={() => handleCardClick(id)}
          >
            <Elements id={i} />
            <Image
              className={`image-${i} ${s.image}`}
              src={`/work/${id}.webp`} // Ensure this path is correct
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
          </Link>
        ))}
      </div>
    </section>
  );
};

export default memo(Work);
