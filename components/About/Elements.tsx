import {
  AboutPathFour,
  AboutPathOne,
  AboutPathThree,
  AboutPathTwo,
} from "../Svg/Svg";
import s from "./about.module.scss";

const Elements = () => {
  return (
    <>
      <div className={`about-path-1 ${s.pathOne}`}>
        <AboutPathOne />
      </div>
      <div className={`about-path-2 ${s.pathTwo}`}>
        <AboutPathTwo />
      </div>
      <div className={`about-path-3 ${s.pathThree}`}>
        <AboutPathThree />
      </div>
      <div className={`about-path-4 ${s.pathFour}`}>
        <AboutPathFour />
      </div>
    </>
  );
};

export default Elements;
