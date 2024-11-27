import s from "./preloader.module.scss";
import Loader from "./loader.json";
import React, { useEffect, useState, lazy } from "react";
import { memo } from "react";
import { debounce } from "lodash";
import { useInView } from "react-intersection-observer";

const Lottie = lazy(() => import("lottie-react"));

const Preloader = () => {
  const [state, setState] = useState<boolean>(false);
  
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger only once
    threshold: 0.1, // Trigger when 10% of the component is in view
  });

  useEffect(() => {
    if (inView) {
      const debouncedSetState = debounce(() => {
        setState(true);
      }, 1500);

      debouncedSetState();

      return () => {
        debouncedSetState.cancel();
      };
    }
  }, [inView]);

  return (
    <div ref={ref} data-hide={state} className={s.main}>
      <Lottie className={s.main_cover} animationData={Loader} />
    </div>
  );
};

export default memo(Preloader);
