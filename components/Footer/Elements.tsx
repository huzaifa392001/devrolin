import {
  FooterPathFive,
  FooterPathFour,
  FooterPathOne,
  FooterPathThree,
  FooterPathTwo,
} from "../Svg/Svg";
import s from "./footer.module.scss";

const Elements = () => {
  return (
    <>
      <div className={`footer-path-1 ${s.pathOne}`}>
        <FooterPathOne />
      </div>
      {/* <div className={`footer-path-2 ${s.pathTwo}`}>
        <FooterPathTwo />
      </div> */}
      {/* <div className={`footer-path-3 ${s.pathThree}`}>
        <FooterPathThree />
      </div> */}
      {/* <div className={`footer-path-4 ${s.pathFour}`}>
        <FooterPathFour />
      </div> */}
      <div className={`footer-path-5 ${s.pathFive}`}>
        <FooterPathFive />
      </div>
    </>
  );
};

export default Elements;
