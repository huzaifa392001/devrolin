import {
  AboutPathOne,
  AboutPathTwo,
  ContactPathOne,
  ServicePathEight,
  ServicePathFive,
  ServicePathFour,
  ServicePathNine,
  ServicePathOne,
  ServicePathSeven,
  ServicePathTen,
  ServicePathThree,
  ServicePathTwo,
  WorkPathThree,
} from "../Svg/Svg";
import s from "./services.module.scss";

const Elements = ({ id }: { id: number }) => {
  switch (id) {
    case 0:
      return (
        <>
          <div className={`service-path-2 ${s.pathTwo}`}>
            <ServicePathTwo />
          </div>
          <div className={`service-path-1 ${s.pathOne}`}>
            <ServicePathOne />
          </div>
        </>
      );

    case 1:
      return (
        <>
          <div className={`service-path-3 ${s.pathThree}`}>
            <ServicePathThree />
          </div>
          <div className={`service-path-4 ${s.pathFour}`}>
            <ServicePathFour />
          </div>
        </>
      );

    case 2:
      return (
        <>
          <div className={`service-path-5 ${s.pathFive}`}>
            <ServicePathFive />
          </div>
          <div className={`service-path-6 ${s.pathSix}`}>
            <WorkPathThree />
          </div>
        </>
      );

    case 3:
      return (
        <>
          <div className={`service-path-7 ${s.pathSeven}`}>
            <ServicePathSeven />
          </div>
          <div className={`service-path-8 ${s.pathEight}`}>
            <ServicePathEight />
          </div>
        </>
      );
    case 4:
      return (
        <>
          <div className={`service-path-9 ${s.pathNine}`}>
            <AboutPathOne />
          </div>
        </>
      );

    case 5:
      return (
        <>
          <div className={`service-path-10 ${s.pathTen}`}>
            <ContactPathOne />
          </div>
          <div className={`service-path-11 ${s.pathEleven}`}>
            <ContactPathOne />
          </div>
        </>
      );

    case 6:
      return (
        <>
          <div className={`service-path-12 ${s.pathTwelve}`}>
            <ServicePathNine />
          </div>
          <div className={`service-path-13 ${s.pathThirteen}`}>
            <ServicePathTen />
          </div>
        </>
      );

    case 7:
      return (
        <>
          <div className={`service-path-14 ${s.pathFoutheen}`}>
            <AboutPathTwo />
          </div>
        </>
      );

    default:
      return <></>;
  }
};

export default Elements;
