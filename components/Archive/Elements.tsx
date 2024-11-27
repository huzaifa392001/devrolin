import {
  ArchivePathEight,
  ArchivePathEleven,
  ArchivePathFive,
  ArchivePathFour,
  ArchivePathNine,
  ArchivePathOne,
  ArchivePathSeven,
  ArchivePathSix,
  ArchivePathTen,
  ArchivePathThree,
  ArchivePathTwo,
} from "../Svg/Svg";
import s from "./archive.module.scss";

const Elements = () => {
  return (
    <>
      <div className={`archive-path-1 ${s.pathOne}`}>
        <ArchivePathOne />
      </div>
      <div className={`archive-path-2 ${s.pathTwo}`}>
        <ArchivePathTwo />
      </div>
      <div className={`archive-path-3 ${s.pathThree}`}>
        <ArchivePathThree />
      </div>
      <div className={`archive-path-4 ${s.pathFour}`}>
        <ArchivePathFour />
      </div>
      <div className={`archive-path-5 ${s.pathFive}`}>
        <ArchivePathFive />
      </div>
      <div className={`archive-path-6 ${s.pathSix}`}>
        <ArchivePathSix />
      </div>
      <div className={`archive-path-7 ${s.pathSeven}`}>
        <ArchivePathSeven />
      </div>
      {/* <div className={`archive-path-8 ${s.pathEight}`}>
        <ArchivePathEight />
      </div> */}
      <div className={`archive-path-9 ${s.pathNine}`}>
        <ArchivePathNine />
      </div>
      <div className={`archive-path-10 ${s.pathTen}`}>
        <ArchivePathTen />
      </div>
      <div className={`archive-path-11 ${s.pathEleven}`}>
        <ArchivePathEleven />
      </div>

      <div className={`archive-path-12 ${s.pathTwelve}`}>
        <ArchivePathSix />
      </div>

      <div className={`archive-path-13 ${s.pathThirteen}`}>
        <ArchivePathSeven />
      </div>
      <div className={`archive-path-14 ${s.pathFouteen}`}>
        <ArchivePathEight />
      </div>
      <div className={`archive-path-15 ${s.pathFifty}`}>
        <ArchivePathNine />
      </div>
      <div className={`archive-path-10 ${s.pathTen}`}>
        <ArchivePathTen />
      </div>
    </>
  );
};

export default Elements;
