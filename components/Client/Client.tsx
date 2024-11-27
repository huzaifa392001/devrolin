import Image from "next/image";
import s from "./client.module.scss";
// import Elements from "./Elements";
import { useEffect, useRef } from "react";
import SplitType from "split-type";
import useIsomorphicLayoutEffect from "@/hooks/useIsomorphicLayoutEffect";
import { useGSAP } from "@gsap/react";
import { ClientsHeading } from "../Svg/Svg";
import Marquee from "react-fast-marquee";
import gsap from "gsap";
import { memo } from "react"

const Client = () => {
  const container = useRef<HTMLDivElement>(null);
  const para = useRef<HTMLParagraphElement>(null);
  const paraHide = useRef<HTMLParagraphElement>(null);
  const heading = useRef<HTMLDivElement>(null);
  const leftColumnRef = useRef<HTMLDivElement>(null);
  const rightColumnRef = useRef<HTMLDivElement>(null);
  const images = [...Array(38)];

  // useEffect(() => {
  //   const leftLogos = leftColumnRef.current;
  //   const rightLogos = rightColumnRef.current;

  //   if (leftLogos && rightLogos) {
  //     // Left column animation (top to bottom)
  //     gsap.to(leftLogos, {
  //       // yPercent: -100, // Move logos downwards
  //       duration: 10, // Adjust speed
  //       ease: 'none',
  //       repeat: -1, // Infinite loop
  //       modifiers: {
  //         yPercent: (yPercent) => yPercent % 100, // Create a seamless loop, no gap
  //       },
  //     });

  //     // Right column animation (bottom to top)
  //     gsap.to(rightLogos, {
  //       // yPercent: 100, // Move logos upwards
  //       duration: 10, // Adjust speed
  //       ease: 'none',
  //       repeat: -1, // Infinite loop
  //       modifiers: {
  //         yPercent: (yPercent) => yPercent % 100, // Create a seamless loop, no gap
  //       },
  //     });
  //   }
  // }, []);

  useEffect(() => {
    const leftColumn = leftColumnRef.current;
    const rightColumn = rightColumnRef.current;

    if (leftColumn && rightColumn) {
      // Function to scroll the left column down
      const scrollLeftColumn = () => {
        leftColumn.scrollTop += 1; // Scroll down
        if (leftColumn.scrollTop >= leftColumn.scrollHeight / 2) {
          leftColumn.scrollTop = 0; // Reset scroll position
        }
      };

      // Function to scroll the right column up (reverse)
      const scrollRightColumn = () => {
        rightColumn.scrollTop -= 1; // Scroll up
        if (rightColumn.scrollTop <= 0) {
          rightColumn.scrollTop = rightColumn.scrollHeight / 2; // Reset scroll position
        }
      };

      const leftInterval = setInterval(scrollLeftColumn, 9); // Adjust speed as needed
      const rightInterval = setInterval(scrollRightColumn, 19);

      return () => {
        clearInterval(leftInterval);
        clearInterval(rightInterval);
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

  useIsomorphicLayoutEffect(() => {
    SplitType.create(para.current!, {
      types: "words",
      wordClass: "client-para-word",
    });
    SplitType.create(paraHide.current!, {
      types: "words",
    });
  }, [para, paraHide]);

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
                start: isDesktop ? "top 40%" : "top-=50 center",
                toggleActions: "play none none reverse",
                fastScrollEnd: true,
                preventOverlaps: true,
              },
              defaults: {
                ease: "power4.inOut",
              },
            })
            .from(
              ".client-heading path",
              {
                strokeDashoffset: 1260,
                duration: 0.8,
                ease: "none",
              },
              "<"
            )
            .to(".client-heading path", {
              duration: 0.8,
              fill: "black",
              ease: "power3",
            });
          gsap
            .timeline({
              scrollTrigger: {
                trigger: container.current!,
                start: isDesktop ? "top 40%" : "top-=50 center",
                toggleActions: "play none none reverse",
                fastScrollEnd: true,
                preventOverlaps: true,
              },
              defaults: {
                ease: "power4.inOut",
              },
            })
            .from(
              ".client-path-1 path",
              { stagger: 0.05, x: 200, scale: 0 },
              "<0.2"
            )
            .from(".client-path-2", { xPercent: 100, y: 100 }, "<0.4");

          if (isDesktop) {
            gsap
              .timeline({
                scrollTrigger: {
                  trigger: ".client-grid-para",
                  start: "top center",
                  end: "bottom center",
                  toggleActions: "play none none reverse",
                  fastScrollEnd: true,
                  preventOverlaps: true,
                  scrub: true,
                },
                defaults: {
                  ease: "power4.inOut",
                },
              })
              .to(".client-para-word", {
                clipPath: "inset(0% 0% 0% 0%)",
                stagger: 0.2,
              });
          } else {
            gsap
              .timeline({
                scrollTrigger: {
                  trigger: ".client-grid",
                  start: "top center",
                  end: "bottom center",
                  toggleActions: "play none none reverse",
                  fastScrollEnd: true,
                  preventOverlaps: true,
                  scrub: true,
                },
                defaults: {
                  ease: "power4.inOut",
                },
              })
              .from(".client-logo", {
                clipPath: "inset(100% 0% 0% 0%)",
                stagger: 0.1,
              });

            gsap
              .timeline({
                scrollTrigger: {
                  trigger: ".client-grid-para",
                  start: "top center",
                  end: "bottom center",
                  toggleActions: "play none none reverse",
                  fastScrollEnd: true,
                  preventOverlaps: true,
                  scrub: true,
                },
                defaults: {
                  ease: "power4.inOut",
                },
              })
              .to(".client-para-word", {
                clipPath: "inset(0% 0% 0% 0%)",
                stagger: 0.2,
              });
          }
        }
      );
    },
    { scope: container }
  );

  return (
    <section ref={container} id="clients" className={s.main}>
      {/* <Elements /> */}
      <div ref={heading} className={`client-heading ${s.heading}`}>
        {/* <ClientsHeading /> */}
        <div className="word">
          {"Brands".split("").map((letter, index) => (
            <span key={index} className="letter">
              {letter}
            </span>
          ))}
        </div>
        <div className="word">
          {"Worked".split("").map((letter, index) => (
            <span key={index} className="letter">
              {letter}
            </span>
          ))}
        </div>
        <div className="word">
          {"With".split("").map((letter, index) => (
            <span key={index} className="letter">
              {letter}
            </span>
          ))}
        </div>
      </div>
      <div className={s.grid}>
      <div className={`client-grid ${s.grid_logos}`}>
      {/* Left Column */}
      <div className="image-column" ref={leftColumnRef} style={{ overflow: "hidden", height: "100vh" }}>
        {[...images, ...images].map((_, i) => (
          <Image
            key={`left-${i}`}
            className={`client-logo ${s.grid_logo}`}
            src={`/clients/${i % 38}.png`}
            height={100}
            width={100}
            alt="logo"
            loading="lazy"
          />
        ))}
      </div>

      {/* Right Column */}
      <div className="image-column" ref={rightColumnRef} style={{ overflow: "hidden", height: "100vh" }}>
        {[...images, ...images].map((_, i) => (
          <Image
            key={`right-${i}`}
            className={`client-logo ${s.grid_logo}`}
            src={`/clients/${i % 38}.png`}
            height={100}
            width={100}
            alt="logo"
            loading="lazy"
          />
        ))}
      </div>
    </div>

        <div className={`client-grid-para ${s.grid_para}`}>
          <p ref={para}>
            I have worked with a wide range of clients and start-ups in
            industries such as healthcare, education, e-commerce, automotive and
            finance, helping them to develop effective digital strategies, build
            engaging user interfaces, and create memorable brand experiences.
          </p>
          <p ref={paraHide} className={s.grid_para_hide}>
            I have worked with a wide range of clients and start-ups in
            industries such as healthcare, education, e-commerce, automotive and
            finance, helping them to develop effective digital strategies, build
            engaging user interfaces, and create memorable brand experiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default memo(Client);
