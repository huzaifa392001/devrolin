import { useRef, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Header from "../Header/Header";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { store } from "@/store";
import Preloader from "../Preloader/Preloader";
import { memo } from "react";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  const container = useRef<HTMLElement>(null);
  const mouseHover = useRef<GSAPTween>();
  const xTo = useRef<gsap.QuickToFunc>();
  const yTo = useRef<gsap.QuickToFunc>();

  // State for mouse text
  const [mouseText, setMouseText] = useState("");
  const router = useRouter();

  const { contextSafe } = useGSAP(
    () => {
      xTo.current = gsap.quickTo(".mouse", "x", {
        duration: 0.01,
        ease: "none",
      });
      yTo.current = gsap.quickTo(".mouse", "y", {
        duration: 0.01,
        ease: "none",
      });

      mouseHover.current = gsap.to(".mouse", {
        scale: 0.4,
        ease: "power4",
        duration: 0.3,
        background: "transparent",
        paused: true,
      });

      let tl = gsap
        .timeline({ paused: true })
        // .add(() => setMouseText("View")) // Set text before scaling up
        .to(".mouse", { scale: 0.6, duration: 0.3 })
        .to(".mousepara", { opacity: 1, duration: 0.2 }, "<0.2")
      // .add(() => setMouseText(""), "+=0.3"); // Clear text after scaling down

      store.workHeadingPointerEnter = () => {
        setMouseText("View")
        tl.play();
      };
      store.workHeadingPointerLeave = () => {
        setMouseText("")
        tl.reverse();
      };
    },
    { scope: container }
  );

  useEffect(() => {
    const updateMouseText = (url: string) => {
      if (url === "/") {
        // Keep the text empty initially
      } else {
        setMouseText(""); // Remove text on other pages
        gsap.to(".mouse", { scale: 0.1, duration: 0.3 });
      }
    };

    // Set mouse text initially based on the current route
    updateMouseText(window.location.pathname);

    const handleRouteChange = (url: string) => {
      updateMouseText(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    const storedX = localStorage.getItem("mouseX");
    const storedY = localStorage.getItem("mouseY");

    if (storedX && storedY) {
      xTo.current?.(parseFloat(storedX));
      yTo.current?.(parseFloat(storedY));
    } else {
      xTo.current?.(window.innerWidth / 2 - 90);
      yTo.current?.(window.innerHeight / 2 - 90);
    }

    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX - 90;
      const y = e.clientY - 90;

      xTo.current?.(x);
      yTo.current?.(y);

      localStorage.setItem("mouseX", x.toString());
      localStorage.setItem("mouseY", y.toString());
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [contextSafe, router.events]);

  const moveMover = contextSafe((e: React.MouseEvent) => {
    xTo.current!(e.clientX - 90);
    yTo.current!(e.clientY - 90);
  });

  const handlePointerEnter = contextSafe(() => {
    gsap
      .timeline()
      .to(".menuinside", { opacity: 0, stagger: 0.1 })
      .to(".menuoutside", { opacity: 1, stagger: 0.1 }, "<")
      .to(
        ".menuoutside",
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
      .to(".menuinside", { opacity: 1, duration: 0.2, stagger: 0.1 }, "<0.3");
    mouseHover.current?.play();
  });

  const handlePointerLeave = contextSafe(() => {
    mouseHover.current?.reverse();
  });

  return (
    <main onMouseMove={moveMover} ref={container}>
      <div className="mouse">
        <p className="mousepara" style={{ opacity: mouseText ? 1 : 0 }}>
          {mouseText}
        </p>
      </div>
      <Preloader />
      <Header
        menuBtnEnter={handlePointerEnter}
        menuBtnLeave={handlePointerLeave}
      />
      {children}
    </main>
  );
};

export default memo(Layout);
