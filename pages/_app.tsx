import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { ReactLenis } from "@studio-freight/react-lenis";
import { useEffect, useRef } from "react";
import Layout from "@/components/Layout/Layout";
import { useScrollTo } from "react-use-window-scroll";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function App({ Component, pageProps }: AppProps) {
  const lenisRef = useRef<any>();
  const scrollTo = useScrollTo();

  useEffect(() => {
    scrollTo(0, 0);
  }, [scrollTo]);

  useEffect(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => {
      gsap.ticker.remove(update);
    };
  });

  return (
    <ReactLenis ref={lenisRef} autoRaf={false} root>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ReactLenis>
  );
}
