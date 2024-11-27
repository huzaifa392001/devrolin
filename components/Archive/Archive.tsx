import { useEffect, useRef } from "react";
import Card from "./Card";
// import Elements from "./Elements";
import s from "./archive.module.scss";
import { data } from "./data";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
// import { ArchiveHeading } from "../Svg/Svg";
import { memo } from "react";
import Image from "next/image";

const Archive = () => {
  const container = useRef<HTMLElement>(null);
  const grid = useRef<HTMLDivElement>(null);
  const heading = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const animationTimeline = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    // Create a timeline for the animation
    animationTimeline.current = gsap
      .timeline({ paused: true })
      .to(imageRef.current, {
        y: 30, // Adjust movement distance
        duration: 0.5,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
      });

    const imageElement = imageRef.current;

    // Event listeners for mouse enter and leave
    if (imageElement) {
      const handleMouseEnter = () => animationTimeline.current?.play();
      const handleMouseLeave = () => {
        animationTimeline.current?.pause();
        gsap.set(imageRef.current, { y: 0 });
      };

      imageElement.addEventListener("mouseenter", handleMouseEnter);
      imageElement.addEventListener("mouseleave", handleMouseLeave);

      // Cleanup function to remove event listeners
      return () => {
        imageElement.removeEventListener("mouseenter", handleMouseEnter);
        imageElement.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, []);

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

      gsap
        .timeline({
          scrollTrigger: {
            trigger: container.current!,
            start: "top 40%",
            toggleActions: "play none none reverse",
            fastScrollEnd: true,
            preventOverlaps: true,
          },
          defaults: {
            ease: "power4.inOut",
          },
        })
        .from(".archive-heading path", {
          strokeDashoffset: 1360,
          duration: 0.8,
          ease: "none",
        })
        .to(".archive-heading path", {
          duration: 0.8,
          fill: "black",
          ease: "power3",
        });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: container.current!,
            start: "top 40%",
            toggleActions: "play none none reverse",
            fastScrollEnd: true,
            preventOverlaps: true,
          },
          defaults: {
            ease: "power4.inOut",
          },
        })
        .from(".archive-path-1", {
          clipPath: "inset(0% 0% 0% 100%)",
          duration: 1,
          delay: 0.4,
        })
        .from(".archive-path-2", { x: 500 }, "<0.2");

      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".archive-path-3",
            start: "top center",
            toggleActions: "play none none reverse",
            fastScrollEnd: true,
            preventOverlaps: true,
          },
          defaults: {
            ease: "power4.inOut",
          },
        })
        .from(".archive-path-3", { xPercent: 50 })
        .to(".archive-path-3", { rotate: -35 }, "<0.2")
        .to(".archive-path-3", { rotate: 0 }, "<0.5")
        .from(".archive-path-4", { xPercent: -50, scale: 0 }, "<0.2");
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".archive-path-6",
            start: "top center",
            toggleActions: "play none none reverse",
            fastScrollEnd: true,
            preventOverlaps: true,
          },
          defaults: {
            ease: "power4.inOut",
          },
        })
        .from(".archive-path-6", { xPercent: -50, scale: 0 })
        .from(".archive-path-7", { xPercent: -80, y: 100, rotate: 360 }, "<0.2")
        .from(".archive-path-5", { xPercent: 80 }, "<0.2");

      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".archive-path-9",
            start: "top center",
            toggleActions: "play none none reverse",
            fastScrollEnd: true,
            preventOverlaps: true,
          },
          defaults: {
            ease: "power4.inOut",
          },
        })
        .from(".archive-path-10", { xPercent: -500 })
        .from(".archive-path-9", { xPercent: -500 }, "<");
      // .from(".archive-path-8", { scale: 0, rotate: 180 }, "<0.2");

      gsap.from(".archive-path-11 path", {
        ease: "power4.inOut",
        stagger: 0.1,
        scale: 0,
        scrollTrigger: {
          trigger: ".archive-path-11",
          start: "top center",
          toggleActions: "play none none reverse",
          fastScrollEnd: true,
          preventOverlaps: true,
        },
      });

      mm.add(
        { isDesktop: `(min-width: 800px)`, isMobile: `(max-width: 799px)` },
        (context) => {
          let { isDesktop } = context.conditions as { isDesktop: boolean };

          if (isDesktop) {
            gsap.to(".archive-card-0", {
              yPercent: -80,

              ease: "none",
              scrollTrigger: {
                trigger: ".archive-card-0",
                scrub: true,
              },
            });
            gsap.to(".archive-card-1", {
              yPercent: -40,

              ease: "none",
              scrollTrigger: {
                trigger: ".archive-card-1",
                scrub: true,
              },
            });
            gsap.to(".archive-card-2", {
              yPercent: -80,

              ease: "none",
              scrollTrigger: {
                trigger: ".archive-card-0",
                scrub: true,
              },
            });
            gsap.to(".archive-card-3", {
              yPercent: -20,

              ease: "none",
              scrollTrigger: {
                trigger: ".archive-card-3",
                scrub: true,
              },
            });
            gsap.to(".archive-card-4", {
              yPercent: -60,

              ease: "none",
              scrollTrigger: {
                trigger: ".archive-card-2",
                scrub: true,
              },
            });
            gsap.to(".archive-card-5", {
              yPercent: -20,

              ease: "none",
              scrollTrigger: {
                trigger: ".archive-card-5",
                scrub: true,
              },
            });
            gsap.to(".archive-card-6", {
              yPercent: -60,

              ease: "none",
              scrollTrigger: {
                trigger: ".archive-card-5",
                scrub: true,
              },
            });
            gsap.to(".archive-card-7", {
              yPercent: -40,

              ease: "none",
              scrollTrigger: {
                trigger: ".archive-card-5",
                scrub: true,
              },
            });
            gsap.to(".archive-card-8", {
              yPercent: -20,

              ease: "none",
              scrollTrigger: {
                trigger: ".archive-card-8",
                scrub: true,
              },
            });
            gsap.to(".archive-card-9", {
              yPercent: -60,

              ease: "none",
              scrollTrigger: {
                trigger: ".archive-card-7",
                scrub: true,
              },
            });
            gsap.to(".archive-card-10", {
              yPercent: -60,

              ease: "none",
              scrollTrigger: {
                trigger: ".archive-card-10",
                scrub: true,
              },
            });
            gsap.to(".archive-card-11", {
              yPercent: -100,

              ease: "none",
              scrollTrigger: {
                trigger: ".archive-card-9",
                scrub: true,
              },
            });
            gsap.to(".archive-card-12", {
              yPercent: -40,

              ease: "none",
              scrollTrigger: {
                trigger: ".archive-card-12",
                scrub: true,
              },
            });
            gsap.to(".archive-card-13", {
              yPercent: -70,

              ease: "none",
              scrollTrigger: {
                trigger: ".archive-card-11",
                scrub: true,
              },
            });
            gsap.to(".archive-card-15", {
              yPercent: -70,

              ease: "none",
              scrollTrigger: {
                trigger: ".archive-card-13",
                scrub: true,
              },
            });
            gsap.to(".archive-card-16", {
              yPercent: -70,

              ease: "none",
              scrollTrigger: {
                trigger: ".archive-card-16",
                scrub: true,
              },
            });
          }
        }
      );
    },
    { scope: container }
  );

  return (
    <section id="archive" ref={container} className={s.main}>
      {/* <Elements /> */}
      <div ref={heading} className={`archive-heading ${s.heading}`}>
        <div className="word">
          {"Past".split("").map((letter, index) => (
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
          {"Highlights".split("").map((letter, index) => (
            <span key={index} className="letter">
              {letter}
            </span>
          ))}
        </div>
      </div>
      <div>
        {/* <Image
          ref={imageRef}
          className={s.image}
          src="/Group4.svg"
          alt="Background SVG"
          height={100}
          width={100}
          loading="lazy"
        />
        <Image
          ref={imageRef}
          className={`${s.images} ${s.rotate}`}
          src="/Group5.svg"
          alt="Background SVG"
          height={100}
          width={100}
          loading="lazy"
        /> */}
        <div ref={grid} className={s.grid}>
          {[...data].map((e, i) => {
            return <Card id={i} {...e} key={i} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default memo(Archive);
