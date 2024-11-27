import { data } from "./data";
import s from "./services.module.scss";
import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
// import Elements from "./Elements";
import { ServiceMenu } from "../Svg/Svg";
// import { ServicesHeading } from "../Svg/Svg";
import { memo } from "react"

const Services = () => {
  const container = useRef<HTMLElement>(null);
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
            delay: index * 0.6,
          }
        ).to(word, {
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
                ease: "power4.inOut",
              },
            })
            .from(".services-heading path", {
              strokeDashoffset: 1500,
              duration: 0.8,
              ease: "none",
            })
            .to(".services-heading path", {
              duration: 0.8,
              fill: "black",
              ease: "power3",
            });
        }
      );
      gsap
        .timeline({
          scrollTrigger: {
            trigger: `.slider`,
            start: "top top",
            end: "bottom+=3000 top",
            scrub: true,
            pin: true,
            pinSpacing: true,
          },
          defaults: { ease: "none" },
        })
        .to(".menu svg", { rotate: 62 })
        .to(`.slide-0`, { clipPath: "circle(100% at 50% 50%)" }, "<0.3")
        .from(".service-path-1 path", {
          stagger: 0.1,
          yPercent: -100,
          opacity: 0,
          scale: 0,
        })
        .from(".service-path-2", { xPercent: -100 }, "<0.2")
        .to(".menu svg", { rotate: 25 })
        .to(`.slide-1`, { clipPath: "circle(100% at 50% 50%)" }, "<0.3")
        .from(".service-path-4 ", {
          yPercent: -100,
          scale: 0,
        })
        .from(".service-path-3", { yPercent: -100, rotate: 360 }, "<0.2")
        .to(".menu svg", { rotate: 342 })
        .to(`.slide-2`, { clipPath: "circle(100% at 50% 50%)" }, "<0.3")
        .from(".service-path-5 ", {
          scale: 0,
          yPercent: -100,
        })
        .from(
          ".service-path-6",
          { yPercent: -100, rotate: 360, scale: 4 },
          "<0.2"
        )
        .to(".menu svg", { rotate: 292 })
        .to(`.slide-3`, { clipPath: "circle(100% at 50% 50%)" }, "<0.3")
        .from(
          ".service-path-7",
          { scale: 4, rotate: 180, x: 400, y: 200 },
          "<0.2"
        )
        .to(".menu svg", { rotate: 243 })
        .to(`.slide-4`, { clipPath: "circle(100% at 50% 50%)" }, "<0.3")
        .from(".service-path-9", { scale: 4, yPercent: -100 }, "<0.2")
        .to(".menu svg", { rotate: 195 })
        .to(`.slide-5`, { clipPath: "circle(100% at 50% 50%)" }, "<0.3")
        .from(".service-path-11", { yPercent: -100 })
        .from(".service-path-10", { scale: 4, opacity: 0 }, "<0.2")
        .to(".menu svg", { rotate: 132 })
        .to(`.slide-6`, { clipPath: "circle(100% at 50% 50%)" }, "<0.3")
        .from(".service-path-12 path", { opacity: 0, stagger: 0.05 })
        .from(".service-path-13", { yPercent: 100 }, "<0.2")
        .to(".menu svg", { rotate: 100 })
        .to(`.slide-7`, { clipPath: "circle(100% at 50% 50%)" }, "<0.3")
        .from(".service-path-14", { xPercent: -100, yPercent: -100 }, "<0.2");
    },
    { scope: container }
  );

  return (
    <section id="services" ref={container} className={s.main}>
      <div ref={heading} className={`services-heading ${s.heading}`}>
        {/* <ServicesHeading /> */}
        <div className="word">
          {"Tailored".split("").map((letter, index) => (
            <span key={index} className="letter">
              {letter}
            </span>
          ))}
        </div>
        <div className="word">
          {"Services".split("").map((letter, index) => (
            <span key={index} className="letter">
              {letter}
            </span>
          ))}
        </div>
        <div className="word">
          {"for You".split("").map((letter, index) => (
            <span key={index} className="letter">
              {letter}
            </span>
          ))}
        </div>
      </div>
      <div className={`slider ${s.slider}`}>
        <div className={`menu ${s.menu}`}>
          <ServiceMenu />
        </div>

        {data.map(({ color, heading }, i) => {
          return (
            <div
              key={i}
              style={{ backgroundColor: "#ebebeb", zIndex: i }}
              className={`slide-${i} ${s.slide}`}
            >
              {/* <Elements id={i} /> */}
              <h3 style={{marginBottom: 100}} >{heading}</h3>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default memo(Services);
