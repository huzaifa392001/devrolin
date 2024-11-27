import {
  PathEight,
  PathFour,
  PathNine,
  PathSeven,
  PathSix,
  PathTen,
  PathThree,
} from "../Svg/Svg";
import s from "./showreel.module.scss";

const Elements = () => {
  return (
    <>
      {/*
      Images On Reel
       <div className={`path-3 ${s.pathThree}`}>
        <PathThree />
      </div> 
      */}
      {/* <div className={`path-4 ${s.pathFour}`}>
        <PathFour />
      </div> */}
      <div className={`path-6 ${s.pathSix}`}>
        <PathSix />
      </div>
      {/* <div className={`path-7 ${s.pathSeven}`}>
        <PathSeven />
      </div> */}
      {/* <div className={`path-8 ${s.pathEight}`}>
        <PathEight />
      </div> */}
      {/* <div className={`path-9 ${s.pathNine}`}>
        <PathNine />
      </div> */}
      {/* <div className={`path-10 ${s.pathTen}`}>
        <PathTen />
      </div> */}
    </>
  );
};

export default Elements;
