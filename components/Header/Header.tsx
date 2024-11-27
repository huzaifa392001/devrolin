import { useCallback, useEffect, useRef, useState } from "react";
import { MenuLine } from "../Svg/Svg";
import s from "./header.module.scss";
import { useGSAP } from "@gsap/react";
// import ScrollTrigger from "gsap/ScrollTrigger";
import Link from "next/link";
import RandomLetter from "../Footer/RandomLetter";
import CustomLink from "../Footer/CustomLink";
import { useLottie } from "lottie-react";
import PL from "./PL_logo.json";
import { memo } from "react";
import CustomLinkC from "../Footer/CustomLinkC";
import { useRouter } from "next/router";
import gsap from "gsap";

// gsap.registerPlugin(ScrollTrigger);
const Header = ({
  menuBtnEnter,
  menuBtnLeave,
}: {
  menuBtnEnter: () => void;
  menuBtnLeave: () => void;
}) => {
  const header = useRef<HTMLElement>(null);
  const logo = useRef<HTMLDivElement>(null);
  const container = useRef<HTMLDivElement>(null);
  const [color, setColor] = useState<string>();
  const [activeMenu, setActiveMenu] = useState<number>(-1);
  const tl = useRef<GSAPTimeline>();
  const tlPathOne = useRef<GSAPTimeline>();
  const tlPathTwo = useRef<GSAPTimeline>();
  const tlPathThree = useRef<GSAPTimeline>();
  const tlPathFour = useRef<GSAPTimeline>();
  const tlPathFive = useRef<GSAPTimeline>();
  const tlPathSix = useRef<GSAPTimeline>();

  const component = [
    { heading: "Work" },
    { heading: "Archive" },
    { heading: "Clients" },
    { heading: "Services" },
    { heading: "About" },
    { heading: "Contact" },
  ];
  const [activeMenus, setActiveMenus] = useState(0);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [activeComponentName, setActiveComponentName] = useState("");
  const [navTimeoutId, setNavTimeoutId] = useState<NodeJS.Timeout | null>(null);

  const toggleNav = () => {
    if (isNavOpen) {
      const timeoutId = setTimeout(() => {
        setIsNavOpen(false);
        setNavTimeoutId(null);
      }, 4500);

      setNavTimeoutId(timeoutId);
    } else {
      if (navTimeoutId) {
        clearTimeout(navTimeoutId);
        setNavTimeoutId(null);
      }
      setIsNavOpen(true);
    }
  };

  const components = [
    { heading: "Work", color: "#ADDBD0" },
    { heading: "Archive", color: "#83D398" },
    { heading: "Clients", color: "#C1927F" },
    { heading: "Services", color: "#FFD95D" },
    { heading: "About", color: "#FF9293" },
    { heading: "Contact", color: "#D6C2E4" },
  ];

  useGSAP(() => {
    setTimeout(() => {
      const sections = document.querySelectorAll("section");

      sections.forEach((sec) => {
        const id = sec.getAttribute("id"); // Assuming each section has an ID

        gsap.timeline({
          scrollTrigger: {
            trigger: sec,
            start: "top center",
            end: "bottom center",
            // markers: true,
            onEnter: () => {
              const matchedComponent = components.find(
                (comp) => comp.heading?.toLowerCase() === id?.toLowerCase()
              );
              if (matchedComponent) {
                setActiveComponentName(matchedComponent.heading);
              }
              else {
                setActiveComponentName('');
              }
            },
            onEnterBack: () => {
              const matchedComponent = components.find(
                (comp) => comp.heading?.toLowerCase() === id?.toLowerCase()
              );
              if (matchedComponent) {
                setActiveComponentName(matchedComponent.heading);
              }
              else {
                setActiveComponentName('');
              }
            },
          },
        });
      });
    }, 1000);
  }, {})

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const sections = components.map((comp) =>
  //       document.getElementById(comp.heading.toLowerCase())
  //     );
  //     const scrollPosition = window.scrollY + window.innerHeight / 3;

  //     sections.forEach((section, index) => {
  //       if (section) {
  //         const { offsetTop, clientHeight } = section;
  //         if (
  //           scrollPosition >= offsetTop &&
  //           scrollPosition < offsetTop + clientHeight
  //         ) {
  //           setActiveMenus(index);
  //           setActiveComponentName(components[index].heading);
  //         }
  //       }
  //     });
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [components, setActiveMenus, setActiveComponentName]);

  const handleScrollTo = (index: number) => {
    const element = document.querySelector(
      `#${components[index].heading.toLowerCase()}`
    );

    if (element) {
      let offset;
      if (index <= 2) {
        offset = -150;
      } else {
        offset = -135;
      }

      const elementPosition = element.getBoundingClientRect().top;
      const targetPosition = elementPosition + window.pageYOffset + offset;

      // Set duration based on the index
      const duration = index <= 1 ? 3000 : 2000; // 3 seconds for the first two, 2 seconds for others
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      let startTime: number | null = null;

      const smoothScroll = (currentTime: number) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1); // Ensure progress is within [0, 1]

        const scrollTo = startPosition + distance * easeInOutQuad(progress);
        window.scrollTo(0, scrollTo);

        if (progress < 1) {
          requestAnimationFrame(smoothScroll);
        }
      };

      // Easing function for smooth effect
      const easeInOutQuad = (t: number) => {
        return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
      };

      requestAnimationFrame(smoothScroll);

      setActiveMenus(index);
      setActiveComponentName(components[index].heading);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const visibleIndex = component.findIndex(
              (comp) => comp.heading.toLowerCase() === entry.target.id
            );
            if (visibleIndex === 0) {
              setActiveMenus(0);
            } else if (visibleIndex === 1) {
              setActiveMenus(1);
            } else if (visibleIndex > 1) {
              setActiveMenus(visibleIndex);
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50% 0px",
      }
    );

    component.forEach((comp) => {
      const element = document.getElementById(comp.heading.toLowerCase());
      if (element) {
        observer.observe(element);
      } else {
        console.error("Section element not found for:", comp.heading);
      }
    });

    return () => {
      component.forEach((comp) => {
        const element = document.getElementById(comp.heading.toLowerCase());
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  const { contextSafe } = useGSAP(
    () => {
      //hero elements
      gsap
        .timeline({
          defaults: { ease: "Power4.easeInOut", duration: 2 },
          onComplete: () => {
            gsap.to(".path-1", {
              keyframes: [{ y: 20 }, { y: -20 }, { y: 0 }],
              duration: 5,
              repeat: -1,
            });
            gsap.to(".path-2", {
              keyframes: [
                { rotate: 120, scale: 0.9 },
                { rotate: 180, scale: 1.1 },
                { rotate: 360, scale: 1 },
              ],
              duration: 10,
              repeat: -1,
            });
          },
        })
        .from(".path-1", { y: -200 })
        .from(".path-2", { y: -200, scale: 0 }, "<0.4");

      //menu animation
      tl.current = gsap
        .timeline({
          defaults: { ease: "Power4.easeInOut", duration: 2 },
          reversed: true,
        })
        .to(".line-1", { top: "50%", y: "-50%", rotate: 45, duration: 0.5 })
        .to(
          ".line-2",
          { top: "50%", y: "-50%", rotate: -45, duration: 0.5 },
          "<"
        )
        .to(header.current!, { opacity: 0, duration: 2 })
        .to(".large", { opacity: 1, duration: 0.5 }, "<")
        .from(".large-text-1", { xPercent: 100, duration: 1 }, "<0.3")
        .from(".large-text-2", { xPercent: -100, duration: 1 }, "<")
        .to(".large", { rotate: -90, scale: 2, duration: 1 }, "<0.6")
        .to(".large-text-1", { xPercent: 80, duration: 2 }, "<0.5")
        .to(".large-text-2", { xPercent: -80, duration: 2 }, "<")
        .to(header.current!, { opacity: 1, duration: 2 }, "<0.1")
        .to(".menu", { clipPath: "inset(0% 0% 0% 0%)" }, "<")
        .from(".path-menu-1", { x: -400, y: -100 }, "<0.2")
        .from(".path-menu-2", { x: -500, y: 100 }, "<0.1")
        .from(".path-menu-3 path", { y: -100, stagger: 0.1, opacity: 0 }, "<")
        .from(".path-menu-4", { x: 500, y: -400, rotate: 360 }, "<0.1")
        .from(".path-menu-6", { x: 500, y: 1000, rotate: 360 }, "<0.1")
        .from(
          ".path-menu-7",
          { xPercent: 100, yPercent: -1000, scale: 3 },
          "<0.1"
        )
        .from(".path-menu-8", { yPercent: 300, rotate: 360 }, "<0.1")
        .from(
          ".path-menu-5 path",
          { y: -100, x: 400, stagger: 0.1, opacity: 0, duration: 0.5 },
          "<"
        )
        .from(".menu-link", { yPercent: 100, opacity: 0, stagger: 0.1 }, "<0.1")
        .from(".menu-social", { yPercent: 100, opacity: 0 }, "<0.1");

      tlPathOne.current = gsap
        .timeline({
          paused: true,
          repeat: -1,
          defaults: {
            duration: 2,
            ease: "power4",
          },
        })
        .to(".path-menu-1", {
          y: 200,
          scale: 0.2,
        })
        .to(".path-menu-1", {
          y: 0,
          scale: 1,
        });
      tlPathTwo.current = gsap
        .timeline({
          paused: true,
          repeat: -1,
          defaults: {
            duration: 2,
            ease: "power4",
          },
        })
        .to(".path-menu-4", {
          rotate: 360,
        })
        .to(".path-menu-4", {
          rotate: 0,
        });

      tlPathThree.current = gsap
        .timeline({
          paused: true,
          repeat: -1,
          defaults: {
            duration: 2,
            ease: "power4",
          },
        })
        .to(".path-menu-8", {
          rotate: 180,
          scale: 0.5,
        })
        .to(".path-menu-8", {
          rotate: 0,
          scale: 1,
        });
      tlPathFour.current = gsap
        .timeline({
          paused: true,
          repeat: -1,
          defaults: {
            duration: 2,
            ease: "power4",
          },
        })
        .to(".path-menu-6", {
          rotate: 180,
          scale: 0.5,
        })
        .to(".path-menu-6", {
          rotate: 0,
          scale: 1,
        });
      tlPathFive.current = gsap
        .timeline({
          paused: true,
          repeat: -1,
          defaults: {
            duration: 2,
            ease: "power4",
          },
        })
        .to(".path-menu-2", {
          scale: 2,
          x: -200,
        })
        .to(".path-menu-2", {
          x: 0,
          scale: 1,
        });
      tlPathSix.current = gsap
        .timeline({
          paused: true,
          repeat: -1,
          defaults: {
            duration: 2,
            ease: "power4",
          },
        })
        .to(".path-menu-7", {
          scale: 2,
        })
        .to(".path-menu-7", {
          scale: 0.7,
        });
    },
    { scope: container }
  );

  const handleClick = contextSafe(() => {
    toggleNav();
    if (!tl.current!.reversed()) {
      document.body.style.overflow = "";
    } else {
      document.body.style.overflow = "hidden";
    }

    tl.current!.reversed(!tl.current!.reversed());
    setActiveMenu(-1);
  });

  const handlePointerEnter = (color: string, key: number) => {
    switch (key) {
      case 0:
        tlPathOne.current?.play();
        break;

      case 1:
        tlPathTwo.current?.play();
        break;

      case 2:
        tlPathThree.current?.play();
        break;

      case 3:
        tlPathFour.current?.play();
        break;

      case 4:
        tlPathFive.current?.play();
        break;

      case 5:
        tlPathSix.current?.play();
        break;

      default:
        break;
    }
  };

  const handlePointerLeave = () => {
    setColor("#F6F2E9");
    tlPathOne.current!.paused(true);
    tlPathTwo.current!.paused(true);
    tlPathThree.current!.paused(true);
    tlPathFour.current!.paused(true);
    tlPathFive.current!.paused(true);
    tlPathSix.current!.paused(true);
  };

  const [scrollY, setScrollY] = useState<number>(0);

  const onScroll = useCallback(() => {
    setScrollY(window.scrollY);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [onScroll]);

  useGSAP(
    () => {
      gsap.set(".logo", { xPercent: -50, yPercent: -50 });
      if (scrollY > 100) {
        gsap.to(".logo", { scale: 0.7, ease: "power4", duration: 0.8 });
      } else {
        gsap.to(".logo", { scale: 1, ease: "power4", duration: 0.8 });
      }
    },
    { scope: header, dependencies: [scrollY] }
  );

  const { View, play, stop } = useLottie({
    animationData: PL,
  });

  useEffect(() => {
    stop();
  }, [stop]);

  const headings = [
    "Work",
    "Archive",
    "Clients",
    "Services",
    "About",
    "Contact",
  ];

  const [activeWhiteLinks, setActiveWhiteLinks] = useState<number[]>([]); // Array to store indices of active links

  useEffect(() => {
    const handleScroll = () => {
      const links = document.querySelectorAll<HTMLDivElement>('.scrollLinks'); // Type-casting links as HTMLDivElement
      if (!links.length) return;

      const allElements = document.querySelectorAll<HTMLImageElement | HTMLVideoElement | HTMLIFrameElement>(
        'img:not(.client-logo), video, iframe'
      ); // Type-casting media elements

      const newActiveLinks: number[] = []; // Array to store indices of overlapping links

      links.forEach((link, index) => {
        const linkRect = link.getBoundingClientRect();

        allElements.forEach((element) => {
          const elementRect = element.getBoundingClientRect();

          if (isOverlapping(linkRect, elementRect)) {
            // Log details of the overlapping element and its position
            // console.log(`Link index ${index} is overlapping with element:`, element);

            newActiveLinks.push(index); // Add the index of the overlapping link
          }
        });
      });

      setActiveWhiteLinks(newActiveLinks); // Update state with active links
    };

    const isOverlapping = (rect1: DOMRect, rect2: DOMRect): boolean => {
      return !(
        rect1.bottom < rect2.top ||
        rect1.top > rect2.bottom ||
        rect1.right < rect2.left ||
        rect1.left > rect2.right
      );
    };

    const optimizedScroll = () => {
      window.requestAnimationFrame(handleScroll); // Optimize scroll events
    };

    window.addEventListener('scroll', optimizedScroll);

    return () => {
      window.removeEventListener('scroll', optimizedScroll); // Clean up the event listener
    };
  }, []);


  // useEffect(() => {

  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       const isAnyElementVisible = entries.some(
  //         (entry) => entry.isIntersecting
  //       );
  //       setIsWhite(isAnyElementVisible);
  //     },
  //     { rootMargin: "0px 0px -10% 0px", threshold: 0 }
  //   );

  //   const targetElements = document.querySelectorAll("img, video");

  //   targetElements.forEach((el) => {
  //     const parentSection = el.closest("section");
  //     // Check if the parent section is not "clients" or "archive"
  //     if (
  //       parentSection &&
  //       parentSection.id !== "clients" &&
  //       parentSection.id !== "archive"
  //     ) {
  //       observer.observe(el);
  //     }
  //   });

  //   return () => {
  //     targetElements.forEach((el) => {
  //       const parentSection = el.closest("section");
  //       // Unobserve for sections that are not "clients" or "archive"
  //       if (
  //         parentSection &&
  //         parentSection.id !== "clients" &&
  //         parentSection.id !== "archive"
  //       ) {
  //         observer.unobserve(el);
  //       }
  //     });
  //   };
  // }, []);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.target.tagName === "IFRAME") {
  //           setIsWhite(entry.isIntersecting);
  //         }
  //       });
  //     },
  //     {
  //       rootMargin: "0px 0px -80% 0px",
  //       threshold: 0,
  //     }
  //   );

  //   const iframeElement = document.querySelector("iframe");

  //   if (iframeElement) {
  //     observer.observe(iframeElement);
  //   }

  //   return () => {
  //     if (iframeElement) {
  //       observer.unobserve(iframeElement);
  //     }
  //   };
  // }, []);

  const router = useRouter();
  const isMainPage = router.pathname === "/";

  return (
    <div ref={container}>
      <div className={`large ${s.large}`}>
        {[...Array(20)].map((e, i) => {
          return (
            <div key={i}>
              <h1 className="large-text-1">Phlippe Layani Phlippe Layani</h1>
              <h1 className="large-text-2">
                Digital Designer Digital Designer
              </h1>
            </div>
          );
        })}
      </div>
      <header ref={header} id="unknown-header" className={s.main}>
        <div
          ref={logo}
          onPointerEnter={() => play()}
          onPointerLeave={() => stop()}
          className={`${s.logo} logo`}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          id="unknown-logo"
        >
          {View}
        </div>
        <div className={s.menuBtn}>
          <button
            onPointerEnter={menuBtnEnter}
            onPointerLeave={menuBtnLeave}
            onClick={handleClick}
          >
            <div className={s.menufloat}>
              {Array.from("Menu").map((e, i) => {
                return (
                  <a className="menuinside" key={i}>
                    {e}
                  </a>
                );
              })}
              <div>
                {Array.from("Menu").map((e, i) => {
                  return (
                    <span
                      style={{ fontFamily: "soalDisplay" }}
                      className="menuoutside"
                      key={i}
                    >
                      <RandomLetter />
                    </span>
                  );
                })}
              </div>
            </div>
            <div className={s.menuBtn_box}>
              <span className="line-1" />
              <span className="line-2" />
            </div>
          </button>
        </div>
      </header>

      {!isNavOpen && isMainPage && (
        <div className={s.dotNavigation}>
          <div className={s.dotColumn}>
            {headings.map((heading, index) => {
              const isActive = activeComponentName === heading;
              const isLinkWhite = activeWhiteLinks.includes(index); // Check if the current link is in the active links array
              const colorStyle = { color: isLinkWhite ? 'white' : 'black' }; // Set the color dynamically

              return (
                <div key={heading} className={s.dotWrapper}>
                  <div className={s.nameContainer}>
                    <div
                      className={`${s.name} ${isActive ? `${s.activeName}` : ''} scrollLinks`}
                      onClick={() => handleScrollTo(index)}
                      style={colorStyle} // Apply conditional styling
                    >
                      <CustomLinkC text={heading} isActive={isActive} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      <nav className={`menu ${s.menu}`}>
        <div className={s.menu_grid}>
          {[
            { heading: "Work", color: "#ADDBD0" },
            { heading: "Archive", color: "#83D398" },
            { heading: "Clients", color: "#C1927F" },
            { heading: "Services", color: "#FFD95D" },
            { heading: "About", color: "#FF9293" },
            { heading: "Contact", color: "#D6C2E4" },
          ].map((e, i) => {
            return (
              <div
                key={i}
                data-active={i === activeMenu}
                onClick={() => { }}
                onPointerEnter={() => handlePointerEnter(e.color, i)}
                onPointerLeave={() => handlePointerLeave()}
                className={s.menuCover}
              >
                <MenuLine />
                <div key={i} className={s.menu3D}>
                  <div className={s.menu3D_bottom}>
                    <Link
                      scroll={false}
                      onClick={handleClick}
                      className="menu-link"
                      href={`#${e.heading.toLowerCase()}`}
                    >
                      {e.heading}
                      <span>0{i + 1}</span>
                    </Link>
                  </div>
                  <div className={s.menu3D_front}>
                    <Link scroll={false} className="menu-link" href="#">
                      {e.heading}
                      <span>0{i + 1}</span>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className={`menu-social ${s.menu_social}`}>
          <CustomLink href="/" text="Linkedin" />
          <CustomLink href="/" text="Behance" />
          <CustomLink href="/" text="Twitter" />
        </div>
      </nav>
    </div>
  );
};

export default memo(Header);
