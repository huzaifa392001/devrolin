import { Star } from "../Svg/Svg";
import s from "./star.module.scss";
import { memo } from "react"

const AnimeStar = () => {
  return (
    <div className={s.main}>
      <Star />
    </div>
  );
};

export default memo(AnimeStar);
