import { PathOne, PathTwo } from "../Svg/Svg";
import s from "./header.module.scss";

const Elements = () => {
  return (
    <>
      <div className={`path-1 ${s.pathOne}`}>
        <PathOne />
      </div>
      <div className={`path-2 ${s.pathTwo}`}>
        <PathTwo />
      </div>
    </>
  );
};

export default Elements;
